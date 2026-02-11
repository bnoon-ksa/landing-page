import React from "react";
import Link from "next/link";
import Image from "next/image";

function HeroBanner() {
  return (
    <>
      <div className="main-banner-area">
        <div className="container-fluid">
          <div className="row justify-content-center g-4">
            <div className="col-xxl-8 col-md-12">
              <div className="main-banner-content section-title-animation animation-style1">
               

                <h1 className="title-animation">
                  Experience World-Class <span>Virtual Healthcare</span> From
                  Certified Doctors
                </h1>

                <p>
                  Get expert medical advice, prescriptions, and
                  referrals—anytime, anywhere.
                </p>

                <div className="banner-btn">
                  <Link href="/register" className="default-btn">
                    <span className="left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M17.8077 0.98584H1.19231C0.810154 0.98584 0.5 1.29599 0.5 1.67815C0.5 2.0603 0.810154 2.37046 1.19231 2.37046H16.1361L0.702846 17.8041C0.4325 18.0744 0.4325 18.5126 0.702846 18.783C0.838192 18.9183 1.01508 18.9858 1.19231 18.9858C1.36954 18.9858 1.54677 18.9183 1.68177 18.783L17.1154 3.34938V18.2935C17.1154 18.6757 17.4255 18.9858 17.8077 18.9858C18.1898 18.9858 18.5 18.6757 18.5 18.2935V1.67815C18.5 1.29599 18.1898 0.98584 17.8077 0.98584Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <strong>Register Now</strong> - It&apos;s Free
                    <span className="right">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                      >
                        <path
                          d="M17.8077 0.98584H1.19231C0.810154 0.98584 0.5 1.29599 0.5 1.67815C0.5 2.0603 0.810154 2.37046 1.19231 2.37046H16.1361L0.702846 17.8041C0.4325 18.0744 0.4325 18.5126 0.702846 18.783C0.838192 18.9183 1.01508 18.9858 1.19231 18.9858C1.36954 18.9858 1.54677 18.9183 1.68177 18.783L17.1154 3.34938V18.2935C17.1154 18.6757 17.4255 18.9858 17.8077 18.9858C18.1898 18.9858 18.5 18.6757 18.5 18.2935V1.67815C18.5 1.29599 18.1898 0.98584 17.8077 0.98584Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>

                <div className="banner-bottom">
                  <div className="info">
                    <div className="image d-flex align-items-center">
                      <Image
                        src="https://bnoon.blob.core.windows.net/website/images/users/user1.png"
                        alt="user1"
                        width={41}
                        height={41}
                      />
                      <Image
                        src="https://bnoon.blob.core.windows.net/website/images/users/user2.png"
                        alt="user2"
                        width={41}
                        height={41}
                      />
                      <Image
                        src="https://bnoon.blob.core.windows.net/website/images/users/user3.png"
                        alt="user3"
                        width={41}
                        height={41}
                      />
                    </div>
                    <div className="content">
                      <div className="d-flex align-items-center">
                        <h3 className="counter">3</h3>
                        <h3 className="sub">M+</h3>
                      </div>
                      <span>Members Treated</span>
                    </div>
                  </div>
                  <div className="wrap">
                    <Link href="/services">
                      <Image
                        src="https://bnoon.blob.core.windows.net/website/images/banner/circle.svg"
                        alt="circle"
                        width={122}
                        height={122}
                      />
                      <i className="ri-arrow-down-long-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-4 col-md-12">
              <div className="main-banner-image">
                <div className="image">
                  <Image
                    src="https://bnoon.blob.core.windows.net/website/images/banner/banner.jpg"
                    alt="banner"
                    width={1200}
                    height={1320}
                  />
                </div>

                <div className="fun-items">
                  <div className="fun">
                    <div className="d-flex align-items-center justify-content-center">
                      <h3 className="counter">12</h3>
                      <h3 className="sub">M+</h3>
                    </div>
                    <span>Virtual Patients Served</span>
                  </div>

                  <div className="fun before-none">
                    <div className="d-flex align-items-center justify-content-center">
                      <h3 className="counter">500</h3>
                      <h3 className="sub">+</h3>
                    </div>
                    <span>Licensed Doctors</span>
                  </div>

                  {/* Shape Image */}
                  <div className="shape1">
                    <Image
                      src="https://bnoon.blob.core.windows.net/website/images/banner/shape1.png"
                      alt="shape1"
                      width={139}
                      height={86}
                    />
                  </div>
                  <div className="shape2">
                    <Image
                      src="https://bnoon.blob.core.windows.net/website/images/banner/shape2.png"
                      alt="shape2"
                      width={163}
                      height={164}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
