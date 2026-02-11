"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Offcanvas from "react-bootstrap/Offcanvas";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import { menus } from "@/components/ar/Layout/Menus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
     // @ts-expect-error
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }

    const element = document.getElementById("navbar");
    const onScroll = () => {
      if (!element) return;
      if (window.scrollY > 170) {
        element.classList.add("sticky");
      } else {
        element.classList.remove("sticky");
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      element?.classList.remove("sticky");
    };
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const [mobileActive, setMobileActive] = useState(pathname);
const [clickedItem, setClickedItem] = useState<string | null>(null); // click highlight
  const isActive = (href: string) => pathname === href;
  const isArabic = pathname.startsWith("/ar");
  return (
    <>
      <nav className="navbar navbar-expand-xl sticky" id="navbar" dir="rtl">
        <div className="container d-flex justify-content-between align-items-center">

          {/* 🟢 LEFT SIDE (Logo + Mobile) */}
          <div className="d-flex align-items-center  space-mobile">
            <Link href="/ar" className="navbar-brand d-flex align-items-center">
              <Image
                src="/images/bnoon-logo.avif"
                alt="Bnoon"
                width={183}
                height={75}
              />
            </Link>

            {/* 🌐 Mobile Language Switcher */}
            <div className="d-md-none me-5 ">
              {isArabic ? (
                <Link
                  href={pathname.replace(/^\/ar/, "/en")}
                  className="btn btn-outline-secondary btn-language"
                  style={{ fontSize: "0.9rem", padding: "4px 10px" }}
                >
                  EN
                </Link>
              ) : (
                <Link
                  href={pathname.replace(/^\/en/, "/ar")}
                  className="btn btn-outline-secondary btn-language"
                  style={{ fontSize: "0.9rem", padding: "4px 10px" }}
                >
                  العربية
                </Link>
              )}
            </div>

            {/* ☰ Mobile Menu Icon */}
            <button
              className="btn d-md-none me-2"
              type="button"
              onClick={handleShow}
              aria-label="Toggle navigation"
              style={{
                background: "transparent",
                border: "none",
                padding: "4px 8px",
              }}
            >
              <i
                className="bi bi-list"
                style={{ fontSize: "2rem", color: "#ffffffff", transform:"scaleX(-1)" }}
              ></i>
            </button>
          </div>

          {/* 🟢 RIGHT SIDE (Desktop view) */}
          <div className="d-none d-md-flex flex-column align-items-start dropdown-nav">
      <div
  className="mb-3 d-flex gap-4 align-items-center dropdown-box"
  style={{ justifyContent: "flex-end", width: "100%",gap:"32px !important" }}
>

  {/* Dropdown (Phones) */}
  <div className="dropdown">
    <button
      className="btn btn-primary dropdown-toggle btn-dropdown d-flex align-items-center gap-2"
      type="button"
      id="extraDropdown"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <FaPhone style={{ color: "white", transform:"scaleX(-1)", marginRight:"auto"}} />
     <span style={{ margin: "0px 10px 0px 0px" }}>         +966 11 444 8080 :الرياض</span>
           {/* ⭐ Custom Dropdown Arrow Icon */}
  <Image
  src="/images/droparrow.svg"
  alt="arrow"
  width={22}
  height={22}
/>
    </button>
    <ul
      className="dropdown-menu text-center"
      aria-labelledby="extraDropdown"
    >
      <li>
        <Link
          className="dropdown-item" 
          href="https://api.whatsapp.com/send?phone=966114448080&text=Hello"
        >
           <span style={{  marginLeft: "auto" }}>         +966 11 444 8080 :الرياض</span>
        </Link>
      </li>
      <li>
        <Link
          className="dropdown-item"
          href="https://api.whatsapp.com/send?phone=966126800800&text=Hello"
        >
         +966 12 680 0800 :جدة
        </Link>
      </li>
    </ul>
  </div>

  {/* Language */}
  {isArabic ? (
    <Link
      href={pathname.replace(/^\/ar/, "/en")}
      className="btn btn-outline-secondary btn-language"
    >
      EN
    </Link>
  ) : (
    <Link
      href={pathname.replace(/^\/en/, "/ar")}
      className="btn btn-outline-secondary btn-language"
    >
      العربية
    </Link>
  )}

  {/* Appointment */}
  <a
    href="https://book.bnoon.sa/ar"
    target="_blank"
    rel="noopener noreferrer"
    className="btn btn-success btn-appointment"
  >
    طلب موعد
  </a>
</div>

            {/* Navigation Menu */}
            <div className="collapse navbar-collapse justify-content-start">
           <ul className="navbar-nav">
  {menus
    .filter((item) => item.id !== "english") // 👈 desktop se English hide
    .map((item) => (
      <li key={item.id} className="nav-item">
        <Link
          href={item.href || "#"}
          className={`nav-link ${isActive(item.href || "") ? "active" : ""}`}
        >
          {item.title}
        </Link>
      </li>
    ))}
</ul>


            </div>
          </div>
        </div>
      </nav>

      {/* 📱 Mobile Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        className="mobile-offcanvas"
      >
        <Offcanvas.Header closeButton className="border-0">
          <Offcanvas.Title>
            <Image
              src="/images/logo-mob.avif"
              alt="Bnoon"
              width={150}
              height={55}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body className="d-flex flex-column justify-content-center align-items-center text-center">
        <ul className="list-unstyled w-100 px-3">
  {menus.map((item, index) => (
    <li key={item.id} className=" itmes">
<Link
  href={
    item.id === "english"
      ? pathname.replace(/^\/ar/, "/en")
      : item.href || "#"
  }
className={`text-decoration-none d-block ${
  clickedItem === item.href
    ? "click-active"
    : mobileActive === item.href
    ? "active-btn"
    : ""
}`}
  style={{
  padding: "14px",
}}

onClick={(e) => {
  e.preventDefault();               // ⛔ instant navigation roko

  setClickedItem(item.href || "");  // 🎯 CLICK color turant
  setMobileActive(item.href || ""); // 🟢 page active

  handleClose();                    // offcanvas band

  setTimeout(() => {
    window.location.href = item.href || "#";
  }, 200);
}}


>
  {item.title}
</Link>

      {index !== menus.length - 1 && (
        <hr
      style={{
  border: "1px solid #0000005e",
  margin: "0px",
}}


        />
      )}
    </li>
  ))}
</ul>


          {/* Language Switcher */}
          <div className="mt-4 d-flex flex-column align-items-center">
            {isArabic ? (
              <Link
                href={pathname.replace(/^\/ar/, "/en")}
                className="btn btn-outline-secondary btn-language px-4"
              >
                EN
              </Link>
            ) : (
              <Link
                href={pathname.replace(/^\/en/, "/ar")}
                className="btn btn-outline-secondary btn-language px-4"
              >
                العربية
              </Link>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      <style jsx global>{`
      .click-active {
  background: #115479ff;   /* click color (light) */
  color: #ffffff !important;
}

.active-btn {
  background: #004E78;   /* active page color (dark) */
  color: #ffffff !important;
  font-weight: 600;
}

.dropdown-menu .dropdown-item {
    background: hsla(0, 0%, 100%, .2);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    margin: 6px 0px 0px;
    padding: 6px 45px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-transition: background .3s ease;
    -moz-transition: background.3s ease;
    -o-transition: background.3s ease;
    transition: background .3s ease;
}
    ul.dropdown-menu.show {
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px !important;
    width: 100%;
    padding: 0px;
    background-color: hsla(0, 0%, 100%, 0) !important;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px) !important;
    border: 1px !important;
    margin: 0px;
}
      .navbar .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    margin-left: 10px;
    margin-right: -10px !important;
    margin-top: 10px !important;
    margin-bottom: 0;
    padding-left: 20px;
}
    .btn-language {
    font-size:18px;
    padding: 9px 0px;
    }
      .btn-dropdown.dropdown-toggle::after {
  display: none !important;
}
        .mobile-offcanvas {
          width: 100vw !important;
          height: 100vh !important;
          background: #fff;
          animation: slideUp 0.5s ease forwards;
        }
.dropdown-item{
    direction: ltr;
}
.sticky {
          position: fixed !important;
          top: 0;
          width: 100%;
          z-index: 9999;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          background-color: #fff;
        }
    .navbar .navbar-nav .nav-item .nav-link{
    padding-right: 51px !important;
    padding-top:20px !important;
    padding-bottom:0px !important;
    }
    .navbar .navbar-nav .nav-item {
     position: relative; 
    margin-left: 0px;
    margin-right: 24px;
}
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .offcanvas-backdrop.show {
          opacity: 0.8;
        }

        .offcanvas-header .btn-close {
          position: absolute;
          left: 20px;
          top: 20px;
        }

        nav[dir="rtl"] .navbar-nav {
          direction: rtl;
        }

        nav.sticky {
          position: fixed;
          top: 0;
          width: 100%;
          background-color: #ffffff;
          z-index: 1000;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
          button#extraDropdown {
    width: 307px;
    padding: 0px 20px;
    height: 42px;
    text-align: left;
    justify-content: right;
    direction: ltr;
}
    
@media only screen and (max-width: 767px) {

  nav#navbar {
      padding: 0px !important;
      height: 70px;
  }
li.itmes{
 font-size: 14px !important;
}
  .navbar .navbar-brand {
      padding-left: 0px;
      width: 130px;
      height: 54px;
     padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
    margin-left: 56px;
    margin-right: 5px !important;
    margin-top: 0px !important;
    margin-bottom: 0;
  }
    .space-mobile{
    
    }
}
@media (max-width: 767px) {
  .active-btn {
    background: #004E78 !important;
    color: #ffffff !important;
    padding: 14px 14px !important;
    display: inline-block;
    border-radius: 0px;
    font-weight: 600;
  }
}

      `}</style>
    </>
  );
}

export default Navbar;
