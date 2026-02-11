"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrWajdiAlOmari = () => {
  const imageRiyadh = "/images/doctors/dr-wajdi.avif";

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
      { threshold: 0.3 }
    );
    if (contentRefRiyadh.current) observerContentRiyadh.observe(contentRefRiyadh.current);

    const observerImageRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleRiyadh(true);
          observerImageRiyadh.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (imageRefRiyadh.current) observerImageRiyadh.observe(imageRefRiyadh.current);

    const observerContentKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleKing(true);
          observerContentKing.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (contentRefKing.current) observerContentKing.observe(contentRefKing.current);

    const observerImageKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleKing(true);
          observerImageKing.disconnect();
        }
      },
      { threshold: 0.3 }
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
    <div className="service-overview-area mb-5 mt-3">
      <div className="container">

        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/ar/">
                الصفحة الرئيسية</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="our-experts">أطباؤنا</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              الدكتور وجدي العمري
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-5">

          <div className="col-xl-7 col-md-12">
            <div className="service-overview-content doctor-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? "show" : ""}`}
              >

                الدكتور وجدي العمري
              </h2>
              <p className="profile-text">
                استشاري، الإخصاب وتأخر الحمل </p>
              <p className="profile-text">
                الموقع: بنون – الرياض</p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>
                الدكتور وجدي العمري هو استشاري أمراض النساء والولادة والغدد التناسلية والإخصاب في بنون – الرياض، ويتمتع بخبرة سريرية وأكاديمية تزيد عن 19 عاماً. ويُعرف بدوره

                الريادي في رعاية الخصوبة وصحة المرأة في المملكة العربية السعودية۔

              </p>
              <p>


                من جامعة أم  (MBBS)  حصل الدكتور وجدي على درجة البكالوريوس في الطب والجراحة

                القرى في مكة المكرمة عام 2005، وأكمل شهادة البورد السعودي في أمراض النساء والولادة عام 2014. واصل دراسته التخصصية في فرنسا، حيث نال الزمالة في مجال الغدد التناسلية والعقم وأطفال الأنابيب من مستشفى جامعة مونبيلييه–نيم (2015 – 2017)۔

              </p>

              <p>


                شغل الدكتور وجدي سابقاً منصب استشاري في مدينة الملك سعود الطبية بالرياض، وتولى عدة مناصب قيادية، منها: مدير برنامج الإقامة في قسم النساء والتوليد، ورئيس وحدة الإخصاب وأطفال الأنابيب. كما عمل بين عامي 2014 و2019 كأستاذ مساعد في جامعة المجمعة، وشغل خلالها منصب نائب رئيس قسم النساء والتوليد۔

              </p>
 <p>

                للدكتور وجدي خبرة واسعة في القطاعين الحكومي والخاص، وقد ساهم في العديد

                من الأبحاث في مجال الخصوبة، وشارك كمتحدث في مؤتمرات طبية على مستوى المملكة۔

                ويشارك ،(ALSO) كما يحمل اعتماداً كمدرب في دورة دعم الحياة المتقدم في التوليد

                بفاعلية في التدريب الطبي والتطوير المهني للأطباء۔  </p>

            </div>
          </div>



          <div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
            <img
              className="doctors-overview-image"
              src={imageRiyadh}
              alt="Bnoon Riyadh"
              width={502}
              height={625}
            />
            <div className="mt-3">
              <a
                href="https://book.bnoon.sa/ar"
                className="btn btn-success doctor-profile-btn"
              >
               طلب موعد
              </a>
            </div>
          </div>

          <div className="col-xl-12 col-md-12">
            <div className="service-overview-content doctor-content">

          

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrWajdiAlOmari;
