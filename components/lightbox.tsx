'use client';

import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface LightboxProps {
  images: { src: string; alt: string }[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function Lightbox({ images, isOpen, onClose, initialIndex = 0 }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  if (!isOpen) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-50"
        aria-label="Schließen"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={handlePrevious}
        className="absolute left-4 text-white hover:text-amber-400 transition-colors z-50"
        aria-label="Vorheriges Bild"
      >
        <ChevronLeft className="w-12 h-12" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 text-white hover:text-amber-400 transition-colors z-50"
        aria-label="Nächstes Bild"
      >
        <ChevronRight className="w-12 h-12" />
      </button>

      <div className="max-w-6xl w-full">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto max-h-[80vh] object-contain"
        />

        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? 'border-amber-400 scale-110'
                  : 'border-transparent hover:border-white/50'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
