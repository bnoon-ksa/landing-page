"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getBookNowUrl } from "@/utils/booking";

const DrMayaAlbezreh = () => {
  const imageRiyadh = "/images/doctors/dr-maya-albezreh.avif";

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
              الدكتورة مايا البزرة
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


                الدكتورة مايا البزرة
              </h2>
              <p className="profile-text">
                استشارية أمراض النساء والولادة وتأخر الحمل</p>
              <p className="profile-text">
                الموقع: بنون - جدة </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>
              <p>
                الدكتورة مايا البزرة تشغل منصب استشارية في طب النساء والتوليد بنون  بمدينة جدة، المملكة العربية السعودية. قبل انضمامها إلى بنون، اكتسبت الدكتورة مايا خبرة قيمة من خلال عملها في عدة مؤسسات طبية مرموقة في المملكة العربية السعودية۔
              </p>
              <p>
                من جامعة دمشق، حيث حققت المرتبة الأولى بين زملائها۔ (MD)  حصلت الدكتورة مايا على درجة الطب

                وأكملت تدريبها في برنامج الإقامة في طب النساء والتوليد في المملكة العربية السعودية، وهي حاصلة حالياً على شهادة البورد في هذا التخصص من الهيئات السعودية والعربية والسورية. تتخصص الدكتورة مايا في تقديم الرعاية الطبية الشاملة للحمل والولادة وأمراض النساء، لا سيما تلك التي تؤثر على الجهاز التناسلي. وقد قدمت أوراقاً علمية في العديد من المؤتمرات المحلية، مما يعكس التزامها بتطوير المعرفة الطبية في مجالها۔
              </p>
              <p>
                تشمل إنجازات الدكتورة مايا البزرة حصولها على لقب الطالبة الأولى في دفعتها عند التخرج من جامعة دمشق. كما أنها عضو في ثلاث هيئات طبية مرموقة في مجال طب النساء والتوليد، وهو ما يعكس حرصها على الالتزام بأعلى معايير الممارسة المهنية. وتساهم طلاقتها في اللغتين العربية والإنجليزية في تعزيز قدرتها على تقديم رعاية رحيمة وتواصل فعّال مع مرضاها۔ </p>
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

export default DrMayaAlbezreh;
