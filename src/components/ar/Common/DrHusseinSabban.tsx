"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const DrHusseinSabban = () => {
  const imageRiyadh = "https://bnoon.blob.core.windows.net/website/images/doctors/dr-hussein.avif";

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
              الدكتور حسين صبّان
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

                الدكتور حسين صبّان
              </h2>
              <p className="profile-text">
                استشاري أمراض النساء والولادة والإخصاب وتأخر الحمل </p>
              <p className="profile-text">
                الموقع: بنون – جدة  </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">العربية</span>
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">
                  الفرنسية (أساسية)  </span>
              </p>

              <p>
                يُعدّ الدكتور حسين صبّان من الاستشاريين المتميزين في مجال طب النساء والولادة ومتخصص

                في الغدد الصماء التناسلية وعلاجات العقم. يتمتع بخبرة سريرية تتجاوز 17 عاماً، ويقدّم رعاية شاملة

                وإدارة حالات العقم، بالإضافة إلى رعاية الأمراض النسائية  (ART/IVF)  في تقنيات الإخصاب المساعد

                من مرحلة المراهقة وحتى سن الأمل۔

              </p>
              <p>


                حصل الدكتور صبّان على درجة البكالوريوس في الطب والجراحة من جامعة الملك عبدالعزيز بجدة

                وأكمل تدريبه المتقدم في كندا حيث نال البورد الكندي في طب النساء والتوليد  ،(2007/2008)

                إضافة إلى زمالة في الغدد الصماء التناسلية والعقم من جامعة دالهاوزي في كندا. كما ،(FRCSC)

                عام 2017۔ (ABOG) اجتاز الجزء الأول من البورد الأمريكي في طب النساء والتوليد

              </p>

              <p>

                تشمل خبرة الدكتور صبّان مجموعة واسعة من العلاجات المتخصصة في مجال الخصوبة، والإجراءات الكاملة للإخصاب المساعد، إلى جانب الرعاية الشاملة لأمراض النساء والتوليد. كما لديه الخبرة في تشخيص وعلاج حالات العقم المتعلقة بالنساء والرجال ضمن بيئة تراعي الخصوصية الثقافية وتتمحور حول المريض۔

              </p>
              <p>
                يتحدث الدكتور صبّان اللغة العربية، ويتقن اللغة الإنجليزية بطلاقة، ويمتلك إلماماً باللغة الفرنسية، مما يتيح له التعامل مع شرائح متنوعة من المرضى والتعاون مع الخبراء على المستوى العالمي۔</p>

            </div>
          </div>



          <div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center">
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
                طلب موعد
              </Link>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default DrHusseinSabban;
