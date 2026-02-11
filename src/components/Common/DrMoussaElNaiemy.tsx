"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrMoussaElNaiemy = () => {
  const imageRiyadh = "/images/doctors/dr-moussa.avif";

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

              Dr. Moussa El Naiemy
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

                Dr. Moussa El Naiemy
              </h2>
              <p className="profile-text">
                Executive Director</p>
              <p className="profile-text">
               Consultant, Urology, Andrology & Male Infertility  </p>
              <p className="profile-text">
                Location: Bnoon – Jeddah </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
                Dr. Moussa El Naiemy is an experienced Urology, Andrology and Male Infertility Consultant with over three decades of clinical and academic experience in Saudi Arabia and Canads. Prior to joining Bnoon – Riyadh, he served as a Consultant in Urology, Andrology, and Male Infertility at Riyadh Military Hospital since 2010. He is recognized for his expertise in male reproductive health, erectile dysfunction, Peyronie’s disease, and advanced sperm retrieval techniques.   </p>
              <p>
                A graduate of King Saud University (MBBS), he earned his Saudi Specialty Certificate in Urology in 2003 and completed a prestigious Uro-Andrology Fellowship at the University of Western Ontario in Canada (2006–2008). He also holds the Saudi Board in Urology since 2004. He has held several senior roles at several organizations and has been a driving force behind introducing modern protocols such as high-resolution penile Doppler ultrasound and updated semen analysis standards in line with WHO guidelines.   </p>


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

          <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content">

              <p>Dr. Al Numi is an active academic contributor, having presented over 30 papers at regional and international conferences, including the American Urological Association (AUA), European Society of Human Reproduction and Embryology (ESHRE), European Society for Sexual Medicine (ESSM) and Middle East Fertility Society (MEFS). His work has been published in respected journals such as European Urology, Urology Annals, and Basic and Clinical Andrology.
              </p>
              <p>He is also a frequent lecturer, conference moderator, and clinical researcher, with a focus on improving outcomes in male infertility and sexual medicine. His leadership and commitment to continuing education have made him a key figure in advancing urological practice in the region.   </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrMoussaElNaiemy;
