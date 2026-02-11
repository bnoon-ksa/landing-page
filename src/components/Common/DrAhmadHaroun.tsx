"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const DrAhmadHaroun = () => {
  const imageRiyadh = "https://bnoon.blob.core.windows.net/website/images/doctors/dr-haroun.avif";

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

              Dr. Ahmad Haroun
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

                Dr. Ahmad Haroun
              </h2>
              <p className="profile-text">
                Consultant, Urology, Andrology & Male Infertility </p>
              <p className="profile-text">
                Location: Bnoon – Jeddah  </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
                Dr. Ahmad Salih Abdallah Haroun currently holds the position of Urology/Andrology Consultant at Bnoon - Jeddah and serves as Assistant Professor of Urology and Andrology at Omdurman Islamic University in Sudan.  </p>
              <p>
                He completed his MBBS at Omdurman Islamic University in Khartoum, Sudan, in 2013, and pursued further specialization in urology at Jordan University of Science and Technology, obtaining his higher specialty in July 2019.     </p>

              <p>
                Dr. Haroun is certified by the Royal College of Surgeons (Edinburgh) since 2018, the Jordanian Board of Urology since August 2019, and the Arab Board of Urology since February 2020. He also certified as Andrologist by the Sudan Medical Specialization Council in 2023.  </p>
              <p>Dr. Haroun specializes in urological surgery and andrology, with a focus on varicocele cases and male infertility, particularly non-obstructive azoospermia.
                His research contributions include studies on the impact of tobacco on semen parameters, the effects of varicocele ligation on Sertoli and Leydig cells, as well as numerous other studies related to infertility.

              </p>

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

              <p>Throughout his career, Dr. Haroun has actively participated in international conferences and workshops, presenting his research findings and insights. He has been a speaker at prestigious events including the European Association of Urology Conference in Barcelona (2019). His achievements reflect his dedication to advancing urological care and academic excellence in Sudan and globally.
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAhmadHaroun;
