import React from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';

// Step data structure
interface WorkStep {
  id: number;
  iconName: string;
  title: string;
  description: string;
  buttonText: string; // ✅ har step ka apna button text
  buttonLink: string; // ✅ har step ka apna link
}

const HowItWorks = () => {
  const workSteps: WorkStep[] = [
    {
      id: 1,
      iconName: 'icon-location-png',
      title: 'Address',
      description: 'Riyadh <br>Jeddah',
      buttonText: 'Address', // ✅ unique button
      buttonLink: '',
    },
    {
      id: 2,
      iconName: 'icon-contact',
      title: 'Contact',
      description: '+966 11 4448080 <br>+966 12 680 0800',
      buttonText: 'Contact', // ✅ unique button
      buttonLink: 'tel:+966114448080',
    },
    {
      id: 3,
      iconName: 'icon-mail-png',
      title: 'E-mail',
      description: 'info@bnoon.sa <br>info.jeddah@bnoon.sa',
      buttonText: 'E-mail', // ✅ unique button
      buttonLink: 'mailto:info@bnoon.sa',
    },
  ];

  return (
    <div className="work-area ptb-140 mt-2 mb-4">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12">
              <div className="left">
                <h2>Start With a Conversation</h2>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="right">
                <p>
                  Book your first consultation. No pressure. Just answers, care, and a path forward
                  to grow your family.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ 3 items ek row me */}
        <div className="row justify-content-center align-items-stretch g-5">
          {workSteps.map((step) => (
            <div key={step.id} className="col-lg-4 col-md-6">
              <div className="work-item text-center">
                <div className="icon mb-3">
                  <OptimizedImage
                    imageName={step.iconName}
                    alt={`${step.title} icon`}
                    width={44}
                    height={44}
                    loading="lazy"
                  />
                </div>
                <div className="content">
                  <p dangerouslySetInnerHTML={{ __html: step.description }} />

                  {/* 🔹 Har step ka apna unique button */}
                  <Link href={step.buttonLink} className="btn btn-success step-btn">
                    {step.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
