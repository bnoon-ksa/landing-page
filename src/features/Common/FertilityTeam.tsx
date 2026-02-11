"use client"; // 👈 form handling ke liye client component banana zaroori hai

import React from "react";
import Image from "next/image";

interface WorkStep {
  id: number;
  icon: string;
  title: string;
  description: string;
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
      vectorImage: "/images/vector1.png",
      vectorWidth: 42,
      vectorHeight: 88,
    },
    {
      id: 2,
      icon: "/images/icons/contact.png",
      title: "Contact",
      description: "+966 11 4448080 <br>+966 12 680 0800",
      vectorImage: "/images/vector2.png",
      vectorWidth: 30,
      vectorHeight: 91,
    },
    {
      id: 3,
      icon: "/images/icons/mail.png",
      title: "E-mail",
      description: "info@bnoon.sa <br>info.jeddah@bnoon.sa",
    },
  ];

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>فريقك الطبي، بجانبك دائماً</h2>

              
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="right">
               <p style={{ direction: "rtl", textAlign: "right" }}>
  في "بنون"، نؤمن أن رعاية الخصوبة يجب أن تكون شخصية وداعمة. نرافقكم من البداية حتى تحقيق حلمكم، نشرح لكم كل خطوة، نجيب عن كل تساؤلاتكم، ونحتفل معكم بكل إنجاز بإذن الله.
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
