"use client";

import React, { useState } from "react";
import { motion, easeOut, Variants } from "framer-motion";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqData = [
    {
      question: "When should I see a doctor about getting pregnant?",
      answer:
        "If you're under 35 and have been trying to conceive for <strong>12 months</strong> without success, it's time to consult a fertility specialist. If you're <strong>35 or older,</strong> speak to your doctor after <strong>6 months</strong> of trying. Fertility naturally declines with age, particularly after 30. <br><i>[Source: American College of Obstetricians and Gynecologists (ACOG)]</i>",
    },
    {
      question: "What symptoms or conditions may affect fertility?",
      answer:
        "Talk to your doctor if you have: <ul> <li>Irregular, painful, or absent periods</li><li> More than one miscarriage </li><li>Diagnosed endometriosis or pelvic inflammatory disease (PID)</li> </ul>For men, fertility concerns may include: <ul><li>Difficulty ejaculating or low sperm count </li><li>Lumps or swelling in the testicle area</li><li> Chronic respiratory illnesses [Source: CDC]</li></ul>",
    },
    {
      question: "Who should consider fertility services?",
      answer:
        "Fertility services may be recommended if:<ul> <li>You've been trying to conceive for 6–12 months without success</li><li> You or your partner have known reproductive health conditions </li><li>You're planning fertility preservation before medical treatment</li><li> You're in your late 30s or 40s and want to explore your options</li></ul>",
    },
    {
      question: "Is infertility only a woman’s issue?",
      answer:
        "No. Infertility affects both men and women.<ul> <li>About <strong>1/3 of cases</strong> are female-related</li><li> Another <strong>1/3 are male-related</strong> </li><li>The remaining 1/3 involve both partners or unexplained causes</li></ul><i> [Source: WHO, CDC]</i>",
    },
    {
      question: "Is infertility common?",
      answer:
        "Yes. Infertility affects: <ul><li><strong>10%–15% of couples</strong> of reproductive age globally </li><li><strong>11% of women and 9% of men</strong> have experienced fertility issues In about<strong> 5–10%</strong> of cases, the cause remains unexplained — often linked to subtle issues in sperm, egg, or overall health. [Source: WHO, CDC]</li></ul>",
    },
  ];
const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  // ⭐ Animation for image
  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <div className="faq-area pt-2">
      <div className="container">
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                <h2>Frequently Asked Questions About Fertility </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-4">

          {/* ⭐ IMAGE WITH MOTION */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              className="faq-image"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
             
            ></motion.div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="faq-accordion">
              <div className="accordion">
                {faqData.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <button
                      className={`accordion-button ${openIndex === index ? "" : "collapsed"}`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <span>{item.question}</span>
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`accordion-collapse collapse ${openIndex === index ? "show" : ""}`}
                    >
                      <div className="accordion-body">
                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
  .faq-image {
    background-image: url("/images/faqs.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 576px;
    border-radius: 50px;
  }

.faq-accordion {
    margin: 20px 0px 0px;
}
    .faq-accordion .accordion .accordion-item .accordion-button{
        font-size: 18px;
    font-weight: 600;
    color: rgb(64, 64, 64) !important;
    }
 @media (max-width: 767px) {
  .faq-image {
    height: 271px !important;
    min-height: unset !important;
  }
    .faq-accordion {
    margin: 0px 0px 0px !important;
}
.faq-area{
margin: 0px 10px;
}
  .faq-accordion .accordion .accordion-item .accordion-button{
        font-size: 14px;
    font-weight: 600;
    color: rgb(64, 64, 64) !important;
    }
  }
`}</style>

    </div>
  );
};

export default FrequentlyAskedQuestions;
