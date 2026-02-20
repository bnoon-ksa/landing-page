import { IMAGE_MANIFEST } from '@/lib/image-manifest';

/**
 * Extract the largest CDN URL from a manifest entry's srcSet.
 *
 * Useful for components that need a single URL for CSS `backgroundImage`
 * instead of a responsive srcSet.
 *
 * @returns The URL of the largest variant, or `null` if the entry doesn't
 *          exist or has no CDN srcSet.
 */
export function getCdnUrl(imageName: string): string | null {
  const entry = IMAGE_MANIFEST[imageName];
  if (!entry?.cdnSrcSet) return null;
  return entry.cdnSrcSet.split(', ').pop()?.split(' ')[0] ?? null;
}
