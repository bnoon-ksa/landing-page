"use client";

import React, { useState, useEffect, useRef } from "react";

function OurServices() {
  // Dynamic data
  const servicesData = [
    {
      id: 1,
      icon: "/images/icons/Website-Icons_1.png",
      title: "Expert-Led, Patient-First",
      description:
        "Our board-certified fertility specialists, embryologists, and specialized nurses bring together medical excellence and real empathy. We don’t just treat conditions—we care for people.",
    },
    {
      id: 2,
      icon: "/images/icons/Website-Icons_2.png",
      title: "All-In-One Care",
      description:
        "From diagnostics and IVF to egg freezing, fertility preservation, and support through pregnancy—we offer everything under one roof. No referrals, no delays.",
    },
    {
      id: 3,
      icon: "/images/icons/Website-Icons_3.png",
      title: "State-of-the-art Clinics Designed Around You",
      description:
        "Clean lines, soft spaces, and a calming atmosphere. We’ve intentionally designed every inch of Bnoon to put you at ease, because the space around you affects how you feel inside.",
    },
    {
      id: 4,
      icon: "/images/icons/Website-Icons_4.png",
      title: "Personalized, Every Time",
      description:
        "Your treatment plan is built around your health, your timeline, and your goals—designed to fit your life, not disrupt it.",
    },
  ];

  // Animation refs
    const refs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<{ [key: number]: boolean }>({});

 useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = refs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) {
            setVisible((prev) => ({ ...prev, [index]: true }));
          }
        }
      });
    },
    { threshold: 0.2 }
  );

  refs.current.forEach((ref) => {
    if (ref) observer.observe(ref); // ✅ ignore null
  });

  return () => observer.disconnect();
}, []);


  return (
    <div className="services-area mt-5">
      <div className="inner ptb-140">
        <div className="container">

 <div className="section-title">
              <div className="row justify-content-center align-items-center g-4">
                <div className="col-lg-7 col-md-12">
                  <div className="left">
                    <h2 className=""> Why Choose Bnoon?
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                
                </div>
              </div>
            </div>
          

          <div className="container-fluid px-0">
            <div className="row justify-content-center g-4">

              {servicesData.map((service, index) => (
                <div
                  key={index}
                  ref={(el) => {
  refs.current[index] = el;
}}

                  className={`col-md-6`}
                  style={{
                    

                    opacity: visible[index] ? 1 : 0,
                    transform: visible[index]
                      ? "translateX(0)"
                      : index % 2 === 0
                      ? "translateX(-50px)"
                      : "translateX(50px)",
                    transition: "all 0.6s ease-out",
                  }}
                >
                  <div className={`service-card wrap2 ${index === 1 || index === 3 ? "left-card" : ""}`}>
                    <div className="top">
                      <div
                        className="d-flex align-items-center mb-2"
                        style={{ justifyContent: "space-between", gap: "20px" }}
                      >
                        <h3 className="mb-0">{service.title}</h3>

                        <img
                          src={service.icon}
                          alt="icon"
                          width={70}
                          height={70}
                        />
                      </div>

                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
      <style jsx>{`
        .service-card .top p {
    margin-bottom: 0;
    margin-top: 0px !important; 
    padding: 0px 20px 0px 0px !important;
}
    .service-card.wrap2 {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 600px;
}
        .left-card {
  margin-left: auto; /* jitna margin chahe */
}
@media (max-width: 767px) {
    .service-card.wrap2 {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 340px;
}
          .service-card {
        margin: 0 6px;
    }
}
      `}</style>
    </div>
  );
}

export default OurServices;
