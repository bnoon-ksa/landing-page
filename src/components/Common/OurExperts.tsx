"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import 'remixicon/fonts/remixicon.css';
// ✅ Doctor data structure
interface OurExperts {
  id: number;
  name: string;
  qualification: string;
  imageUrl: string;
  profileLink: string;
  location: "Riyadh" | "Jeddah" | "Al Ahsa";

}

const OurExperts = () => {
  const [filter, setFilter] = useState<"ALL" | "Riyadh" | "Jeddah" | "Al Ahsa">("ALL");
// ✅ Add this here, after filter state
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location") as "Riyadh" | "Jeddah" | "Al Ahsa" | null;

  useEffect(() => {
  if (
    locationParam === "Riyadh" ||
    locationParam === "Jeddah" ||
    locationParam === "Al Ahsa"
  ) {
    setFilter(locationParam);
  }
}, [locationParam]);


  // Your doctorsData array comes here
  const doctorsData: OurExperts[] = [
      {
      id: 1,
      name: "Dr. Abdalaziz Al-Shahrani",
      qualification:
        "Group Medical Director Consultant, Reproductive Endorinology, Infertility (IVF) & Gynecological Laproscopic Surgery",
      imageUrl: "/images/doctors/1.jpg",
      profileLink: "dr-abdalaziz-alshahrani",
      location: "Riyadh",
    },
    {
      id: 2,
      name: "Dr. Fawaz Edris",
      qualification:
        "Executive Director, Bnoon -Jeddah Consultant, Obstetrics, Gynecology, Maternal Fetal Medicine, Reproductive Endocrinology & Infertility",
      imageUrl: "/images/doctors/2.jpg",
      profileLink: "dr-fawaz-edris",
      location: "Jeddah",
    },
    {
      id: 3,
      name: "Dr. Mazin Bishara",
      qualification:
        "Medical Director, Bnoon - Jeddah Consultant, Obstetrics, Gynecology, Reproductive Endocrinology & Infertility",
      imageUrl: "/images/doctors/3.jpg",
      profileLink: "dr-mazin-bishara",
      location: "Jeddah",
    },
    {
      id: 4,
      name: "Dr. Asim Al Wuhaibi",
      qualification: "Consultant, Reproductive Endorinology & Infertility (IVF)",
      imageUrl: "/images/doctors/4.jpg",
      profileLink: "dr-asim-alwohaibi",
      location: "Riyadh",
    },
    
    {
      id: 6,
      name: "Dr. Ahmed Alshaikh",
      qualification:
        "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology & Infertility",
      imageUrl: "/images/doctors/6.jpg",
      profileLink: "dr-ahmed-alshaikh",
      location: "Jeddah",
    },
    {
      id: 7,
      name: "Dr. Wajdi Al Omari",
      qualification: "Consultant, Reproductive Endorinology & Infertility (IVF)",
      imageUrl: "/images/doctors/7.jpg",
      profileLink: "dr-wajdi-alomari",
      location: "Riyadh",
    },
    {
      id: 8,
      name: "Dr. Dalia Adel",
      qualification: "Consultant, Obstetrics, Gynecology & Infertility (IVF)",
      imageUrl: "/images/doctors/8.jpg",
      profileLink: "dr-dalia-nour",
      location: "Riyadh",
    },
    {
      id: 9,
      name: "Dr. Ahmad Haroun",
      qualification: "Consultant, Urology & Andrology",
      imageUrl: "/images/doctors/9.jpg",
      profileLink: "dr-ahmad-haroun",
      location: "Jeddah",
    },
    {
      id: 10,
      name: "Dr. Moussa El Naiemy",
      qualification: "Consultant, Male Infertility & Andrology",
      imageUrl: "/images/doctors/10.jpg",
      profileLink: "dr-moussa-el-naiemy",
      location: "Riyadh",
    },
    {
      id: 11,
      name: "Dr. Maya Albezreh",
      qualification: "Consultant, Obstetrics, Gynecology & Infertility",
      imageUrl: "/images/doctors/11.jpg",
      profileLink: "dr-maya-albezreh",
      location: "Jeddah",
    },
    {
      id: 12,
      name: "Dr. Razan Ghaith",
      qualification: "Consultant, Obstetrics, Gynecology & Infertility",
      imageUrl: "/images/doctors/12.jpg",
      profileLink: "dr-razan-ghaith",
       location: "Jeddah",
    },
    {
      id: 13,
      name: "Dr. Maram Dadoua",
      qualification: "Senior Registrar, Obstetrics & Gynecology",
      imageUrl: "/images/doctors/13.jpg",
      profileLink: "dr-maram-dadoua",
       location: "Jeddah",
    },
  
     {
      id: 14,
      name: "Dr. Bassam Nusair ",
      qualification: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery",
      imageUrl: "/images/doctors/15.jpg",
      profileLink: "dr-bassamnusair",
       location: "Al Ahsa",
    },
     {
      id: 15,
      name: "Dr. Ahmed Al-Nowasser",
      qualification: "Consultant, Obstetrics, Gynecology, Reproductive Endocrinology, Infertility (IVF) & Minimally Invasive Surgery  ",
      imageUrl: "/images/doctors/16.jpg",
      profileLink: "dr-ahmedal-nowasser",
       location: "Al Ahsa",
    },
     {
      id: 16,
      name: "Dr. Median Alkhalaf ",
      qualification: "Consultant, Obstetrics & Gynecology ",
      imageUrl: "/images/doctors/17.jpg",
      profileLink: "dr-median-alkhalaf",
       location: "Al Ahsa",
    },
        {
      id: 17,
      name: "Dr. Rania Elsherify ",
      qualification: "Obstetrics & Gynecology Registrar ",
      imageUrl: "/images/doctors/14.jpg",
      profileLink: "dr-rania-elsherify",
       location: "Al Ahsa",
    },
  ];
  // Filtered doctors
  const filteredDoctors =
    filter === "ALL"
      ? doctorsData
      : doctorsData.filter((doc) => doc.location === filter);

  return (
    <div>
      <div className="container ptb-140 doctors-container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                <h2>Our Physicians</h2>
              </div>
            </div>
            <div className="col-lg-2 col-md-12"></div>
          </div>
        </div>

        {/* Filter Buttons */}
   <div className="mb-4 d-flex  gap-2 gap-lg-5">
  <button
    className={`physicians-btn btn ${filter === "ALL" ? "active" : ""}`}
    onClick={() => setFilter("ALL")}
  >
    ALL
  </button>
  <button
    className={`physicians-btn btn ${filter === "Riyadh" ? "active" : ""}`}
    onClick={() => setFilter("Riyadh")}
  >
    RIYADH
  </button>
  <button
    className={`physicians-btn btn ${filter === "Jeddah" ? "active" : ""}`}
    onClick={() => setFilter("Jeddah")}
  >
    JEDDAH
  </button>
   <button
    className={`physicians-btn btn ${filter === "Al Ahsa" ? "active" : ""}`}
    onClick={() => setFilter("Al Ahsa")}
  >
    AL AHSA
  </button>
</div>


        <div className="doctors-scroll-container">
          <div className="row g-4">
            {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="col-xl-3 col-md-6">
  <div className="doctor-card">
    <div className="image-wrapper" style={{ position: "relative" }}>
      <img
        src={doctor.imageUrl}
        alt={doctor.name}
        width={275}
        height={236}
        style={{ borderRadius: "10px" }}
      />
      {/* Overlay */}
      <div className="image-overlay">
        <div className="overlay-content">
          <Link
            href={doctor.profileLink}
            className="btn btn-success doctor-btn doctor-hover-btn"
          >
            View Profile
          </Link>
          {doctor.location && (
            <div className="doctor-location docotr">
              <i className="ri-map-pin-line"></i> {doctor.location}
            </div>
          )}
        </div>
      </div>
    </div>

    <div className="content">
      <h3>
        <Link className=" doctor-link" href={doctor.profileLink}>{doctor.name}</Link>
      </h3>
      <span className="sub">{doctor.qualification}</span>
       {doctor.location && (
            <div className="location-color">
              <i className="ri-map-pin-line"></i> {doctor.location}
            </div>
          )}
      <div>
        <Link
          href="request-an-appoinment"
          className="btn btn-success doctor-btn"
        >
          Request an Appointment
        </Link>
      </div>
    </div>
  </div>

  {/* Same styles from OurDoctors */}
  <style jsx global>{`
    .doctor-card {
      position: relative;
      overflow: hidden;
      border-radius:16px;
    }
       .doctor-link {
    color: #000000 !important;
    font-size:18px;
    text-decoration: none !important;
  }
.physicians-btn {
    width: 105px !important;
    height: 40px !important;
    border-radius: 0px !important;
}
    .doctor-card .content .sub {
    font-size: 16px;
    display: block;
    margin-bottom: 20px;
}
    .service-overview-content h3, .service-overview-content .h3 {
    font-size: 30px;
    font-weight: normal;
    color: #004E78;
}
    .doctor-location {
    color: #fff;
    font-size: 12px !important;
}
    .image-wrapper {
      position: relative;
    }

    .doctor-card:hover .image-overlay {
      opacity: 1;
    }
.location-color{
           color: #000;
        text-align: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        margin: -10px 0px 10px 10px;
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
.location-color {
    display: none;
}

    .doctor-location {
      color: #fff;
      font-size: 14px;
    }
      @media only screen and (max-width: 767px) {
 .doctor-location {
    display:none !important;
  }
      .service-overview-content h3, .service-overview-content .h3 {
    font-size: 20px;
    font-weight: normal;
    color: #004E78;
}
        .doctor-card {
        padding: 15px 10px !important;
        margin: 0px 17px !important;
    }
.location-color {
    display: block;
}
    .doctor-card {
        padding: 25px;
        margin: 0px 10px !important;
    }
        .physicians-btn {
    width: 90px !important;
    height: 40px !important;
    -webkit-border-radius: 0px !important;
    -moz-border-radius: 0px!important;
    border-radius: 0px !important;
    font-size:12px !important;
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
