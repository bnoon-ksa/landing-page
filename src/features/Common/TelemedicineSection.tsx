"use client";

import React from "react";
import Image from "next/image";
import { motion, Easing, easeOut } from "framer-motion";

const AboutusSection = () => {
  const values = [
    "استشارات أولية مباشرة مع أطباء الخصوبة في مجالات تأخر الحمل وعمليات أطفال الأنابيب والحقن المجهري والتلقيح الصناعي والغدد الصماء التناسلية وحفظ الخصوبة. ",
    "مراجعة الفحوصات الطبية مثل التحاليل الهرمونية، وتحليل السائل المنوي، ونتائج الأشعة الصوتية، والفحوصات الجينية. ",
    "مناقشة خطط العلاج، وتجهيز الدورات العلاجية، وتعديل الأدوية، وخطط المتابعة. ",
    "التثقيف الطبي، والإرشاد، والحصول على رأي طبي ثاني عند الحاجة. ",
  ];
  const values1 = [
    "توفير الوقت دون تنقل أو انتظار. ",
    "وصول سريع إلى نخبة من أطباء الخصوبة. ",
    "استشارات آمنة وسرّية، ومتوافقة مع أنظمة وزارة الصحة السعودية. ",
    "ضمان استمرارية الرعاية خلال مراحل التنشيط والمتابعة والتخطيط طويل الأمد. ",
    "جميع الاستشارات تُجرى حصرياً من قِبل أطباء مرخّصين وذوي خبرة عالية. ",
  ];
  const values2 = [
    "احجز موعدك مع الطبيب من خلال الموقع الإلكتروني أو مركز الاتصال.  ",
    "بعد حجز الموعد، يتم إرسال رابط الاستشارة والتعليمات عبر البريد الإلكتروني أو الهاتف. ",
    " يُنصح بالدخول إلى الرابط قبل موعد الاستشارة بخمس دقائق، مع التأكد من توفر اتصال إنترنت مستقر. ",
    " يُفضّل تجهيز أي تقارير أو فحوصات طبية لمشاركتها مع الطبيب أثناء الجلسة ويمكن طلبها منك قبل الجلسة لمناقشتها. ",
    " بعد انتهاء الاستشارة، يوضح الطبيب الخطوات التالية سواء كانت متابعة عن بُعد أو زيارة حضورية عند الحاجة. ",
  ];
    const values3 = [
    "يتم توثيق البطاقة البنكية عند الحجز دون خصم فوري. ",
    " تُخصم رسوم الاستشارة فقط بعد إتمام الاستشارة. ",
    " في حال عدم التمكن من حضور الاستشارة عن بُعد، يجب إلغاء الموعد قبل 24 ساعة على الأقل لتفادي الخصم. ",
    "سيتم خصم  رسوم الاستشارة في حال عدم الحضور أو في حال عدم إلغاء الموعد قبل 24 ساعة على الأقل. ",
  ];
      const values4 = [
    "يشترط الحصول على موافقة المريض قبل بدء الاستشارة. ",
    " تُجرى الجلسات عبر منصات آمنة ومعتمدة من بنون. ",
   " تخضع جميع البيانات لأنظمة حماية البيانات الشخصية في المملكة. ",
    "لا يتم تسجيل أي جلسة إلا بموافقة صريحة من المريض. ",
  ];
  // ⭐ Animation variant
  const slideInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: easeOut },
    },
  };

  return (
    <div className="fertility-area mt-3 mt-lg-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">الاستشارات الطبية عن بُعد في بنون </h2>
                <h3 className="telemedicine-overview-content" >رعاية تصل إليك… أينما كنت</h3>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                  في بنون، نؤمن بأن رعاية الخصوبة تحتاج إلى سرعة في الاستجابة ووضوح ووصول مباشر إلى أطباء موثوقين. لذلك تتيح لكم خدمة الاستشارات الطبية عن بُعد لدينا التواصل مع أطباء بنون المتخصصين، مع الحفاظ على نفس مستوى الخبرة، والخصوصية الذي نقدمه داخل عياداتنا.    </motion.p>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                  صُممت الاستشارات الافتراضية لدعم رحلتكم العلاجية عندما لا تكون زيارة العيادة ضرورية، ومساعدتكم على الاستمرار في خططكم العلاجية دون تأخير. سواء كنتم في حاجة إلى استشارة أولية ، أو تودون مراجعة نتائج الفحوصات، أو تخططون لإجراء الحقن المجهري، أو تحتاجون إلى رأي طبي آخر، تضمن لكم منصتنا الافتراضية استمرارية الرعاية بسلاسة.   </motion.p>

              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">ماذا تتضمن الاستشارات عن بُعد؟  </h2>
                <ul className="values-list mt-3">
                  {values.map((value, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      {/* Icon */}
                      <Image
                        src="/images/icons/bnoon-symbol.avif" // aapka custom icon
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2  icon"
                      />
                      {value}
                    </li>
                  ))}
                </ul>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >لا تُعد الاستشارات عن بُعد بديلاً للحالات الطارئة أو الحالات عالية الخطورة أو لإجراء العلاج، وقد يوصي الطبيب بزيارة حضورية متى ما استدعت الحالة ذلك. </motion.p>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">لماذا يختار المرضى الاستشارات عن بُعد في بنون؟ </h2>
                <ul className="values-list mt-3">
                  {values1.map((value1, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      {/* Icon */}
                      <Image
                        src="/images/icons/bnoon-symbol.avif" // aapka custom icon
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 icon"
                      />
                      {value1}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">طريقة الحجز</h2>
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                  يمكنك التواصل مع مركز الاتصال لدينا على الرقم 920010022 أو تعبئة نموذج طلب الموعد عبر الموقع الإلكتروني، وسيقوم فريقنا بالتواصل معك لتأكيد الموعد وشرح الخطوات التالية. </motion.p>

              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">كيف تعمل الخدمة؟ </h2>
             
                <ul className="values-list mt-3">
                  {values2.map((value2, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      {/* Icon */}
                      <Image
                        src="/images/icons/bnoon-symbol.avif" // aapka custom icon
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 icon"
                      />
                      {value2}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
                        <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">الدفع والإلغاء  </h2>
              
                <ul className="values-list mt-3">
                  {values3.map((value3, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      {/* Icon */}
                      <Image
                        src="/images/icons/bnoon-symbol.avif" // aapka custom icon
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 icon"
                      />
                      {value3}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
                       <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="mb-2">الخصوصية والموافقة  </h2>
              
                <ul className="values-list mt-3">
                  {values4.map((value4, index) => (
                    <li key={index} className="d-flex align-items-center mb-2">
                      {/* Icon */}
                      <Image
                        src="/images/icons/bnoon-symbol.avif" // aapka custom icon
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 icon"
                      />
                      {value4}
                    </li>
                  ))}
                </ul>
                   <motion.p
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={slideInRight}
                >
                في بنون، تبقى رعاية الخصوبة قريبة منك دائماً — أينما كنت. </motion.p>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusSection;
