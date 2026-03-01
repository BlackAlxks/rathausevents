'use client';

import { useState, useEffect } from 'react';
import { SmartImage } from './smart-image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroSlides = [
  {
    src: '/images/Außenansicht/Outside_rathaus_outside_view.webp',
    alt: 'Außenansicht des ehemaligen Rathauses Friedrichshagen',
  },
  {
    src: '/images/Ratssaal/IMG_9209.webp',
    alt: 'Gedeckter Alter Ratssaal mit Stuck und hohen Decken',
  },
  {
    src: '/images/Party/Party_55A6675.webp',
    alt: 'Party im ehemaligen Rathaus',
  },
  {
    src: '/images/Ratskeller/Ratskeller__55A1776.webp',
    alt: 'Ratskeller mit gedeckten Tischen',
  },
  {
    src: '/images/Hochzeiten/Hochzeit_2022.12.09. - Wedding Rathaus FH©pctrbrln.com-13.webp',
    alt: 'Festlich gedeckte Hochzeitstafel im Alten Ratssaal',
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden" suppressHydrationWarning>
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          suppressHydrationWarning
        >
          <SmartImage
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all z-10 backdrop-blur-sm"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all z-10 backdrop-blur-sm"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10" suppressHydrationWarning>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Gehe zu Bild ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
