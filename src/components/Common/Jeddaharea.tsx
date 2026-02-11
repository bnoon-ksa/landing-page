"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Jeddaharea = () => {
  const imageJeddah = "/images/locations/bnoon-jeddah.avif";

  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [imgVisible, setImgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // Intersection Observer for animation
  useEffect(() => {
    const observerImg = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible(true);
          observerImg.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const observerText = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          observerText.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imgRef.current) observerImg.observe(imgRef.current);
    if (textRef.current) observerText.observe(textRef.current);

    return () => {
      observerImg.disconnect();
      observerText.disconnect();
    };
  }, []);

  return (
    <div className="service-overview-area mb-5 mt-3 mt-lg-5">
      <div className="container">
        {/* Jeddah Section */}
        <div className="row justify-content-center align-items-center g-4 flex-column-reverse flex-md-row">
          <div className="col-xl-6 col-md-12  image-loc">
            <div
              ref={imgRef}
              className={`service-overview-image  ${imgVisible ? "animate-left show" : "animate-left"}`}
              style={{
                boxShadow: "-50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <Image src={imageJeddah} alt="Service overview" width={580} height={450} />
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={textRef}
              className={`service-overview-content ${textVisible ? "animate-right show" : "animate-right"}`}
            >
              <h2>Bnoon – Jeddah</h2>
              <p>
                Acquired in June 2025, Bnoon Jeddah — formerly known as HealthPlus Fertility Center Jeddah — has long been recognized for its medical excellence and the trust it has built within the local community. Now as part of a leading network of fertility centers, the center reflects the group’s commitment to expanding access to world-class fertility and women’s health services across Saudi Arabia.
              </p>
              <p>
                Accredited by the Joint Commission International (JCI), the center offers a comprehensive range of services, including IVF, ICSI, egg and sperm freezing, genetic testing, hormonal assessments, and advanced male and female fertility diagnostics. Leveraging the latest in medical technology, including time-lapse embryo monitoring, AI-driven treatment planning, and digital patient tracking, Bnoon Jeddah provides personalized, evidence-based care designed to maximize success rates and patient comfort.
              </p>

            <div className="d-flex mt-3 gap-4 flex-column flex-md-row">
  {/* Location */}
  <div className="d-flex align-items-center">
    <Image
      src="/images/icons/location.svg"
      alt="Location"
      width={24}
      height={24}
      className="me-2"
    />
    <a
      href="https://maps.app.goo.gl/NkDABg6WD5Up3XCk7"
      target="_blank"
      rel="noopener noreferrer"
      className="text-color text-decoration-none"
    >
      Bnoon – Jeddah
    </a>
  </div>

  {/* Phone */}
  <div className="d-flex align-items-center">
    <Image
      src="/images/icons/phone.svg"
      alt="Phone"
      width={24}
      height={24}
      className="me-2"
    />
    <a
      href="tel:+966126800800"
      className="text-color text-decoration-none"
    >
      +966 12 680 0800
    </a>
  </div>

  {/* Email */}
  <div className="d-flex align-items-center">
    <Image
      src="/images/icons/mail.svg"
      alt="Email"
      width={24}
      height={24}
      className="me-2"
    />
    <a
      href="mailto:info.jeddah@bnoon.sa"
      className="text-color text-decoration-none"
    >
      info.jeddah@bnoon.sa
    </a>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
   <style jsx global>{`
       a.text-color.text-decoration-none {
    color: #004E78;
     font-size: 18px !important;
}
  span.text-color {
    color: #004E78 !important;
    font-size: 18px !important;
  }
.image-loc{
text-align: left;
}
  /* Mobile Responsive */
  @media (max-width: 767px) {
   span.text-color {
    color: #004E78 !important;
    font-size: 14px !important;
  }
    .image-loc{
text-align: right;
}
    a.text-color.text-decoration-none {
    color: #004E78;
     font-size: 14px !important;
}
  }
`}</style>
     
    </div>
  );
};

export default Jeddaharea;
