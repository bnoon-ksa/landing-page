"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl } from "@/utils/booking";

const DrFawazEdris  = () => {
  const imageRiyadh = "/images/doctors/dr-fawad.avif";

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
              
Dr. Fawaz Edris 
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-lg-5" >

          <div className="col-xl-7 col-md-12">
            <div className="doctors-overview-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? "show" : ""}`}
              >
                
Dr. Fawaz Edris 
              </h2>
              <p className="profile-text">
               Executive Director, Bnoon - Jeddah</p>
              <p className="profile-text">
              Consultant, Obstetrics, Gynecology, Maternal Fetal Medicine, Reproductive Endocrinology & Infertility (IVF), Minimally Invasive Surgery </p>
              <p className="profile-text">
               Location: Bnoon – Jeddah </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
             Dr. Fawaz Edris is a distinguished Consultant with multiple subspecialities, and is the Executive Director at Bnoon (formerly known as HealthPlus Fertility Center) in Jeddah, Saudi Arabia since 2019. With a career spanning leading different medical institutions. Dr. Edris also serves as an Associate Professor at Umm Al-Qura University, Makkah, Saudi Arabia. </p>
              <p>
             Dr. Edris brings extensive expertise across the field of Obstetrics and Gynecology, with particular focus on Maternal-Fetal Medicine (MFM), Reproductive Endocrinology and Infertility (REI), and Minimally Invasive Surgery (MIS).   </p>
              <p>
            He obtained his three Canadian Boards from the University of British Columbia (OB-GYN 2003), the University of Ottawa (MFM 2005), and the University of Western Ontario (REI/MIS 2007). Dr. Edris was also granted the American Fellowship in Obstetrics and Gynecology.   </p>
             <p>  Throughout his career, Dr. Edris has been widely recognized for his contributions to women’s health and medical education. He is an active member of several leading professional societies, including the Society of Obstetricians and Gynaecologists of Canada, the American College of Obstetricians and Gynecologists, the American Association of Gynecologic Laparoscopists, and the International Society of Cosmetic Gynecology. Dr. Edris is also a fellow of the American Academy of Cosmetic Surgery.</p>
            </div>
          </div>



<div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
  <Image
    className="doctors-overview-image"
    src={imageRiyadh}
    alt="Bnoon Riyadh"
    width={502}
    height={625}
  />
  <div className="mt-3">
    <a
      href={getBookNowUrl("en")}
      className="btn btn-success doctor-profile-btn"
    >
      Request an Appointment
    </a>
  </div>
</div>

       
        </div>
      </div>
    </div>
  );
};

export default DrFawazEdris ;
