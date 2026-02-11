"use client";

import React from "react";
import Image from "next/image";

const PaitentRights: React.FC = () => {
  const pages = [
    "/pdf/pdf-1.jpg",
    "/pdf/pdf-2.jpg",
    // jitne pages hon utne add kar dein
  ];

  return (
    <div className="pdf-pages-wrapper">
      {pages.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Patient Rights Page ${index + 1}`}
          className="pdf-page"
         width={1000} height={1400} />
      ))}

      <style jsx>{`
        .pdf-pages-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          padding: 40px 0;
        }

        .pdf-page {
          width: 60%;
          max-width: 900px;
          height: auto;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .pdf-page {
            width: 95%;
          }
        }
      `}</style>
    </div>
  );
};

export default PaitentRights;
