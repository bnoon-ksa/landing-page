'use client';

import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';

const PaitentRights: React.FC = () => {
  const pages = [
    { imageName: 'pdf-1', alt: 'Patient Rights Page 1' },
    { imageName: 'pdf-2', alt: 'Patient Rights Page 2' },
  ];

  return (
    <div className="pdf-pages-wrapper">
      {pages.map((page, index) => (
        <OptimizedImage
          key={index}
          imageName={page.imageName}
          alt={page.alt}
          className="pdf-page"
          width={1000}
          height={1400}
        />
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
