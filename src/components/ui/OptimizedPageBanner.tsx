import Image, { type ImageProps } from "next/image";
import { IMAGE_MANIFEST } from "@/lib/image-manifest";

interface OptimizedPageBannerProps {
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
  readonly imageProps?: Partial<Omit<ImageProps, "src" | "alt" | "fill">>;
}

/**
 * Replacement for CSS `background-image` page banners.
 *
 * Uses `<Image fill>` with `object-fit: cover` to replicate the same visual
 * effect while benefiting from Next.js image optimization, responsive srcsets,
 * and LQIP blur placeholders.
 *
 * **Note:** This component is created but NOT deployed to pages in the
 * initial PR. It will be used in a follow-up PR that migrates all 43
 * PageBanner usages after visual QA.
 */
export default function OptimizedPageBanner({
  imageName,
  alt: altProp,
  className,
  style,
  children,
  imageProps,
}: OptimizedPageBannerProps) {
  const entry = IMAGE_MANIFEST[imageName];

  if (!entry) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        `[OptimizedPageBanner] "${imageName}" not found in manifest.`
      );
    }
    return null;
  }

  const blurProps: Pick<ImageProps, "placeholder" | "blurDataURL"> =
    entry.blurDataURL
      ? { placeholder: "blur", blurDataURL: entry.blurDataURL }
      : {};

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden", ...style }}
    >
      <Image
        src={entry.src}
        alt={altProp ?? entry.alt}
        fill
        sizes={entry.sizes}
        style={{ objectFit: "cover" }}
        priority
        {...blurProps}
        {...imageProps}
      />
      {children && (
        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      )}
    </div>
  );
}
