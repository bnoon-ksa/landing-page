"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl, isExternalBooking } from "@/utils/booking";

const DrAhmedAlshaikh = () => {
  const imageRiyadh = "/images/doctors/dr-ahmed-bekar.avif";

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
              الدكتور أحمد الشيخ
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

                الدكتور أحمد الشيخ
              </h2>
              <p className="profile-text">
                استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب/الحقن المجهري والمناظير والغدد الصماء التناسلية  </p>
              <p className="profile-text">
                الموقع: بنون - جدة </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>
                الدكتور أحمد باكر الشيخ هو استشاري متميز في طب الغدد الصماء التناسلية والخصوبة وتقنيات  (REI)

                في بنون بمدينة جدة، المملكة العربية السعودية. شغل سابقاً  منصب (ART, IVF)   الإنجاب المساعدة

                أستاذ مساعد في قسم النساء والتوليد بجامعة الجوف، حيث نظم دورات لطلاب الطب في السنوات الرابعة والخامسة والسادسة. كما شغل منصب استشاري في النساء والتوليد في مستشفى الولادة والأطفال، متخصصاً في عقم النساء والغدد الصماء وحفظ الخصوبة.
              </p>
              <p>
                أكمل برنامج تدريب الزمالة في طب الغدد الصماء التناسلية والخصوبة في مستشفى جامعة كارولينسكا / ستوكهولم تحت إشراف الأستاذ ماتس برانستروم. حصل الدكتورالشيخ على درجة الدكتوراه عن بحثه حول تطوير مبايض هندسية للحفاظ على الخصوبة بأمان لدى مرضى سرطان الدم الإناث، مع التركيز على الدراسات الأساسية في النماذج الحيوانية۔
              </p>
              <p>
                يمتد تخصص الدكتور الشيخ في مجال طب الغدد الصماء التناسلية والعقم، حيث يتخصص في تقنيات

                تشمل ممارسته السريرية إدارة  (IVF)  مثل التلقيح الصناعي  (ART)   الإنجاب المساعدة المتقدمة

                الحالات المعقدة للعقم واضطرابات التكاثر واستراتيجيات الحفاظ على الخصوبة. يشتهر الدكتور الشيخ بمساهماته البحثية في مجال هندسة المبايض والتزامه بتطوير الطب التناسلي من خلال التقنيات المبتكرة۔
              </p> <p>
                تم الاعتراف بالدكتور أحمد باكر الشيخ لمساهماته البارزة في مجال طب الغدد الصماء التناسلية والعقم. كانت أبحاث الدكتوراه التي أجراها تحت إشراف الأستاذ ماتس برانستروم محورية في مجال الحفاظ على الخصوبة. قدم نتائج أبحاثه في العديد من المؤتمرات الوطنية والدولية، بما في ذلك نشرات في مجلات علمية مرموقة۔</p>

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
                href={getBookNowUrl("ar")}
                className="btn btn-success doctor-profile-btn"
                {...(isExternalBooking() ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

export default DrAhmedAlshaikh;
