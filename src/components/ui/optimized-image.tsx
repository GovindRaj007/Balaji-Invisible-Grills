import type { ImgHTMLAttributes } from "react";

type OptimizedImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  avifSrc?: string;
  webpSrc?: string;
  fallbackSrc: string;
};

export function OptimizedImage({ avifSrc, webpSrc, fallbackSrc, alt, ...imgProps }: OptimizedImageProps) {
  return (
    <picture>
      {avifSrc ? <source srcSet={avifSrc} type="image/avif" /> : null}
      {webpSrc ? <source srcSet={webpSrc} type="image/webp" /> : null}
      <img src={fallbackSrc} alt={alt} {...imgProps} />
    </picture>
  );
}
