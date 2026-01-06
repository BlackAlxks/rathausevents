'use client';

import { useEffect, useState, useRef } from 'react';

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
}

const images: FloatingImage[] = [
  {
    src: '/images/Außenansicht/Outside_rathaus_outside_view.jpg',
    alt: 'Außenansicht Rathaus',
    initialPosition: { x: 15, y: 25, z: 1, scale: 0.4 },
    speed: 1.2,
    showOnMobile: true,
  },
  {
    src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-3.jpg',
    alt: 'Hochzeit im Rathaus',
    initialPosition: { x: 75, y: 20, z: 2, scale: 0.3 },
    speed: 1.5,
    showOnMobile: true,
  },
  {
    src: '/images/Hoftheke/Hoftheke_55A8729-Panorama.jpg',
    alt: 'Hoftheke Panorama',
    initialPosition: { x: 80, y: 60, z: 3, scale: 0.35 },
    speed: 1.0,
    showOnMobile: false,
  },
  {
    src: '/images/Ratskeller/Ratskeller__55A1776.jpg',
    alt: 'Ratskeller',
    initialPosition: { x: 25, y: 65, z: 4, scale: 0.45 },
    speed: 1.3,
    showOnMobile: false,
  },
  {
    src: '/images/F&B/F&B_20160615-IMG_0173.JPG',
    alt: 'Food & Beverage',
    initialPosition: { x: 50, y: 45, z: 5, scale: 0.3 },
    speed: 1.1,
    showOnMobile: false,
  },
];

export function HeroFloatingTiles() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const maxScroll = 400;

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

    const speedMultiplier = isMobile ? 0.7 : 1;
    const scaleProgress = scrollProgress * image.speed * speedMultiplier;
    const scale = baseScale + (scaleProgress * (isMobile ? 1.0 : 1.5));

    const translateZ = scrollProgress * (isMobile ? 100 : 200) * image.speed;

    const moveX = (image.initialPosition.x - 50) * scrollProgress * (isMobile ? -0.3 : -0.5);
    const moveY = (image.initialPosition.y - 50) * scrollProgress * (isMobile ? -0.3 : -0.5);

    const opacity = hovered ? 1 : Math.max(0, 1 - scrollProgress * 1.5);

    const hoverScale = hovered ? 1.05 : 1;

    return {
      transform: `
        translate(${moveX}%, ${moveY}%)
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
              className="absolute pointer-events-auto transition-shadow duration-300"
              style={{
                left: `${image.initialPosition.x}%`,
                top: `${image.initialPosition.y}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: image.initialPosition.z,
                willChange: 'transform, opacity',
              }}
              onMouseEnter={() => isVisible && setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              suppressHydrationWarning
            >
              <div
                className="rounded-lg overflow-hidden shadow-xl transition-all duration-300"
                style={{
                  ...styles,
                  width: isMobile ? '180px' : '280px',
                  height: isMobile ? '130px' : '200px',
                  boxShadow: isHovered === index
                    ? '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
                    : '0 10px 30px -10px rgba(0, 0, 0, 0.25)',
                }}
                suppressHydrationWarning
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="eager"
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
