"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl } from "@/utils/booking";

const DrMaramDadoua = () => {
  const imageRiyadh = "/images/doctors/dr-rania.jpg";

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
             Dr. Rania Elsherify 
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


              Dr. Rania Elsherify 
              </h2>
              <p className="profile-text">
             Obstetrics & Gynecology Registrar   </p>
              <p className="profile-text">
                Location: Bnoon – Al Ahsa   </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
                 <span className="lang-box">
German </span>
              </p>

              <p>
              Dr. Rania Elsherify is a highly experienced Obstetrics & Gynecology Registrar at 

Bnoon – Al Ahsa (located inside Almoosa Specialist Hospital) with an extensive background in reproductive medicine, infertility management, and women’s health. With nearly three decades of clinical expertise, she brings rich academic credentials and hands-on experience in managing complex fertility cases and offering individualized gynecological care. 
              </p>
              <p>
              Dr. Rania graduated with a Bachelor of Medicine from Ain Shams University in Cairo in 1995, followed by a Master’s degree in Obstetrics and Gynecology in 2000. She later earned her PhD in Environmental Medical Sciences from Ain Shams University in 2014. In 2023, she completed a Professional Diploma in Reproductive Medicine and Surgery at Birmingham Women’s Hospital in the United Kingdom, further advancing her specialization in assisted reproduction. 
              </p>
              <p>
            Before joining Bnoon – Al Ahsa, she worked at Almoosa Specialist Hospital; and served as an IVF Consultant and later as Medical Director of the East Cairo branch of Adam   </p>
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
          <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content ">
                 <p>
          International Hospital for Fertility, where she oversaw clinical operations and helped shape fertility treatment pathways for thousands of patients. Her clinical expertise spans evaluation and management of primary and secondary infertility, ultrasound assessment of ovarian and uterine health, controlled ovarian stimulation, and the diagnosis and treatment of vaginismus.  </p>
              <p>Dr. Rania is deeply committed to providing compassionate, evidence-based care and supporting women and couples through every step of their fertility and reproductive health journey. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrMaramDadoua;
