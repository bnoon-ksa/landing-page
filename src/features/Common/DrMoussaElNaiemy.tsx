"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DrMoussaElNaiemy = () => {
  const imageRiyadh = "/images/doctors/dr-moussa.avif";

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
              الدكتور موسى  النعمي
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

                الدكتور موسى  النعمي
              </h2>
              <p className="profile-text">
                استشاري أمراض الذكورة والعقم </p>
              <p className="profile-text">
                الموقع: بنون – الرياض  </p>

              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>
              <p>
                يُعد الدكتور موسى النعيمي من الأطباء البارزين في مجال جراحة المسالك البولية وأمراض الذكورة والعقم لدى الرجال، ويتمتع بخبرة سريرية وأكاديمية تمتد لأكثر من ثلاثة عقود في المملكة العربية السعودية وأمريكا الشمالية. قبل انضمامه إلى مركز بنون في الرياض، عمل كاستشاري في أمراض المسالك البولية والذكورة والعقم لدى الرجال في مستشفى القوات المسلحة بالرياض منذ عام 2010. ويُعرف بخبرته الواسعة في صحة الرجل الإنجابية، ضعف الانتصاب، مرض بيروني، وتقنيات استخراج الحيوانات المنوية المتقدمة۔
              </p>
              <p>
                تخرج الدكتور النعيمي من جامعة الملك سعود (بكالوريوس الطب والجراحة)، وحصل على شهادة الاختصاص السعودي في جراحة المسالك البولية عام 2003، وأكمل زمالة متميزة في أمراض الذكورة والمسالك البولية في جامعة ويسترن أونتاريو في كندا بين عامي 2006 و2008. ويحمل أيضا@ البورد السعودي في المسالك البولية منذ عام 2004. شغل عدة مناصب قيادية في مؤسسات طبية متعددة، وكان له دور محوري في إدخال بروتوكولات حديثة مثل الموجات الصوتية دوبلر عالية الدقة لتشخيص ضعف الانتصاب، وتحديث معايير تحليل السائل المنوي بما يتماشى مع معايير منظمة الصحة العالمية۔
              </p>
              <p>
                يُعد الدكتور النعيمي مساهماً نشطاً في المجال الأكاديمي، حيث قدم أكثر من 30 بحثاً في

                ،(AUA) مؤتمرات علمية محلية ودولية، بما في ذلك الجمعية الأمريكية لجراحة المسالك البولية

                ،(ESSM) والجمعية الأوروبية للطب الجنسي ،(ESHRE) والجمعية الأوروبية لطب الإنجاب وعلم الأجنة

                ۔ كما نُشرت أبحاثه في مجلات مرموقة مثل(MEFS) وجمعية الشرق الأوسط للخصوبة

                ۔European Urology  وUrology Annals وBasic and Clinical Andrology
   </p>
              <p>
                ويشارك الدكتور النعيمي بانتظام في المحاضرات والندوات والمؤتمرات كمتحدث ورئيس جلسات، ويركز في أبحاثه على تحسين نتائج علاج العقم لدى الرجال والطب الجنسي، مما جعله شخصية مرجعية في تطوير الممارسة الطبية في هذا المجال في المنطقة۔  </p>


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

export default DrMoussaElNaiemy;
