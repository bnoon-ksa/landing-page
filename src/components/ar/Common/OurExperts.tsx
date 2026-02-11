"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useEffect } from "react";

import 'remixicon/fonts/remixicon.css';
// ✅ Doctor data structure
interface OurExperts {
  id: number;
  name: string;
  qualification: string;
  imageUrl: string;
  profileLink: string;
  location: "الرياض" | "جدة" | "الأحساء";
}

const OurExperts = () => {
  const searchParams = useSearchParams();          // ✅ first
  const locationParam = searchParams.get("location") as  // ✅ second
    | "الرياض"
    | "جدة"
    | "الأحساء"
    | null;

  const [filter, setFilter] = useState("الجميع");

  useEffect(() => {
    if (
      locationParam === "الرياض" ||
      locationParam === "جدة" ||
      locationParam === "الأحساء"
    ) {
      setFilter(locationParam);
    }
  }, [locationParam]);



  const doctorsData: OurExperts[] = [
    {
      id: 1,
      name: "الدكتور عبد العزيز  الشهراني",
      qualification: "المدير الطبي للمجموعة استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير",
      imageUrl: "/images/doctors/1.jpg",
      profileLink: "dr-abdalaziz-alshahrani",
      location: "الرياض",
    },
    {
      id: 2,
      name: "الدكتور فواز  إدريس ",
      qualification:
       "المدير التنفيذي، بنون - جدة استشاري أمراض النساء والولادة والحمل الحرج وطب الأجنة والأمومة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "/images/doctors/2.jpg",
      profileLink: "dr-fawaz-edris",
      location: "جدة",
    },
    {
      id: 3,
      name: "الدكتور مازن بشارة",
      qualification:
        "المدير الطبي، بنون - جدة استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "/images/doctors/3.jpg",
      profileLink: "dr-mazin-bishara",
      location: "جدة",
    },
    
     {
      id: 4,
      name: "الدكتور بسام نصير ",
      qualification: " استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "/images/doctors/15.jpg",
      profileLink: "dr-bassamnusair",
       location: "الأحساء",
    },
    {
      id: 5,
      name: "الدكتور عاصم الوهيبي",
      qualification: "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "/images/doctors/4.jpg",
      profileLink: "dr-asim-alwohaibi",
      location: "الرياض",
    },
  
    {
      id: 6,
      name: "الدكتور أحمد الشيخ",
      qualification:
        "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "/images/doctors/6.jpg",
      profileLink: "dr-ahmed-alshaikh",
      location: "جدة",
    },
    {
      id: 7,
      name: "الدكتور وجدي العمرى",
      qualification: "استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب والمناظير ",
      imageUrl: "/images/doctors/7.jpg",
      profileLink: "dr-wajdi-alomari",
      location: "الرياض",
    },
         {
      id: 8,
      name: "الدكتور أحمد النويصر",
      qualification: "استشاري أمراض النساء والولادة  والعقم وأطفال الأنابيب والمناظير",
      imageUrl: "/images/doctors/16.jpg",
      profileLink: "dr-ahmedal-nowasser",
       location: "الأحساء",
    },
       {
      id: 9,
      name: "الدكتورة مايا البزرة",
      qualification: "استشارية أمراض النساء والولادة والعقم وأطفال الأنابيب ",
      imageUrl: "/images/doctors/11.jpg",
      profileLink: "dr-maya-albezreh",
      location: "جدة",
    },
    {
      id: 10,
      name: "الدكتورة داليا نور",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "/images/doctors/8.jpg",
      profileLink: "dr-dalia-nour",
      location: "الرياض",
    },
    {
      id: 11,
      name: "الدكتور أحمد هارون",
      qualification: "استشاري المسالك البولية وأمراض الذكورة والعقم",
      imageUrl: "/images/doctors/9.jpg",
      profileLink: "dr-ahmad-haroun",
      location: "جدة",
    },
    {
      id: 12,
      name: "الدكتور موسى النعمي",
      qualification:"استشاري المسالك البولية وأمراض الذكورة والعقم",
      imageUrl: "/images/doctors/10.jpg",
      profileLink: "dr-moussa-el-naiemy",
      location: "الرياض",
    },
 
    {
      id: 13,
      name: "الدكتورة رزان غيث",
      qualification: "استشارية أمراض النساء والولادة وتأخر الحمل",
      imageUrl: "/images/doctors/12.jpg",
      profileLink: "dr-razan-ghaith",
      location: "جدة",
    },
    
     {
      id: 14,
      name: "الدكتور مدين الخلف",
      qualification: "استشاري أمراض النساء والولادة",
      imageUrl: "/images/doctors/17.jpg",
      profileLink: "dr-median-alkhalaf",
       location: "الأحساء",
    },
    {
      id: 15,
      name: "الدكتورة مرام دعدوع",
      qualification: "نائب أول، أمراض النساء والولادة",
      imageUrl: "/images/doctors/13.jpg",
      profileLink: "dr-maram-dadoua",
      location: "جدة",
    },
  

       {
      id: 16,
      name: "الدكتورة رانيا الشريفي",
      qualification: "أخصائية أمراض النساء والولادة",
      imageUrl: "/images/doctors/14.jpg",
      profileLink: "dr-rania-elsherify",
       location: "الأحساء",
    },
  ];

  // ✅ Filtered doctors
  const filteredDoctors =
    filter === "الجميع"
      ? doctorsData
      : doctorsData.filter((doc) => doc.location === filter);

  return (
    <div dir="rtl" style={{ textAlign: "right", fontFamily: "Alexandria, sans-serif" }}>
      <div className="container ptb-140">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                 <h2>أطباؤنا</h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>

        {/* ✅ Filter Buttons */}
        <div className="mb-4 d-flex gap-4 md:gap-5 flex-wrap">
          <button
            className={`physicians-btn btn ${filter === "الجميع" ? "active" : ""}`}
            onClick={() => setFilter("الجميع")}
          >
          الجميع
          </button>
          <button
            className={`physicians-btn btn ${filter === "الرياض" ? "active" : ""}`}
            onClick={() => setFilter("الرياض")}
          >
            الرياض
          </button>
          <button
            className={`physicians-btn btn ${filter === "جدة" ? "active" : ""}`}
            onClick={() => setFilter("جدة")}
          >
            جدة
          </button>
            <button
            className={`physicians-btn btn ${filter === "الأحساء" ? "active" : ""}`}
            onClick={() => setFilter("الأحساء")}
          >
          الأحساء
          </button>
        </div>

        {/* ✅ Doctors List */}
        <div className="doctors-scroll-container">
          <div className="row g-4">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="col-xl-3 col-md-6">
                <div className="doctor-card">
                  <div className="image-wrapper" style={{ position: "relative" }}>
                    <Image
                      src={doctor.imageUrl}
                      alt={doctor.name}
                      width={275}
                      height={236}
                      style={{ borderRadius: "10px" }}
                    />
                    {/* Overlay */}
                    <div className="image-overlay">
                      <div className="overlay-content">
                      <Link href={doctor.profileLink} className="btn btn-success doctor-btn doctor-hover-btn">عرض الملف الشخصي</Link>
                      {doctor.location && <div className=" location-icon"><i className="ri-map-pin-line"></i> {doctor.location}</div>}
                    </div>
                    </div>
                  </div>

                  <div className="content">
                    <h3>
                      <Link className="doctor-link" href={doctor.profileLink}>{doctor.name}</Link>
                    </h3>
                    <span className="sub">{doctor.qualification}</span>
                        {doctor.location && (
    <div className="doctor-location">
      <i className="ri-map-pin-line"></i> {doctor.location}
    </div>
  )}
                    <div>
                      <Link
                        href="https://book.bnoon.sa/ar"
                        className="btn btn-success doctor-btn"
                      >
                        طلب موعد
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ✅ CSS */}
                <style jsx global>{`
                   .location-icon{
         color: #ffffffff;
    font-size: 12px;
        }
                 .doctor-location
 {
    color: #000000;
    margin: 10px 0px 0px;
    font-size: 13px;
    font-weight: 600;
    display:none;
}
                a.doctor-link {
    color: #000 !important;
}
                .doctor-link {
    color: #000 !important;
    text-decoration: none !important;
}
               .physicians-btn {
    width: 92px !important;
    height: 37px !important;
    border-radius: 0px !important;
}
    .doctor-location {
    color: #fff;
    font-size: 12px !important;
}
    .doctor-btn {
     padding: 10px 0px !important; 
    color: #fff;
    border-radius: 5px;
    margin-bottom: 10px;
}
                  .doctor-card {
                    position: relative;
                    overflow: hidden;
                  }

                  .doctor-card:hover .image-overlay {
                    opacity: 1;
                  }

                  .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-radius: 10px;
                    text-align: center;
                  }

                  .image-overlay .doctor-btn {
                    padding: 10px 20px;
                    color: #fff;
                    border-radius: 5px;
                    margin-bottom: 10px;
                  }

                  .doctor-location {
                    color: #fff;
                    font-size: 14px;
                  }
                    .doctor-card .content .sub {
    font-size: 16px !important;
    display: block;
    margin-bottom: 10px;
}
    .doctor-card .content .doctor-btn {
    background-color: #004E78 !important;
    border: none;
    font-size: 12px;
    padding: 10px 70px;
    border-radius: 12px !important;
    width: 200px;
    height: 36px;
    margin: 0px;
}
                      @media (max-width: 768px) {
   .doctor-location
 {
   display: block;
    color: #000000;
    margin: 10px 0px 0px;
    font-size: 13px;
    font-weight: 600;
}
        .physicians-btn {
    width: 62px !important;
    height: 37px !important;
    border-radius: 0px !important;
    font-size:12px  !important;
    padding: 6px 0px !important;
}
        .doctor-card {
        padding: 25px !important;
        margin: 15px !important;
    }
        .doctor-link {
        font-size:14px;
}
           .doctor-btn {
        margin-top: 5px !important;
   margin-bottom: 0px !important;
}
                   .doctor-card .content .sub {
    font-size: 12px !important;
    display: block;
    margin-bottom: -10px;
    margin-top: -6px;
}
                }

                `}</style>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurExperts;
