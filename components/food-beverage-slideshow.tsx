'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SmartImage } from './smart-image';
import { useState, useEffect } from 'react';

const fbImages = [
  { src: '/images/F&B/F&B_buffet.webp', alt: 'Buffetsetup' },
  { src: '/images/F&B/F&B_20160615-IMG_0154.webp', alt: 'Getränke und Speisen' },
  { src: '/images/F&B/F&B_20160615-IMG_0170.webp', alt: 'Catering' },
  { src: '/images/F&B/F&B_20160615-IMG_0173.webp', alt: 'Speisen' },
  { src: '/images/F&B/F&B_20160615-IMG_0286.webp', alt: 'Food & Beverage' },
  { src: '/images/F&B/F&B_20160615-IMG_0427.webp', alt: 'Gastronomie' },
  { src: '/images/F&B/F&B_Zapfanlage_01.webp', alt: 'Zapfanlage' },
];

export function FoodBeverageSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === fbImages.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? fbImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === fbImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm">
      <div className="relative group aspect-square rounded overflow-hidden">
        <SmartImage
          src={fbImages[currentIndex].src}
          alt={fbImages[currentIndex].alt}
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
          className="object-cover"
        />

        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-900 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Nächstes Bild"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
        {fbImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all relative ${
              index === currentIndex
                ? 'border-amber-700 scale-110'
                : 'border-neutral-200 hover:border-amber-400'
            }`}
          >
            <SmartImage
              src={image.src}
              alt={image.alt}
              fill
              sizes="64px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
