'use client';
import React, { useRef, useState, useEffect } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { LocationIcon, PhoneIcon, MailIcon } from '@/components/icons';

const Riyadharea = () => {
  const contentRefRiyadh = useRef<HTMLDivElement>(null);
  const imageRefRiyadh = useRef<HTMLDivElement>(null);
  const contentRefKing = useRef<HTMLDivElement>(null);
  const imageRefKing = useRef<HTMLDivElement>(null);

  const [contentVisibleRiyadh, setContentVisibleRiyadh] = useState(false);
  const [imageVisibleRiyadh, setImageVisibleRiyadh] = useState(false);
  const [contentVisibleKing, setContentVisibleKing] = useState(false);
  const [imageVisibleKing, setImageVisibleKing] = useState(false);

  // Scroll to King Salman section if URL has hash
  useEffect(() => {
    const path = window.location.hash; // use window.location.hash instead
    if (path === '#king-salman-section') {
      const element = document.getElementById('king-salman-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  useEffect(() => {
    // Riyadh content
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

    // Riyadh image
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

    // King Salman content
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

    // King Salman image
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
    <div className="service-overview-area mb-5 mt-3 mt-lg-5">
      <div className="container">
        {/* Riyadh Section */}
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-6 col-md-12">
            <div
              ref={contentRefRiyadh}
              className={`service-overview-content animate-left ${contentVisibleRiyadh ? 'show' : ''}`}
            >
              <h2>Bnoon - Riyadh</h2>
              <p>
                With a legacy of excellence in fertility and women’s health, Bnoon has been proudly
                serving families for over 12 years in Riyadh. Renowned for its patient-first
                philosophy, the center combines compassionate care with advanced technology and a
                team of highly experienced reproductive specialists, earning its reputation as one
                of the most trusted names in reproductive medicine across Saudi Arabia.
              </p>
              <p>
                Bnoon Riyadh consistently delivers outstanding clinical outcomes, with success rates
                that meet and often exceed international benchmarks. Patients benefit from
                personalized treatment plans, cutting-edge IVF and fertility technologies, and a
                multidisciplinary team approach designed to maximize success and comfort.
              </p>
              <p>
                The center also emphasizes continuous learning, professional development, and
                research integration, ensuring that every patient receives care aligned with global
                best practices in reproductive medicine.
              </p>

              <div className="d-flex mt-3 gap-4 flex-column flex-md-row">
                {/* Location */}
                <div className="d-flex align-items-center">
                  <LocationIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a
                    href="https://maps.app.goo.gl/xmFYp2uixqYFAT4TA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color text-decoration-none"
                  >
                    Bnoon - Riyadh
                  </a>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center">
                  <PhoneIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a href="tel:+966114448080" className="text-color text-decoration-none">
                    +966 11 444 8080
                  </a>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center">
                  <MailIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a href="mailto:info@bnoon.sa" className="text-color text-decoration-none">
                    info@bnoon.sa
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={imageRefRiyadh}
              className={`service-overview-image image-left animate-right ${imageVisibleRiyadh ? 'show' : ''}`}
              style={{
                boxShadow: '50px 50px 0px #d7f2fb',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              <OptimizedImage
                imageName="location-riyadh"
                alt="Bnoon Riyadh"
                width={580}
                height={450}
              />
            </div>
          </div>
        </div>

        {/* King Salman Road Section */}
        <div
          id="king-salman-section"
          className="row justify-content-center align-items-center g-4 mt-5 flex-column-reverse flex-md-row"
        >
          <div className="col-xl-6 col-md-12 image-loc" style={{}}>
            <div
              ref={imageRefKing}
              className={`service-overview-image animate-left ${imageVisibleKing ? 'show' : ''}`}
              style={{
                boxShadow: '-50px 50px 0px #d7f2fb',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              <OptimizedImage
                imageName="location-north-riyadh"
                alt="King Salman Road Facility"
                width={580}
                height={450}
              />
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={contentRefKing}
              className={`service-overview-content animate-right ${contentVisibleKing ? 'show' : ''}`}
            >
              <h2>
                Bnoon – King Salman Road, Riyadh{' '}
                <span style={{ fontSize: '18px' }}>(Opening Early 2026)</span>
              </h2>
              <p>
                To further expand access and redefine the standard of fertility care in the Kingdom,
                Bnoon is developing a state-of-the-art 3,800 sqm flagship facility on King Salman
                Road in North Riyadh, scheduled to open by early 2026. Designed as one of the most
                advanced fertility and women’s health centers in the region, this next-generation
                hub will bring together fertility care, reproductive genetics, and comprehensive
                women’s health services under one roof.
              </p>
              <p>
                The flagship center will house cutting-edge IVF and embryology laboratories,
                equipped with the latest time-lapse embryo incubation systems, AI-powered embryo
                selection, genetic screening, and precision hormonal profiling. Every aspect of the
                patient journey — from digital consultations and treatment planning to real-time
                cycle tracking — will be optimized through smart health technologies and integrated
                platforms, ensuring efficiency, accuracy, and personalization at every step.
              </p>
              <p>
                With a focus on clinical excellence, innovation, and patient-centered care, Bnoon –
                King Salman Road is envisioned to become a regional reference for fertility and
                reproductive science, supporting the broader ambitions of Saudi Vision 2030 to
                position the Kingdom as a hub for medical innovation and advanced healthcare
                delivery.
              </p>

              <div className="d-flex mt-3 gap-4 flex-column flex-md-row">
                {/* Location */}
                <div className="d-flex align-items-center">
                  <LocationIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a
                    href="https://maps.app.goo.gl/GLLJ6v64BxJJbFEn9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color text-decoration-none"
                  >
                    Bnoon – King Salman Road
                  </a>
                </div>

                {/* Phone */}
                <div className="d-flex align-items-center">
                  <PhoneIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a href="tel:+966114448080" className="text-color text-decoration-none">
                    +966 11 444 8080
                  </a>
                </div>

                {/* Email */}
                <div className="d-flex align-items-center">
                  <MailIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a href="mailto:info@bnoon.sa" className="text-color text-decoration-none">
                    info@bnoon.sa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        a.text-color.text-decoration-none {
          color: #004e78;
          font-size: 18px !important;
        }
        span.text-color {
          color: #004e78 !important;
          font-size: 18px !important;
        }

        .image-loc {
          text-align: left;
        }
        /* Mobile Responsive */
        @media (max-width: 767px) {
          span.text-color {
            color: #004e78 !important;
            font-size: 14px !important;
          }
          .image-loc {
            text-align: right;
          }
          a.text-color.text-decoration-none {
            color: #004e78;
            font-size: 14px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Riyadharea;
