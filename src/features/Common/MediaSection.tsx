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
    <div className=" media-banner">
      <div className="container">
        <div className="container-fluid section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left text-center  mt-3">
                <h2>للاستفسارات الإعلامية أو الشراكات </h2>
              </div>
              <div className="left text-center mt-2">
                <p className="text-center">
           للتواصل مع قسم الإعلام أو لفرص التعاون المؤسسي، يُرجى التواصل معنا عبر البريد الإلكتروني:<br />
              <strong> communications@bnoon.sa </strong>
                </p>
              </div>
             
            </div>
            
          </div>
          
        </div> 
         
      </div>
    </div>
  );
};

export default AboutusSection;
