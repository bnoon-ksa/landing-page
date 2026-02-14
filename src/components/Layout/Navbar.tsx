"use client";

import React, { useState, useEffect } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { menus } from "@/components/Layout/Menus";
import { getBookNowUrl, isExternalBooking } from "@/utils/booking";
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
  const [mobileActive, setMobileActive] = useState<string | null>(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const isActive = (href: string) => pathname === href;
  const isArabic = pathname.startsWith("/ar");

  return (
    <>
      <nav className="navbar navbar-expand-xl sticky" id="navbar">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Left side: Logo + Mobile Language + Menu icon */}
          <div className="d-flex align-items-center">
            <Link href="/en" className="navbar-brand d-flex align-items-center">
              <Image
                src="/images/bnoon-logo.svg"
                alt="Doutor"
                width={183}
                height={75}
              />
            </Link>

            {/* 🌐 Mobile Language Button */}
            <div className="d-md-none ms-3">
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
              className="btn d-md-none ms-2"
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
                style={{ fontSize: "2rem", color: "#ffffffff" }}
              ></i>
            </button>
          </div>

          {/* Right side (desktop only) */}
          <div className="d-none d-md-flex flex-column align-items-end">
            <div className="mb-3 d-flex justify-content-end gap-4 align-items-center margin-dropdown">
             <div className="dropdown">
  <button
    className="btn btn-primary dropdown-toggle btn-dropdown d-flex align-items-center justify-content-between gap-3 w-100"
    type="button"
    id="extraDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <div className="d-flex align-items-center gap-3">
      <FaPhone
        style={{
          color: "white",
          transform: "scaleX(-1)",
          width: "15px",
          height: "15px",
        }}
      />
      Riyadh: +966 11 444 8080
    </div>

    {/* 👉 YOUR CUSTOM ICON HERE */}
    <Image
      src="/images/droparrow.svg"
      alt="arrow"
      width={22}
      height={22}
      style={{ margin: "0px 25px 0px 0px" }}
    />
    {/* Or paste SVG directly */}
    {/* <svg width="16" height="16" ...>...</svg> */}

  </button>

  <ul className="dropdown-menu" aria-labelledby="extraDropdown">
    <li>
      <Link
        className="dropdown-item"
        href="https://api.whatsapp.com/send?phone=966114448080&text=Hello"
      >
        Riyadh: +966 11 444 8080
      </Link>
    </li>
    <li>
      <Link
        className="dropdown-item"
        href="https://api.whatsapp.com/send?phone=966126800800&text=Hello"
      >
        Jeddah: +966 12 680 0800
      </Link>
    </li>
  </ul>
</div>


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

              <a
                href={getBookNowUrl("en")}
                {...(isExternalBooking() ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="btn btn-success btn-appointment"
              >
                Book an Appointment
              </a>
            </div>

            <div className="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav d-none d-xl-flex">
  {menus.map(menu => (
    <li
      key={menu.id}
      className={`nav-item ${menu.className || ""}`}
    >
      <Link
        href={menu.href}
        className={`nav-link ${isActive(menu.href) ? "active-btn" : ""}`}
      >
        {menu.title}
      </Link>
    </li>
  ))}
</ul>

            </div>
          </div>
        </div>
      </nav>

      {/* 🌐 Mobile Full-Screen Offcanvas */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="mobile-offcanvas"
      >
        <Offcanvas.Header
          closeButton
          className="border-0 "
        >
          <Offcanvas.Title>
            <Image
              src="/images/logo-mob.avif"
              alt="Doutor"
              width={150}
              height={55}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>

       <Offcanvas.Body className="d-flex flex-column align-items-center text-center">
  <ul className="list-unstyled w-100 px-3">
{menus.map((item, index) => {
  // Handle Arabic button click separately
  if (item.id === "arabic") {
    return (
      <li key={item.id} className="my-3">
        {isArabic ? (
          <Link
            href={pathname.replace(/^\/ar/, "/en")}
            className="fs-5 text-decoration-none d-block"
            style={{ color: "#004E78" }}
           onClick={() => {
  handleClose();
  setTimeout(() => {
    window.location.href = pathname.replace(/^\/(en|ar)/, isArabic ? "/en" : "/ar");
  }, 200);
}}

          >
            EN
          </Link>
        ) : (
          <Link
            href={pathname.replace(/^\/en/, "/ar")}
            className="fs-5 text-decoration-none d-block mob-lang-switch"
            style={{ color: "#004E78" }}
            onClick={() => {
  handleClose();
  setTimeout(() => {
    window.location.href = pathname.replace(/^\/(en|ar)/, isArabic ? "/en" : "/ar");
  }, 200);
}}

          >
            العربية
          </Link>
        )}
      </li>
    );
  }
 const isActiveBtn = pathname === item.href;
  // Normal menu items
  return (
    <li key={item.id} className="">
<Link
  href={item.href || "#"}
  className={`fs-5 text-decoration-none d-block ${
    isActiveBtn || mobileActive === item.href ? "active-btn" : ""
  }`}
  style={{ color: "#004E78", padding: "10px 0px 10px" }}
  onClick={() => {
    setMobileActive(item.href);   // 👈 mobile click pe active
    handleClose();

    setTimeout(() => {
      window.location.href = item.href; // navigation
    }, 200);
  }}
>
  {item.title}
</Link>


      {index !== menus.length - 1 && (
        <hr
          style={{
            border: "1px solid ##00000091",
            margin: "0px 0",
          }}
        />
      )}
    </li>
  );
})}

  </ul>

  {/* 🌐 Language Switcher below all menu items */}
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

      {/* 🌐 Custom Styles */}
      <style jsx global>{`
      .offcanvas {
  height: 100vh !important;
  overflow: visible !important;
}

.offcanvas-body {
  overflow-y: visible !important;
}

.navbar-nav {
  max-height: none !important;
  overflow: visible !important;
}

        .mobile-offcanvas {
          width: 100vw !important;
          height: 100vh !important;
          background: #fff;
          animation: slideUp 0.5s ease forwards;
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
          right: 20px;
          top: 20px;
        }
            /* Bootstrap dropdown default caret hide */
  #extraDropdown.dropdown-toggle::after {
    display: none !important;
  }
    /* Default: Desktop me hide */
.mobile-only {
  display: none !important;
}
.dropdown-menu .dropdown-item {
  background:hsla(0, 0%, 100%, .2);      /* Har item ka apna background */
  backdrop-filter: blur(20px);
  margin: 6px 0px 0px;            /* Items ke beech gap */
  padding: 6px 45px;       /* Andar spacing */
  border-radius: 6px;       /* Corners soft */
  transition: background 0.3s ease;
}
ul.dropdown-menu.show {
    border-radius: 8px;
    width: 100%;
    padding: 0px;
    background-color: hsla(0, 0%, 100%, 0.00);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    border: 1px;
    margin: 0px;
}
.dropdown-menu .dropdown-item:hover {
  background:hsla(0, 0%, 100%, .2);      /* Har item ka apna background */
  backdrop-filter: blur(20px);
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
/* Mobile: Show only on responsive */
@media (max-width: 1199px) {
  .mobile-only {
    display: block !important;
  }
}
 @media only screen and (max-width: 767px) {
 .navbar .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0px;
    margin: 0;
}

.mob-lang-switch{
font-family: Alexandria !important;
font-size:16px !important;
}
.active-btn {
    background: #004E78 !important;
    color: #fff !important;
    padding: 10px 14px !important;
    margin:0px;
    display: inline-block;
  }
}


      `}</style>
    </>
  );
}

export default Navbar;
