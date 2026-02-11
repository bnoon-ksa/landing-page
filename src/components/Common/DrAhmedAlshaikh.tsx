"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DrAhmedAlshaikh = () => {
  const imageRiyadh = "https://bnoon.blob.core.windows.net/website/images/doctors/dr-ahmed-bekar.avif";

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

              Dr. Ahmed Alshaikh
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

                Dr. Ahmed Alshaikh
              </h2>
              <p className="profile-text">
              Consultant, Obstetrics, Gynecology,  Reproductive Endocrinology & Infertility (IVF), Minimally Invasive Surgery</p>
              <p className="profile-text">
               Location: Bnoon – Jeddah </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
              Dr. Ahmed Baker Alshaik is a distinguished Consultant in Reproductive Endocrinology & Infertility (REI) and Assisted Reproductive Technique (ART, IVF) at Bnoon - Jeddah. Previously, he served as an Assistant Professor in the Obstetrics and Gynecology department at Jouf University, where he organized courses for medical students in the 4th, 5th, and 6th years. Dr Alshaik also held the position of Consultant in Obstetrics and Gynecology at the Maternity and Children Hospital, specializing in Infertility Gyne/Endocrinology and Fertility Preservation.  </p>
               <p>
              He completed his fellowship training program in Reproductive Endocrinology and Infertility at Karolinska University Hospital/Stockholm IVF under the mentorship of Prof. Mats Brännström. Dr. Alshaik holds a PhD degree for his research on the development of bioengineered ovaries for safe fertility preservation in female leukemia patients, focusing on basic studies in animal models.  </p>

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

 <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content">
              <p>
             Dr. Alshaik's expertise spans reproductive endocrinology and infertility, where he specializes in advanced Assisted Reproductive Techniques (ART) such as In Vitro Fertilization (IVF). His clinical practice includes managing complex cases of infertility, reproductive disorders, and fertility preservation strategies. Dr. Alshaik is renowned for his research contributions in bioengineering ovaries and his dedication to advancing reproductive medicine through innovative techniques.  </p>
              <p>Dr. Ahmed Baker Alshaik has been recognized for his outstanding contributions to Reproductive Endocrinology and Infertility. His PhD research under the supervision of Prof. Mats Brännström has been pivotal in the field of fertility preservation. He has presented his research findings at numerous national and international conferences, including publications in esteemed scientific journals. Dr. Alshaik's commitment to patient care, education, and research exemplifies his leadership in the field of reproductive medicine. </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAhmedAlshaikh;
