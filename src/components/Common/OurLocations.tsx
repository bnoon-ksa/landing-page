"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const OurLocations = () => {
  const imageRiyadh = "/images/locations/bnoon-riyadh.avif";
  const imageJeddah = "/images/locations/bnoon-jeddah.avif";
  const imageKingSalman = "/images/locations/bnoon-north-riiyadh.avif";
 const imageAlahsa = "/images/locations/bnoon-alahsa.jpg";
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
       {phone && (
      <div className="d-flex align-items-center">
        <img src="/images/icons/phone.svg" alt="Phone" width={24} height={24} className="me-2" />
        <span className="text-color">{phone}</span>
      </div>
    )}
      <div className="d-flex align-items-center">
        <img src="/images/icons/mail.svg" alt="Email" width={24} height={24} className="me-2" />
        <span className="text-color">{email}</span>
      </div>
    </div>
  );

  return (
    <div className="service-overview-area mb-5 mt-3 mt-lg-5">
      <div className="container">

        {/* Riyadh Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-6 col-md-12" variants={variantsRight}>
            <div className="service-overview-content location-text">
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
              className="location-overview-image"
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
              className="location-overview-image image-loc"
               style={{
  boxShadow: "-50px 50px 0px #d7f2fb",
  overflow: "hidden",
}}
            >
              <img src={imageJeddah} alt="Service overview" width={580} height={450} />
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div className="service-overview-content location-text">
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
            <div className="service-overview-content location-text">
              <h2>
                Bnoon – King Salman Road, Riyadh <span style={{ fontSize: "18px" }}>(Opening Early 2026)</span>
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
              className="location-overview-image"
              style={{ boxShadow: "50px 50px 0px #d7f2fb", overflow: "hidden", display: "inline-block" }}
            >
              <img src={imageKingSalman} alt="Service overview" width={580} height={450} />
            </div>
          </motion.div>
        </motion.div>

          {/* Al Ahsa Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4 mt-5 flex-column-reverse flex-md-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-6 col-md-12" variants={variantsRight}>
            <div
              className="location-overview-image  image-loc"
               style={{
  boxShadow: "-50px 50px 0px #d7f2fb",
  overflow: "hidden",
 
}}
            >
              <img src={imageAlahsa} alt="Service overview" width={580} height={450} />
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div className="service-overview-content location-text">
              <h2>Bnoon – Al Ahsa </h2>
              <p>
               Situated within Almoosa Specialist Hospital,<strong> Bnoon – Al Ahsa</strong> brings world-class fertility and women’s health services to the heart of Saudi Arabia’s Eastern Province. The center is designed to offer an exceptional patient experience, combining advanced reproductive technologies with a compassionate, holistic model of care. 
              </p>
              <p>
               As part of Bnoon’s growing national network, the Al Ahsa center reinforces our commitment to ensuring families across the Kingdom have access to the highest standards of reproductive medicine, delivered by leading IVF consultants in a state-of-the-art clinical environment. 
              </p>
               <p>
              Equipped with cutting-edge embryology laboratories, the center provides a comprehensive range of fertility services—including IVF, ICSI, IUI, egg and sperm freezing, PGT-AI, reproductive endocrinology, and full male and female fertility diagnostics—supported by streamlined workflows and direct collaboration with other departments within Almoosa Specialist Hospital. 
              </p>
               <p>
               <strong>Bnoon – Al Ahsa</strong> marks a significant step forward in elevating fertility care across the Eastern Region, uniting innovation, clinical excellence, and unwavering support for every family’s journey to parenthood. 
              </p>
              {contactInfo("Bnoon – Al Ahsa", "", "info@bnoon.sa ")}
            </div>
          </motion.div>
        </motion.div>
      </div>
        <style jsx global>{`
  span.text-color {
    color: #004E78 !important;
    font-size: 18px !important;
  }
    .location-text h2{
    margin-bottom: 10px;
    }
      /* ✅ Same size for all images */
  .location-overview-image {
    width: 544px;
    align-items: end;
    margin: 0 0 0 40px;
    height: 420px ;
    overflow: hidden !important;
  }
.image-loc{
 marginRight: "auto",
}
  .location-overview-image img {
    width: 100% !important;
    height: 100% !important;
    object-position: center !important;
  }

  /* Mobile Responsive */
  @media (max-width: 767px) {
    .location-overview-image {
     width: 85%;
        margin-bottom: 20px;
        height: 200px;
        margin-left: auto;
        text-align:center;
    }
          span.text-color {
    color: #004E78 !important;
    font-size: 14px !important;
  }
    .image-loc{
 marginLeft: "auto",
}
  }
`}</style>
    </div>
  );
};

export default OurLocations;
