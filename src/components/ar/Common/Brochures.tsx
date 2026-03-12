'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brochures = [
  {
    section_en: "Egg Retrieval",
    section_ar: "سحب البويضات",
    items: [
      {
        title_en: "Egg Retrieval – Pre Operative",
        title_ar: "سحب البويضات - قبل العملية",
        image: "https://bnoon-website.b-cdn.net/images/brochures/pre-egg-retrieval.jpg",
        pdf: "/ar/egg-retrieval-pre-operative",
      },
      {
        title_en: "Egg Retrieval – Post Operative",
        title_ar: "سحب البويضات - بعد العملية",
        image: "https://bnoon-website.b-cdn.net/images/brochures/post-egg-retrieval.jpg",
        pdf: "/ar/egg-retrieval-post-operative",
      },
    ],
  },
  {
    section_en: "Embryo Transfer",
    section_ar: "نقل الأجنة",
    items: [
      {
        title_en: "Embryo Transfer – Pre Operative ",
        title_ar: "نقل الأجنة - قبل العملية",
        image: "https://bnoon-website.b-cdn.net/images/brochures/pre-embryo-transfer.jpg",
        pdf: "/ar/embryo-transfer-pre.pdf",
      },
      {
        title_en: "Embryo Transfer – Post Operative",
        title_ar: "نقل الأجنة - بعد العملية",
        image: "https://bnoon-website.b-cdn.net/images/brochures/post-embryo-transfer.jpg",
        pdf: "/ar/embryo-transfer-post.pdf",
      },
    ],
  },
  {
    section_en: "Semen Collection",
    section_ar: "جمع السائل المنوي",
    items: [
      {
        title_en: "Semen Collection Instructions",
        title_ar: "تعليمات جمع السائل المنوي",
        image: "https://bnoon-website.b-cdn.net/images/brochures/semen.jpg",
        pdf: "/ar/semen-collection.pdf",
      },
    ],
  },
];

const Brochures = () => {
  const cardAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="fertility-area mt-3 mt-lg-5 mb-3" dir="rtl">
      <div className="container">
        {brochures.map((section, i) => (
          <div key={i} className="section-title mb-5">
 <div key={i} className="left">
            {/* Arabic Heading */}
            <h2 className="mb-1 fw-bold text-center">{section.section_ar}</h2>

            {/* English Heading */}
            <h2 className="mb-4 fw-bold text-center">{section.section_en}</h2>
</div>
            <div className="row g-4 justify-content-center">
              {section.items.map((item, index) => (
                <div className="col-lg-5 col-md-6" key={index}>
                  <motion.div
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                  >
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="brochure-card d-block text-center p-3"
                    >
                      <div className="brochure-image mb-3">
                        <img
                          src={item.image}
                          alt={item.title_en}
                          className="img-fluid rounded"
                        />
                      </div>

                      
                        <h6 className="fw-semibold mb-1">{item.title_ar}</h6>
                        <h6 className="fw-semibold mb-1">{item.title_en}</h6>
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CSS inside same file */}
      <style jsx>{`
        .brochure-card {
          background: #ffffff;
          border-radius: 14px;
          box-shadow: 0 6px 25px rgba(0,0,0,0.08);
          transition: all .35s ease;
          height: 100%;
          text-decoration: none;
        }
        .brochure-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 14px 40px rgba(0,0,0,0.15);
        }
        .brochure-image {
          overflow: hidden;
          border-radius: 10px;
        }
        .brochure-image :global(img) {
          transition: transform .4s ease;
        }
        .brochure-card:hover .brochure-image :global(img) {
          transform: scale(1.05);
        }
        h2 {
          font-size: 22px;
          color: #2c2c2c;
        }
        h3 {
          font-size: 20px;
          color: #2c2c2c;
        }
        h6 {
          font-size: 16px;
          color: #111;
        }
      `}</style>
    </div>
  );
};

export default Brochures;