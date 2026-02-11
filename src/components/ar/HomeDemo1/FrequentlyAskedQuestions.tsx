"use client";

import React, { useState } from "react";

import { motion, easeOut } from "framer-motion";

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqData = [
    {
      question: "متى يجب أن أزور الطبيب بخصوص الحمل؟",
      answer:
        "إذا كانت الزوجة تحت سن 35 وحاولتم الحمل لمدة 12 شهراً دون نجاح، فقد حان الوقت لاستشارة أخصائي الإخصاب. أما إذا كانت الزوجة تبلغ 35 عاماً أو أكثر، فتحدثوا إلى طبيبكم بعد 6 أشهر فقط من المحاولة. تقل الخصوبة بشكل طبيعي مع التقدم في العمر، خصوصاً بعد سن الثلاثين۔ <br><strong>[ACOG] المصدر: الكلية الأمريكية لأطباء النساء والتوليد</strong>",
    },
    {
      question: "ما الأعراض أو الحالات التي قد تؤثر على الخصوبة؟",
      answer:
        ":تحدث إلى طبيبك إذا كنت تعاني من <ul> <li>دورات شهرية غير منتظمة أو مؤلمة أو منقطعة</li><li>أكثر من حالة إجهاض واحدة </li><li>(PID) تشخيص سابق ببطانة الرحم المهاجرة أو مرض التهاب الحوض</li> </ul>:بالنسبة للرجال، تشمل العلامات بشأن الخصوبة ما يلي<ul><li>صعوبة في القذف أو انخفاض عدد الحيوانات المنوية </li><li>وجود كتل أو تورم في منطقة الخصيتين</li><li><strong>[CDC] أمراض تنفسية مزمنة المصدر: مراكز مكافحة الأمراض والوقاية منها</strong></li></ul>",
    },
    {
      question: "من الذي يجب أن يحصل على علاجات الخصوبة؟",
      answer:
        ":قد تكون خدمات الخصوبة موصى بها في الحالات التالية<ul> <li>محاولات الحمل لمدة 6–12 شهراً دون نجاح</li><li>وجود حالات صحية معروفة تؤثر على الجهاز التناسلي لدى أحد الزوجين </li><li>الرغبة في تجميد البويضات أو الحيوانات المنوية قبل الخضوع لعلاج طبي</li><li>التخطيط للحمل في أواخر الثلاثينيات أو الأربعينيات واستكشاف الخيارات المتاحة</li></ul>        الأزواج الذين لديهم تاريخ عائلي لأمراض وراثية ويرغبون في الحد من خطر انتقالها إلى <br>أطفالهم",
    },
    {
      question: "هل العقم مشكلة تخص النساء فقط؟",
      answer:
        ":لا. العقم يمكن أن يؤثر على الرجال والنساء معاً<ul> <li>حوالي ثلث الحالات تتعلق بعوامل أنثوية</li><li> ثلث آخر يتعلق بعوامل ذكورية</strong> </li><li>والثلث المتبقي ناتج عن مشكلات لدى الطرفين أو أسباب غير معروفة</li></ul><i><strong>[WHO/CDC]المصدر: منظمة الصحة العالمية</strong></i>",
    },
    {
      question: "هل العقم أمر شائع؟",
      answer:
        ":نعم. يؤثر العقم على <ul><li>نحو 10%–15% من الأزواج في سن الإنجاب على مستوى العالم  </li><li>حوالي 11% من النساء و9% من الرجال قد واجهوا صعوبات في الخصوبة</li></ul>بعوامل دقيقة في الحيوانات المنوية أو البويضات أو الصحة العامة۔<br>عند نحو 5%–10% من الحالات، تبقى الأسباب غير معروفة — وغالباً ما تكون مرتبطة<strong>[WHO/CDC] المصدر: منظمة الصحة العالمية</strong>",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
// ⭐ Animation Variants — ADD THIS
const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easeOut }
  },
};
  return (
    <div className="faq-area" dir="rtl" style={{ textAlign: "right" }}>
      <div className="container">
        <div className="section-title">
          <div className="row g-4">
            <div className="col-lg-10 col-md-12">
              <div className="left">
                <h2>أسئلة شائعة عن الخصوبة وتأخر الحمل</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-lg-6 col-md-12">
            <div className="faq-accordion">
              <div className="accordion">
                {faqData.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <button
                      className={`accordion-button ${
                        openIndex === index ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggleAccordion(index)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        direction: "rtl",
                        textAlign: "right",
                      }}
                    >
                      <span>{item.question}</span>
                      <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`accordion-collapse collapse ${
                        openIndex === index ? "show" : ""
                      }`}
                    >
                      <div
                        className="accordion-body"
                        style={{
                          direction: "rtl",
                          textAlign: "right",
                          lineHeight: "1.8",
                        }}
                      >
                        <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ⭐ IMAGE WITH LEFT-SIDE ANIMATION */}
          <div className="col-lg-6 col-md-12">
            <motion.div
              className="faq-image"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              style={{
                backgroundImage: "url(/images/faqs.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "450px",
                borderRadius: "12px",
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
