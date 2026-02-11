"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DrDaliaNour = () => {
  const imageRiyadh = "https://bnoon.blob.core.windows.net/website/images/doctors/dr-dalia.avif";

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

              Dr. Dalia Nour
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

                Dr. Dalia Nour
              </h2>
              <p className="profile-text">
               Consultant, Obstetrics, Gynecology & Delayed Pregnancy </p>
              <p className="profile-text">
                Location: Bnoon – Riyadh  </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
                <span className="lang-box">Basic German</span>
              </p>

              <p>
                Dr. Dalia Nour is a Consultant in Obstetrics, Gynecology, and Infertility treatment at Bnoon – Riyadh since 2022. With a distinguished clinical and academic career across Saudi Arabia and Egypt, she also currently serves as an Assistant Professor at Cairo University, Egypt.   </p>
              <p>
                She earned her Bachelor of Medicine and Surgery (MBBCh) from Cairo University in 2007, graduating with honors. She completed her internship at Cairo University Hospitals in 2008, followed by a three-year residency in Obstetrics and Gynecology at Kasr Al-Ainy, Cairo University. In 2012, she obtained her Master’s degree in Obstetrics and Gynecology and joined the university’s faculty as a Demonstrator. In 2018, she was awarded her Doctorate (MD/PhD), and in July 2025, she was promoted to Assistant Professor. </p>

              <p>
                Since 2018, Dr. Dalia has specialized in in vitro fertilization (IVF) and infertility treatment, working across Cairo University Hospitals and leading fertility centers in Egypt. She has been an active faculty member in the IVF Diploma at Cairo University and has participated in numerous IVF-focused workshops.
                <br />
                She holds the American Diploma in Women’s Cosmetic Procedures and is certified in both diagnostic and operative hysteroscopy. Dr. Dalia has also completed Part 1 of the Membership of the Royal College of Obstetricians and Gynecologists (MRCOG), UK.
                <br />
                Her clinical approach combines academic excellence with patient-centered care, particularly in advanced fertility, gynecological surgery, and women's health.   </p>

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

export default DrDaliaNour;
