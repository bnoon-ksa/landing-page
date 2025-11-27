"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type LocationType = "الرياض" | "جدة" | "";

const SearchBar = () => {
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState<LocationType>("");
  const router = useRouter();

  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  // ✅ Intersection Observer for heading animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Doctors data (Arabic keys match type)
  const doctorsByLocation: Record<Exclude<LocationType, "">, string[]> = {
    الرياض: [
      "الدكتور عبد العزيز  الشهراني",
      "الدكتور عاصم الوهيبي",
      "الدكتور وجدي  العمري",
      "الدكتورة داليا  نور",
      "الدكتور موسى  النعمي",
    ],
    جدة: [
      "الدكتور فواز  إدريس",
      "الدكتور مازن بشارة",
      "الدكتور أحمد الشيخ",
      "الدكتور أحمد هارون",
      "الدكتورة مايا البزرة",
      "الدكتورة رزان غيث",
      "الدكتورة مرام دعدوع",
    ],
  };

  const allDoctors = [...doctorsByLocation.الرياض, ...doctorsByLocation.جدة];

 const doctorsToShow =
    location === "الرياض" || location === "جدة"
      ? doctorsByLocation[location]
      : allDoctors;

  // ✅ Doctor profile links (Arabic names mapped to URLs)
  const doctorProfileLinks: Record<string, string> = {
    "الدكتور عبد العزيز  الشهراني": "/ar/dr-abdalaziz-alshahrani",
    "الدكتور عاصم الوهيبي": "/ar/dr-asim-alwohaibi",
    "الدكتور وجدي  العمري": "/ar/dr-wajdi-alomari",
    "الدكتورة داليا  نور": "/ar/dr-dalia-nour",
    "الدكتور موسى  النعمي": "/ar/dr-moussa-el-naiemy",
    "الدكتور فواز  إدريس": "/ar/dr-fawaz-edris",
    "الدكتور مازن بشارة": "/ar/dr-mazin-bishara",
    "الدكتور أحمد الشيخ": "/ar/dr-ahmed-alshaikh",
    "الدكتور حسين صبّان": "/ar/dr-hussein-sabban",
    "الدكتور أحمد هارون": "/ar/dr-ahmad-haroun",
    "الدكتورة مايا البزرة": "/ar/dr-maya-albezreh",
    "الدكتورة رزان غيث": "/ar/dr-razan-ghaith",
    "الدكتورة مرام دعدوع": "/ar/dr-maram-dadoua",
  };

  // ✅ Handle search
  const handleSearch = () => {
    if (!location && !doctor) {
      alert("الرجاء اختيار الطبيب أو الموقع");
      return;
    }

    // ✅ If doctor is selected, go to their profile page directly
    if (doctor) {
      const profileUrl = doctorProfileLinks[doctor];
      if (profileUrl) {
        router.push(profileUrl);
        return;
      }
    }

    // ✅ If only location is selected, go to /ar/our-experts and filter
    if (location) {
      router.push(`/ar/our-experts?location=${encodeURIComponent(location)}`);
    }
  };


  return (
    <div className="partner-area ptb-140">
      <div className="container">
        <div className="search-overview-content">
          <h2
            ref={headerRef}
            className={`animate-right ${headerVisible ? "show" : ""}`}
          >
            ابحث عن طبيب
          </h2>
          <p>
            من خلال الموقع الإلكتروني لدينا، نساعدك على التواصل مع نخبة من
            أطبائنا الرائدين المختصين بعلاجات الإخصاب ومقدمي الرعاية الصحية
            لدينا۔
          </p>
        </div>

        {/* ✅ Search Bar */}
        <div className="search-bar doctor-bar">
         <div className="custom-dropdown">
  <button
    className="dropdown-btn doctor-select"
    onClick={() => {
      const doctorMenu = document.querySelector(".doctor-menu");
      const locationMenu = document.querySelector(".location-menu");

      doctorMenu?.classList.toggle("open");
      locationMenu?.classList.remove("open");
    }}
  >
    <span>{doctor || "حسب اسم الطبيب"}</span>
    <img src="/images/arrow.png" className="arrow-icon" alt="" />
  </button>

  <ul className="dropdown-menu doctor-menu">
    {doctorsToShow.map((doc, i) => (
      <li
        key={i}
         className="dropdown-item"
        onClick={() => {
          setDoctor(doc);
          document.querySelector(".doctor-menu")?.classList.remove("open");
        }}
      >
        {doc}
      </li>
    ))}
  </ul>
</div>


       <div className="custom-dropdown">
  <button
    className="dropdown-btn location-select"
    onClick={() => {
      const locationMenu = document.querySelector(".location-menu");
      const doctorMenu = document.querySelector(".doctor-menu");

      locationMenu?.classList.toggle("open");
      doctorMenu?.classList.remove("open");
    }}
  >
    <span>{location || "حسب الموقع"}</span>
    <img src="/images/arrow.png" className="arrow-icon" alt="" />
  </button>

  <ul className="dropdown-menu location-menu">
    <li className="dropdown-item" onClick={() => { setLocation("الرياض"); setDoctor(""); }}>
      الرياض
    </li>
    <li className="dropdown-item" onClick={() => { setLocation("جدة"); setDoctor(""); }}>
      جدة
    </li>
  </ul>
</div>


          <button onClick={handleSearch} className="search-button">
            ابحث
          </button>
        </div>
      </div>

      {/* ✅ Animation CSS */}
      <style jsx>{`
      .doctor-select,
.location-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
.search-button:hover {
    background: #39bced;
}
        .animate-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.5s ease-in-out;
        }
        .animate-left.show {
          opacity: 1;
          transform: translateX(0);
        }
        .search-button {
  width: 163px !important ;
  border-radius:0px !important;
  font-weight:400 !important;
  height: 44px;
  }
  .search-bar {
    gap: 65px !important;
      }
    .search-bar select{
    color: rgb(117, 117, 117) !important;
    }
 .arrow-icon {
    width: 12px !important;
    height: auto;
    margin-right: auto;
}
    .doctor-menu.open {
    background-color: #fff !important;
}
  .custom-dropdown {
    position: relative;
  }

  .dropdown-btn {
    width: 100%;
    background: #ffffff;
    border: 1px solid #ccd6e8;
    padding: 12px 14px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    cursor: pointer;
    color: #00375f;
    font-size: 16px;
    margin-bottom: 10px;
  }


  

  .dropdown-menu {
    position: absolute;
    width: 600px;
    background: #fff;
    border: 1px solid #000000ff;
    border-radius: 0px;
    display: none;
    z-index: 999;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
    padding: 0;
    margin: 0;
    line-height: 10px;
    font-size: 16px !important;
    text-align: right;
  }
  .dropdown-menu.open {
    display: block;
  }
  .dropdown-item {
    padding: 12px 14px;
    cursor: pointer;
    transition: 0.2s;
    color: #000 !important;
  }
  .dropdown-item:hover {
    background: #000;
    color: #fff !important;
  }

  /* Desktop styles remain the same */
  .doctor-select {
    width: 600px;
    padding: 12px 18px;
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 16px;
    background-color: #fff;
    font-weight: 400;
    height: 44px;
    color: rgb(117, 117, 117);
    margin-bottom: 0px;
  }
  .location-select {
    width: 348px;
    padding: 12px 18px;
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 16px;
    background-color: #fff;
    font-weight: 400;
    height: 44px;
    color: rgb(117, 117, 117);
    margin-bottom: 0px;
  }
  .dropdown-menu.location-menu.open {
    width: 348px;
  }

  .search-bar {
    margin-top: 0px;
  }
  .doctor-bar {
    margin-top: 20px;
  }
/* Only Doctor Dropdown Scrollable */
.dropdown-menu.doctor-menu {
  max-height: 200px;
  overflow-y: auto;
  overflow-x: hidden;
}
.placeholder-text {
  color: #757575 !important; /* Default grey */
}

.selected-text {
  color: #000 !important;   /* Black when selected */
  font-weight: 600;
}


  /* ✅ Mobile responsive */
  @media (max-width: 767px) {
    .search-bar {
      display: flex;
      flex-direction: column;
      gap: 12px !important;
      height: 200px;
    }
    .doctor-select,
    .location-select,
    .search-button {
      width: 300px;
    }
    .dropdown-menu {
      width: 100% !important;
    }
    .dropdown-menu.location-menu.open {
      width: 100% !important;
    }
      .search-button{
         width: 120px !important; 
    -webkit-border-radius: 0px !important;
    -moz-border-radius: 0px!important;
    border-radius: 0px !important;
    font-weight: 400 !important;
   margin: 0px 175px 0px 0px;
    height: 30px;
    padding: 0px 20px;

      }
  }
      `}</style>
    </div>
  );
};

export default SearchBar;
