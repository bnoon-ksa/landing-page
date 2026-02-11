"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DrFawazEdris  = () => {
  const imageRiyadh = "https://bnoon.blob.core.windows.net/website/images/doctors/dr-fawad.avif";

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
             الدكتور فواز إدريس
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
              >الدكتور فواز إدريس
              </h2>
              <p className="profile-text">
              المدير التنفيذي، بنون – جدة</p>
              <p className="profile-text">
              استشاري طب أمراض النساء والولادة والحمل الحرج وطب الأمومة والأجنة والعقم وأطفال الأنابيب والمناظير</p>
              <p className="profile-text">
              أستاذ مشارك، جامعة أم القرى – مكة المكرمة </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>
           يُعد الدكتور فواز إدريس من الكفاءات الطبية البارزة في مجال أمراض النساء والولادة وعدة تخصصات دقيقة أخرى. ويشغل حالياً منصب المدير التنفيذي لمركز بنون (المعروف سابقاً باسم مركز هيلث بلاس للإخصاب) في جدة، المملكة العربية السعودية، وذلك منذ عام 2019 كما يشغل أيضاً منصب أستاذ مشارك في كلية الطب بجامعة أم القرى في مكة المكرمة۔
 </p>


 <p>
           
يمتلك الدكتور إدريس خبرة واسعة تغطي مختلف جوانب طب النساء والولادة والحمل الحرج، مع تركيز خاص على طب الأجنة، والغدد الصماء التناسلية، وعلاج العقم، وأطفال الأنابيب إضافة إلى جراحات المناظير والتجميل النسائي۔

   </p>
              <p>
          
وقد حصل على البورد الكندي في أمراض النساء والولادة من جامعة بريتيش كولومبيا عام 2003 والبورد الكندي في طب الأمومة والأجنة من جامعة أوتاوا عام 2005 والبورد الكندي في الغدد التناسلية والعقم وأطفال الأنابيب وجراحات المناظير النسائية من جامعة ويسترن أونتاريو عام 2007. كما حصل على الزمالة الأمريكية في أمراض النساء والولادة۔

  </p>
             <p> 
طوال مسيرته العملية، حظي الدكتور إدريس بتقدير واسع نظير إسهاماته في تعزيز صحة المرأة والتعليم الطبي، وهو عضو فعّال في عدد من الجمعيات العلمية المرموقة، من بينها الجمعية الكندية لأطباء النساء والولادة، والكلية الأمريكية لأطباء النساء والولادة، والجمعية الأمريكية لجراحي المناظير النسائية، والجمعية الدولية للتجميل النسائي، والأكاديمية الأمريكية للجراحة التجميلية.</p>
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
    </div>
  );
};

export default DrFawazEdris ;
