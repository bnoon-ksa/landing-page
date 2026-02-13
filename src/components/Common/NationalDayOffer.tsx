"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NationalDayOffer = () => {
  // Alag images for each section
  const imageRiyadh = "/images/national-day/men-infertility.jpg";
  const imageJeddah = "/images/national-day/ivf-cycles.jpg";

  const includesList = [
    "Ovulation monitoring via ultrasound ",
    "Hormonal tests during treatment cycle ",
  ];

  const excludesList = ["Medications", "Genetic Testing"];

  return (
    <div className="service-overview-area mb-5 mt-3">
      <div className="container">
        {/* Riyadh Section */}
        <div className="row justify-content-center align-items-center g-4 mb-3">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content text-center">
              <h2>Saudi Founding Day Special Offer</h2>
            </div>
            <div className="service-overview-content text-center national-box">
              <h2 className="national-text national-text-3">Discount on IVF/ICSI Cycles </h2>
            </div>
            <div className="service-overview-content text-center national-box-2 mt-3">
              <h5 className="national-text-2">BNOON Riyadh | Jeddah | Al Ahsa </h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-5 col-md-12  order-2 order-xl-1">
            <div
  className="national-overview-image"
  style={{
    boxShadow: "-50px 50px 0px #d7f2fb",
    overflow: "hidden",
    display: "inline-block",
    margin: "0 0px 0 50px",
  }}
>

              <Image
                src={imageJeddah}
                alt="Service overview"
                width={580}
                height={450}
              />
            </div>
          </div>

          <div className="col-xl-5 col-md-12 order-1 order-xl-2">
            <div className="national-overview-content national-list">
              <p className="national-p">
                On the occasion of Saudi Founding Day, we’re pleased to offer <strong>15% OFF*</strong> on IVF/ICSI Cycles at Bnoon. 
              </p>

              {/* ✅ Includes */}
              <div className="national-p">
                <strong>Includes:</strong>
                <ul className="list-unstyled mt-2">
                  {includesList.map((item, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-start mb-2"
                    >
                      <Image
                        src="/images/icons/bnoon-symbol.avif"
                        alt="check"
                        width={20}
                        height={20}
                        className="me-2"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ Excludes */}
              <div className="national-p">
                <strong>Excludes:</strong>
                <ul className="list-unstyled mt-2">
                  {excludesList.map((item, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-start mb-2"
                    >
                      <Image
                        src="/images/icons/bnoon-symbol.avif"
                        alt="check"
                        width={20}
                        height={20}
                        className="me-2"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="national-p">
                The offer is valid from{" "}
                <strong>February 11 to March 4, 2026</strong>
                <br />
                Last day to start treatment is{" "}
                <strong>April 2, 2026.</strong>
              </p>
              <p className="national-p">*Terms & conditions apply. This offer is not valid with other offers. </p>

              <Link
                href="https://book.bnoon.sa"
                className="btn btn-primary contact-btn"
              >
                BOOK NOW
              </Link>

              <div className="d-flex flex-column mt-3 gap-2">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="me-2"
                  />
                  <span>Bnoon - Riyadh: 011 444 8080</span>
                </div>
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="me-2"
                  />
                  <span>Bnoon - Jeddah: 012 680 0800 </span>
                </div>
                 <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="me-2"
                  />
                  <span>Bnoon – Al Ahsa: 0552701553 </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jeddah Section */}
        <div className="row justify-content-center align-items-center g-4 mt-5 mb-3">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content text-center national-box">
              <h2 className="national-text national-text-3">Discount on Andrology & Men’s Infertility Treatments </h2>
            </div>
             <div className="service-overview-content text-center national-box-2 mt-3">
              <h5 className="national-text-2">Bnoon – Jeddah | Riyadh</h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-5 col-md-12">
            <div className="national-overview-content national-list">
              <p className="national-p">
               Celebrating Saudi Founding Day, we’re pleased to offer <strong>20% OFF*</strong> on Andrology & Men’s Infertility Treatments at Bnoon in Jeddah and Riyadh,
              </p>
              <p className="national-p">
                The offer is valid from{" "}
                <strong>February 11 to March 2, 2026.</strong>
                <br />
               The offer is not applicable on consultations.  
              </p>
              <p className="national-p">*Terms & conditions apply. This offer is not valid with other offers. </p>

              <Link
                href="https://book.bnoon.sa"
                className="btn btn-primary contact-btn"
              >
                BOOK NOW
              </Link>

              <div className="d-flex flex-column mt-3 gap-2">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="me-2"
                  />
                  <span>Bnoon – Jeddah: 012 680 0800 </span>
                </div>
                  <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="me-2"
                  />
                  <span>Bnoon – Riyadh: 0114448080 </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-md-12">
             <div
  className="national-overview-image"
  style={{
    boxShadow: "-50px 50px 0px #d7f2fb",
    overflow: "hidden",
    display: "inline-block",
    margin: "0 0px 0 50px",
  }}
>
              <Image
                src={imageRiyadh}
                alt="Service overview"
                width={580}
                height={450}
              />
            </div>
          </div>
        </div>
          
      </div>
    <style jsx>{`
 

  /* Mobile tweaks */
  @media (max-width: 768px) {
    .national-text-3 {
      font-size: 18px;
      color:#fff;
    }
          .btn-appointment {
        width: 120px;
    }
      .national-text-2 {
    font-size: 16px;
    text-align: center;
    margin: 10px 0px;
}
  }
`}</style>

    </div>
  );
};

export default NationalDayOffer;
