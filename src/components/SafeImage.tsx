import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  localSrc?: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  localSrc,
  fallbackSrc,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(localSrc || fallbackSrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError && imgSrc !== fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-rose-50/50 to-sky-50 animate-pulse" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        referrerPolicy="no-referrer"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-700 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
