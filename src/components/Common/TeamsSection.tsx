"use client";

import React from "react";
import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="fertility-area mt-5">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>Join Our Team at Bnoon</h2>
              </div>
            </div>
            <div className="left">
              <p>
                At Bnoon, we are shaping the future of fertility and women’s health in
                Saudi Arabia and the region through patient-centered care, advanced
                technology, and clinical excellence.
              </p>
              <p>
                Our team is the foundation of everything we do. We’re looking for
                passionate, skilled professionals who want to make a real difference;
                whether in medical care, embryology, nursing, administration, or
                operations. If you're driven by purpose and compassion, you'll find a
                place to grow with us.
              </p>
              <p>
                We’re expanding across the Kingdom, and with every new milestone, we’re
                building something that truly matters: hope, family, and care that feels
                personal.
              </p>
            </div>
          </div>
        </div>

        {/* Saudization + Apply Section */}
        <div className="row justify-content-center align-items-center g-4 mb-5">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content">
              <h2>Commitment to Saudization</h2>
              <p>
                Bnoon is committed to developing and empowering Saudi nationals at every
                level of our organization. We support Vision 2030 by offering meaningful
                career pathways, mentorship, and leadership opportunities for local
                talent.
              </p>
              <p>
                We believe in the strength of homegrown expertise and are proud to
                contribute to a thriving national healthcare workforce.
              </p>
              <p>
                If you are a Saudi national ready to advance your career in healthcare,
                we welcome your application.
              </p>

              <h2>Start Your Journey with Us</h2>
              <div className="mt-3">
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src="/images/icons/mail.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="me-2"
                  />
                  <p className="mb-0">
                    Please send your CV to: <strong>careers@bnoon.sa</strong>
                  </p>
                </div>

                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/location.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="me-2"
                  />
                  <p className="mb-0">
                    Follow us on LinkedIn to explore current openings and updates:{" "}
                    <strong>Bnoon LinkedIn Page</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-xl-6 col-md-12">
            <div
              className="service-overview-image"
              style={{
                boxShadow: "50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <Image
                src="/images/commitment-saudization.avif"
                alt="Commitment to Saudization"
                width={580}
                height={450}
                priority // ✅ page load par fast load
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
