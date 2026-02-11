import React from "react";
import Link from "next/link";
import Image from "next/image";

// Step data structure
interface WorkStep {
  id: number;
  icon: string;
  title: string;
  description: string;
  buttonText: string;   // ✅ har step ka apna button text
  buttonLink: string;   // ✅ har step ka apna link
  vectorImage?: string;
  vectorWidth?: number;
  vectorHeight?: number;
}

const HowItWorks = () => {
  const workSteps: WorkStep[] = [
    {
      id: 1,
      icon: "/images/icons/location.png",
      title: "Address",
      description: "Riyadh <br>Jeddah",
      buttonText: "Address",      // ✅ unique button
      buttonLink: "",
      vectorImage: "/images/vector1.png",
      vectorWidth: 42,
      vectorHeight: 88,
    },
    {
      id: 2,
      icon: "/images/icons/contact.png",
      title: "Contact",
      description: "+966 11 4448080 <br>+966 12 680 0800",
      buttonText: "Contact",           // ✅ unique button
      buttonLink: "tel:+966114448080",
      vectorImage: "/images/vector2.png",
      vectorWidth: 30,
      vectorHeight: 91,
    },
    {
      id: 3,
      icon: "/images/icons/mail.png",
      title: "E-mail",
      description: "info@bnoon.sa <br>info.jeddah@bnoon.sa",
      buttonText: "E-mail",         // ✅ unique button
      buttonLink: "mailto:info@bnoon.sa",
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
                  Book your first consultation. No pressure. Just answers, care,
                  and a path forward to grow your family.
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
                  <Image
                    src={step.icon}
                    alt={`${step.title} icon`}
                    width={44}
                    height={44}
                  />
                </div>
                <div className="content">
                  <p dangerouslySetInnerHTML={{ __html: step.description }} />

                  {/* 🔹 Har step ka apna unique button */}
                  <Link
                    href={step.buttonLink}
                    className="btn btn-success step-btn"
                  >
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
