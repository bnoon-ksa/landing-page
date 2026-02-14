"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl } from "@/utils/booking";

const DrBassam  = () => {
  const imageRiyadh = "/images/doctors/dr-bassam.jpg";

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
              
Dr. Bassam Nusair 
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
                
Dr. Bassam Nusair 
              </h2>
              <p className="profile-text">
              Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery </p>
              
              <p className="profile-text">
               Location: Bnoon – Al Ahsa   </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
          Dr. Bassam Nusair is a highly experience Consultant in Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery at Bnoon – Al Ahsa (located inside Almoosa Specialist Hospital). He brings over three decades of clinical excellence across leading reproductive medicine institutions in the Middle East and the UK.  </p> <p>
          He earned his Bachelor of Medicine and Surgery from Jordan University of Science and Technology and later obtained the Jordanian Board in Obstetrics and Gynecology. He completed advanced fellowships in Reproductive Medicine and Surgery at the Jordanian Royal Medical Services and at King’s College Hospital NHS Foundation Trust in London — one of the world’s leading centers in fertility and reproductive health.  </p>

   <p>
          Throughout his career, Dr. Bassam has held senior consultant roles in IVF and reproductive endocrinology at major hospitals, including Almoosa Specialist Hospital in Saudi Arabia, Farah Women & Children Hospital and King Hussein Medical Center in Jordan. He has also served as Head of Department for multiple reproductive medicine and IVF units </p>
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
 <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content ">
                 <p>
      within the Jordanian Royal Medical Services, where he led clinical programs, advanced surgical practices, and modern fertility treatments. 

​ </p>
              <p>In addition to his clinical leadership, Dr. Bassam has an extensive academic record with tens of international peer-reviewed publications in reproductive medicine, obstetrics, and gynecology. He has also contributed to medical education as a clinical instructor at the University of Jordan and Mutah University, training the next generation of physicians in gynecology and reproductive medicine.  
              </p>
               <p>With his extensive expertise in infertility, reproductive endocrinology, minimally invasive surgery, and assisted reproductive technologies, Dr. Bassam strengthens Bnoon’s commitment to expanding high-quality fertility care and women’s health services in the Eastern Province of Saudi Arabia. 
              </p>
            </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default DrBassam ;
