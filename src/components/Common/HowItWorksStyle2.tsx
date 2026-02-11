"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
const HowItWorksSlider = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const steps = [
    { id: 1, imageSrc: "https://bnoon.blob.core.windows.net/website/images/fertility-counselling.jpg", title: "Fertility Consultation & Hormone Testing" },
    { id: 2, imageSrc: "https://bnoon.blob.core.windows.net/website/images/intrauterine-insemination.jpg", title: "Intrauterine Insemination" },
    { id: 3, imageSrc: "https://bnoon.blob.core.windows.net/website/images/ivf.jpg", title: "In Vitro Fertilization (IVF)" },
    { id: 4, imageSrc: "https://bnoon.blob.core.windows.net/website/images/ivm.jpg", title: "In Vitro Maturation (IVM)" },
    { id: 5, imageSrc: "https://bnoon.blob.core.windows.net/website/images/icsi.jpg", title: "Intracytoplasmic Sperm Injection (ICSI)" },
    { id: 6, imageSrc: "https://bnoon.blob.core.windows.net/website/images/ovulation-induction.jpg", title: "Ovulation Induction" },
    { id: 7, imageSrc: "https://bnoon.blob.core.windows.net/website/images/pgs.jpg", title: "Preimplantation Genetic Screening" },
    { id: 8, imageSrc: "https://bnoon.blob.core.windows.net/website/images/pgd.jpg", title: "Preimplantation Genetic Diagnostic" },
    { id: 9, imageSrc: "https://bnoon.blob.core.windows.net/website/images/egg-freezing.jpg", title: "Egg Freezing" },
    { id: 10, imageSrc: "https://bnoon.blob.core.windows.net/website/images/sperm-freezing.jpg", title: "Sperm Freezing" },
    { id: 11, imageSrc: "https://bnoon.blob.core.windows.net/website/images/embryo-freezing.jpg", title: "Embryo Freezing" },
    { id: 12, imageSrc: "https://bnoon.blob.core.windows.net/website/images/male-fertility.jpg", title: "Male Fertility Evaluation & Treatment" },
    { id: 13, imageSrc: "https://bnoon.blob.core.windows.net/website/images/ivf.jpg", title: "Surgical Sperm Retrieval" },
    { id: 14, imageSrc: "https://bnoon.blob.core.windows.net/website/images/fbgs.jpg", title: "Family Balance - Gender Selection" },
    { id: 15, imageSrc: "https://bnoon.blob.core.windows.net/website/images/recurrent-miscarriage.jpg", title: "Recurrent Miscarriage" },
    { id: 16, imageSrc: "https://bnoon.blob.core.windows.net/website/images/antenatal-care-deliveries.jpg", title: "Antenatal Care" },
  ];

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Slice logic for mobile
  const visibleSteps = isMobile && !showAll ? steps.slice(0, 4) : steps;
  return (
    <div className="how-it-works-area ptb-140 smoke-bg-color pt-4 pb-lg-5 pb-0
">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                <h2>Treatments</h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>

        <div className="row g-4">
            {visibleSteps.map((step) => (
            <div key={step.id} className="col-lg-3 col-md-4 col-sm-6">
            <div className="how-it-work-card">
  <div className="image">
    <Image src={step.imageSrc} alt={step.title} width={350} height={300} />
  </div>
  <div className="text-container">
    <h6 className="blog-text">{step.title}</h6>
  </div>
</div>

            </div>
          ))}
        </div>
           {/* Read More / Less button - mobile only */}
        {isMobile && (
          <div className="text-center mt-1 pb-3">
            <button
              className="btn btn-success btn-blog"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Read Less" : "Read More"}
            </button>
          </div>
        )}
      </div>
            <style jsx>{`
          .how-it-work-card {
  display: flex;
  flex-direction: column;
  height: 100%; 
  background: #fff;
  overflow: hidden;
  text-align: center;
}

.how-it-work-card .image {
  flex-shrink: 0; /* Image keeps its natural height */
  margin-bottom: 0px;
}

.how-it-work-card .text-container {
  flex-grow: 1; /* Stretch all text containers equally */
  display: flex;
  align-items: center; /* Vertical center */
  justify-content: center; /* Horizontal center */
  padding: 10px;
}

.blog-text {
  margin: 0;
  font-size: 18px;
}
@media (max-width: 767px) {
      .blog-text {
    margin: 0 0 15px;
    font-size: 14px;
}
}
      `}</style>
    </div>
  );
};

export default HowItWorksSlider;
