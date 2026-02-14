"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl } from "@/utils/booking";

const DrRazanGhaith  = () => {
  const imageRiyadh = "/images/doctors/dr-razan-ghaith.avif";

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
                  الدكتورة رزان غيث
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
الدكتورة رزان غيث
              </h2>
              <p className="profile-text">
             استشارية أمراض النساء والولادة وتأخر الحمل </p>
              <p className="profile-text">
        الموقع: بنون - جدة </p>
              <p className="profile-text-last">
               اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>
          الدكتورة رزان غيث هي استشارية في طب النساء والتوليد والعقم في بنون بمدينة

جدة منذ عام 2021. عملت الدكتورة رزان في العديد من المؤسسات الطبية داخل المملكة

من جامعة الملك  (M.D)  العربية السعودية وخارجها. وقد حصلت على درجة الطب

عبدالعزيز عام 2009، وأكملت برنامج الإقامة في طب النساء والتوليد بمستشفى الحرس الوطني في جدة، ثم تابعت دراساتها العليا لتحصل على درجة الماجستير في علم الأجنة السريري من جامعة موناش في ملبورن، أستراليا۔

​ </p> <p>

تتخصص الدكتورة رزان في إدارة حالات تأخر الإنجاب، وتشرف على الرعاية العامة للنساء والتوليد بما يشمل رعاية ما قبل الولادة والولادات والإجراءات الجراحية۔

 </p> <p>

تلتزم الدكتورة غيث بالتعامل مع احتياجات واهتمامات كل زوجين بشكل فردي، وهدفها هو تقديم خيارات علاجية شاملة ومساعدة الأزواج على تحقيق أفضل النتائج الممكنة۔  </p>
            </div>
          </div>




          <div className="col-xl-5 col-md-12 image-column">
            <div>
              <Image
                className="doctors-overview-image"
                src={imageRiyadh}
                alt="Bnoon Riyadh"
                width={502}
                height={625}
              />
            </div>
            <div className="text-center mt-3">
              <a
                href={getBookNowUrl("ar")}
                className="btn btn-success doctor-profile-btn"
              >
               طلب موعد
              </a>
            </div>
          </div>
        
       
        </div>
      </div>
    </div>
  );
};

export default DrRazanGhaith;
