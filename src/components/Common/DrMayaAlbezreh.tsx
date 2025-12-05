"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrMayaAlbezreh = () => {
  const imageRiyadh = "/images/doctors/dr-maya-albezreh.avif";

  const contentRefRiyadh = useRef<HTMLDivElement>(null);
  const imageRefRiyadh = useRef<HTMLDivElement>(null);
  const contentRefKing = useRef<HTMLDivElement>(null);
  const imageRefKing = useRef<HTMLDivElement>(null);

  const [contentVisibleRiyadh, setContentVisibleRiyadh] = useState(false);
  const [imageVisibleRiyadh, setImageVisibleRiyadh] = useState(false);
  const [contentVisibleKing, setContentVisibleKing] = useState(false);
  const [imageVisibleKing, setImageVisibleKing] = useState(false);

  useEffect(() => {
    const observerContentRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleRiyadh(true);
          observerContentRiyadh.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (contentRefRiyadh.current) observerContentRiyadh.observe(contentRefRiyadh.current);

    const observerImageRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleRiyadh(true);
          observerImageRiyadh.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (imageRefRiyadh.current) observerImageRiyadh.observe(imageRefRiyadh.current);

    const observerContentKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleKing(true);
          observerContentKing.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (contentRefKing.current) observerContentKing.observe(contentRefKing.current);

    const observerImageKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleKing(true);
          observerImageKing.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (imageRefKing.current) observerImageKing.observe(imageRefKing.current);

    return () => {
      observerContentRiyadh.disconnect();
      observerImageRiyadh.disconnect();
      observerContentKing.disconnect();
      observerImageKing.disconnect();
    };
  }, []);

  return (
    <div className="doctors-overview-area mb-5 mt-3">
      <div className="container">

        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/en">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="our-experts">Our Experts</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dr. Maya Albezreh 
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-lg-5">

          <div className="col-xl-7 col-md-12">
            <div className="doctors-overview-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? "show" : ""}`}
              >


              Dr. Maya Albezreh 
              </h2>
              <p className="profile-text">
              Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology & Infertility (IVF)</p>
              <p className="profile-text">
             Location: Bnoon – Jeddah </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
              Dr. Maya Albezreh serves as the Assistant Obstetrics & Gynecology Consultant at Bnoon - Jeddah. Prior to joining Bnoon (formerly known as HealthPlus Fertility Center in Jeddah), Dr. Maya garnered valuable experience from various reputable medical organizations in Saudi Arabia. Dr. Maya received her Medical Degree (MD) from Damascus University, where she achieved the top rank among her colleagues. She completed her residency training in Obstetrics and Gynecology in Saudi Arabia and is currently board-certified in the field by the Saudi, Arab, and Syrian boards. </p>
              <p>
             Dr. Maya specializes in providing comprehensive medical care for pregnancy, childbirth, and gynecological diseases, particularly those impacting the reproductive system. She has presented scientific papers at numerous local conferences, showcasing her dedication to advancing medical knowledge in her field. Dr. Maya Albezreh's achievements include being recognized as the top-ranking student in her graduating class at Damascus University. She is a member of three prestigious medical boards in Obstetrics and Gynecology, reflecting her commitment to maintaining high standards of professional practice. Dr. Maya's fluency in Arabic and English enhances her ability to provide compassionate care and effective communication with her patients. </p>
            </div>
          </div>




          <div className="col-xl-5 col-md-12 image-column">
            <div>
              <img
                className="doctors-overview-image"
                src={imageRiyadh}
                alt="Bnoon Riyadh"
                width={502}
                height={625}
              />
            </div>
            <div className="text-center mt-3">
              <Link
                href="request-an-appoinment"
                className="btn btn-success doctor-profile-btn"
              >
                Request an Appointment
              </Link>
            </div>
          </div>
        
       
        </div>
      </div>
    </div>
  );
};

export default DrMayaAlbezreh;
