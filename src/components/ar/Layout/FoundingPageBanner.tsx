"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

function HeroBanner() {
  const [bgPosition, setBgPosition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animate, setAnimate] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  // ✅ Slides (video + text + buttonLink)
  const slides = [
    {
  video: "/images/banner-video/banner3.mp4",
  title: "<span class='rowdies-font'>حلمكم ما هو بعيد </span>",
  desc: "استفيدوا من عرض يوم التأسيس <br>الخاص بالحقن المجهري* في بنون ",
  titleColor: "#004E78",
  descColor: "#fff",
  extra: "",
  buttonLink: "en/waad-bnoon-program",
  buttonText: "استكشفوا المزيد  ",

  descClass: "special-desc",   // 👈 ADD THIS
},
    {
      video: "/images/banner-video/banner4.mp4",
      title: "<span class='rowdies-font'>عرض يوم التأسيس* </span> ",
      desc: " خدمات وإجراءات أمراض الذكورة والعقم لدى الرجال ",
      titleColor: "#004E78",
      buttonLink: "https://book.bnoon.sa",
      buttonText: "استكشفوا المزيد ",
    },
  
  ];

  // ✅ Auto slide change (10s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 13000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // ✅ Parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const speed = 0.5;
      const offset = -(window.scrollY * speed);
      setBgPosition(offset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Trigger reveal animation on slide change
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 500); // wait until video fade-in
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div
      ref={bannerRef}
      className="second-banner-area"
      style={{
        position: "relative",
        width: "100%",
        height: "525px",
        overflow: "hidden",
        backgroundPosition: `center ${bgPosition}px`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔹 Video Background Slider */}
      {slides.map((slide, index) => (
        <video
          key={index}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -1,
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      ))}

      {/* 🔹 Text Content */}
      <div className="container">
        <div
          className={`second-banner-content ${
            animate ? "reveal-text" : "hidden-text"
          }`}
        >
          <h1
            style={{ color: slides[currentSlide].titleColor || "#fff" }}
            dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
          />

        <p
  className={slides[currentSlide].descClass || ""}
  dangerouslySetInnerHTML={{ __html: slides[currentSlide].desc }}
  style={{ color: slides[currentSlide].descColor || "#fff" }}
/>


          <div className="banner-btn">
            <a
              href={slides[currentSlide].buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success btn-appointment btn-banner"
            >
              {slides[currentSlide].buttonText}
            </a>
          </div>

          <p
            className="terms-text"
            dangerouslySetInnerHTML={{
              __html: slides[currentSlide].extra || "",
            }}
            style={{
              color: slides[currentSlide].descColor || "#fff",
            }}
          />
        </div>
      </div>

      {/* 🔹 Slider Dots */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
        }}
      >
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background:
                currentSlide === index ? "white" : "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          />
        ))}
      </div>

      {/* 🔹 Reveal Animation CSS */}
      <style jsx>{`
        .hidden-text {
          opacity: 0;
          transform: translateX(-80px);
        }
        .reveal-text {
          opacity: 1;
          transform: translateX(0);
          transition: all 1.5s ease;
        }
          /* 👉 Custom style ONLY for Slide 1 Desc */
  .special-desc {
    margin-top: 18px;
    line-height: 1.7;
  }
      `}</style>
    </div>
  );
}

export default HeroBanner;
