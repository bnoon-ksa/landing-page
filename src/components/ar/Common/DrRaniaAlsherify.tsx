"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DrFawazEdris  = () => {
  const imageRiyadh = "/images/doctors/dr-rania.jpg";

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
            الدكتورة رانيا الشريفي
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
              >الدكتورة رانيا الشريفي
              </h2>
              <p className="profile-text">
             أخصائية أمراض النساء والولادة</p>
              <p className="profile-text">
             الموقع: بنون - الأحساء</p>
             
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
                  <span className="lang-box">الألمانية</span>
              </p>

              <p>تعمل الدكتورة رانيا الشريفي كأخصائية أمراض النساء والولادة في بنون – الأحساء (الواقع داخل مستشفى الموسى التخصصي) وتمتلك بخبرة تمتد لما يقارب ثلاثة عقود في مجال أمراض النساء والولادة وطب الإنجاب، مع تركيز خاص على علاج العقم والخصوبة ورعاية صحة المرأة. وتتمتع الدكتورة رانيا بخبرة علمية وعملية واسعة أهلتها لإدارة العديد من الحالات الدقيقة وتقديم رعاية عالية الجودة للنساء. 
 </p>


 <p>حصلت الدكتورة رانيا على بكالوريوس الطب والجراحة من كلية الطب بجامعة عين شمس في القاهرة عام 1995، ثم نالت درجة الماجستير في أمراض النساء والولادة عام 2000. وفي عام 2014، حصلت على درجة الدكتوراه في العلوم الطبية البيئية من جامعة عين شمس. كما أتمّت في عام 2023 الدبلوم المهني في طب وجراحة الإخصاب المساعد من مستشفى النساء في برمنغهام – المملكة المتحدة، مما أكسبها خبرة متقدمة في مجال تقنيات الحقن المجهري والعقم. 
   </p>
              <p>وقبل انضمامها إلى بنون، عملت في مستشفى الموسى التخصصي، كما عملت كاستشارية للحقن المجهري في مستشفى آدم الدولي للخصوبة، وشغلت منصب مديرة الفرع الشرقي للمستشفى في القاهرة، حيث أسهمت في تطوير خدمات الخصوبة. وتشمل خبراتها تقييم حالات العقم الأولي والثانوي، وتقييم الرحم والمبايض عبر الأشعة التلفزيونية، ومتابعة التحريض الإباضي، بالإضافة إلى تشخيص وعلاج حالات التشنج المهبلي. 
  </p>
             <p>وتؤمن الدكتورة رانيا بأهمية رعاية شاملة ومبنية على الأدلة العلمية، مع الاهتمام بكل تفاصيل رحلة المرضى لضمان أفضل النتائج وتحسين جودة الحياة. </p>
            </div>
          </div>



<div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
  <Image
    className="doctors-overview-image"
    src={imageRiyadh}
    alt="Bnoon Riyadh"
    width={502}
    height={625}
  />
  <div className="mt-3">
    <Link
      href="https://book.bnoon.sa/ar"
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
