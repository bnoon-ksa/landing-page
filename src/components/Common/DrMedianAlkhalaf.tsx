"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl, isExternalBooking } from "@/utils/booking";

const DrAsimAlWohaibi = () => {
  const imageRiyadh = "/images/doctors/dr-median.jpg";

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
Dr. Median Alkhalaf
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

               Dr. Median Alkhalaf
              </h2>
              <p className="profile-text">
             Consultant, Obstetrics & Gynecology  </p>
              <p className="profile-text">
                Location: Bnoon – Al Ahsa  </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
              Dr. Median Alkhalaf is a distinguished Consultant in Obstetrics, Gynecology at Bnoon – Al Ahsa with more than 25 years of clinical experience across infertility management, IVF/ICSI protocols, gynecologic ultrasound, and advanced endoscopy.  </p>
              <p>
             Dr. Median holds a PhD in Clinical Medical Sciences from the Sarajevo School of Science and Technology in Bosnia and Herzegovina, where his doctoral research focused on ovarian induction, endometrial receptivity, and Doppler vascular indices—contributing valuable insights to evidence-based fertility protocols. He also completed a Master’s degree in Human Reproduction and Reproductive Endocrinology in 2016 from Ian Donald Inter-University School in Croatia, supported by advanced international training in IVF and Assisted Reproductive Techniques across the UK, Europe, India, Jordan, and Turkey. He completed his MD degree from the College of Medicine, Damascus University, Syria in 1999.   </p>

              <p>
               He is board-certified by the Arab Board of Obstetrics & Gynecology since 2007, and has undertaken multiple fellowships and specialized diplomas in reproductive medicine, infertility, laparoscopy, hysteroscopy, and pelvic ultrasonography. His training includes reproductive medicine programs at Birmingham Women's Hospital – London, Nadkarni IVF Academy – India, Yeditepe University – Turkey, and leading IVF centers in Jordan.  </p>
            
 

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
                {...(isExternalBooking() ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                Request an Appointment
              </a>
            </div>
          </div>
            <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content ">
              
                <p>He also serves as a Consultant at Almoosa Specialist Hospital since 2011 and plays a key academic role as Program Director for the Obstetrics and Gynecology Residency Program. His expertise spans ovarian stimulation strategies, Doppler-based diagnostics, PCOS management, and high-risk obstetrics.   </p>
 <p>A committed researcher, Dr. Median has authored multiple peer-reviewed publications focusing on ovarian induction medications, endometrial vascularity, Doppler ultrasound biomarkers, and predictors of pregnancy success—work that contributes meaningfully to improving clinical outcomes in reproductive medicine. 

 </p>

 </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAsimAlWohaibi;
