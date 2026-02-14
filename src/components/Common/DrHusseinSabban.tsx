"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl } from "@/utils/booking";

const DrHusseinSabban = () => {
  const imageRiyadh = "/images/doctors/dr-hussein.avif";

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
    <div className="service-overview-area mb-5 mt-5">
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

              Dr. Hussein Sabban
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4">

          <div className="col-xl-7 col-md-12">
            <div className="service-overview-content doctor-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? "show" : ""}`}
              >

                Dr. Hussein Sabban
              </h2>
              <p className="profile-text">
                Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, & Infertility </p>
              <p className="profile-text">
                Location: Bnoon – Jeddah   </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
                <span className="lang-box">
                  Basic French </span>
              </p>

              <p>
              Dr. Hussein Sabban is a distinguished Consultant specializing in Obstetrics & Gynecology, Reproductive Endocrinology and Infertility. With more than 17 years of clinical experience, he provides comprehensive care in assisted reproductive technologies and infertility management in addition to gynecological care from adolescence to menopause. </p>
               <p>
              He earned his MBBS from King Abdulaziz University in Jeddah (2007/2008), followed by advanced training in Canada. He holds the Canadian Board Certification in Obstetrics & Gynecology (FRCSC) and a Fellowship in Gynecologic Reproductive Endocrinology & Infertility from Dalhousie University. Dr. Sabban also completed Part I of the American Board of Obstetrics & Gynecology (ABOG) in 2017.   </p>

              <p>
               Dr. Sabban’s expertise spans specialized fertility treatments, and the full spectrum of ART/IVF procedures and general obstetrics and gynecology. He has a strong track record in diagnosing and treating both female and male infertility factors in a culturally sensitive and patient-centered environment.  </p>
              <p>He is fluent in Arabic (native) and English, and has working proficiency in French. This multilingual ability enhances his capacity to engage with a diverse patient population and collaborate with international peers.  </p>

            </div>
          </div>



          <div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center">
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

export default DrHusseinSabban;
