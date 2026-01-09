'use client';

import Image from 'next/image';
import { useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
}

export function SmartImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes,
  quality = 85,
  loading,
  onLoad,
}: SmartImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setImageError(true);
    setIsLoading(false);
  };

  if (imageError) {
    return (
      <div
        className={`bg-neutral-200 flex items-center justify-center ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
      >
        <svg
          className="w-12 h-12 text-neutral-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <>
      {isLoading && !priority && (
        <div
          className={`absolute inset-0 bg-neutral-200 animate-pulse ${className}`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        loading={loading}
        quality={quality}
        sizes={sizes}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
      />
    </>
  );
}
