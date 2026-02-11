"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const GoTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowButton(window.pageYOffset > 150);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  // Your WhatsApp number
  const whatsappNumber = "966114448080"; 
  const message = "Hello! I want to know more.";

  // Correct WhatsApp URL
  const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      {showButton && (
        <a
          href={whatsappURL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn position-fixed border-0 p-0"
          style={{
            bottom: "50px",
            right: "10px",
            zIndex: 999,
            width: "55px",
            height: "55px",
            borderRadius: "50%",
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <Image
            src="https://bnoon.blob.core.windows.net/website/images/WhatsApp.svg"
            alt="WhatsApp"
            fill
            style={{ objectFit: "cover" }}
          />
        </a>
      )}
    </>
  );
};

export default GoTop;
