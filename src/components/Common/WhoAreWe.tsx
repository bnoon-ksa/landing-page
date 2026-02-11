"use client";

import React from "react";
import { motion, Easing, easeOut } from "framer-motion";
import Image from "next/image";

const WhoAreWe = () => {
  const staticImage = "https://bnoon.blob.core.windows.net/website/images/about/who-we-are.avif";
// ⭐ Animation variant
  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: easeOut },
    },
  };
  return (
    <div className="service-overview-area mb-5">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content">
              <h2>Who Are We</h2>
              <p>
                Starting or growing a family is one of the most meaningful journeys in life, and for many, it can also be one of the most complex. Across the Middle East, more individuals and couples are seeking fertility support — whether due to rising infertility rates, personal choices like egg freezing, or the growing use of assisted reproductive technologies to help build balanced, healthy families.
              </p>
              <p>
                That’s where Bnoon comes in — a name that captures the heart of our mission. Derived from classical Arabic, “Bnoon” means “children” — a poetic and powerful reflection of everything we stand for: family, legacy, and new life.
              </p>
              <p>
                Home for a team of experienced leaders in fertility and reproductive genetics, Bnoon is a new kind of care provider, one that combines scientific excellence with genuine empathy. While many clinics exist across the region, Bnoon is setting out to raise the bar by focusing not just on access, but on quality, innovation, and outcomes. Through world-class research, advanced technologies, and partnerships with global experts, Bnoon is creating a network of centers dedicated to supporting families at every stage, and placing patients firmly at the heart of everything we do.
              </p>
              <p>
                Bnoon is part of Global Fertility and currently operates two state-of-the-art centers in Riyadh and Jeddah, and is building a new flagship center in North Riyadh (King Salman Road) that will welcome patients end of 2025. The network will be opening new centers in Abha, Khobar and other cities across the Kingdom of Saudi Arabia.
              </p>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            
            <motion.div
              initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.3 }}
                                  variants={slideInRight}
              className="service-overview-image"
              style={{
                boxShadow: "50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <Image
                src={staticImage}
                alt="Service overview"
                width={580}
                height={450}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
