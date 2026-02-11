"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AboutItem {
  id: number;
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  text?: string;
}

interface AboutData {
  title: string;
  subtitle: string;
  items: AboutItem[];
  button: {
    text: string;
    href: string;
  };
}

const aboutData: AboutData = {
  title: "بنون – إحصائيات وأرقام",
  subtitle: "Bnoon in Numbers",
  items: [
    {
      id: 1,
      icon: { src: "/images/icons/icon-1.png", alt: "icon" },
      title: "+5000",
      description: "دورة علاجية لأطفال الأنابيب سنوياً",
    },
    {
      id: 2,
      icon: { src: "/images/icons/icon-2.png", alt: "icon" },
      title: "+80",
      description: "طبيباً واختصاصياً",
    },
    {
      id: 3,
      icon: { src: "/images/icons/icon-3.png", alt: "icon" },
      title: "+150",
      description: "الكوادر الطبية والإدارية",
    },
    {
      id: 4,
      icon: { src: "/images/icons/icon-4.png", alt: "icon" },
      title: "Special",
      description: "",
    },
    {
      id: 5,
      icon: { src: "/images/icons/icon-5.png", alt: "icon" },
      title: "+60%",
      description: "نسبة النجاح تماشياً ",
      text: "مع معدلات النجاح عالمياً ",
    },
  ],
  button: {
    text: "Learn More About Us",
    href: "about-us",
  },
};

function AboutUs() {
  return (
    <div className="second-about-area">
      <div className="container">
        <div className="row justify-content-center g-4">
          <div className="col-xl-12 col-md-12">
            <div className="second-about-content">
              <h2>{aboutData.title}</h2>
            </div>
          </div>

          <div className="col-xl-12 col-md-12">
            {/* 🔹 Removed flex-nowrap so we can control via CSS */}
            <div className="second-about-items d-flex justify-content-center">
              {aboutData.items.map((item) => {
                let boxWidth = "220px";
                if (item.id === 2 || item.id === 3) boxWidth = "180px";
                if (item.id === 4) boxWidth = "220px";
                if (item.id === 5) boxWidth = "270px";

                return (
                  <div
                    key={item.id}
                    className="item-box text-center mx-3 mt-3"
                    style={{ minWidth: boxWidth }}
                  >
                    <div className="item">
                      <div className="icon mb-3">
                        <Image
                          src={item.icon.src}
                          alt={item.icon.alt}
                          width={120}
                          height={120}
                        />
                      </div>

                      {item.id === 4 ? (
                        <>
                          <div className=" d-flex  justify-content-center align-items-center gap-2">
                            <h3 className="text-margin">5</h3>
                            <p className="mb-0 text-color">
                              مواقع
                            </p>
                          </div>
                          <div className="mt-3 d-flex justify-content-center align-items-center gap-2">
                            <p className="mb-0 text-color">


                              الرياض | جدة | الأحساء<br/>

                           <span className="under-construction">أبها – قيد الإنشاء</span>
                            </p>
                          </div>
                        </>
                      ) : (
                        <h3
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                      )}

                      <p>{item.description}</p>
                      {item.text && <p className="text">{item.text}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Scoped CSS */}
      <style jsx>{`
      .under-construction{
          color: #6b6d70;
      }
      .text-margin{
      margin-bottom:0px !important;
      }
        /* Default: Desktop — keep items in a horizontal row */
        .second-about-items {
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
          overflow-x: auto;
        }
          .second-about-items .item h3 {
    font-size: 28px !important;
}

.second-about-items .item p {
    margin-bottom: 0;
    font-size: 14px !important;
    color: #000000 !important;
    text-align: center;
    font-weight: 600;
}
        /* ✅ Mobile view (≤768px): stack vertically */
        @media (max-width: 768px) {
          .second-about-items {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            overflow-x: visible !important;
            flex-wrap: wrap !important;
            gap: 20px;
          }

          .second-about-items .item-box {
            width: 100% !important;
            max-width: 320px;
            margin: 10px auto !important;
            min-width: unset !important;
          }

          .second-about-items .item img {
            width: 80px !important;
            height: auto !important;
          }
.second-about-content h2{
            font-size:18px !important;
          }
          .second-about-items h3 {
            font-size:18px !important;
          }
        .second-about-items .item h3 {
    font-size: 20px !important;
}
          .second-about-items p {
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AboutUs;
