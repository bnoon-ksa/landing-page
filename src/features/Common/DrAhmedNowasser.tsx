"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrFawazEdris  = () => {
  const imageRiyadh = "/images/doctors/dr-nowasser.jpg";

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
          {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="mt-lg-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/ar/">
                الصفحة الرئيسية</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="our-experts">أطباؤنا</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
           الدكتور بسام نصير 
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-lg-5">

          <div className="col-xl-7 col-md-12">
            <div className="service-overview-content doctor-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? "show" : ""}`}
           >الدكتور أحمد النويصر
              </h2>
              <p className="profile-text">
           استشاري أمراض النساء والولادة  والعقم وأطفال الأنابيب والمناظير</p>
              <p className="profile-text">
             الموقع: بنون - الأحساء</p>
             
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>يعمل الدكتور أحمد علي النويصر كاستشاري أمراض النساء والولادة  والعقم وأطفال الأنابيب والمناظير 
في بنون – الأحساء ويعدّ من الكفاءات الطبية البارزة بخبرة تتجاوز سبعة عشر عاماً في رعاية صحة المرأة، وتقنيات الإخصاب المساعد ومتابعة الحمل عالي الخطورة، وجراحات المناظير النسائية.  </p>

 <p>صل الدكتور أحمد على درجة البكالوريوس في الطب والجراحة من جامعة دمشق عام 2008، ثم نال الدبلوم المهني في إدارة المستشفيات من جامعة عين شمس عام 2014. ويحمل كلاً من البورد العربي والبورد السعودي في أمراض النساء والولادة منذ عام 2014، مما يعكس تأهيله الراسخ في هذا التخصص. كما أتمّ زمالة الجراحات طفيفة التوغل (المناظير) عام 2015، ثم زمالة تقنيات الإخصاب المساعد عام 2019 في الهند وأكمل زمالة في الطب التناسلي وأطفال الأنابيب من مركز IVI في إسبانيا وشهادة الطب في الطب الإنجابي من جامعة فالانسيا في إسبانيا، ما رسخ خبرته في مجال علاج العقم والطب التناسلي. </p>
              <p>على مدى مسيرته المهنية، عمل الدكتور النواصر استشارياً للنساء والولادة في مستشفى الولادة والأطفال بالأحساء منذ عام 2009، وأسهم في تطوير خدمات الأمومة وصحة المرأة، وإدارة العديد من الحالات الدقيقة والمعقدة وفي مستشفى الولادة والأطفال بنجران كما يعمل حالياً في ضمن عيادة أمراض النساء والولادة في مستشفى الموسى التخصصي. 

 
  </p>
             <p>يواصل الدكتور أحمد مساهماته في برامج التعليم الطبي المستمر، وتدريب الكوادر الطبية وتقديم رعاية شاملة ومتكاملة للنساء في مختلف مراحل حياتهن والمشاركة في المبادرات التوعوية الداعمة لصحة المرأة في مختلف مناطق المملكة. 

  </p>
            </div>
          </div>



<div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column doc-image">
  <img
    className="doctors-overview-image"
    src={imageRiyadh}
    alt="Bnoon Riyadh"
    width={502}
    height={625}
  />
  <div className="mt-3">
    <Link
      href="request-an-appoinment"
      className="btn btn-success doctor-profile-btn"
    >
     طلب موعد
    </Link>
  </div>
</div>

       
        </div>
      </div>
        <style jsx global>{`

  /* Mobile Responsive */

`}</style>
    </div>
  );
};

export default DrFawazEdris ;
