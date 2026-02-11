"use client";

import React from "react";
import Image from "next/image";

const FertilityDoctor = () => {
  // ✅ Points array component ke andar
  const points = [
    "عمرك أقل من 35 سنة وتواجهين صعوبة في الإنجاب بالرغم من أنك تحاولين منذ أكثر من عام۔ ",
    "عمرك أكثر من 35 عاماً ولم تحملي على الرغم من انقضاء 6 أشهر على المحاولة المستمرة۔",
    "شريكك غير قادر على الانتصاب أو على المحافظة عليه۔",
    "تعرضتِ لإجهاضين أو أكثر۔ ",
    "عدم انتظام الدورة الشهرية أو عدم حدوثها۔",
    "تم تشخيص إصابتك بالسرطان وتحتاجين إلى المحافظة على خصوبتك قبل العلاج۔",
    "قد يكون من الضروري مراجعة أخصائي الإخصاب إذا كانت والدتك قد تعرضت لانقطاع الطمث المبكر۔"
  ];

  const staticImage = "https://bnoon.blob.core.windows.net/website/images/fertility-doc.avif";

  return (
    <div className="fertility-overview-area ptb-140">
      <div className="container">
        <div className="row justify-content-center align-items-center g-4">
          <div className="col-xl-7 col-md-12">
            <div className="service-overview-content">
              <h3 className="mb-2">من هو طبيب الإخصاب؟</h3>
              <p>
             هو استشاري طب تأخر الإنجاب وأطفال الأنابيب والحقن المجهري. كما يشارك في ذلك أخصائي طب الذكورة۔
              </p>
              <h3 className="mb-2">متى يتوجب عليك زيارة طبيب الإخصاب؟</h3>
              <p>
            كثير من الناس لا يدركون أن العقم يؤثر على الرجال والنساء على حدٍّ سواء، وأن أي شخص يمكن أن يعاني من مشاكل العقم. فيما  يلي بعض المؤشرات التي تنبّهك إلى أن الوقت قد حان لرؤية طبيب الإخصاب
              </p>
    {/* ✅ Dynamic UL with image icons */}
              <ul className="custom-list">
                {points.map((point, index) => (
                  <li key={index}>
                    <Image
                      src="https://bnoon.blob.core.windows.net/website/images/icons/bnoon-symbol.avif" // apni icon image ka path
                      alt="icon"
                      className="list-icon"
                     width={24} height={22} />
                    {point}
                  </li>
                ))}
              </ul>
             
           
            </div>
          </div>

          <div className="col-xl-5 col-md-12">
            <div
              className="service-overview-image"
              style={{
              
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <Image
                src={staticImage}
                alt="Service overview"
                width={580}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FertilityDoctor;
