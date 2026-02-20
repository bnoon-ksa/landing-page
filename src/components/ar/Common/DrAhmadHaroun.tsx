'use client';
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { getBookNowUrl } from '@/utils/booking';

const DrAhmadHaroun = () => {
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
              الدكتور أحمد هارون
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
                الدكتور أحمد هارون
              </h2>
              <p className="profile-text">استشاري جراحة المسالك البولية وأمراض الذكورة والعقم</p>
              <p className="profile-text">الموقع: بنون - جدة </p>
              <p className="profile-text-last">
                اللغات:
                <span className="lang-box">العربية </span>
                <span className="lang-box">الإنجليزية</span>
              </p>

              <p>
                يشغل الدكتور أحمد صالح عبدالله هارون حالياً منصب استشاري جراحة المسالك البولية
                والذكورة في بنون – جدة
                <br />
                بالإضافة إلى عمله كأستاذ مساعد في جراحة المسالك البولية والذكورة في جامعة أم درمان
                الإسلامية في السودان. حصل على درجة البكالوريوس في من جامعة أم درمان الإسلامية عام
                2013 في الطب والجراحة وتابع تخصصه في جراحة  (MBBS)  في الخرطوم، السودان المسالك
                البولية في جامعة العلوم والتكنولوجيا الأردنية، حيث نال درجة الاختصاص العالي في يوليو
                2019. وهو كذلك معتمد من الكلية الملكية للجراحين البريطانية (إدنبرة) منذ عام 2018،
                والمجلس الأردني لجراحة المسالك البولية منذ أغسطس 2019، والمجلس العربي لجراحة المسالك
                البولية منذ فبراير 2020 وكذلك التخصص الدقيق في طب الذكورة والعقم من مجلس التخصصات
                الطبية السودانية منذ 2023۔
              </p>
              <p>
                يتخصص الدكتور هارون في جراحة المسالك البولية وأمراض الذكورة، مع التركيز على حالات
                الدوالي، وعقم الذكور، خاصة عدم وجود الحيوانات المنوية غير الانسدادي. تشمل مساهماته
                البحثية دراسات حول تأثير التبغ على معايير السائل المنوي، ونتائج ربط الدوالي على
                خلايا سيرتولي وليديغ والكثير من الأبحاث المتعلقة بالعقم۔
              </p>
              <p>
                خلال مسيرته المهنية، شارك الدكتور هارون بفعالية في مؤتمرات وورش عمل دولية، حيث قدّم
                نتائج أبحاثه وخبراته. وقد كان متحدثاً في فعاليات مرموقة، منها مؤتمر الجمعية
                الأوروبية لجراحة المسالك البولية في برشلونة عام 2019. وتعكس إنجازاته التزامه بتطوير
                رعاية جراحة المسالك البولية وتحقيق التميز الأكاديمي في السودان وعلى المستوى
                العالمي۔{' '}
              </p>
            </div>
          </div>

          <div className="col-xl-5 col-md-12 d-flex flex-column justify-content-center text-center image-column">
            <OptimizedImage
              imageName="dr-haroun"
              className="doctors-overview-image"
              alt="Bnoon Riyadh"
            />
            <div className="mt-3">
              <a href={getBookNowUrl('ar')} className="btn btn-success doctor-profile-btn">
                طلب موعد
              </a>
            </div>
          </div>

          <div className="col-xl-12 col-md-12">
            <div className="service-overview-content doctor-content"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrAhmadHaroun;
