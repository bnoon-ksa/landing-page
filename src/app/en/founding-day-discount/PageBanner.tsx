import React from "react";

interface PageBannerProps {
  bgImage?: string;
  bgVideo?: string;
  title?: string;
  subtitle?: string;
}

export default function PageBanner({
  bgImage,
  bgVideo,
  title,
  subtitle,
}: PageBannerProps) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background */}
      {bgVideo ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={bgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        bgImage && (
          <img
            src={bgImage}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )
      )}

      {/* Overlay + Text */}
      <div className="absolute inset-0 z-10 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        {title && (
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-3">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-white text-lg md:text-xl max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
