import Image, { type ImageProps } from 'next/image';
import { IMAGE_MANIFEST } from '@/lib/image-manifest';

interface OptimizedImageProps extends Omit<
  ImageProps,
  'src' | 'alt' | 'placeholder' | 'blurDataURL'
> {
  /** Alt text override (defaults to manifest value). */
  readonly alt?: string;

  /**
   * Key from the image manifest (e.g. "benefit-1", "blog-riyadh").
   * If the key isn't found in the manifest the component falls back to
   * rendering a standard `<Image>` with `fallbackSrc`.
   */
  readonly imageName: string;

  /**
   * Override the source path from the manifest.
   * Useful when the same manifest entry should point to a different file
   * (e.g. a CDN URL).
   */
  readonly fallbackSrc?: string;
}

/**
 * Drop-in `next/image` wrapper that automatically applies:
 *   - CDN `srcSet` delivery when the manifest has `cdnSrcSet` (bypasses `/_next/image`)
 *   - `placeholder="blur"` with a pre-generated LQIP data URI
 *   - Responsive `sizes` attribute from the manifest
 *
 * If `imageName` is not found in the manifest the component renders a
 * plain `<Image>` with the provided `fallbackSrc`, `width`, `height`,
 * and `alt` props — no blur placeholder in that case.
 */
export default function OptimizedImage({
  imageName,
  fallbackSrc,
  sizes: sizesProp,
  alt: altProp,
  width: widthProp,
  height: heightProp,
  className,
  loading,
  priority,
  style: styleProp,
  ...rest
}: OptimizedImageProps) {
  const entry = IMAGE_MANIFEST[imageName];

  // ── Fallback: key not in manifest ─────────────────────────────────
  if (!entry) {
    if (!fallbackSrc) {
      if (process.env.NODE_ENV === 'development') {
        console.warn(
          `[OptimizedImage] "${imageName}" not found in manifest and no fallbackSrc provided.`,
        );
      }
      return null;
    }

    return (
      <Image
        src={fallbackSrc}
        alt={altProp ?? ''}
        width={widthProp}
        height={heightProp}
        sizes={sizesProp}
        className={className}
        loading={loading}
        priority={priority}
        style={styleProp}
        {...rest}
      />
    );
  }

  const resolvedAlt = altProp ?? entry.alt;
  const resolvedWidth = widthProp ?? entry.width;
  const resolvedHeight = heightProp ?? entry.height;
  const resolvedSizes = sizesProp ?? entry.sizes;

  // ── CDN path: native <img> with srcSet ────────────────────────────
  if (entry.cdnSrcSet) {
    const blurStyle: React.CSSProperties = entry.blurDataURL
      ? {
          backgroundImage: `url(${entry.blurDataURL})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }
      : {};

    const responsiveStyle: React.CSSProperties = {
      display: 'block',
      width: '100%',
      height: 'auto',
    };

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        srcSet={entry.cdnSrcSet}
        sizes={resolvedSizes}
        src={entry.cdnSrcSet.split(', ').pop()?.split(' ')[0]}
        alt={resolvedAlt}
        width={typeof resolvedWidth === 'number' ? resolvedWidth : undefined}
        height={typeof resolvedHeight === 'number' ? resolvedHeight : undefined}
        loading={priority ? undefined : (loading ?? 'lazy')}
        decoding="async"
        className={className as string}
        style={{ ...responsiveStyle, ...blurStyle, ...styleProp }}
        data-testid="cdn-img"
        {...rest}
      />
    );
  }

  // ── Standard next/image path ──────────────────────────────────────
  const blurProps: Pick<ImageProps, 'placeholder' | 'blurDataURL'> = entry.blurDataURL
    ? { placeholder: 'blur', blurDataURL: entry.blurDataURL }
    : {};

  return (
    <Image
      src={entry.src}
      alt={resolvedAlt}
      width={resolvedWidth}
      height={resolvedHeight}
      sizes={resolvedSizes}
      className={className}
      loading={loading}
      priority={priority}
      style={styleProp}
      {...blurProps}
      {...rest}
    />
  );
}
