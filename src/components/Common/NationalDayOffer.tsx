"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const NationalDayOffer = () => {
  const leftCardImg = "/images/national-day/ivf-cycles.jpg";

  const includesList = [
    "Ovulation monitoring via ultrasound",
    "Hormonal tests during treatment cycle",
  ];

  const excludesList = ["Medications", "Genetic Testing"];

  return (
    <div className="founding-offer-page">
      <section className="offer-section">
        <div className="container">
          {/* ✅ CARD */}
          <div className="offer-card">
            <div className="row g-0 align-items-stretch">
              {/* ✅ IMAGE (Desktop left, Mobile bottom) */}
              <div className="col-lg-6 col-md-6 order-2 order-lg-1">
                <div className="left-img-wrap">
                  <div className="img-shadow-box">
                    <Image
                      src={leftCardImg}
                      alt="IVF/ICSI Offer"
                      width={900}
                      height={700}
                      className="left-img"
                    />
                  </div>
                </div>
              </div>

              {/* ✅ CONTENT (Desktop right, Mobile top) */}
              <div className="col-lg-6 col-md-6 order-1 order-lg-2">
                <div className="right-content">
                  <div className="offer-heading-block">
                    <h2 className="offer-title">
                      <span className="offer-strong">Discount on IVF/ICSI Cycles</span>
                    </h2>

                    <div className="offer-subtitle">
                      <div className="brand-name">BNOON</div>
                      <div className="locations">Riyadh | Jeddah | Al Ahsa</div>
                    </div>
                  </div>

                  <p className="offer-desc">
                    On the occasion of Saudi Founding Day, we’re pleased to offer{" "}
                    <strong>15% OFF*</strong> on IVF/ICSI Cycles at Bnoon.
                  </p>

                  {/* ✅ Includes box */}
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

                  {/* ✅ Excludes row */}
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
                    <Link
                      href="/en/request-an-appoinment"
                      className="btn book-btn btn-primary contact-btn"
                    >
                      BOOK NOW
                    </Link>
                    <span className="terms">
                      *Terms &amp; conditions apply. This offer is not valid with other offers
                    </span>
                  </div>

                  {/* ✅ Phones */}
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
                    </div>
                  </div>

                  <div className="spacer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .offer-section {
          padding: 26px 0 40px;
        }

        .offer-card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        /* ✅ IMAGE WRAP (same as Arabic design) */
        .left-img-wrap {
          height: 100%;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .img-shadow-box {
          box-shadow: -50px 50px 0px #d7f2fb; /* English side shadow */
          overflow: hidden;
          display: inline-block;
          border-radius: 6px;
          max-width: 520px;
          width: 100%;
          background: #fff;
        }

        .left-img {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }

        /* ✅ CONTENT */
        .right-content {
          padding: 28px 28px 22px;
          height: 100%;
        }

        .offer-title {
          font-size: 26px;
          font-weight: 800;
          margin: 0 0 10px;
          color: #173a4a;
          line-height: 1.25;
        }

        .offer-strong {
          color: #004e78;
          font-weight: 900;
        }

        .brand-name {
          color: #000;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .locations {
          margin-top: 4px;
          color: #000;
          font-size: 15px;
          font-weight: 500;
          padding-bottom: 10px;
        }

        .offer-desc {
          margin: 0 0 16px;
          color: #2f3a40;
          line-height: 1.7;
          font-size: 15.5px;
        }

        .info-box {
          border: 1px solid #e6eef2;
          background: #f7fbfd;
          border-radius: 10px;
          padding: 14px;
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
          gap: 16px;
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
          line-height: 1.7;
        }

        .cta-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          margin: 8px 0 12px;
        }

        .book-btn {
          background: #0b4f69;
          color: #fff;
          padding: 10px 18px;
          border-radius: 6px;
          font-weight: 800;
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
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .phone-icon {
          flex: 0 0 auto;
          margin-top: 1px;
        }

        .phone-label {
          font-weight: 700;
        }

        .spacer {
          height: 4px;
        }

        /* ✅ Mobile */
        @media (max-width: 767px) {
          .left-img-wrap {
            padding: 18px 16px 50px 40px
          }

          .img-shadow-box {
            box-shadow: -30px 30px 0px #d7f2fb;
            max-width: 100%;
          }

          .right-content {
            padding: 18px 16px 16px;
          }

          .offer-title {
            font-size: 18px;
          }

          .brand-name {
            font-size: 16px;
          }

          .locations {
            font-size: 14px;
          }

          .phones {
            grid-template-columns: 1fr;
          }
        }

        /* ✅ iPad Mini / iPad */
        @media (min-width: 768px) and (max-width: 1024px) {
          .offer-title {
            font-size: 22px;
          }

          .left-img-wrap {
            padding: 22px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default NationalDayOffer;
