'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getBookNowUrl } from '@/utils/booking';

const DrWajdiAlOmari = () => {
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
              Dr. Wajdi Al Omari
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
                Dr. Wajdi Al Omari
              </h2>
              <p className="profile-text">
                Consultant, Obstetrics, Gynecology, Reproductive Endocrinology & Infertility (IVF),
                Minimally Invasive Surgery
              </p>
              <p className="profile-text">Location: Bnoon – Riyadh</p>
              <p className="profile-text-last">
                Languages:
                <span className="lang-box">English</span>
                <span className="lang-box">Arabic</span>
              </p>

              <p>
                Dr. Wajdi Al Omari is a Consultant in Obstetrics, Gynecology, and Reproductive
                Endocrinology at Bnoon - Riyadh. With over 19 years of clinical and academic
                experience, he is recognized for his leadership in fertility care and women’s health
                in Saudi Arabia.{' '}
              </p>
              <p>
                He obtained his MBBS from Umm Al-Qura University in Makkah in 2005, and went on to
                complete the Saudi Board in Obstetrics and Gynecology in 2014. He then earned a
                clinical fellowship in Reproductive Endocrinology and Infertility–ART from
                Montpellier–Nimes University Hospital in France (2015–2017).{' '}
              </p>

              <p>
                Dr. Wajdi previously served as a Consultant at King Saud Medical City in Riyadh,
                where he has also held several leadership roles including Director of the Obstetrics
                and Gynecology Residency Training Program and Head of the IVF Department. From 2014
                to 2019, he served as Assistant Professor at Al Majmaah University, where he was
                also deputy head of the obstetrics and gynecology department.{' '}
              </p>
              <p>
                He has worked in both public and private sectors in the Kingdom. Dr. Wajdi has
                contributed to various research projects in fertility and has presented at national
                conferences. He is a certified instructor in Advanced Life Support in Obstetrics
                (ALSO) and is actively involved in clinical training and mentorship.{' '}
              </p>
            </div>
          </div>

          <div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
            <OptimizedImage
              imageName="dr-wajdi"
              className="doctors-overview-image"
              alt="Bnoon Riyadh"
            />
            <div className="mt-3">
              <a href={getBookNowUrl('en')} className="btn btn-success doctor-profile-btn">
                Request an Appointment
              </a>
            </div>
          </div>

          <div className="col-xl-12 col-md-12">
            <div className="doctor-overview-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrWajdiAlOmari;
