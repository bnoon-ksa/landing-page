'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getBookNowUrl } from '@/utils/booking';

const DrMazinBishara = () => {
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
      { threshold: 0.3 },
    );
    if (contentRefRiyadh.current) observerContentRiyadh.observe(contentRefRiyadh.current);

    const observerImageRiyadh = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleRiyadh(true);
          observerImageRiyadh.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (imageRefRiyadh.current) observerImageRiyadh.observe(imageRefRiyadh.current);

    const observerContentKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContentVisibleKing(true);
          observerContentKing.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (contentRefKing.current) observerContentKing.observe(contentRefKing.current);

    const observerImageKing = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisibleKing(true);
          observerImageKing.disconnect();
        }
      },
      { threshold: 0.3 },
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
              <Link href="/ar/">الصفحة الرئيسية</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="our-experts">أطباؤنا</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              الدكتور مازن بشارة
            </li>
          </ol>
        </nav>

        {/* Riyadh Section */}
        <div className="row g-4 mt-5">
          <div className="col-xl-7 col-md-12">
            <div className="service-overview-content doctor-content">
              <h2
                ref={contentRefRiyadh}
                className={`animate-left ${contentVisibleRiyadh ? 'show' : ''}`}
              >
                الدكتور مازن بشارة
              </h2>
              <p className="profile-text">المدير الطبي، بنون – جدة</p>
              <p className="profile-text">استشاري أمراض النساء والولادة والعقم وأطفال الأنابيب </p>
              <p className="profile-text">الموقع: بنون - جدة </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">الإنجليزية</span>
                <span className="lang-box">العربية</span>
              </p>

              <p>
                الدكتور مازن بشارة هو استشاري مخضرم متخصص في طب النساء والتوليد والعقم وجراحات
                المناظير والمدير الطبي في بنون بمدينة جدة، المملكة العربية السعودية. يتمتع الدكتور
                بشارة بخبرة تزيد على 28 عاماً، وقد شغل مناصب بارزة في مؤسسات طبية رائدة في المملكة
                العربية السعودية وكندا۔
              </p>
              <p>
                ​  من جامعة الملك عبدالعزيز في المملكة العربية  (MD) وقد حصل على درجة الطب​ السعودية
                عام 1991 ثم أكمل برنامج الإقامة في طب النساء والتوليد بجامعة مانيتوبا في وينيبيغ،
                كندا، عام 2000. وواصل تدريبه من خلال زمالة في مجال الغدد الصماء التناسلية والعقم
                والجراحة التنظيرية في جامعة ماكغيل بمدينة مونتريال، كندا، عام 2002۔{' '}
              </p>

              <p>
                ​ يحظى الدكتور بشارة بالتقدير الواسع لإسهاماته الكبيرة في مجال صحة المرأة من خلال
                العديد من المنشورات والفصول في الكتب والعروض التقديمية في المؤتمرات الوطنية
                والدولية. وقد ألّف العديد من فصول الكتب في مجاله وقدم عدة أوراق بحثية، مما  يعكس
                التزامه بتطوير المعرفة الطبية. الدكتور بشارة عضو متميز في جمعيات طبية مرموقة تشمل
                الجمعية الكندية لأطباء النساء والتوليد، والكلية الأمريكية لأطباء النساء والتوليد،
                والجمعية الأمريكية لجراحة الإنجاب۔{' '}
              </p>
            </div>
          </div>

          <div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
            <OptimizedImage
              imageName="dr-mazin-bishra"
              className="doctors-overview-image"
              alt="Bnoon Riyadh"
            />
            <div className="mt-3">
              <a href={getBookNowUrl('ar')} className="btn btn-success doctor-profile-btn">
                طلب موعد
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrMazinBishara;
