'use client';

import { useEffect, useState, useRef } from 'react';
import { SmartImage } from './smart-image';

interface FloatingImage {
  src: string;
  alt: string;
  initialPosition: {
    x: number;
    y: number;
    z: number;
    scale: number;
  };
  speed: number;
  showOnMobile: boolean;
  exitDirection: {
    x: number;
    y: number;
  };
}

const images: FloatingImage[] = [
  {
    src: '/images/Außenansicht/Outside_rathaus_outside_view.webp',
    alt: 'Außenansicht Rathaus',
    initialPosition: { x: 15, y: 25, z: 1, scale: 0.5 },
    speed: 1.2,
    showOnMobile: true,
    exitDirection: { x: -150, y: -100 },
  },
  {
    src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-3.webp',
    alt: 'Hochzeit im Rathaus',
    initialPosition: { x: 75, y: 20, z: 2, scale: 0.45 },
    speed: 1.5,
    showOnMobile: true,
    exitDirection: { x: 130, y: -80 },
  },
  {
    src: '/images/Hoftheke/Hoftheke_55A8729-Panorama.webp',
    alt: 'Hoftheke Panorama',
    initialPosition: { x: 80, y: 60, z: 3, scale: 0.5 },
    speed: 1.0,
    showOnMobile: false,
    exitDirection: { x: 160, y: 90 },
  },
  {
    src: '/images/Ratskeller/Ratskeller__55A1776.webp',
    alt: 'Ratskeller',
    initialPosition: { x: 25, y: 65, z: 4, scale: 0.55 },
    speed: 1.3,
    showOnMobile: false,
    exitDirection: { x: -130, y: 110 },
  },
  {
    src: '/images/F&B/F&B_20160615-IMG_0173.webp',
    alt: 'Food & Beverage',
    initialPosition: { x: 50, y: 45, z: 5, scale: 0.45 },
    speed: 1.1,
    showOnMobile: false,
    exitDirection: { x: 20, y: -140 },
  },
];

export function HeroFloatingTiles() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const maxScroll = 500;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const scrolled = Math.max(0, -rect.top);
      const progress = Math.min(scrolled / maxScroll, 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const calculateTransform = (image: FloatingImage, index: number) => {
    const hovered = isHovered === index && !isMobile;
    const baseScale = image.initialPosition.scale;
    const speedMultiplier = isMobile ? 0.6 : 1;
    const effectiveProgress = scrollProgress * image.speed * speedMultiplier;

    const initialOpacity = 0.2;
    const peakOpacity = 0.9;

    let opacity: number;
    if (effectiveProgress < 0.3) {
      opacity = initialOpacity + (peakOpacity - initialOpacity) * (effectiveProgress / 0.3);
    } else if (effectiveProgress < 0.7) {
      opacity = peakOpacity;
    } else {
      opacity = Math.max(0, peakOpacity * (1 - (effectiveProgress - 0.7) / 0.3));
    }

    if (hovered) opacity = 1;

    const scaleGrowth = isMobile ? 0.4 : 0.6;
    const scale = baseScale + (effectiveProgress * scaleGrowth);

    const translateZ = effectiveProgress * (isMobile ? 150 : 250);

    const exitMultiplier = Math.pow(effectiveProgress, 1.5);
    const moveX = image.exitDirection.x * exitMultiplier;
    const moveY = image.exitDirection.y * exitMultiplier;

    const hoverScale = hovered ? 1.05 : 1;

    return {
      transform: `
        translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))
        translateZ(${translateZ}px)
        scale(${scale * hoverScale})
      `,
      opacity,
    };
  };

  return (
    <div
      ref={heroRef}
      className="absolute inset-0 pointer-events-none"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
        {images.map((image, index) => {
          if (isMobile && !image.showOnMobile) return null;

          const styles = calculateTransform(image, index);
          const isVisible = styles.opacity > 0.05;

          return (
            <div
              key={index}
              className="absolute pointer-events-auto"
              style={{
                left: `${image.initialPosition.x}%`,
                top: `${image.initialPosition.y}%`,
                zIndex: image.initialPosition.z,
              }}
              onMouseEnter={() => isVisible && !isMobile && setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              suppressHydrationWarning
            >
              <div
                className="rounded-lg overflow-hidden shadow-xl transition-shadow duration-300 relative"
                style={{
                  ...styles,
                  width: isMobile ? '200px' : '320px',
                  height: isMobile ? '140px' : '220px',
                  boxShadow: isHovered === index
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
                    : '0 10px 30px -10px rgba(0, 0, 0, 0.25)',
                  willChange: 'transform, opacity',
                }}
                suppressHydrationWarning
              >
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={image.showOnMobile}
                  sizes="(max-width: 1024px) 200px, 320px"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {scrollProgress < 0.95 && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 animate-bounce pointer-events-none"
          style={{ opacity: 1 - scrollProgress * 2 }}
          suppressHydrationWarning
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      )}
    </div>
  );
}
