"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrMaramDadoua = () => {
  const imageRiyadh = "/images/doctors/dr-maram.avif";

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
              الدكتورة مرام دعدوع
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
                الدكتورة مرام دعدوع
              </h2>
              <p className="profile-text">
                نائب أول، أمراض النساء والولادة</p>
              <p className="profile-text">
                الموقع: بنون - جدة  </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>
                الدكتورة مرام دعدوع هي طبيبة نساء وتوليد متمرسة تتمتع بخبرة إكلينيكية تزيد عن عشر سنوات في المملكة العربية السعودية والأردن، مع تركيز خاص على تقنيات الإخصاب المساعد. تعمل حالياً في بنون - جدة، حيث تختص بتقييم الخصوبة، وتخطيط برامج أطفال الأنابيب، وتقديم الاستشارات للمرضى، بالإضافة إلى إجراءات الإخصاب المساعد مثل سحب البويضات،ونقل الأجنة، والتلقيح  داخل الرحم

                ۔(IUI)
              </p>
               <p>
                تحمل الدكتورة مرام شهادة بكالوريوس في الطب البشري من جامعة حلب، وأتمّت برنامج الإقامة لمدة خمس سنوات في طب النساء والتوليد في مستشفى الأمل للأمومة بالأردن، حيث أشرفت على غرف الولادة والحالات الطارئة، وأجرت العمليات النسائية الروتينية والمتقدمة، بما في ذلك مناظير البطن والرحم والإجراءات التجميلية۔
              </p>
              <p>
                منذ عام 2022 وحاصلة على تصنيف (MRCOG) هي عضو في الكلية الملكية لأطباء  النساء

                تتابع حالياً دبلوماً متقدماً في طب  .(SCFHS) نائب أول" من الهيئة السعودية للتخصصات الصحية"

                ،وجراحة الإنجاب، وتحمل عدداً من الشهادات المتخصصة في الإخصاب المساعد، والتلقيح داخل الرحم

                بعنوان  MAR  ونقل الأجنة، وحالات الولادة الطارئة. وقد نشرت في عام 2022 دراسة علمية في مجلة

                نتائج تنظير البطن لدى النساء المصابات بالعقم الأولي مقابل الثانوي"، وتشارك بانتظام في مؤتمرات  إقليمية ودولية في مجال الخصوبة۔
              </p>
              <p>
                تتقن اللغة العربية والإنجليزية، تجمع بين الكفاءة الطبية والحس الثقافي ونهج يركز على المريضة، مما يجعلها من الأطباء الموثوقين في رعاية النساء من سن المراهقة وحتى سن انقطاع الطمث۔ </p>
            </div>
          </div>

          <div className="col-xl-5 col-md-12 image-column">
            <div>
              <img
                className="doctors-overview-image"
                src={imageRiyadh}
                alt="Bnoon Riyadh"
                width={502}
                height={625}
              />
            </div>
            <div className="text-center mt-3">
              <Link
                href="https://book.bnoon.sa/ar"
                className="btn btn-success doctor-profile-btn"
              >
                طلب موعد
              </Link>
            </div>
          </div>
          <div className="col-xl-12 col-md-12">
            <div className="service-overview-content">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrMaramDadoua;
