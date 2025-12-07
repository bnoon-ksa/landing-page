"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const DrFawazEdris  = () => {
  const imageRiyadh = "/images/doctors/dr-median.jpg";

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
          الدكتور مدين الخلف
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
           >الدكتور مدين الخلف
              </h2>
              <p className="profile-text">
          استشاري أمراض النساء والولادة </p>
              <p className="profile-text">
             الموقع: بنون - الأحساء</p>
             
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p> 

يُعدّ الدكتور مدين الخلف من أبرز استشاريي أمراض النساء والولادة في بنون – الأحساء، بخبرة تتجاوز 25 عاماً في إدارة حالات العقم، وتقنيات أطفال الأنابيب والحقن المجهري، واضطرابات الغدد التناسلية، إضافة إلى الخبرة الواسعة في مناظير النساء التشخيصية والعلاجية. 
 </p>

 <p>حصل الدكتور مدين على درجة الدكتوراه في العلوم الطبية السريرية من جامعة سراييفو للعلوم والتكنولوجيا في البوسنة، حيث ركّز بحثه على بروتوكولات تنشيط المبايض ومؤشرات استقبالية بطانة الرحم والدوبلر، مساهماً في تطوير ممارسات علاجية دقيقة في مجال علاجات الإخصاب. كما نال درجة الماجستير في طب الإنجاب والغدد التناسلية من جامعة "إيان دونالد" الدولية في كرواتيا، إلى جانب تدريبات دولية متقدمة في تقنيات الإخصاب المساعد في المملكة المتحدة وأوروبا والهند وتركيا والأردن. ويحمل شهادة الطب من جامعة دمشق منذ عام 1999. 

 </p>
              <p>وهو حاصل على البورد العربي في أمراض النساء والولادة منذ عام 2007، إلى جانب عدد من الزمالات وشهادات الدبلوم التخصصية في طب وجراحة العقم المناظير النسائية والسونار المتقدم. وقد أكم ل عدد من البرامج التدريبية المتقدمة في مستشفى برمنغهام للنساء – لندن، وأكاديمية نادكارني لأطفال الأنابيب – الهند، وجامعة يدتيبه – تركيا، ومراكز رائدة للإخصاب في الأردن. 

 
 
  </p>
             <p>يشغل الدكتور مدين أيضاً منصب استشاري أمراض نساء وولادة وعقم في مستشفى الموسى التخصصي منذ عام 2011، كما يشرف على تدريب الأطباء كمدير لبرنامج الإقامة في تخصص النساء والولادة. وتشمل خبراته بروتوكولات تنشيط المبايض وتقييم تدفق الدم للرحم وبطانته وعلاج تكيس المبايض ورعاية الحمل عالي الخطورة. 

  </p>
  <p>وفي الجانب الأكاديمي، يمتلك الدكتور مدين سجلاً بحثياً مميزاً، إذ نشر عدداً من الأبحاث العلمية حول أدوية تنشيط الإباضة، ومؤشرات الأوعية الدموية في بطانة الرحم، ودور دوبلر كأداة تنبؤية لنتائج الحمل—مما يعزز دوره في تطوير ممارسات علاجية ترتكز على أحدث المعايير العلمية في طب الإنجاب. </p>
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
