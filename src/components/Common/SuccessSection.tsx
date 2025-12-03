"use client";

import React from "react";
import Image from "next/image";

const AboutusSection = () => {
  const values = [
    "Patient-Centered Care",
    "Innovation & Research",
    "Collaboration & Teamwork",
    "Integrity & Transparency",
    "Excellence in Service",
  ];

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>Our Success</h2>
              
              </div>
              
            </div>
 <div className="left">
                
                <p >
                  At Bnoon, we aim to turn the dream of parenthood into reality — for couples from every walk of life.</p>
                 <p >
                  While success rates may vary based on individual medical profiles, age and condition, our commitment remains the same: every patient deserves a chance. We believe that fertility care should be inclusive, compassionate, and driven by possibility — not limited by probability. 
                </p>
                 <p >
                  Performing over 5,000 IVF cycles annually and having supported tens of thousands of patients since 2013, Bnoon proudly maintains some of the highest success rates in the region, and on par with international success rates, across a wide range of advanced treatments, including IVF-ICSI, Mini IVF, Natural Cycle IVF, IUI, Gender Selection, Male Infertility treatments, and Comprehensive Chromosomal Screening (CCS). 
                </p>
                 <p >
                 Using the latest innovative technologies, our expert team is here to guide you every step of the way with personalized, evidence-based care. Connect with us today to explore the options available to you — because at Bnoon, your journey matters. 
                </p>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
