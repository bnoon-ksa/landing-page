"use client";

import React from "react";
import Image from "next/image";
import { motion, Easing, easeOut } from "framer-motion";
const AboutusSection = () => {
  const values = [
    "<strong>Consult directly with fertility specialists</strong> for IVF, ICSI, IUI, hormonal evaluations, and reproductive endocrinology.  ",
    "<strong>Review investigations</strong> such as hormonal tests, semen analysis, ultrasound findings, and genetic screening.  ",
    "<strong>Discuss treatment plans</strong> including cycle preparation, medication adjustments, and follow-up recommendations. ",
    "Patient education, counselling, and second opinions ",
  ];
  const values1 = [
    "Saves time — no travel, no queues, no waiting rooms. ",
    "Fast access to trusted fertility consultants across Riyadh, Jeddah, and Al Ahsa. ",
    "Confidential and secure consultations that are built around your schedule and compliant with Saudi MOH regulations ",
    "Ensures continuity of care during stimulation cycles, follow-ups, and long-term fertility planning. ",
    "Conducted exclusively by our licensed, expert physicians. ",
  ];
    const values2 = [
    "Informed consent is required before starting your teleconsultation. ",
    "All sessions are conducted on secure platforms approved by Bnoon. ",
    "Patient information is protected under Saudi Personal Data Protection Law. ",
    "Consultations may only be recorded with your explicit consent. ",
    "You may refuse or cancel telemedicine services at any time. ",
  ];
      const values3 = [
    "Your card is authorized at booking time. ",
    "The consultation fee is charged only after the session is completed.  ",
    "Cancellations must be made at least 24 hours in advance to avoid charges.  ",
    "The consultation fee will be charged in the event of a no-show or if the appointment is not cancelled at least 24 hours in advance.  ",
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
    <div className="fertility-area mt-3 mt-lg-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className=" telemedicine-title">Telemedicine at Bnoon </h2>
                <h3 className="telemedicine-overview-content" >Advanced Fertility Care — Wherever You Are</h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                  At Bnoon, we understand that fertility care requires timely support, clear guidance, and access to trusted specialists. Our telemedicine service allows you to connect with Bnoon specialists remotely — offering the same level of expertise, discretion, and individualized attention you would receive inside our centers.
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                  Teleconsultations are designed to support your fertility journey when an in-person visit is not required, helping you move forward without unnecessary delays.
                </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >

                  Whether you're beginning your fertility assessment, reviewing test results, planning an IVF or ICSI cycle, or seeking a second opinion, our virtual platform keeps your care moving without unnecessary delays.
                </motion.p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className=" telemedicine-title">What You Can Do Through Telemedicine </h2>
                <ul className="values-list mt-3">
                  {values.map((value, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      {/* Icon */}
                      <Image
                        src="https://bnoon.blob.core.windows.net/website/images/icons/bnoon-symbol.avif"
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 mt-1"
                      />

                      {/* HTML content render */}
                      <span
                        dangerouslySetInnerHTML={{ __html: value }}
                      />
                    </li>
                  ))}
                </ul>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                  Telemedicine is not a substitute for emergency or high-risk care. Your physician may recommend an in-clinic visit when medically necessary.</motion.p>

              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className=" telemedicine-title">Why Patients Choose Bnoon’s Telemedicine </h2>
                <ul className="values-list mt-3">
                  {values1.map((value1, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      {/* Icon */}
                      <Image
                        src="https://bnoon.blob.core.windows.net/website/images/icons/bnoon-symbol.avif"
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 mt-1"
                      />

                      {/* HTML content render */}
                      <span
                        dangerouslySetInnerHTML={{ __html: value1 }}
                      />
                    </li>
                  ))}
                </ul>


              </div>
            </div>
             <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className=" telemedicine-title">How to Book</h2>
              <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                 Call our contact center on 920010022 or fill out the online appointment request. A member of our team will confirm your teleconsultation and guide you through the process.</motion.p>
              </div>
            </div>
             <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className=" telemedicine-title">How it Works </h2>
              <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                 Our telemedicine service is designed to be simple, secure, and convenient — giving you direct access to Bnoon doctors from wherever you are.</motion.p>
                  <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                 <strong>1. Book Your Appointment</strong><br/> Select your doctor, choose a time, and complete the booking form — including your credit card details (no charges applied until after the consultation).<br/>
                   <strong>2. Receive Your Secure Link</strong><br/> You will get an email with your appointment link and instructions or through your phone. Keep this link safe — it is your private access to the consultation. <br/>
                   <strong>3. Join the Consultation</strong><br/> Log in 5 minutes before your appointment, ensure your camera is on, and make sure you have a stable internet connection. If you have medical reports, keep them ready to share with your doctor. <br/>
                    <strong>4. Consultation & Care Plan</strong><br/> Your Bnoon physician will conduct the consultation, review your information, and advise next steps — whether treatment planning, follow-up tests, or scheduling an in-clinic visit if needed. <br/>
                     <strong>5. Payment & Cancellation </strong><br/> The consultation fee is automatically deducted only after your telemedicine call is completed. If you cannot attend, please cancel at least <strong>24 hours in advance</strong> to avoid the appointment fee.  <br/>
                 </motion.p>
                 
              </div>
            </div>
                 <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className=" telemedicine-title">Consent, Privacy & Safety </h2>
                <ul className="values-list mt-3">
                  {values2.map((value2, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      {/* Icon */}
                      <Image
                        src="https://bnoon.blob.core.windows.net/website/images/icons/bnoon-symbol.avif"
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 mt-1"
                      />

                      {/* HTML content render */}
                      <span
                        dangerouslySetInnerHTML={{ __html: value2 }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
               <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2  className=" telemedicine-title">Payments & Cancellations  </h2>
                <ul className="values-list mt-3">
                  {values3.map((value3, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      {/* Icon */}
                      <Image
                        src="https://bnoon.blob.core.windows.net/website/images/icons/bnoon-symbol.avif"
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 mt-1"
                      />

                      {/* HTML content render */}
                      <span
                        dangerouslySetInnerHTML={{ __html: value3 }}
                      />
                    </li>
                  ))}
                </ul>
                 <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                 <strong>At Bnoon, fertility care stays close to you — wherever you are. </strong>
                 </motion.p>
                 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
