import Image, { type ImageProps } from "next/image";
import { IMAGE_MANIFEST } from "@/lib/image-manifest";

interface OptimizedImageProps extends Omit<ImageProps, "src" | "alt" | "placeholder" | "blurDataURL"> {
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
  ...rest
}: OptimizedImageProps) {
  const entry = IMAGE_MANIFEST[imageName];

  // ── Fallback: key not in manifest ─────────────────────────────────
  if (!entry) {
    if (!fallbackSrc) {
      if (process.env.NODE_ENV === "development") {
        console.warn(
          `[OptimizedImage] "${imageName}" not found in manifest and no fallbackSrc provided.`
        );
      }
      return null;
    }

    return (
      <Image
        src={fallbackSrc}
        alt={altProp ?? ""}
        width={widthProp}
        height={heightProp}
        sizes={sizesProp}
        {...rest}
      />
    );
  }

  // ── Manifest hit — apply blur + sizes ─────────────────────────────
  const blurProps: Pick<ImageProps, "placeholder" | "blurDataURL"> =
    entry.blurDataURL
      ? { placeholder: "blur", blurDataURL: entry.blurDataURL }
      : {};

  return (
    <Image
      src={entry.src}
      alt={altProp ?? entry.alt}
      width={widthProp ?? entry.width}
      height={heightProp ?? entry.height}
      sizes={sizesProp ?? entry.sizes}
      {...blurProps}
      {...rest}
    />
  );
}
