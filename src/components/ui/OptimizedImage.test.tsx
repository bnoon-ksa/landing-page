import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import OptimizedImage from './OptimizedImage';

// ---------------------------------------------------------------------------
// Mock the manifest module
// ---------------------------------------------------------------------------
vi.mock('@/lib/image-manifest', () => ({
  IMAGE_MANIFEST: {
    'benefit-1': {
      src: '/images/benefit1.jpg',
      width: 544,
      height: 436,
      sizes: '(max-width: 768px) 85vw, 544px',
      alt: 'Benefit one alt text',
      blurDataURL: 'data:image/webp;base64,AAAA',
      category: 'benefit' as const,
      cdnSrcSet: '',
    },
    'no-blur': {
      src: '/images/no-blur.jpg',
      width: 200,
      height: 100,
      sizes: '200px',
      alt: 'No blur image',
      blurDataURL: '',
      category: 'misc' as const,
      cdnSrcSet: '',
    },
    'cdn-image': {
      src: '/images/cdn-test.jpg',
      width: 1200,
      height: 800,
      sizes: '(max-width: 768px) 100vw, 1200px',
      alt: 'CDN served image',
      blurDataURL: 'data:image/webp;base64,BBBB',
      category: 'banner' as const,
      cdnSrcSet:
        'https://cdn.example.com/optimized/cdn-test-576x384-32kb.webp 576w, ' +
        'https://cdn.example.com/optimized/cdn-test-1200x800-85kb.webp 1200w',
    },
    'cdn-no-blur': {
      src: '/images/cdn-no-blur.jpg',
      width: 800,
      height: 600,
      sizes: '800px',
      alt: 'CDN no blur',
      blurDataURL: '',
      category: 'misc' as const,
      cdnSrcSet:
        'https://cdn.example.com/optimized/cdn-no-blur-576x432-20kb.webp 576w, ' +
        'https://cdn.example.com/optimized/cdn-no-blur-800x600-50kb.webp 800w',
    },
  },
}));

// ---------------------------------------------------------------------------
// Mock next/image to a simple <img> so we can inspect props
// ---------------------------------------------------------------------------
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>) => {
    // next/image passes many internal props; render only standard img attrs
    const {
      src,
      alt,
      width,
      height,
      sizes,
      loading,
      className,
      placeholder,
      blurDataURL,
      ...rest
    } = props;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src as string}
        alt={alt as string}
        width={width as number}
        height={height as number}
        sizes={sizes as string}
        loading={loading as 'eager' | 'lazy' | undefined}
        className={className as string}
        data-placeholder={placeholder as string}
        data-blur-data-url={blurDataURL as string}
        data-testid="optimized-img"
        {...rest}
      />
    );
  },
}));

