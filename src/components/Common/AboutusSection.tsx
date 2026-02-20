'use client';

import React from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { motion, Easing, easeOut } from 'framer-motion';
const AboutusSection = () => {
  const values = ['Compassion ', 'Integrity ', 'Innovation ', 'Collaboration ', 'Leadership '];
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
    <div className="fertility-area mt-3 mt-lg-5">
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
                  To transform care across the region and become a global leader in fertility and
                  women’s health. We will achieve this by focusing on research and innovation,
                  collaborating with world-renowned institutions, and putting patients first.
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
                  We’re dedicated to helping everyone dreaming of having a healthy family.
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
                  We are defined and driven by our values including:{' '}
                </motion.p>
                <ul className="values-list mt-3">
                  {values.map((value, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      {/* Icon */}
                      <OptimizedImage imageName="bnoon-symbol" className="me-2" alt="icon" />
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
