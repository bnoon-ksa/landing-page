"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const OurLocations = () => {
  const imageRiyadh = "/images/locations/bnoon-riyadh.avif";
  const imageJeddah = "/images/locations/bnoon-jeddah.avif";
  const imageKingSalman = "/images/locations/bnoon-north-riiyadh.avif";

  // Type-safe animation variants
 const variantsLeft: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

 const variantsRight: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const contactInfo = (location: string, phone: string, email: string) => (
    <div className="d-flex mt-3 gap-4 flex-column flex-md-row">
      <div className="d-flex align-items-center">
        <img src="/images/icons/location.svg" alt="Location" width={24} height={24} className="me-2" />
        <span className="text-color">{location}</span>
      </div>
      <div className="d-flex align-items-center">
        <img src="/images/icons/phone.svg" alt="Phone" width={24} height={24} className="me-2" />
        <span className="text-color">{phone}</span>
      </div>
      <div className="d-flex align-items-center">
        <img src="/images/icons/mail.svg" alt="Email" width={24} height={24} className="me-2" />
        <span className="text-color">{email}</span>
      </div>
    </div>
  );

  return (
    <div className="service-overview-area mb-5 mt-5">
      <div className="container">

        {/* Riyadh Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-6 col-md-12" variants={variantsRight}>
            <div className="service-overview-content">
              <h2>Bnoon - Riyadh</h2>
              <p>
                With a legacy of excellence in fertility and women’s health, Bnoon has been proudly serving families for over 12 years in Riyadh. Renowned for its patient-first philosophy, the center combines compassionate care with advanced technology and a team of highly experienced reproductive specialists, earning its reputation as one of the most trusted names in reproductive medicine across Saudi Arabia.
              </p>
              <p>
               The center offers a full range of advanced fertility services, including IVF, ICSI, IUI, egg and sperm freezing. It also provides comprehensive hormonal and fertility diagnostics, recurrent miscarriage assessments, andrology and personalized treatment protocols tailored to each patient’s unique journey. 
              </p>
               <p>
                Bnoon Riyadh consistently delivers outstanding clinical outcomes, with success rates that meet and often exceed international benchmarks.
              </p>
              {contactInfo("Bnoon - Riyadh", "+966 11 444 8080", "info@bnoon.sa")}
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div
              className="service-overview-image"
              style={{ boxShadow: "50px 50px 0px #d7f2fb", overflow: "hidden", display: "inline-block" }}
            >
              <img src={imageRiyadh} alt="Service overview" width={580} height={450} />
            </div>
          </motion.div>
        </motion.div>

        {/* Jeddah Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4 mt-5 flex-column-reverse flex-md-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-6 col-md-12" variants={variantsRight}>
            <div
              className="service-overview-image"
               style={{
  boxShadow: "-50px 50px 0px #d7f2fb",
  overflow: "hidden",
  marginLeft: "auto",
  marginRight: "auto",
}}
            >
              <img src={imageJeddah} alt="Service overview" width={580} height={450} />
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div className="service-overview-content">
              <h2>Bnoon – Jeddah</h2>
              <p>
                Acquired in June 2025, Bnoon Jeddah — formerly known as HealthPlus Fertility Center Jeddah — has long been recognized for its medical excellence and the trust it has built within the local community. Now as part of a leading network of fertility centers, the center reflects the group’s commitment to expanding access to world-class fertility and women’s health services across Saudi Arabia.
              </p>
              <p>
                Accredited by the Joint Commission International (JCI), the center offers a comprehensive range of services, including IVF, ICSI, egg and sperm freezing, genetic testing, hormonal assessments, and advanced male and female fertility diagnostics. Leveraging the latest in medical technology, including time-lapse embryo monitoring, AI-driven treatment planning, and digital patient tracking, Bnoon Jeddah provides personalized, evidence-based care designed to maximize success rates and patient comfort.
              </p>
              {contactInfo("Bnoon – Jeddah", "+966 12 680 0800", "info.jeddah@bnoon.sa")}
            </div>
          </motion.div>
        </motion.div>

        {/* King Salman Road Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-6 col-md-12" variants={variantsRight}>
            <div className="service-overview-content">
              <h2>
                Bnoon – King Salman Road, Riyadh <span style={{ fontSize: "18px" }}>(Opening December 2025)</span>
              </h2>
              <p>
              To further expand access and redefine the standard of fertility care in the Kingdom, Bnoon is developing a state-of-the-art 3,800 sqm flagship facility on King Salman Road in North Riyadh, scheduled to open by the end of 2025. Designed as one of the most advanced fertility and women’s health centers in the region, this next-generation hub will bring together fertility care, reproductive genetics, and comprehensive women’s health services under one roof.  </p>
              <p>
               The flagship center will house cutting-edge IVF and embryology laboratories, equipped with the latest time-lapse embryo incubation systems, AI-powered embryo selection, genetic screening, and precision hormonal profiling. Every aspect of the patient journey — from digital consultations and treatment planning to real-time cycle tracking — will be optimized through smart health technologies and integrated platforms, ensuring efficiency, accuracy, and personalization at every step.   </p>
              <p>
              With a focus on clinical excellence, innovation, and patient-centered care, Bnoon – King Salman Road is envisioned to become a regional reference for fertility and reproductive science, supporting the broader ambitions of Saudi Vision 2030 to position the Kingdom as a hub for medical innovation and advanced healthcare delivery.   </p>
              {contactInfo("Bnoon – King Salman Road", "+966 11 444 8080", "info@bnoon.sa")}
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div
              className="service-overview-image"
              style={{ boxShadow: "50px 50px 0px #d7f2fb", overflow: "hidden", display: "inline-block" }}
            >
              <img src={imageKingSalman} alt="Service overview" width={580} height={450} />
            </div>
          </motion.div>
        </motion.div>
      </div>
        <style jsx global>{`
  span.text-color {
    color: #004E78 !important;
    font-size: 18px !important;
  }
`}</style>
    </div>
  );
};

export default OurLocations;
