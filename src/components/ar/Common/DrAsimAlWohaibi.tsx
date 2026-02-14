"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl, isExternalBooking } from "@/utils/booking";

const DrAsimAlWohaibi = () => {
  const imageRiyadh = "/images/doctors/dr-asim.avif";

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
              الدكتور عاصم الوهيبي
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

                الدكتور عاصم الوهيبي
              </h2>
              <p className="profile-text">
                استشاري الإخصاب وتأخر الحمل</p>
              <p className="profile-text">
                الموقع: بنون – الرياض  </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية </span>
                <span className="lang-box">الفرنسية </span>
              </p>

              <p>
                الدكتور عاصم الوهيبي استشاري في الغدد التناسلية والخصوبة وأمراض النساء والولادة في مركز بنون – الرياض  ويتمتع بخبرة تتجاوز عشر سنوات في هذا المجال، وقد تلقى تدريبه المتقدم في فرنسا، وشغل مناصب قيادية في عدد من أبرز المؤسسات الطبية في المملكة. تشمل مجالات خبرته حالات العقم المعقدة، الاضطرابات الهرمونية، جراحات المناظير النسائية وحفظ الخصوبة۔

              </p>
              <p>

                من جامعة الملك عبدالعزيز  (MBBS)  حصل على درجة البكالوريوس في الطب والجراحة

                (DES)  بجدة عام 2008، ثم أكمل دراسته التخصصية في فرنسا. نال شهادة البورد الفرنسي

                في أمراض النساء والولادة من جامعة باريس ديكارت (2010–2017)، ثم تخصّص في مجال الغدد

                (2018–2021) لمدة ثلاث سنوات في الجامعة ذاتها DESC  التناسلية والخصوبة من خلال برنامج

                كما حصل على دبلوم في الغدد التناسلية والخصوبة (2019–2021)، ودبلوم في جراحة المناظير النسائية من جامعة كليرمون فيران، فرنسا .(2014 – 2013)

              </p>

              <p>

                إلى جانب عمله في بنون، يشغل الدكتور عاصم أيضاً منصب أستاذ مساعد واستشاري في الغدد التناسلية والخصوبة بجامعة الملك سعود في الرياض. كما تولى منصب مدير برنامج الإقامة في أمراض النساء والولادة بين عامي 2021 و2024، وكان رئيس وحدة أطفال الأنابيب في المدينة الطبية الجامعية خلال عامي 2022 و2023۔

              </p>
              <p>يتقن الدكتور الوهيبي اللغات العربية والإنجليزية والفرنسية۔</p>

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


        </div>
      </div>
    </div>
  );
};

export default DrAsimAlWohaibi;
