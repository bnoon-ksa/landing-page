"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DrAbdulAzizAlShahrani = () => {
  const imageRiyadh = "https://bnoon.blob.core.windows.net/website/images/doctors/dr-abdulaziz.avif";

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
              Dr. AbdulAziz AlShahrani
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-lg-5">

          <div className="col-xl-7 col-md-12">
            <div className="doctors-overview-content ">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? "show" : ""}`}
              >


                Dr. AbdulAziz AlShahrani
              </h2>
              <p className="profile-text">
               Group Medical Director </p>
              <p className="profile-text">
               Consultant, Reproductive Endorinology & Infertility (IVF), Gynecological Laproscopic Surgery</p>
              <p className="profile-text">
                Location: Bnoon – Riyadh </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
              Dr. AbdulAziz AlShahrani is a leading Consultant in Obstetrics, Gynecology, Reproductive Endocrinology, Infertility, IVF, and Laparoscopic Surgery, and is the Group Medical Director of Bnoon in Saudi Arabia. With nearly three decades of experience in the field of reproductive medicine, Dr. AlShahrani is recognized for his clinical excellence and pioneering role in advancing fertility care in the Kingdom.
              </p>
              <p>
              He earned his MBBS degree from King Saud University in 1994, followed by the Saudi Board in Obstetrics and Gynecology in 1999. He completed his fellowship in infertility and laparoscopic surgery at King Faisal Specialist Hospital in 2003, and pursued fellowship in IVF, reproductive medicine, and reproductive surgery at McGill University in Montreal, Canada, in 2005.
              </p>
             
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
                href="https://book.bnoon.sa"
                className="btn btn-success doctor-profile-btn"
              >
                Request an Appointment
              </a>
            </div>
             <style jsx>{`
    @media (max-width: 768px) {
      .image-column {
        order: -1;
      }
    }
  `}</style>
          </div>
          <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content">
              <p> Dr. Abdulaziz is an active member in the Middle East Fertility Society (MEFS), American Society of Reproductive Medicine (ASRM) and the European Society of Human Reproduction and Embryology (ESHRE). He also serves as a founding member and vice president of the Saudi Society for Women’s Health. He regularly speaks at scientific conferences, and has led various workshops in the region.
              </p><p>
                Prior founding Bnoon Medical Center in Riyadh, Dr. AlShahrani served as a consultant at leading IVF centers in Saudi Arabia. Since 2013, he has led Bnoon - Riyadh as both Medical Director and consultant, playing a vital role in its growth as a trusted destination for reproductive health and advanced minimally invasive gynecologic procedures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAbdulAzizAlShahrani;
