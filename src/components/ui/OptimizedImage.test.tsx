import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import OptimizedImage from "./OptimizedImage";

// ---------------------------------------------------------------------------
// Mock the manifest module
// ---------------------------------------------------------------------------
vi.mock("@/lib/image-manifest", () => ({
  IMAGE_MANIFEST: {
    "benefit-1": {
      src: "/images/benefit1.jpg",
      width: 544,
      height: 436,
      sizes: "(max-width: 768px) 85vw, 544px",
      alt: "Benefit one alt text",
      blurDataURL: "data:image/webp;base64,AAAA",
      category: "benefit" as const,
    },
    "no-blur": {
      src: "/images/no-blur.jpg",
      width: 200,
      height: 100,
      sizes: "200px",
      alt: "No blur image",
      blurDataURL: "",
      category: "misc" as const,
    },
  },
}));

// ---------------------------------------------------------------------------
// Mock next/image to a simple <img> so we can inspect props
// ---------------------------------------------------------------------------
vi.mock("next/image", () => ({
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
      <img
        src={src as string}
        alt={alt as string}
        width={width as number}
        height={height as number}
        sizes={sizes as string}
        loading={loading as "eager" | "lazy" | undefined}
        className={className as string}
        data-placeholder={placeholder as string}
        data-blur-data-url={blurDataURL as string}
        data-testid="optimized-img"
        {...rest}
      />
    );
  },
}));

describe("OptimizedImage", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders with blur placeholder when manifest entry has blurDataURL", () => {
    render(<OptimizedImage imageName="benefit-1" />);
    const img = screen.getByTestId("optimized-img");

    expect(img).toHaveAttribute("src", "/images/benefit1.jpg");
    expect(img).toHaveAttribute("data-placeholder", "blur");
    expect(img).toHaveAttribute(
      "data-blur-data-url",
      "data:image/webp;base64,AAAA"
    );
  });

  it("uses manifest width, height, sizes, and alt by default", () => {
    render(<OptimizedImage imageName="benefit-1" />);
    const img = screen.getByTestId("optimized-img");

    expect(img).toHaveAttribute("width", "544");
    expect(img).toHaveAttribute("height", "436");
    expect(img).toHaveAttribute("sizes", "(max-width: 768px) 85vw, 544px");
    expect(img).toHaveAttribute("alt", "Benefit one alt text");
  });

  it("allows overriding alt, sizes, width, and height via props", () => {
    render(
      <OptimizedImage
        imageName="benefit-1"
        alt="Custom alt"
        sizes="100vw"
        width={300}
        height={200}
      />
    );
    const img = screen.getByTestId("optimized-img");

    expect(img).toHaveAttribute("alt", "Custom alt");
    expect(img).toHaveAttribute("sizes", "100vw");
    expect(img).toHaveAttribute("width", "300");
    expect(img).toHaveAttribute("height", "200");
  });

  it("does not set placeholder when blurDataURL is empty", () => {
    render(<OptimizedImage imageName="no-blur" />);
    const img = screen.getByTestId("optimized-img");

    expect(img).not.toHaveAttribute("data-placeholder", "blur");
  });

  it("passes through extra props like className and loading", () => {
    render(
      <OptimizedImage
        imageName="benefit-1"
        className="my-class"
        loading="lazy"
      />
    );
    const img = screen.getByTestId("optimized-img");

    expect(img).toHaveAttribute("class", "my-class");
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("renders fallbackSrc when imageName is not in manifest", () => {
    render(
      <OptimizedImage
        imageName="nonexistent"
        fallbackSrc="/images/fallback.jpg"
        alt="Fallback"
        width={100}
        height={100}
      />
    );
    const img = screen.getByTestId("optimized-img");

    expect(img).toHaveAttribute("src", "/images/fallback.jpg");
    expect(img).toHaveAttribute("alt", "Fallback");
    // No blur placeholder on fallback
    expect(img).not.toHaveAttribute("data-placeholder", "blur");
  });

  it("returns null when imageName is not in manifest and no fallbackSrc", () => {
    const { container } = render(
      <OptimizedImage imageName="nonexistent" />
    );

    expect(container.innerHTML).toBe("");
  });
});
