'use client';

import { useEffect, useState } from 'react';

interface FloatingTile {
  src: string;
  alt: string;
  size: 'small' | 'medium' | 'large';
  position: string;
}

const tiles: FloatingTile[] = [
  {
    src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-13.jpg',
    alt: 'Hochzeit im Rathaus',
    size: 'large',
    position: 'top-0 right-20 hidden xl:block',
  },
  {
    src: '/images/Party/Party_55A6675.jpg',
    alt: 'Party im Rathaus',
    size: 'medium',
    position: 'top-32 right-0 hidden lg:block',
  },
  {
    src: '/images/Ratskeller/Ratskeller__55A1776.jpg',
    alt: 'Ratskeller',
    size: 'medium',
    position: 'bottom-20 right-32 hidden xl:block',
  },
  {
    src: '/images/Hoftheke/Hoftheke_55A9612.jpg',
    alt: 'Hoftheke',
    size: 'small',
    position: 'bottom-0 right-4 hidden lg:block',
  },
];

const sizeClasses = {
  small: 'w-32 h-32',
  medium: 'w-48 h-48',
  large: 'w-64 h-64',
};

export function HeroFloatingTiles() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = 600;
      const newOpacity = Math.max(0, 1 - scrollPosition / heroHeight);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {tiles.map((tile, index) => (
        <div
          key={index}
          className={`absolute ${tile.position} ${sizeClasses[tile.size]} transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
          style={{ opacity }}
          suppressHydrationWarning
        >
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={tile.src}
              alt={tile.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </>
  );
}
