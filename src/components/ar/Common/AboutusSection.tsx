"use client";

import React from "react";
import Image from "next/image";
import { motion, Easing, easeOut } from "framer-motion";

const AboutusSection = () => {
  const values = [
    "التعاطف",
    "النزاهة  ",
    "الابتكار  ",
    "التعاون والعمل الجماعي  ",
    "القيادة والإلهام  ",
  ];
// ⭐ Animation variant
  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
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
                <h2 className="mb-2">رؤيتنا </h2>
               <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
               نسعى لإحداث نقلة نوعية في مجال خدمات الإخصاب وعلم الوراثة الإنجابية في المنطقة، والانطلاق نحو الريادة العالمية. سنحقق ذلك من خلال البحث والابتكار، وتبني أحدث التقنيات الطبية، وبناء شراكات مع مؤسسات عالمية مرموقة، ووضع المريض في المقام الأول. 
                </motion.p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">مهمتنا </h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >نلتزم في بنون بدعم وتقديم الرعاية الأمثل لكل من لديه حلم الأمومة والأبوة وبناء أسرة صحية. </motion.p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">قيمنا</h2>
                
               <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
             قيمنا هي البوصلة التي توجهنا، والركيزة التي تُبنى عليها ثقافتنا وتتضمن:</motion.p>
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
