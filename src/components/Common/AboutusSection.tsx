"use client";

import React from "react";
import Image from "next/image";
import { motion, Easing, easeOut } from "framer-motion";
const AboutusSection = () => {
  const values = [
    "Patient-Centered Care",
    "Innovation & Research",
    "Collaboration & Teamwork",
    "Integrity & Transparency",
    "Excellence in Service",
  ];
// ⭐ Animation variant
  const slideInRight = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: easeOut },
    },
  };
  return (
    <div className="fertility-area  ptb-140 ">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>Our Vision</h2>
               <motion.p
                                 initial="hidden"
                                 whileInView="visible"
                                 viewport={{ once: true, amount: 0.3 }}
                                 variants={slideInRight}
                               >
                  We’re dedicated to helping everyone dreaming of having a healthy family.
                </motion.p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>Our Purpose</h2>
                <motion.p
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.3 }}
                                  variants={slideInRight}
                                >
                  We’re here to transform care across the region and become a global leader in fertility and reproductive genetics. We will achieve this by focusing on research and innovation, deploying the most advanced technologies, collaborating with world-renowned institutions, and putting patients first.
                </motion.p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>Our Values</h2>
                
              <motion.p
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={slideInRight}
                              >
               We are defined and driven by our values: </motion.p>
                <ul className="values-list mt-3">
                  {values.map((value, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      {/* Icon */}
                      <Image
                        src="/images/icons/bnoon-symbol.avif" // aapka custom icon
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2"
                      />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
