/**
 * Image optimization pipeline types.
 *
 * These interfaces are shared between:
 *   - src/config/image.config.ts  (catalog definition)
 *   - scripts/optimize-images.ts  (build script)
 *   - src/lib/image-manifest.ts   (auto-generated output)
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
}

/** The full manifest keyed by image name. */
export type ImageManifest = Readonly<Record<string, ImageManifestEntry>>;
