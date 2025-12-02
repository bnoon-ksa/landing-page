"use client";

import React, { useState, useEffect } from "react";

const Feedbacks = () => {
  const feedbackSlides = [
    {
      title: "ما يقوله المرضى عن بنون",
      desc: "السلام عليكم ،<br>لا شيء مستحيل بفضل الله، أنصح من يعاني من مشاكل في الخصوبة زيارة بنون – إنهم حقاً محترفون وأود أن أشكر جميع الموظفين لديهم۔",
      author: ".م.خ.",
      img: "/images/hear-patient.jpg",
    },
    {
      title: "ما يقوله المرضى عن بنون",
      desc: "الأطباء في بنون من أفضل الأطباء المختصين بالإخصاب في الشرق الأوسط. أنصحكم بزيارتهم إذا كنتم تعانون من تأخر الحمل۔",
      author: ".س. أ ",
      img: "/images/hear-patient.jpg",
    },
    {
      title: "ما يقوله المرضى عن بنون",
      desc: "عيادات مجهزة بالكامل لعلاج حالات العقم والحمل عالي الخطورة وطب الأجنة وأمراض الذكورة. معظم الطاقم الطبي مدرب في أمريكا وكندا۔",
      author: ".ج.ج",
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
        <div className="service-section" style={{ position: "relative", minHeight: "450px" }}>
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
                  <p
  style={{ direction: "rtl", textAlign: "right" }}
  dangerouslySetInnerHTML={{ __html: slide.desc }}
></p>

                  {/* ✅ h3 added niche p ke */}
                  <h3 style={{ marginTop: "15px", fontSize: "18px", color: "#004E78" }}>
                    {slide.author}
                  </h3>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="service-image">
                  <img
                    src={slide.img}
                    alt="Service overview"
                    width={580}
                    height={450}
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
        <style jsx>{`
     
        /* ✅ Mobile view (≤768px): stack vertically */
        @media (max-width: 768px) {
            .service-overview-content {
        padding-left: 0px;
        margin: 0px -25px 0px 10px !important;
    }
.service-image {
    margin: 0px -25px 0px 10px !important;
}
*,
        }
      `}</style>
    </div>
  );
};

export default Feedbacks;
