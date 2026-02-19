"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Feedbacks = () => {
  const feedbackSlides = [
    {
      title: "Hear From Our Patients",
      desc: "In Bnoon, the doctors are the most professional in the Middle East in infertility treatments and IVF. I truly recommend Bnoon as your partner if you have pregnancy and childbirth problems.",
      author: "A.B.",
      img: "/images/hear-patient.jpg",
    },
    {
      title: "Hear From Our Patients",
      desc: "Highly specialized and well-equipped clinics for infertility, high risk pregnancy, fetal medicine, maternal medicine and Andrology. All medical staff have a sub specialized training from US and Canada.",
      author: "W.A.",
      img: "/images/hear-patient.jpg",
    },
    {
      title: "Hear From Our Patients",
      desc: "In Bnoon, the doctors are the most professional in the Middle East in infertility treatments and IVF. I truly recommend Bnoon as your partner if you have pregnancy and childbirth problems.",
      author: "B.B.",
      img: "/images/hear-patient.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Auto slide (8 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % feedbackSlides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [feedbackSlides.length]);

  return (
    <div className="service-overview-area ptb-140" style={{ position: "relative" }}>
      <div className="container">
        {/* ✅ Wrapper with fixed minHeight so dots niche hi rahen */}
        <div style={{ position: "relative", minHeight: "450px" }}>
          {feedbackSlides.map((slide, index) => (
            <div
              key={index}
              className="row justify-content-center align-items-center g-4"
              style={{
                opacity: current === index ? 1 : 0,
                visibility: current === index ? "visible" : "hidden",
                transition: "opacity 1s ease-in-out, visibility 1s ease-in-out",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: current === index ? 1 : 0,
              }}
            >
              <div className="col-xl-6 col-md-12">
                <div className="service-overview-content">
                  <h2>{slide.title}</h2>
                  <p>{slide.desc}</p>
                  {/* ✅ h3 added niche p ke */}
                   <h3 style={{ marginTop: "15px", fontSize: "18px", color: "rgb(64, 64, 64)",  fontWeight: "normal", }}>
                    {slide.author}
                  </h3>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="overview-image">
                  <Image
                    src={slide.img}
                    alt="Service overview"
                    width={580}
                    height={450}
                    loading="lazy"
                    style={{
                      transition: "opacity 1s ease-in-out",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Slider Dots always niche */}
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            position: "relative",
            zIndex: 2,
          }}
        >
          {feedbackSlides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                display: "inline-block",
                width: "12px",
                height: "12px",
                margin: "0 6px",
                borderRadius: "50%",
                background: current === index ? "#004E78" : "rgba(0,0,0,0.3)",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
