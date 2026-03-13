'use client';

import React from 'react';
import { motion } from 'framer-motion';

const brochures = [
  {
    section_en: "Egg Retrieval",
    section_ar: "سحب البويضات",
    items: [
   
      {
        title_en: "POST-OPERATIVE INSTRUCTIONS: EGG RETRIEVAL",
        title_ar: "تـعـلـيـمات ما بعد سحـب البـويـضـات",
        image: "https://bnoon-website.b-cdn.net/images/brochures/post-egg-retrieval.jpg",
        pdf: "/en/egg-retrieval-post-operative",
        downloadpdf: "/pdf/post-operative-instructions-egg-retrieval.pdf",
      },
         {
        title_en: "PRE-OPERATIVE INSTRUCTIONS: EGG RETRIEVAL",
        title_ar: "تعـليـمـات مـا قبل سحـب البـويـضـات ",
        image: "https://bnoon-website.b-cdn.net/images/brochures/pre-egg-retrieval.jpg",
        pdf: "/en/egg-retrieval-pre-operative",
        downloadpdf: "/pdf/pre-operative-instructions-egg-retrieval.pdf",
      },
    ],
  },
  { 
    section_en: "Embryo Transfer",
    section_ar: "نقل الأجنة",
    items: [
  
      {
        title_en: "POST-OPERATIVE INSTRUCTIONS: EMBRYO TRANSFER",
        title_ar: "تـعـلـيـمات ما بعد إرجـــاع األجـــنـــة",
        image: "https://bnoon-website.b-cdn.net/images/brochures/post-embryo-transfer.jpg",
        pdf: "/en/embryo-transfer-post-operative",
        downloadpdf: "/pdf/post-operative-instructions-enbryo-transfer.pdf",
      },
          {
        title_en: "PRE-OPERATIVE INSTRUCTIONS: EMBRYO TRANSFER ",
        title_ar: "تعـليـمـات مـا قبل إرجـــاع األجـــنـــة",
        image: "https://bnoon-website.b-cdn.net/images/brochures/pre-embryo-transfer.jpg",
        pdf: "/en/embryo-transfer-pre-operative",
        downloadpdf: "/pdf/pre-operative-instructions-enbryo-transfer.pdf",
      },
    ],
  },
  {
    section_en: "Semen Collection", 
    section_ar: "جمع السائل المنوي",
    items: [
      {
        title_en: "SEMEN COLLECTION INSTRUCTIONS",
        title_ar: "تعليمات جمع عينة السائل المنوي",
        image: "https://bnoon-website.b-cdn.net/images/brochures/semen.jpg",
        pdf: "/en/semen-collection-instructions",
        downloadpdf: "/pdf/semen-collection-instructions.pdf",
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
    <div className="fertility-area bg-color" dir="rtl">
      <div className="container mt-5 mb-5 ">
        {brochures.map((section, i) => (
          <div key={i} className="section-title mt-5 mb-5">
            <div key={i} className="left">
                {/* English Heading */}
              <h2 className="mb-1 fw-bold text-center">{section.section_en}</h2>
              {/* Arabic Heading */}
              <h2 className="mb-4 fw-bold text-center brochures-text text-font-style">{section.section_ar}</h2>

            
            </div>
            <div className="row g-5 justify-content-center">
              {section.items.map((item, index) => (
                <div className="col-lg-5 col-md-6" key={index}>
                  <motion.div
                    variants={cardAnimation}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                  >
                 <div className="brochure-card p-3">
                      <div className="brochure-image mb-3">
                        <img
                          src={item.image}
                          alt={item.title_en}
                          className="img-fluid rounded"
                        />
                      </div>
<div className="d-flex justify-content-between align-items-center" dir="ltr">

  <div className="text-start">
    <a
      href={item.pdf}
      className="text-link"
    >
     
      <h6 className="fw-semibold mb-1 brochures">{item.title_en}</h6>
       <h6 className="fw-semibold mb-1 brochures text-font-style">{item.title_ar}</h6>
    </a>
  </div>

  <a
    href={item.downloadpdf}
    target="_blank"
    rel="noopener noreferrer"
    className="download-icon"
  >
   <img src="https://bnoon-website.b-cdn.net/images/icons/downloading.png" alt="download" />
  </a>

</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CSS inside same file */}
      <style jsx global>{`
      .bg-color{
          background-color: #d7f2fb;
      }
      .brochures{
      color: #004E78;
      }
    .text-font-style{
  font-family: 'Alexandria' !important;
}
  .brochures-text{
  font-size: 32px !important;
  }
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
          font-size: 20px;
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
          .download-icon {
  color: #004E78;
  width: 35px;
  margin-left: 10px;
}
.download-icon img{
  width: 35px;
  transition: 0.3s;
}

.download-icon:hover img{
  filter: brightness(0) saturate(100%) invert(37%) sepia(93%) saturate(451%) hue-rotate(165deg);
}
.download-icon:hover {
  color: #0a6ea8;
}
      `}</style>
    </div>
  );
};

export default Brochures;
