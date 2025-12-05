"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrAhmedAlNowasser  = () => {
  const imageRiyadh = "/images/doctors/dr-nowasser.jpg";

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
              
Dr. Ahmed Al-Nowasser
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
Dr. Ahmed Al-Nowasser
              </h2>
              <p className="profile-text">
             Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery   </p>
              
              <p className="profile-text">
               Location: Bnoon – Al Ahsa   </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
         Dr. Ahmed Ali Al-Nowasser is a highly experienced Obstetrics, Gynecology & Reproductive Medicine & Infertility (IVF) Consultant at Bnoon – Al Ahsa (located inside Almoosa Specialist Hospital) with more than seventeen years of clinical, surgical, and academic expertise across leading maternity and referral hospitals in Saudi Arabia.  </p> <p>
          Dr. Ahmed possesses advanced skillset in infertility management, IVF/ICSI, minimally invasive gynecologic surgery, and high-risk obstetrics. He has completed his MBBS at Damascus University in 2008 and earned both the Saudi Board and the Arab Board in Obstetrics & Gynecology in 2014. He went on to pursue a distinguished pathway of international specialization, including a Diploma and Fellowship in Minimal Access Surgery in 2015 (India), a Diploma in Reproductive Medicine & Embryology (Germany), a Fellowship in Assisted Reproductive Technology in 2017 (India), and most recently, a Fellowship in Reproductive Medicine from IVI Clinic, Spain and an    MD in Reproductive Medicine from IVI and the University of Valencia in Spain.  </p>

            </div>
          </div>



<div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
  <img
    className="doctors-overview-image"
    src={imageRiyadh}
    alt="Bnoon Riyadh"
    width={502}
    height={625}
  />
  <div className="mt-3">
    <Link
      href="request-an-appoinment"
      className="btn btn-success doctor-profile-btn"
    >
      Request an Appointment
    </Link>
  </div>
</div>
 <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content ">
                 <p>
   Across his career at the Maternity & Children Hospital (MCH) in Al-Ahsa, he has led reproductive medicine services, advanced laparoscopic and hysteroscopic procedures, and trained residents within the Saudi Board OB/GYN program. He also currently practices at the Obstetrics & Gynecology Department at Almoosa Specialist Hospital and has previously served as Consultant at MCH Najran. Dr. Ahmed continues to contribute to national CME initiatives, medical education, and outreach programs supporting women’s health across the Kingdom. 
              </p>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default DrAhmedAlNowasser ;
