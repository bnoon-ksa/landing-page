"use client";
import React, { useRef, useState, useEffect } from "react";

const Riyadharea = () => {
  const imageRiyadh = "/images/locations/bnoon-riyadh.avif";
  const imageKingSalman = "/images/locations/bnoon-north-riiyadh.avif";

  const contentRefRiyadh = useRef<HTMLDivElement>(null);
  const imageRefRiyadh = useRef<HTMLDivElement>(null);
  const contentRefKing = useRef<HTMLDivElement>(null);
  const imageRefKing = useRef<HTMLDivElement>(null);

  const [contentVisibleRiyadh, setContentVisibleRiyadh] = useState(false);
  const [imageVisibleRiyadh, setImageVisibleRiyadh] = useState(false);
  const [contentVisibleKing, setContentVisibleKing] = useState(false);
  const [imageVisibleKing, setImageVisibleKing] = useState(false);

  useEffect(() => {
    // Riyadh content
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

    // Riyadh image
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

    // King Salman content
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

    // King Salman image
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
    <div className="service-overview-area mb-5 mt-3 mt-lg-5">
      <div className="container">
        {/* Riyadh Section */}
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-6 col-md-12">
            <div
              ref={contentRefRiyadh}
              className={`service-overview-content animate-left ${contentVisibleRiyadh ? "show" : ""}`}
            >
              <h2>بنون – الرياض </h2>
              <p>
                على  مدار أكثر من 12 عاماً، استطاع مركز "بنون" في الرياض أن يرسّخ مكانته كأحد أكثر المراكز موثوقية في طب الخصوبة وصحة المرأة والرجل في المملكة. من خلال نهج يضع المريض أولاً، يجمع المركز بين الرعاية الإنسانية والتكنولوجيا المتقدمة، ويضم فريقاً من أبرز الاستشاريين في طب الإخصاب، ما جعله وجهة مفضّلة للعائلات الباحثة عن رعاية متخصصة ونتائج ملموسة۔
              </p>
              <p>
                يقدّم المركز باقة شاملة من خدمات الخصوبة، تشمل: أطفال الأنابيب الحقن المجهري التلقيح الصناعي تجميد البويضات والحيوانات المنوية، بالإضافة إلى تحاليل هرمونية دقيقة، تقييمات لحالات الإجهاض المتكرر، وعلاجات تخصصية للرجال، مع خطط علاجية بما يتناسب مع كل حالة۔

              </p>
              <p>
                ويُسجّل "بنون – الرياض" معدلات نجاح تُضاهي، بل تتجاوز في كثير من الأحيان، المعايير

                العالمية — ما يعكس التزامه الثابت بتقديم أفضل النتائج الممكنة۔   </p>

              <div className="d-flex mt-3 gap-4 flex-column flex-md-row">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="Location" width={24} height={24} className="me-2" />
                  <span className="text-color">بنون – الرياض</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/phone.svg" alt="Phone" width={24} height={24} className="me-2" />
                  <span className="text-color">+966 11 444 8080</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="Email" width={24} height={24} className="me-2" />
                  <span className="text-color">info@bnoon.sa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={imageRefRiyadh}
              className={`service-overview-image animate-right ${imageVisibleRiyadh ? "show" : ""}`}
              style={{
                boxShadow: "-50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <img src={imageRiyadh} alt="Bnoon Riyadh" width={580} height={450} />
            </div>
          </div>
        </div>

        {/* King Salman Road Section */}
        <div className="row justify-content-center align-items-center g-4 flex-column-reverse flex-md-row mt-5">
          <div className="col-xl-6 col-md-12  image-loc">
            <div
              ref={imageRefKing}
              className={`service-overview-image animate-left ${imageVisibleKing ? "show" : ""}`}
              style={{
                boxShadow: "50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
                margin: "0 0px 0 50",
              }}
            >
              <img src={imageKingSalman} alt="King Salman Road Facility" width={580} height={450} />
            </div>
          </div>

          <div className="col-xl-6 col-md-12">
            <div
              ref={contentRefKing}
              className={`service-overview-content animate-right ${contentVisibleKing ? "show" : ""}`}
            >
              <h2>
                بنون – طريق الملك سلمان، الرياض{" "}<br />
                <span style={{ fontSize: "16px" }}>(الافتتاح: ديسمبر 2025) </span>
              </h2>
              <p>
                ضمن خطتها لتوسيع الوصول إلى علاجات الإخصاب عالية المستوى في المملكة، تعمل "بنون" على تطوير منشأة طبية متكاملة بمساحة 3,800 متر مربع في شمال الرياض على طريق الملك سلمان، والمقرّر افتتاحها نهاية عام 2025۔

                هذا المركز الرائد صُمّم ليكون من بين أكثر مراكز الخصوبة تطوراً في المنطقة، حيث يجمع تحت سقف واحد بين رعاية الإخصاب، علم الوراثة الإنجابي، وخدمات شاملة لصحة المرأة والرجل۔
              </p>
              <p>
                سيضم المركز مختبرات الإخصاب وعلوم الأجنّة الأحدث من نوعها، مجهّزة بتقنيات حضانة الأجنّة بالتايم لابس، اختيار الأجنة بالذكاء الاصطناعي، الفحص الوراثي المتقدم، وتحليل دقيق للملف الهرموني لكل مريضة۔
              </p>
              <p>
                وستُدار كل خطوة في رحلة العلاج — من الاستشارات الرقمية وحتى تتبّع دورات العلاج لحظياً — عبر تقنيات الصحة الذكية والمنصات الرقمية المتكاملة، لضمان أعلى مستويات الدقة والكفاءة والتخصيص۔
              </p>
              <p>
                "بنون – طريق الملك سلمان" لا يهدف فقط إلى تقديم خدمة طبية، بل يسعى ليكون مرجعاً إقليمياً في طب الإخصاب، ومنصة تواكب تطلعات رؤية السعودية 2030 في الريادة الصحية والابتكار الطبي۔</p>
              <div className="d-flex mt-3 gap-4 flex-column flex-md-row">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="Location" width={24} height={24} className="me-2" />
                  <span className="text-color">بنون – شمال الرياض (قريبًا) </span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/phone.svg" alt="Phone" width={24} height={24} className="me-2" />
                  <span className="text-color">+966 11 444 8080</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="Email" width={24} height={24} className="me-2" />
                  <span className="text-color">info@bnoon.sa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <style jsx global>{`
  span.text-color {
    color: #004E78 !important;
    font-size: 16px !important;
  }
.image-loc{
text-align: right;
}
  /* Mobile Responsive */
  @media (max-width: 767px) {
   span.text-color {
    color: #004E78 !important;
    font-size: 14px !important;
  }
    .image-loc{
text-align: left;
}
  }
`}</style> 
    </div>
  );
};

export default Riyadharea;
