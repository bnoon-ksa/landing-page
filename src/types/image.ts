/**
 * Image optimization pipeline types.
 *
 * Used by:
 *   - src/lib/image-manifest.ts   (static manifest)
 *   - src/components/ui/OptimizedImage.tsx (runtime consumer)
 */

/** A single entry in the hand-maintained image catalog. */
export interface ImageCatalogEntry {
  /** Unique key used to reference this image at runtime (e.g. "benefit-1"). */
  readonly name: string;

  /** Path relative to /public (e.g. "/images/benefit1.jpg"). */
  readonly src: string;

  /** Intrinsic width of the source image in pixels. */
  readonly width: number;

  /** Intrinsic height of the source image in pixels. */
  readonly height: number;

  /**
   * Responsive `sizes` attribute value.
   * @example "(max-width: 768px) 100vw, 544px"
   */
  readonly sizes: string;

  /** Default alt text (can be overridden at the component level). */
  readonly alt: string;

  /** Grouping tag for filtering and reporting. */
  readonly category:
    | "banner"
    | "benefit"
    | "blog"
    | "doctor"
    | "service"
    | "about"
    | "misc";
}

/** Auto-generated manifest entry produced by the build script. */
export interface ImageManifestEntry {
  /** Original source path (e.g. "/images/benefit1.jpg"). */
  readonly src: string;

  /** Intrinsic width of the source image. */
  readonly width: number;

  /** Intrinsic height of the source image. */
  readonly height: number;

  /** Responsive `sizes` attribute. */
  readonly sizes: string;

  /** Default alt text. */
  readonly alt: string;

  /**
   * Base-64 encoded LQIP data URI.
   * @example "data:image/webp;base64,UklGR..."
   */
  readonly blurDataURL: string;

  /** Category from the catalog. */
  readonly category: ImageCatalogEntry["category"];

  /**
   * Pre-built CDN `srcSet` string for native `<img>` delivery.
   * When present, `<OptimizedImage>` renders a native `<img srcSet>` instead
   * of `next/image`, bypassing server-side image processing.
   *
   * Empty string means CDN is not configured — falls back to `next/image`.
   *
   * @example "https://cdn.../optimized/benefit-1-576x461-32kb.webp 576w, ...1200x960-85kb.webp 1200w"
   */
  readonly cdnSrcSet: string;
}

/** The full manifest keyed by image name. */
export type ImageManifest = Readonly<Record<string, ImageManifestEntry>>;
