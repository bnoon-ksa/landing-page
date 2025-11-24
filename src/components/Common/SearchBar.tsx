"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

type LocationType = "Riyadh" | "Jeddah" | "";

const SearchBar = () => {
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState<LocationType>("");
  const router = useRouter();

  const doctorProfileLinks: Record<string, string> = {
    "Dr. Abdalaziz Al-Shahrani": "/en/dr-abdalaziz-alshahrani",
    "Dr. Asim Al Wuhaibi": "/en/dr-asim-alwohaibi",
    "Dr. Wajdi Al Omari": "/en/dr-ahmed-alshaikh",
    "Dr. Dalia Adel": "/en/dr-dalia-nour",
    "Dr. Moussa El Naiemy": "/en/dr-moussa-el-naeimy",
    "Dr. Fawaz Edris": "/en/dr-fawaz-edris",
    "Dr. Mazin Bishara": "/en/dr-mazin-bishara",
    "Dr. Ahmed Alshaikh": "/en/our-ex/en/dr-ahmed-alshaikh",
    "Dr. Ahmad Haroun": "/en/dr-ahmad-haroun",
    "Dr. Maya Albezreh": "/en/dr-maya-albezreh",
    "Dr. Razan Ghaith": "/en/dr-razan-ghaith",
    "Dr. Maram Dadoua": "/en/dr-maram-dadoua",
  };

  const handleSearch = () => {
    if (!doctor && !location) {
      alert("Please select a doctor or location");
      return;
    }

    if (doctor) {
      const profileUrl = doctorProfileLinks[doctor];
      if (profileUrl) {
        router.push(profileUrl);
        return;
      }
    }

    const params = new URLSearchParams();
    if (location) params.append("location", location);

    router.push(`/en/our-experts?${params.toString()}`);
  };

  const headerRef = useRef<HTMLHeadingElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

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

  const doctorsByLocation: Record<Exclude<LocationType, "">, string[]> = {
    Riyadh: [
      "Dr. Abdalaziz Al-Shahrani",
      "Dr. Asim Al Wuhaibi",
      "Dr. Wajdi Al Omari",
      "Dr. Dalia Adel",
      "Dr. Moussa El Naiemy",
    ],
    Jeddah: [
      "Dr. Fawaz Edris",
      "Dr. Mazin Bishara",
      "Dr. Ahmed Alshaikh",
      "Dr. Ahmad Haroun",
      "Dr. Maya Albezreh",
      "Dr. Razan Ghaith",
      "Dr. Maram Dadoua",
    ],
  };

  const allDoctors = [...doctorsByLocation.Riyadh, ...doctorsByLocation.Jeddah];
  const doctorsToShow =
    location === "Riyadh" || location === "Jeddah"
      ? doctorsByLocation[location]
      : allDoctors;

  return (
    <div className="partner-area ptb-140">
      <div className="container">
        <div className="search-overview-content">
          <h2
            ref={headerRef}
            className={`animate-left ${headerVisible ? "show" : ""}`}
          >
            Find a Doctor
          </h2>
          <p>
            Let us help you connect with one of our leading doctors or healthcare
            professionals.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-bar doctor-bar">
{/* Doctor Dropdown */}
<div className="custom-dropdown">
  <button
    className="dropdown-btn doctor-select"
    onClick={() => {
      const doctorMenu = document.querySelector(".doctor-menu");
      const locationMenu = document.querySelector(".location-menu");
      // Toggle doctor menu
      doctorMenu?.classList.toggle("open");
      // Close location menu if open
      locationMenu?.classList.remove("open");
    }}
  >
    <span>{doctor || "Select Doctor"}</span>
    <img src="/images/arrow.png" className="arrow-icon" />
  </button>
  <div className="dropdown-menu doctor-menu">
    {doctorsToShow.map((doc, i) => (
      <div
        key={i}
        className="dropdown-item"
        onClick={() => {
          setDoctor(doc);
          document.querySelector(".doctor-menu")?.classList.remove("open");
        }}
      >
        {doc}
      </div>
    ))}
  </div>
</div>

   {/* Location Dropdown */}
<div className="custom-dropdown">
  <button
    className="dropdown-btn location-select"
    onClick={() => {
      const locationMenu = document.querySelector(".location-menu");
      const doctorMenu = document.querySelector(".doctor-menu");
      // Toggle location menu
      locationMenu?.classList.toggle("open");
      // Close doctor menu if open
      doctorMenu?.classList.remove("open");
    }}
  >
    <span>{location || "By Location"}</span>
    <img src="/images/arrow.png" className="arrow-icon" />
  </button>
  <div className="dropdown-menu location-menu">
    {["Riyadh", "Jeddah"].map((loc, i) => (
      <div
        key={i}
        className="dropdown-item"
        onClick={() => {
          setLocation(loc as LocationType);
          setDoctor("");
          document.querySelector(".location-menu")?.classList.remove("open");
        }}
      >
        {loc}
      </div>
    ))}
  </div>
</div>

          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
      </div>

      {/* CSS for animation and dropdowns */}
    <style jsx>{`
  .animate-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.5s ease-in-out;
  }
  .animate-left.show {
    opacity: 1;
    transform: translateX(0);
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

  .arrow-icon {
    width: 18px;
    height: auto;
    margin-left: auto;
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
    font-size: 18px;
  }
  .dropdown-menu.open {
    display: block;
  }
  .dropdown-item {
    padding: 12px 14px;
    cursor: pointer;
    transition: 0.2s;
  }
  .dropdown-item:hover {
    background: #000;
    color: #fff;
  }

  /* Desktop styles remain the same */
  .doctor-select {
    width: 600px;
    padding: 12px;
    padding-right: 35px;
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 18px;
    background-color: #fff;
    font-weight: 600;
    height: 44px;
    color: rgb(117, 117, 117);
    margin-bottom: 0px;
  }
  .location-select {
    width: 348px;
    padding: 12px;
    padding-right: 35px;
    border: none;
    outline: none;
    border-radius: 6px;
    font-size: 18px;
    background-color: #fff;
    font-weight: 600;
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

  /* ✅ Mobile responsive */
  @media (max-width: 767px) {
    .search-bar {
      display: flex;
      flex-direction: column;
      gap: 10px;
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
  }
`}</style>

    </div>
  );
};

export default SearchBar;
