
"use client";
import React from "react";
import { motion, Variants, easeOut } from "framer-motion";

const OurLocations = () => {
  const imageRiyadh = "/images/locations/bnoon-riyadh.avif";
  const imageJeddah = "/images/locations/bnoon-jeddah.avif";
  const imageKingSalman = "/images/locations/bnoon-north-riiyadh.avif";
 const imageAlahsa = "/images/locations/bnoon-alahsa.jpg";
  // Motion variants
  const variantsLeft: Variants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const variantsRight: Variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="service-overview-area mb-5 mt-5">
      <div className="container">

        {/* Riyadh Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-6 col-md-12" variants={variantsRight}>
            <div className="service-overview-content">
              <h2>بنون – الرياض</h2>
              <p>
                على مدار أكثر من 12 عاماً، استطاع مركز "بنون" في الرياض أن يرسّخ مكانته كأحد أكثر المراكز موثوقية في طب الخصوبة وصحة المرأة والرجل في المملكة. من خلال نهج يضع المريض أولاً، يجمع المركز بين الرعاية الإنسانية والتكنولوجيا المتقدمة، ويضم فريقاً من أبرز الاستشاريين في طب الإخصاب، ما جعله وجهة مفضّلة للعائلات الباحثة عن رعاية متخصصة ونتائج ملموسة.
              </p>
              <p>
                يقدّم المركز باقة شاملة من خدمات الخصوبة، تشمل: أطفال الأنابيب، الحقن المجهري (ICSI)، التلقيح الصناعي، تجميد البويضات والحيوانات المنوية، بالإضافة إلى تحاليل هرمونية دقيقة، تقييمات لحالات الإجهاض المتكرر، وعلاجات تخصصية للرجال، مع خطط علاجية بما يتناسب مع كل حالة.
              </p>
              <p>
                ويُسجّل "بنون – الرياض" معدلات نجاح تُضاهي، بل تتجاوز في كثير من الأحيان، المعايير العالمية — ما يعكس التزامه الثابت بتقديم أفضل النتائج الممكنة.
              </p>

              <div className="d-flex align-items-center mt-3 gap-4 flex-wrap">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="location" width={24} height={24} className="me-2" />
                  <span className="text-color">بنون – الرياض</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/phone.svg" alt="phone" width={24} height={24} className="me-2" />
                  <span className="text-color">+966 11 444 8080</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="mail" width={24} height={24} className="me-2" />
                  <span className="text-color">info@bnoon.sa</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div
              className="service-overview-image"
              style={{ boxShadow: "-50px 50px 0px #d7f2fb", overflow: "hidden", display: "inline-block" }}
            >
              <img src={imageRiyadh} alt="بنون الرياض" width={580} height={450} />
            </div>
          </motion.div>
        </motion.div>

        {/* Jeddah Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4 mt-5 flex-column-reverse flex-md-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-5 col-md-12" variants={variantsRight}>
            <div
              className="service-overview-image"
              style={{ boxShadow: "50px 50px 0px #d7f2fb", overflow: "hidden", display: "inline-block" }}
            >
              <img src={imageJeddah} alt="بنون جدة" width={580} height={450} />
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div className="service-overview-content">
              <h2>بنون – جدة</h2>
              <p>
                انضم إلى شبكة "بنون" في يونيو 2025 (وكان يُعرف سابقاً بمركز "هيلث بلس للإخصاب – جدة" منذ افتتاحه عام 2019)، ويواصل المركز تقديم خدمات رعاية خصوبة متقدمة، مع الحفاظ على السمعة الطبية المرموقة والثقة التي بناها في المجتمع.
              </p>
              <p>
                وبصفته مركزاً معتمداً من اللجنة الدولية المشتركة، يقدّم "بنون – جدة" مجموعة متكاملة من الخدمات، تشمل: أطفال الأنابيب، الحقن المجهري، حفظ الخصوبة، الفحوصات الجينية، التحاليل الهرمونية، وتشخيصات دقيقة لحالات العقم لدى الرجال والنساء بالإضافة إلى أمراض الذكورة.
              </p>
              <p>
                ويعتمد المركز على تقنيات حديثة تشمل أنظمة مراقبة الأجنّة بتقنية التايم لابس، تخطيط علاجي مدعوم بالذكاء الاصطناعي، ومنصات رقمية لمتابعة المريض، مما يوفّر تجربة علاجية شخصية ترتكز على الأدلة العلمية وتُعزّز من راحة المرضى بمعدلات نجاح تتماشى مع النسب العالمية.
              </p>

              <div className="d-flex align-items-center mt-3 gap-4 flex-wrap">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="location" width={24} height={24} className="me-2" />
                  <span className="text-color">بنون – جدة</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/phone.svg" alt="phone" width={24} height={24} className="me-2" />
                  <span className="text-color">+966 12 680 0800</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="mail" width={24} height={24} className="me-2" />
                  <span className="text-color">info.jeddah@bnoon.sa</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* King Salman Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-6 col-md-12" variants={variantsRight}>
            <div className="service-overview-content">
              <h2>
                بنون – طريق الملك سلمان، الرياض{" "}<br />
                <span style={{ fontSize: "18px" }}>(الافتتاح: ديسمبر 2025)</span>
              </h2>
              <p>
                ضمن خطتها لتوسيع الوصول إلى علاجات الإخصاب عالية المستوى في المملكة، تعمل "بنون" على تطوير منشأة طبية متكاملة بمساحة 3,800 متر مربع في شمال الرياض على طريق الملك سلمان، والمقرّر افتتاحها نهاية عام 2025.
              </p>
              <p>
                هذا المركز الرائد صُمّم ليكون من بين أكثر مراكز الخصوبة تطوراً في المنطقة، حيث يجمع تحت سقف واحد بين رعاية الإخصاب، علم الوراثة الإنجابي، وخدمات شاملة لصحة المرأة والرجل.
              </p>
              <p>
                سيضم المركز مختبرات الإخصاب وعلوم الأجنّة الأحدث من نوعها، مجهّزة بتقنيات حضانة الأجنّة بالتايم لابس، اختيار الأجنة بالذكاء الاصطناعي، الفحص الوراثي المتقدم، وتحليل دقيق للملف الهرموني لكل مريضة.
              </p>
              <p>
                "بنون – طريق الملك سلمان" لا يهدف فقط إلى تقديم خدمة طبية، بل يسعى ليكون مرجعاً إقليمياً في طب الإخصاب، ومنصة تواكب تطلعات رؤية السعودية 2030 في الريادة الصحية والابتكار الطبي.
              </p>
              <div className="d-flex align-items-center mt-3 gap-4 flex-wrap">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="location" width={24} height={24} className="me-2" />
                  <span className="text-color">بنون – طريق الملك سلمان</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/phone.svg" alt="phone" width={24} height={24} className="me-2" />
                  <span className="text-color">+966 11 444 8080</span>
                </div>
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="mail" width={24} height={24} className="me-2" />
                  <span className="text-color">info@bnoon.sa</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div
              className="service-overview-image"
              style={{ boxShadow: "-50px 50px 0px #d7f2fb", overflow: "hidden", display: "inline-block" }}
            >
              <img src={imageKingSalman} alt="بنون طريق الملك سلمان" width={580} height={450} />
            </div>
          </motion.div>
        </motion.div>
        {/* AL Ahsa Section */}
        <motion.div
          className="row justify-content-center align-items-center g-4 mt-5 flex-column-reverse flex-md-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="col-xl-5 col-md-12" variants={variantsRight}>
            <div
              className="location-overview-image"
              style={{ boxShadow: "50px 50px 0px #d7f2fb", overflow: "hidden", display: "inline-block" }}
            >
              <img src={imageAlahsa} alt="بنون جدة" width={580} height={450} />
            </div>
          </motion.div>

          <motion.div className="col-xl-6 col-md-12" variants={variantsLeft}>
            <div className="service-overview-content">
             <h2>

                بنون – الأحساء
              </h2>
              <p>
              يقدّم مركز بنون – الأحساء الواقع داخل مستشفى الموسى التخصصي خدمات رعاية الخصوبة وصحة المرأة بمعايير عالمية، ليكون الوجهة الأولى للعائلات في المنطقة الشرقية في السعودية. وقد صُمّم المركز ليمنح المرضى تجربة علاجية متميّزة تجمع بين أحدث التقنيات في الطب الإنجابي ورعاية متكاملة تُعنى بكل تفاصيل رحلة الزوجين.    </p>
              <p>
            ويمثّل هذا المركز جزءاً من شبكة بنون المتنامية، والتي تهدف إلى توفير خدمات الخصوبة المتقدمة لكافة أنحاء المملكة، من خلال فريق من استشاريي أطفال الأنابيب ذوي الخبرة، وبيئة طبية متطورة تُطبق أفضل الممارسات العالمية.   </p>
              <p>
            يضم بنون – الأحساء مختبرات أجنة حديثة تعتمد تقنيات دقيقة في مراقبة الأجنة واختيارها، كما يقدّم مجموعة شاملة من الخدمات تشمل: التلقيح الصناعي والحقن المجهري والتلقيح داخل الرحم وحفظ وتجميد البويضات والحيوانات المنوية، والفحوصات الجينية قبل الزرع (PGT-AI) واضطرابات الغدد التناسلية وتشخيصات دقيقة لحالات العقم لدى النساء والرجال.   </p>
              <p>
ويتميّز مركز بنون – الأحساء بتعاونه مع مختلف الأقسام في مستشفى الموسى التخصصي، مما يضمن رحلة علاجية سلسة ضمن بيئة علاجية تدعم المريض في كل خطوة نحو تحقيق النتائج المنشودة.  </p>
<p>يمثّل بنون – الأحساء نقلة نوعية في تطوير خدمات الخصوبة بالمنطقة الشرقية، إذ يجمع بين الابتكار الطبي، والتميّز الطبي، والالتزام بدعم كل أسرة في رحلتها نحو الأمومة والأبوة. </p>
              <div className="d-flex align-items-center mt-3 gap-4 flex-wrap">
                <div className="d-flex align-items-center">
                  <img src="/images/icons/location.svg" alt="location" width={24} height={24} className="me-2" />
                  <span className="text-color">بنون – الأحساء </span>
                </div>
              
                <div className="d-flex align-items-center">
                  <img src="/images/icons/mail.svg" alt="mail" width={24} height={24} className="me-2" />
                  <span className="text-color">info.jeddah@bnoon.sa</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
        <style jsx global>{`
  span.text-color {
    color: #004E78 !important;
    font-size: 18px !important;
  }
    .location-text h2{
    margin-bottom: 10px;
    }
      /* ✅ Same size for all images */
  .location-overview-image {
    height: 420px ;
    overflow: hidden !important;
  }

  .location-overview-image img {
    width: 100% !important;
    height: 100% !important;
    object-position: center !important;
  }

  /* Mobile Responsive */
  @media (max-width: 767px) {
    .location-overview-image {
     width: 85%;
        margin-bottom: 20px;
        height: 200px;
        margin-left: auto;
        margin-right: auto;
        text-align:center;
    }
  }
`}</style>
    </div>
  );
};

export default OurLocations;
