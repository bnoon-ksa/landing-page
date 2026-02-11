"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

const WaadSection = () => {
  const values = [
    "البرنامج مخصص للنساء دون عمر 35 عاماً وقت بداية الدورة العلاجية الأولى۔",
    "أو أكثر۔  (AMH)1  بجب أن تكون نتيجة تحليل مخزون المبيض",
    "كاملة خلال 12 شهر۔  (IVF/ICSI)  يجب أن تخضع الزوجة لثلاث محاولات أطفال أنابيب <br> - محاولة أطفال الأنابيب الكاملة هي تنشيط وسحب للبويضات مع إرجاع الأجنة لمرة واحدة أو أكثر، سواءً كان الإرجاع خلال الدورة العلاجية أو بعدها كـأجنة مجمدة۔ <br />- لا تُعتبر دورة التنشيط المزدوج للمبيض إحدى هذه المحاولات۔",
    "يتم استرداد مبلغ المحاولة الثالثة عند عدم حدوث حمل إكلينيكي في أي من المحاولات الثلاث۔<br> - الحمل الإكلينيكي هو الحمل الذي يظهر فيه كيس الحمل في السونار ولا يشترط وجود نبض للجنين۔ ",
    "المبلغ المسترد هو رسوم دورة أطفال الأنابيب الثالثة فقط، ولا يشمل :<br>الأدوية<br>- الفحوصات الوراثية للأجنة PGT  <br> - عمليات الزوج<br>- إرجاع الأجنة المجمدة <br> - تحاليل خارج رسوم الدورة العلاجية (الأمراض المعدية، السائل المنوي، وخلافها) <br>- الاستشارات الطبية إن وجدت<br>- أي إجراء آخر غير مشمول في رسوم دورة أطفال الأنابيب.",
    "البرنامج متوفر حصرياً مع أطباء بنون في مراكز بنون في جميع أنحاء المملكة العربية السعودية۔",
    "يبدأ العمل بهذا البرنامج اعتباراً من 1 سبتمبر 2025، ولا تُحتسب العلاجات التي تمت قبل هذا التاريخ ضمن نطاق البرنامج۔",
    "تُطبق الشروط والأحكام"
  ];

  const headingRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const [visibleHeadings, setVisibleHeadings] = useState<boolean[]>([]);

  useEffect(() => {
    setVisibleHeadings(Array(values.length + 2).fill(false)); // +2 for h4 headings

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = headingRefs.current.indexOf(entry.target as HTMLHeadingElement);
            if (index !== -1) {
              setVisibleHeadings((prev) => {
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    headingRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [values.length]);

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>ما هو "برنامج وعد بنون"؟  </h2>

                <h4
                  ref={(el) => {
                    if (el) headingRefs.current[0] = el;
                  }}
                  className={`mt-3 animate-left ${visibleHeadings[0] ? "show" : ""}`}
                >
                  الحمل أو استرداد الرسوم: ثقة. وضوح. وطمأنينة
                </h4>

                <p>
                  وعد بنون (الحمل أو استرداد الرسوم)برنامج هو مبادرة فريدة من نوعها تهدف إلى دعم الأزواج الراغبين بالإنجاب من الناحية النفسية والطبية والمالية لبدء علاجات الإخصاب بثقة ووضوح مما يمنحهم راحة البال وخطة علاجية واضحة۔
                </p>

                <p>
                  نلتزم بأن نكون معكم في كل خطوة — وإذا لم يتحقق الحمل بعد ثلاث محاولات لعمليات أطفال الأنابيب، سنقوم برد رسوم المحاولة الثالثة. هذا هو وعدنا لكم۔
                </p>

                <h4
                  ref={(el) => {
                    if (el) headingRefs.current[1] = el;
                  }}
                  className={`mt-3 animate-left ${visibleHeadings[1] ? "show" : ""}`}
                >
                 الشروط والأحكام:
                </h4>

                <ul className="values-list mt-3">
                  {values.map((value, index) => (
                    <li key={index} className="d-flex align-items-start mb-2">
                      <Image
                        src="/images/icons/bnoon-symbol.avif"
                        alt="icon"
                        width={20}
                        height={20}
                        className="me-2 mt-1"
                      />
                      <span dangerouslySetInnerHTML={{ __html: value }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.5s ease-out;
        }
        .animate-left.show {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
    </div>
  );
};

export default WaadSection;
