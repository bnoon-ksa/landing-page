'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getBookNowUrl } from '@/utils/booking';

const DrMazinBishara = () => {
  const contentRefRiyadh = useRef<HTMLDivElement>(null);
  const imageRefRiyadh = useRef<HTMLDivElement>(null);
  const contentRefKing = useRef<HTMLDivElement>(null);
  const imageRefKing = useRef<HTMLDivElement>(null);

  const [contentVisibleRiyadh, setContentVisibleRiyadh] = useState(false);
  const [imageVisibleRiyadh, setImageVisibleRiyadh] = useState(false);
  const [contentVisibleKing, setContentVisibleKing] = useState(false);
  const [imageVisibleKing, setImageVisibleKing] = useState(false);

  useEffect(() => {
    const observerContentRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleRiyadh(true);
          observerContentRiyadh.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (contentRefRiyadh.current) observerContentRiyadh.observe(contentRefRiyadh.current);

    const observerImageRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleRiyadh(true);
          observerImageRiyadh.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (imageRefRiyadh.current) observerImageRiyadh.observe(imageRefRiyadh.current);

    const observerContentKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleKing(true);
          observerContentKing.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (contentRefKing.current) observerContentKing.observe(contentRefKing.current);

    const observerImageKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleKing(true);
          observerImageKing.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (imageRefKing.current) observerImageKing.observe(imageRefKing.current);

    return () => {
      observerContentRiyadh.disconnect();
      observerImageRiyadh.disconnect();
      observerContentKing.disconnect();
      observerImageKing.disconnect();
    };
  }, []);

  return (
    <div className="doctors-overview-area mb-5 mt-3">
      <div className="container">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/en">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="our-experts">Our Experts</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dr. Mazin Bishara
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-lg-5">
          <div className="col-xl-7 col-md-12">
            <div className="doctors-overview-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? 'show' : ''}`}
              >
                Dr. Mazin Bishara
              </h2>
              <p className="profile-text">Medical Director, Bnoon - Jeddah</p>
              <p className="profile-text">
                Consultant, Obstetrics, Gynecology, Reproductive Endocrinology & Infertility (IVF),
                Minimally Invasive Surgery{' '}
              </p>
              <p className="profile-text">Location: Bnoon – Jeddah </p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
                Dr. Mazin Bishara is a seasoned Consultant specializing in Obstetrics, Gynaecology,
                and Infertility at Bnoon - Jeddah. With over 28 years of experience, Dr. Bishara has
                held prominent roles in leading medical organizations in Saudi Arabia and Canada. He
                currently serves as a Consultant in Reproductive Endocrinology and Infertility (IVF)
                and Endoscopic (Minimally Invasive) Surgery. Dr. Bishara's expertise spans across
                Obstetrics, Gynaecology, Reproductive Endocrinology, Infertility (IVF), and
                Endoscopic Surgery.{' '}
              </p>
              <p>
                He completed his medical degree (MD) at King Abdulaziz University (KSA) in 1991,
                followed by residency training in Obstetrics and Gynaecology at the University of
                Manitoba in Winnipeg, Canada, in 2000. He pursued fellowship training in
                Reproductive Endocrinology and Infertility (IVF) and Endoscopic Surgery at McGill
                University in Montreal, Canada, in 2002.{' '}
              </p>

              <p>
                Dr. Bishara is recognized for his extensive contributions to women's health through
                numerous publications, book chapters, and presentations at national and
                international conferences. He has authored multiple book chapters in his field and
                has presented several papers, showcasing his commitment to advancing medical
                knowledge. Dr. Bishara is a distinguished member of prestigious medical societies
                including the Society of Obstetricians and Gynaecologists of Canada, The American
                College of Obstetrics and Gynaecology, and The American Society of Reproductive
                Surgery.{' '}
              </p>
            </div>
          </div>

          <div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
            <OptimizedImage
              imageName="dr-mazin-bishra"
              className="doctors-overview-image"
              alt="Bnoon Riyadh"
            />
            <div className="mt-3">
              <a href={getBookNowUrl('en')} className="btn btn-success doctor-profile-btn">
                Request an Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrMazinBishara;
