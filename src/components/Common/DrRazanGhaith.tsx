"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl } from "@/utils/booking";

const DrRazanGhaith  = () => {
  const imageRiyadh = "/images/doctors/dr-razan-ghaith.avif";

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
              Dr. Razan Ghaith 
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


             Dr. Razan Ghaith 
              </h2>
              <p className="profile-text">
              Consultant, Obstetrics, Gynecology and Infertility </p>
              <p className="profile-text">
           Location: Bnoon – Jeddah  </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
             Dr. Razan Ghaith is a Consultant in Obstetrics, Gynecology, and Infertility at Bnoon – Jeddah (formerly known as HealthPlus Fertility Center in Jeddah) since 2021. She has worked with numerous medical organizations both in Saudi Arabia and abroad.   </p>
              <p>
            Dr. Ghaith earned her Medical Degree (M.D) from King Abdulaziz University in 2009, completed her residency in Obstetrics & Gynecology at National Guard Hospital in Jeddah, and then pursued a Master’s degree in Clinical Embryology at Monash University in Melbourne, Australia. Dr. Ghaith specializes in managing delayed fertility cases and oversees general obstetrics and gynecological care, including antenatal care, deliveries, and surgical procedures. Dr. Ghaith is committed to addressing each couple’s unique needs and concerns. Her goal is to provide comprehensive treatment options and help couples achieve the best possible outcomes.  </p>
            </div>
          </div>




          <div className="col-xl-5 col-md-12 image-column">
            <div>
              <Image
                className="doctors-overview-image"
                src={imageRiyadh}
                alt="Bnoon Riyadh"
                width={502}
                height={625}
              />
            </div>
            <div className="text-center mt-3">
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

export default DrRazanGhaith;
