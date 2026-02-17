"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NationalDayOffer = () => {
  // ✅ Replace these paths with your exact assets (same as screenshot)
  const heroBg = "/images/national-day/hero-banner.jpg"; // top banner background image
  const leftCardImg = "/images/national-day/ivf-cycles.jpg"; // left card image
  

  const includesList = [
    "Ovulation monitoring via ultrasound",
    "Hormonal tests during treatment cycle",
  ];

  const excludesList = ["Medications", "Genetic Testing"];

  return (
    <div className="founding-offer-page">
      {/* ✅ HERO BANNER (like screenshot) */}
    

      {/* ✅ MAIN CONTENT CARD */}
      <section className="offer-section">
        <div className="container">
          <div className="offer-card">
            <div className="row g-0 align-items-stretch">
              {/* LEFT IMAGE CARD */}
              <div className="col-lg-6 col-md-6">
                <div className="service-overview-image"
              style={{
                boxShadow: "-50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }} >
                  {/* Optional stamp overlay (top-left) */}
                
                  <Image
                    src={leftCardImg}
                    alt="IVF/ICSI Offer"
                    width={900}
                    height={700}
                    className="left-img"
                  />
                </div>
              </div>

              {/* RIGHT CONTENT */}
              <div className="col-lg-6 col-md-6">
                <div className="right-content">
                  <h2 className="offer-title">
                    <span className="offer-strong">15% OFF*</span> on IVF/ICSI Cycles
                  </h2>

                  <p className="offer-desc">
                    On the occasion of Saudi Founding Day, we’re pleased to offer{" "}
                    <strong>15% OFF*</strong> on IVF/ICSI Cycles at Bnoon.
                  </p>

                  {/* Includes box (like screenshot) */}
                  <div className="info-box">
                    <div className="info-head">Includes:</div>
                    <ul className="list-unstyled m-0">
                      {includesList.map((item, index) => (
                        <li key={index} className="info-item">
                          <span className="icon ok">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Excludes row (like screenshot) */}
                  <div className="excludes">
                    <div className="info-head mb-2">Excludes:</div>
                    <div className="ex-row">
                      {excludesList.map((item, index) => (
                        <div key={index} className="ex-item">
                          <span className="icon no">✕</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="dates">
                    The offer is valid from <strong>February 11 to March 4, 2026</strong>.
                    <br />
                    Last day to start treatment is <strong>April 2, 2026.</strong>
                  </p>

                  <div className="cta-row">
                    <Link href="/en/request-an-appoinment" className="btn book-btnbtn btn-primary contact-btn">
                      BOOK NOW
                    </Link>
                    <span className="terms">
                      *Terms &amp; conditions apply. This offer is not valid with other offers
                    </span>
                  </div>

                <div className="phones">
  <div className="phone-col">
    <div className="phone-item">
      <Image
        src="/images/icons/phone.svg"
        alt="Phone"
        width={14}
        height={14}
        className="phone-icon"
      />
      <span>
        <span className="phone-label">Bnoon - Riyadh:</span> 011 444 8080
      </span>
    </div>

    <div className="phone-item">
      <Image
        src="/images/icons/phone.svg"
        alt="Phone"
        width={14}
        height={14}
        className="phone-icon"
      />
      <span>
        <span className="phone-label">Bnoon - Al Ahsa:</span> 0552701553
      </span>
    </div>
  </div>

  <div className="phone-col">
    <div className="phone-item">
      <Image
        src="/images/icons/phone.svg"
        alt="Phone"
        width={14}
        height={14}
        className="phone-icon"
      />
      <span>
        <span className="phone-label">Bnoon - Jeddah:</span> 012 680 0800
      </span>
    </div>

    {/* If you don’t want duplicate Al Ahsa, remove this line */}
  
  </div>
</div>


                  {/* Optional small note line like screenshot spacing */}
                  <div className="spacer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
     .phone-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
 .national-overview-image{
 boxShadow: "-50px 50px 0px #d7f2fb",
    overflow: "hidden",
    display: "inline-block",
    margin: "0 0px 0 0px",
    }
.phone-icon {
  margin-top: 1px;
  flex: 0 0 auto;
}



        /* HERO */
        .hero {
          position: relative;
          min-height: 280px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #f2f2f2;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
        }
        .hero-img {
          object-fit: cover;
          object-position: center;
          filter: saturate(0.95);
        }
        .hero:after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.55); /* soft overlay like screenshot */
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero-title {
          margin: 0;
          font-size: 34px;
          font-weight: 800;
          color: #004e78; /* teal-ish like screenshot heading */
          letter-spacing: 0.2px;
        }

        /* MAIN */
        .offer-section {
          padding: 26px 0 40px;
        }
        .offer-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        /* LEFT */
        .left-img-wrap {
          position: relative;
          height: 100%;
          min-height: 420px;
          background: #fff;
        }
        .left-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .stamp {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 2;
          background: rgba(255, 255, 255, 0.65);
          padding: 10px 12px;
          border-radius: 8px;
          backdrop-filter: blur(2px);
        }

        /* RIGHT */
        .right-content {
          padding: 28px 28px 22px;
          height: 100%;
        }
        .offer-title {
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 10px;
          color: #173a4a;
        }
        .offer-strong {
          color: #004e78;
          font-weight: 900;
        }
        .offer-desc {
          margin: 0 0 16px;
          color: #2f3a40;
          line-height: 1.55;
          font-size: 15.5px;
        }

        .info-box {
          border: 1px solid #e6eef2;
          background: #f7fbfd;
          border-radius: 10px;
          padding: 14px 14px;
          margin: 10px 0 14px;
        }
        .info-head {
          font-weight: 800;
          color: #004e78;
          margin-bottom: 8px;
        }
        .info-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 8px;
          color: #2c3a42;
          font-size: 15px;
        }
        .info-item:last-child {
          margin-bottom: 0;
        }

        .excludes {
          margin: 8px 0 12px;
        }
        .ex-row {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          align-items: center;
        }
        .ex-item {
          display: flex;
          gap: 10px;
          align-items: center;
          color: #2c3a42;
          font-size: 15px;
        }

        .icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          line-height: 1;
          font-size: 14px;
          flex: 0 0 22px;
        }
        .icon.ok {
          background: #e6f6fb;
          color: #004e78;
          border: 1px solid #bfe7f3;
        }
        .icon.no {
          background: #ffecec;
          color: #b3261e;
          border: 1px solid #ffc9c6;
        }

        .dates {
          margin: 12px 0 14px;
          color: #2f3a40;
          font-size: 15px;
          line-height: 1.55;
        }

        .cta-row {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          margin: 8px 0 12px;
        }
        .book-btn {
          background: #0b4f69;
          color: #fff;
          padding: 10px 18px;
          border-radius: 6px;
          font-weight: 800;
          letter-spacing: 0.3px;
          border: 0;
          text-decoration: none;
          display: inline-block;
        }
        .book-btn:hover {
          opacity: 0.92;
        }
        .terms {
          color: #5a6870;
          font-size: 12.5px;
          line-height: 1.4;
        }

        .phones {
          margin-top: 10px;
          padding-top: 12px;
          border-top: 1px solid #e7eef2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px 18px;
          color: #2f3a40;
          font-size: 14.5px;
        }
        .phone-item {
          margin-bottom: 6px;
        }
        .phone-item:last-child {
          margin-bottom: 0;
        }
     
        

        .spacer {
          height: 4px;
        }

        /* ✅ Mobile */
        @media (max-width: 767px) {
          .hero {
            min-height: 210px;
          }
          .hero-title {
            font-size: 20px;
          }
          .right-content {
            padding: 18px 16px 16px;
          }
          .offer-title {
            font-size: 20px;
          }
          .left-img-wrap {
            min-height: 260px;
          }
          .phones {
            grid-template-columns: 1fr;
          }
        }

        /* ✅ iPad Mini / iPad (keep look like desktop) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .hero-title {
            font-size: 26px;
          }
          .left-img-wrap {
            min-height: 360px;
          }
          .right-content {
            padding: 22px 20px 18px;
          }
          .offer-title {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default NationalDayOffer;
