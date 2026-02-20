'use client';

import React, { useEffect, useRef, useState } from 'react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { LocationIcon, PhoneIcon, MailIcon } from '@/components/icons';

const Jeddaharea = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const [imgVisible, setImgVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  // Intersection Observer for animation
  useEffect(() => {
    const observerImg = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImgVisible(true);
          observerImg.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    const observerText = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTextVisible(true);
          observerText.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (imgRef.current) observerImg.observe(imgRef.current);
    if (textRef.current) observerText.observe(textRef.current);

    return () => {
      observerImg.disconnect();
      observerText.disconnect();
    };
  }, []);

  return (
    <div className="service-overview-area mb-5 mt-3 mt-lg-5">
      <div className="container">
        {/* Jeddah Section */}
        <div className="row justify-content-center align-items-center g-4 flex-column-reverse flex-md-row">
          <div className="col-xl-6 col-md-12 image-loc">
            <div
              ref={imgRef}
              className={`mb-3 service-overview-image ${imgVisible ? 'animate-left show' : 'animate-left'}`}
              style={{
                boxShadow: '50px 50px 0px #d7f2fb',
                overflow: 'hidden',
                display: 'inline-block',
              }}
            >
              <OptimizedImage
                imageName="location-jeddah"
                alt="Bnoon Jeddah"
                width={580}
                height={450}
              />
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={textRef}
              className={`service-overview-content ${textVisible ? 'animate-right show' : 'animate-right'}`}
            >
              <h2>بنون – جدة</h2>
              <p>
                منذ انضمامه إلى شبكة "بنون" في يونيو 2025 (وكان يُعرف سابقاً بمركز "هيلث بلس للإخصاب
                – جدة" منذ افتتاحه عام 2019)، يواصل المركز تقديم خدمات رعاية خصوبة متقدمة، مع الحفاظ
                على السمعة الطبية المرموقة والثقة التي بناها في المجتمع۔
              </p>
              <p>
                وبصفته مركزاُ معتمداً من اللجنة الدوليةالمشتركة يقدّم "بنون – جدة"مجموعة متكاملة من
                الخدمات، تشمل: أطفال الأنابيب، الحقن المجهري، حفظ الخصوبة، الفحوصات الجينية،
                التحاليل الهرمونية، وتشخيصات دقيقة لحالات العقم لدى الرجال والنساء بالإضافة إلى
                أمراض الذكورة۔{' '}
              </p>
              <p>
                ويعتمد المركز على تقنيات حديثة تشمل أنظمة مراقبة الأجنّة بتقنية التايم لابس، تخطيط
                علاجي مدعوم بالذكاء الاصطناعي، ومنصات رقمية لمتابعة المريض، مما يوفّر تجربة علاجية
                شخصية ترتكز على الأدلة العلمية وتُعزّز من راحة المرضى بمعدلات نجاح تتماشى مع النسب
                العالمية۔
              </p>
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center mt-3 gap-3 gap-md-4">
                <div className="d-flex align-items-center">
                  <LocationIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a
                    href="https://maps.app.goo.gl/8Qt27cRjD7noBcuU9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-color text-decoration-none"
                  >
                    بنون – جدة
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <PhoneIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a href="tel:+966114448080" className="text-color">
                    +966 12 680 0800
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <MailIcon
                    width={24}
                    height={24}
                    className="me-2"
                    style={{ color: 'rgb(0,78,120)' }}
                  />
                  <a href="mailto:info@bnoon.sa" className="text-color">
                    info.jeddah@bnoon.sa
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        .hospital-link {
          color: #404040;
        }
        a.text-color {
          color: #004e78 !important;
          margin-right: 10px;
          direction: ltr;
        }
        span.text-color {
          color: #004e78 !important;
          font-size: 16px !important;
          margin-right: 10px;
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
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
};

export default Jeddaharea;
