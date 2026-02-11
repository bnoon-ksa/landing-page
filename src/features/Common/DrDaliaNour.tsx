"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrDaliaNour = () => {
  const imageRiyadh = "/images/doctors/dr-dalia.avif";

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
              الدكتورة داليا  نور
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

                الدكتورة داليا  نور
              </h2>
              <p className="profile-text">
                استشارية أمراض النساء والولادة وتأخر الحمل </p>
              <p className="profile-text">
                الموقع: بنون – الرياض </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">العربية</span>
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">الألمانية (أساسية) </span>
              </p>

              <p>
                تشغل الدكتورة داليا نور منصب استشارية في أمراض النساء والتوليد والعقم في بنون – الرياض منذ عام 2022، وهي طبيبة ذات مسيرة مهنية متميزة تجمع بين العمل الأكاديمي والخبرة الإكلينيكية في كل من المملكة العربية السعودية وجمهورية مصر العربية. وتشغل حاليًا أيضًا منصب أستاذ مساعد في كلية الطب – جامعة القاهرة۔
              </p>
              <p>
                من جامعة القاهرة (MBBCh) حصلت الدكتورة داليا على درجة البكالوريوس في الطب والجراحة

                عام 2007 بتقدير امتياز مع مرتبة الشرف، ثم أنهت سنة الامتياز في مستشفيات جامعة القاهرة عام

                2008، وتبعها برنامج الإقامة الطبيه لمدة ثلاث سنوات في قسم النساء والتوليد بمستشفى قصر العيني – جامعة القاهرة. في عام 2012، حصلت على درجة الماجستير في أمراض النساء والتوليد،        وانضمت إلى الهيئة التدريسية كمعيدة. وفي عام 2018، نالت درجة الدكتوراه

                وتمت ترقيتها إلى أستاذ مساعد في يوليو 2025۔ ،(MD/PhD)
              </p>
              <p>
                منذ عام 2018، تخصصت الدكتورة داليا في علاج العقم وتقنيات أطفال الأنابيب، حيث عملت في وحدة الإخصاب بمستشفيات جامعة القاهرة، إلى جانب عدد من المراكز الرائدة في مصر في مجال الإخصاب المساعد. كما تُعد عضواً۔
              </p>
              <p>
                نشطاً في هيئة التدريس لدبلوم أطفال الأنابيب بجامعة القاهرة، وشاركت في العديد من الورش التدريبية المتخصصة في هذا المجال۔
              </p>   </div>
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
          <p>
            تحمل الدكتورة داليا الدبلوم الأمريكي في الإجراءات التجميلية النسائية، كما حصلت على شهادات متخصصة في التنظير الرحمي التشخيصي والعلاجي. وأتمّت الجزء الأول من عضوية الكلية الملكية (MRCOG – Part 1) لأطباء النساء والولادة في المملكة المتحدة
          </p> <p>تعكس خبرتها الواسعة مزيجاً من التميّز الأكاديمي والرعاية الفردية، لا سيما في مجالات العقم المتقدم، وجراحة النساء، والصحة الشاملة للمرأة۔
          </p>
        </div>
      </div>
    </div>
  );
};

export default DrDaliaNour;
