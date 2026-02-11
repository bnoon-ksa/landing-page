"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrAsimAlWohaibi = () => {
  const imageRiyadh = "/images/doctors/dr-asim.avif";

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

              Dr. Asim Al Wohaibi
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

                Dr. Asim Al Wohaibi
              </h2>
              <p className="profile-text">
               Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology & Infertility (IVF), Minimally Invasive Surgery </p>
              <p className="profile-text">
                Location: Bnoon – Riyadh  </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
                <span className="lang-box">French </span>
              </p>

              <p>
                Dr. Asim Al Wohaibi is a Consultant in Reproductive Endocrinology, Infertility, and Obstetrics & Gynecology at Bnoon - Riyadh. With advanced training in France and leadership roles in top Saudi institutions, Dr. Asim brings over a decade of specialized expertise to his practice. His areas of expertise include complex infertility cases, hormonal disorders, minimally invasive surgery, and fertility preservation.</p>
              <p>
                He earned his MBBS from King Abdulaziz University in Jeddah in 2008, then pursued his postgraduate medical education in France. He completed the French Board (DES) in Obstetrics and Gynecology at Paris Descartes University (2010–2017), followed by advanced specialization in Reproductive Endocrinology and Infertility through a three-year DESC program at the same institution (2018–2021). He also holds a Diploma in Reproductive Endocrinology and Infertility (2019–2021) and a Diploma in Laparoscopic Gynecological Surgery from Clermont-Ferrand University (2013–2014).   </p>

              <p>
                Dr. Asim also serves as Assistant Professor and Consultant in Reproductive Endocrinology and Infertility at King Saud University Medical City in Riyadh. From 2021 to 2024, he was Residency Program Director in Obstetrics and Gynecology, and from 2022 to 2023, he led the IVF Unit at the same institution. </p>
              <p>Dr. Alwohaibi is trilingual in Arabic, English, and French.  </p>

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
              <a
                href="https://book.bnoon.sa"
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

export default DrAsimAlWohaibi;
