"use client";

import React from "react";
import Image from "next/image";

const TeamSection = () => {
  return (
    <div className="fertility-area mt-5">
      <div className="container">
        {/* Section Heading */}
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2>"انضموا إلى فريق "بنون</h2>
              </div>
            </div>
            <div className="left">
              <p>
                في "بنون"، نسعى إلى إحداث نقلة نوفية في رعاية الخصوبة وصحة المرأة والرجل في المملكة والمنطقة، من خلال رعاية تتمحور حول المريض، وتقنيات متقدمة، واحتراف طبي يرتكز على التميز۔


              </p>
              <p>
                الكوادر البشرية هي القلب النابض لـ"بنون". وعليه فإننا نبحث عن كوادر شغوفة ومؤهلة ترغب في صناعة أثر حقيقي — سواء في الطب، أو علم الأجنة، أو التمريض، أو الإدارة، أو العمليات۔


              </p>
              <p>
                إذا كنتم تؤمنون بالعمل الهادف والرعاية القائمة على التعاطف، فـ"بنون" هو المكان الذي يمنحكم فرصة للنمو والتميّز۔
              </p>
              <p>نحن في مرحلة توسّع في مختلف مناطق المملكة، ومع كل مركز جديد نُطلقه، نبني أكثر من مجرد منشأة... نبني الأمل، والعائلة، ورعاية متميزة مدعومة بالبحث والابتكار۔</p>
            </div>
          </div>
        </div>

        {/* Saudization + Apply Section */}
        <div className="row justify-content-center align-items-center g-4 mb-5">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content">
              <h2>التزامنا بالتوطين</h2>
              <p>
                نؤمن في "بنون" بأن الكفاءات الوطنية هي عماد المستقبل. ونلتزم بدعم وتطوير المواهب السعودية في مختلف التخصصات لدينا، انسجاماً مع رؤية المملكة 2030۔
              </p>
              <p>

                نوفّر مسارات مهنية متميزة، وبرامج توجيه وتطوير قيادي تهدف إلى تمكين الكوادر المحلية وتأهيلها للريادة في قطاع الرعاية الصحية۔
              </p>
              <p>


                إذا كنت سعودياً أو سعودية وتبحث عن فرصة لتطوير مسيرتك المهنية في بيئة مبتكرة وملهمة، فنحن بانتظارك۔
              </p>

              <h2>ابدأ رحلتك المهنية معنا</h2>
              <div className="mt-3">
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src="/images/icons/mail.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="me-2"
                  />
                  <p className="mb-0">
                   أرسل سيرتك الذاتية على البريد الإلكتروني :<strong>careers@bnoon.sa</strong>
                  </p>
                </div>

                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/location.svg"
                    alt="LinkedIn"
                    width={24}
                    height={24}
                    className="me-2"
                  />
                  <p className="mb-0">
                   تابعنا على للاطلاع على الوظائف المتاحة وآخر التحديثات:{" "}
                    <strong>Bnoon صفحة</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-xl-6 col-md-12">
            <div
              className="service-overview-image"
              style={{
                boxShadow: "-50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <Image
                src="/images/commitment-saudization.avif"
                alt="Commitment to Saudization"
                width={580}
                height={450}
                priority // ✅ page load par fast load
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
