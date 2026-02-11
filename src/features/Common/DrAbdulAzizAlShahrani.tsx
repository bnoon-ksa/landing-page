"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrAbdulAzizAlShahrani = () => {
  const imageRiyadh = "/images/doctors/dr-abdulaziz.avif";

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
              الدكتور عبدالعزيز الشهراني
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
                الدكتور عبدالعزيز الشهراني
              </h2>
              <p className="profile-text">
                المدير الطبي لمجموعة بنون</p>
              <p className="profile-text">
                استشاري أمراض النساء والولادة، والغدد الصماء التناسلية، والعقم (أطفال الأنابيب)، وجراحة المناظير النسائية   </p>
              <p className="profile-text">
                الموقع: بنون – الرياض</p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">العربية</span>
                <span className="lang-box">الإنجليزية</span>
              </p>

              <p>
                يُعد الدكتور عبدالعزيز الشهراني من أبرز الاستشاريين في مجال أمراض النساء والولادة، والعقم، وأطفال الأنابيب، وجراحة المناظير النسائية، ويشغل حالياً منصب استشاري والمدير الطبي لمجموعة بنون في المملكة العربية السعودية. يمتلك الدكتور الشهراني خبرة تمتد لنحو ثلاثة عقود في طب الإنجاب، ويُعرف بتميزه الطبي ودوره الريادي في

                تطوير خدمات الخصوبة في المملكة۔

              </p>
              <p>


                حصل على شهادة البكالوريوس في الطب والجراحة (MBBS) من جامعة الملك سعود عام 1994، ثم حصل على البورد السعودي في أمراض النساء والولادة عام 1999. أكمل الزمالة في العقم وجراحة المناظير في مستشفى الملك فيصل التخصصي عام 2003، ثم حصل على الزمالة في مجال أطفال الأنابيب وطب الإنجاب والجراحة الإنجابية في جامعة ماكغيل بمدينة مونتريال، كندا، عام 2005۔


              </p>
              <p>

                الدكتور عبدالعزيز عضو نشط في عدد من الجمعيات المتخصصة، منها: الجمعية الشرق أوسطية للخصوبة (MEFS)، والجمعية الأمريكية لطب الإنجاب (ASRM)، والجمعية الأوروبية لطب الإنجاب وعلم الأجنة (ESHRE). كما يشغل منصب عضو مؤسس ونائب رئيس الجمعية السعودية لصحة المرأة. ويشارك بانتظام في المؤتمرات العلمية ويقود العديد من الورش التدريبية في المنطقة۔


              </p>
             
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
              <a
                href="https://book.bnoon.sa/ar"
                className="btn btn-success doctor-profile-btn"
              >
               طلب موعد
              </a>
            </div>
          </div>
          <div className="col-xl-12 col-md-12">
            <div className="service-overview-content">
              <p>

                قبل تأسيسه لمركز بنون الطبي في الرياض، عمل الدكتور الشهراني كاستشاري في عدد من أبرز مراكز الإخصاب في المملكة. ومنذ عام 2013، تولى إدارة مركز بنون - الرياض كمدير طبي واستشاري، حيث لعب دوراً محورياً في تطوير المركز ليصبح وجهة موثوقة في مجال الصحة الإنجابية وجراحات المناظير النسائية المتقدمة۔</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAbdulAzizAlShahrani;
