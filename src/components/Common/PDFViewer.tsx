"use client";

import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// ✅ Correct PDF.js worker for Next.js & Azure
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer: React.FC = () => {
  const [numPages, setNumPages] = useState<number | null>(null);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <Document
        // ✅ Use relative path, not full Azure URL
        file="/images/pdf/bnoon-patients-rights.pdf"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        onLoadError={(error) => console.error("❌ PDF load error:", error)}
        loading={<p>Loading PDF...</p>}
      >
        {numPages !== null &&
          Array.from({ length: numPages }, (_, index) => (
            <div
              key={`page_${index + 1}`}
              style={{
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Page
                pageNumber={index + 1}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                width={900}
              />
            </div>
          ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
