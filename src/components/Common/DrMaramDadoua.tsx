"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrMaramDadoua = () => {
  const imageRiyadh = "/images/doctors/dr-maram.avif";

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
             Dr. Maram Dadoua 
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


               Dr. Maram Dadoua 
              </h2>
              <p className="profile-text">
              Senior Registrar, Obstetrics & Gynecology  </p>
              <p className="profile-text">
                Location: Bnoon – Jeddah  </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
               Dr. Maram Dadoua is a highly experienced obstetrician and gynecologist with focus on assisted reproductive techniques, with over a decade of clinical practice across Saudi Arabia and Jordan. At Bnoon – Jeddah, she is specialized in fertility assessments, IVF program planning, patient counseling, and performing assisted reproductive procedures such as OPU, embryo transfers, and IUIs. 
              </p>
              <p>
              She holds a Bachelor’s in Human Medicine from Aleppo University and completed a five-year OBGYN residency at Al-Amal Maternity Hospital in Jordan, managing labor wards and emergencies, as well as conducting routine and advanced gynecological surgeries, including laparoscopic, hysteroscopic, and aesthetic procedures. 
              </p>
              <p>
              Dr. Maram is an MRCOG member (2022) and a certified Senior Registrar by the Saudi Commission for Health Specialties (SCFHS). She is known for managing high-risk obstetric cases, personalized fertility plans, and delivering evidence-based, compassionate care. </p>
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
          <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content ">
              <p>She is currently pursuing an advanced diploma in reproductive medicine and surgery and holds certifications in ART, IUI, embryo transfer, and emergency obstetrics. Her academic contributions include a published study on infertility diagnostics in the MAR Journal (2022), and she regularly participates in regional and international fertility congresses.</p><p>
                Fluent in Arabic and English, Dr. Maram combines medical expertise with cultural sensitivity and a patient-centered approach—serving women from adolescence to menopause with trust and care. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrMaramDadoua;
