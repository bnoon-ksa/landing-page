import Image, { type ImageProps } from 'next/image';
import { IMAGE_MANIFEST } from '@/lib/image-manifest';

interface OptimizedPageBannerProps {

  readonly bannerPosition?: string;
  /**
   * Key from the image manifest (e.g. "aboutus-banner", "clinics-banner").
   */
  readonly imageName: string;

  /** Alt text override (defaults to manifest value). */
  readonly alt?: string;

  /** Additional CSS class names on the wrapper div. */
  readonly className?: string;

  /** Wrapper div style overrides. */
  readonly style?: React.CSSProperties;

  /** Children rendered on top of the banner image. */
  readonly children?: React.ReactNode;

  /** Extra Image props forwarded to `next/image`. */
  readonly imageProps?: Partial<Omit<ImageProps, 'src' | 'alt' | 'fill'>>;
}

/**
 * Replacement for CSS `background-image` page banners.
 *
 * When the manifest entry has `cdnSrcSet`, renders a native `<img>` with
 * responsive srcSet, bypassing `/_next/image`.  Otherwise falls back to
 * `<Image fill>` with blur placeholder.
 */
export default function OptimizedPageBanner({
  imageName,
  alt: altProp,
  className,
  style,
  children,
  imageProps,
  bannerPosition,
}: OptimizedPageBannerProps) {
  const entry = IMAGE_MANIFEST[imageName];

  if (!entry) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[OptimizedPageBanner] "${imageName}" not found in manifest.`);
    }
    return null;
  }

  const resolvedAlt = altProp ?? entry.alt;

  // ── CDN path: native <img> with srcSet ────────────────────────────
  if (entry.cdnSrcSet) {
    const blurBg: React.CSSProperties = entry.blurDataURL
      ? {
        backgroundImage: `url(${entry.blurDataURL})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }
      : {};

    return (
      <div
        className={className ?? 'page-banner-area'}
        style={{ position: 'relative', overflow: 'hidden', ...style }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          srcSet={entry.cdnSrcSet}
          sizes={entry.sizes}
          src={entry.cdnSrcSet.split(', ').pop()?.split(' ')[0]}
          alt={resolvedAlt}
          decoding="async"
          loading="eager"
          style={{
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: bannerPosition ?? entry.bannerPosition ?? 'center',
            ...blurBg,
          }}
          data-testid="cdn-banner-img"
        />
        {children && <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>}
      </div>
    );
  }
  // ── Standard next/image path ──────────────────────────────────────
  const blurProps: Pick<ImageProps, 'placeholder' | 'blurDataURL'> = entry.blurDataURL
    ? { placeholder: 'blur', blurDataURL: entry.blurDataURL }
    : {};

  return (
    <div
      className={className ?? 'page-banner-area container-fluid'}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <Image
        src={entry.src}
        alt={resolvedAlt}
        fill
        sizes={entry.sizes}
        style={{
          objectFit: 'cover',
          objectPosition: bannerPosition ?? '85%',
        }}
        priority
        {...blurProps}
        {...imageProps}
      />
      {children && <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>}
    </div>
  );
}
