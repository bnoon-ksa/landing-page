'use client';
import React, { useState, useEffect } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
const HowItWorksSlider = () => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const steps = [
    {
      id: 1,
      imageName: 'fertility-counselling',
      title: 'Fertility Consultation & Hormone Testing',
    },
    { id: 2, imageName: 'intrauterine-insemination', title: 'Intrauterine Insemination' },
    { id: 3, imageName: 'ivf', title: 'In Vitro Fertilization (IVF)' },
    { id: 4, imageName: 'ivm', title: 'In Vitro Maturation (IVM)' },
    { id: 5, imageName: 'icsi', title: 'Intracytoplasmic Sperm Injection (ICSI)' },
    { id: 6, imageName: 'ovulation-induction', title: 'Ovulation Induction' },
    { id: 7, imageName: 'pgs', title: 'Preimplantation Genetic Screening' },
    { id: 8, imageName: 'pgd', title: 'Preimplantation Genetic Diagnostic' },
    { id: 9, imageName: 'egg-freezing', title: 'Egg Freezing' },
    { id: 10, imageName: 'sperm-freezing', title: 'Sperm Freezing' },
    { id: 11, imageName: 'embryo-freezing', title: 'Embryo Freezing' },
    { id: 12, imageName: 'male-fertility', title: 'Male Fertility Evaluation & Treatment' },
    { id: 13, imageName: 'ivf', title: 'Surgical Sperm Retrieval' },
    { id: 14, imageName: 'fbgs', title: 'Family Balance - Gender Selection' },
    { id: 15, imageName: 'recurrent-miscarriage', title: 'Recurrent Miscarriage' },
    { id: 16, imageName: 'antenatal-care', title: 'Antenatal Care' },
  ];

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slice logic for mobile
  const visibleSteps = isMobile && !showAll ? steps.slice(0, 4) : steps;
  return (
    <div
      className="how-it-works-area ptb-140 smoke-bg-color pt-4 pb-lg-5 pb-0
"
    >
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
                  <OptimizedImage
                    imageName={step.imageName}
                    alt={step.title}
                    width={350}
                    height={300}
                    loading="lazy"
                  />
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
            <button className="btn btn-success btn-blog" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Read Less' : 'Read More'}
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