describe('OptimizedImage', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  // ── Standard next/image path ────────────────────────────────────────

  it('renders with blur placeholder when manifest entry has blurDataURL', () => {
    render(<OptimizedImage imageName="benefit-1" />);
    const img = screen.getByTestId('optimized-img');

    expect(img).toHaveAttribute('src', '/images/benefit1.jpg');
    expect(img).toHaveAttribute('data-placeholder', 'blur');
    expect(img).toHaveAttribute('data-blur-data-url', 'data:image/webp;base64,AAAA');
  });

  it('uses manifest width, height, sizes, and alt by default', () => {
    render(<OptimizedImage imageName="benefit-1" />);
    const img = screen.getByTestId('optimized-img');

    expect(img).toHaveAttribute('width', '544');
    expect(img).toHaveAttribute('height', '436');
    expect(img).toHaveAttribute('sizes', '(max-width: 768px) 85vw, 544px');
    expect(img).toHaveAttribute('alt', 'Benefit one alt text');
  });

  it('allows overriding alt, sizes, width, and height via props', () => {
    render(
      <OptimizedImage
        imageName="benefit-1"
        alt="Custom alt"
        sizes="100vw"
        width={300}
        height={200}
      />,
    );
    const img = screen.getByTestId('optimized-img');

    expect(img).toHaveAttribute('alt', 'Custom alt');
    expect(img).toHaveAttribute('sizes', '100vw');
    expect(img).toHaveAttribute('width', '300');
    expect(img).toHaveAttribute('height', '200');
  });

  it('does not set placeholder when blurDataURL is empty', () => {
    render(<OptimizedImage imageName="no-blur" />);
    const img = screen.getByTestId('optimized-img');

    expect(img).not.toHaveAttribute('data-placeholder', 'blur');
  });

  it('passes through extra props like className and loading', () => {
    render(<OptimizedImage imageName="benefit-1" className="my-class" loading="lazy" />);
    const img = screen.getByTestId('optimized-img');

    expect(img).toHaveAttribute('class', 'my-class');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('renders fallbackSrc when imageName is not in manifest', () => {
    render(
      <OptimizedImage
        imageName="nonexistent"
        fallbackSrc="/images/fallback.jpg"
        alt="Fallback"
        width={100}
        height={100}
      />,
    );
    const img = screen.getByTestId('optimized-img');

    expect(img).toHaveAttribute('src', '/images/fallback.jpg');
    expect(img).toHaveAttribute('alt', 'Fallback');
    // No blur placeholder on fallback
    expect(img).not.toHaveAttribute('data-placeholder', 'blur');
  });

  it('returns null when imageName is not in manifest and no fallbackSrc', () => {
    const { container } = render(<OptimizedImage imageName="nonexistent" />);

    expect(container.innerHTML).toBe('');
  });

  // ── CDN srcSet path ─────────────────────────────────────────────────

  it('renders native <img> with srcSet when cdnSrcSet is present', () => {
    render(<OptimizedImage imageName="cdn-image" />);
    const img = screen.getByTestId('cdn-img');

    expect(img).toHaveAttribute(
      'srcset',
      'https://cdn.example.com/optimized/cdn-test-576x384-32kb.webp 576w, ' +
        'https://cdn.example.com/optimized/cdn-test-1200x800-85kb.webp 1200w',
    );
    expect(img).toHaveAttribute('sizes', '(max-width: 768px) 100vw, 1200px');
    expect(img).toHaveAttribute('alt', 'CDN served image');
    expect(img).toHaveAttribute('width', '1200');
    expect(img).toHaveAttribute('height', '800');
    expect(img).toHaveAttribute('loading', 'lazy');
    expect(img).toHaveAttribute('decoding', 'async');
  });

  it('uses the last srcSet URL as the <img> src fallback', () => {
    render(<OptimizedImage imageName="cdn-image" />);
    const img = screen.getByTestId('cdn-img');

    expect(img).toHaveAttribute(
      'src',
      'https://cdn.example.com/optimized/cdn-test-1200x800-85kb.webp',
    );
  });

  it('applies blur background-image style on CDN images when blurDataURL exists', () => {
    render(<OptimizedImage imageName="cdn-image" />);
    const img = screen.getByTestId('cdn-img');

    expect(img.style.backgroundImage).toContain('data:image/webp;base64,BBBB');
    expect(img.style.backgroundSize).toBe('cover');
  });

  it('does not apply blur style on CDN images when blurDataURL is empty', () => {
    render(<OptimizedImage imageName="cdn-no-blur" />);
    const img = screen.getByTestId('cdn-img');

    expect(img.style.backgroundImage).toBe('');
  });

  it('allows overriding alt and sizes on CDN images', () => {
    render(<OptimizedImage imageName="cdn-image" alt="Override alt" sizes="50vw" />);
    const img = screen.getByTestId('cdn-img');

    expect(img).toHaveAttribute('alt', 'Override alt');
    expect(img).toHaveAttribute('sizes', '50vw');
  });

  it('passes className to CDN img', () => {
    render(<OptimizedImage imageName="cdn-image" className="cdn-class" />);
    const img = screen.getByTestId('cdn-img');

    expect(img).toHaveAttribute('class', 'cdn-class');
  });

  it('does not render next/image for CDN entries', () => {
    render(<OptimizedImage imageName="cdn-image" />);

    expect(screen.queryByTestId('optimized-img')).toBeNull();
    expect(screen.getByTestId('cdn-img')).toBeTruthy();
  });
});
