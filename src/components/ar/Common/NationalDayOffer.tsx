import React from "react";
import Link from "next/link";
import Image from "next/image";

const NationalDayOffer = () => {
  // Alag images for each section
  const imageRiyadh = "/images/national-day/infertility-treatments.avif";
  const imageJeddah = "/images/national-day/icsi-cycles.avif";

  const includesList = [
    "متابعة التبويض بالسونار",
    "التحاليل الهرمونية أثناء الدورة العلاجية",
  ];

  const excludesList = ["الأدوية", "الفحوصات الجينية"];

  return (
    <div className="service-overview-area mb-5 mt-5">
      <div className="container">
        {/* Riyadh Section */}
        <div className="row justify-content-center align-items-center g-4 mb-3">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content text-center">
              <h2>العرض الخاص باليوم الوطني</h2>
            </div>
            <div className="service-overview-content text-center national-box">
              <h2 className="national-text">خصم على الدورة العلاجية لأطفال الأنابيب والحقن المجهري</h2>
            </div>
            <div className="service-overview-content text-center national-box-2 mt-3">
              <h5 className="national-text-2">بنون - الرياض وجدة</h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center g-4">
        
          <div className="col-xl-5 col-md-12">
            <div className="service-overview-content national-list">
              <p className="national-p">
          <strong>بمناسبة اليوم الوطني السعودي الـ95، يسعدنا في بنون تقديم خصم 15%</strong> على تكلفة الدورة العلاجية لأطفال الأنابيب والحقن المجهري*

              </p>

              {/* ✅ Includes */}
              <div className="national-p">
                <strong>:يشمل</strong>
                <ul className="list-unstyled mt-2">
                  {includesList.map((item, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-start mb-2"
                    >
                      <Image
                        src="/images/icons/bnoon-symbol.avif"
                        alt="check"
                        width={20}
                        height={20}
                        className="me-2"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ✅ Excludes */}
              <div className="national-p">
                <strong>:لا يشمل</strong>
                <ul className="list-unstyled mt-2">
                  {excludesList.map((item, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-start mb-2"
                    >
                      <Image
                        src="/images/icons/bnoon-symbol.avif"
                        alt="check"
                        width={20}
                        height={20}
                        className="me-2"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="national-p">
               العرض قائم من{" "}
                <strong> 15 سبتمبر وحتى 15 أكتوبر 2025۔</strong>
                <br />
               بدء الدورة العلاجية قبل نهاية يوم{" "}
                <strong> 15 نوفمبر 2025۔</strong>
              </p>
              <p className="national-p">تطبق الشروط والأحكام۔*</p>

              <Link
                href="https://book.bnoon.sa/ar"
                className="btn btn-primary contact-btn"
              >
              احجز موعدك اليوم
              </Link>

              <div className="d-flex flex-column mt-3 gap-2">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="me-2"
                  />
                  <span>بنون - الرياض:0114448080</span>
                </div>
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="me-2"
                  />
                  <span>بنون - جدة: 012 680 0800</span>
                </div>
              </div>
            </div>
          </div>

            <div className="col-xl-5 col-md-12">
            <div
              className="service-overview-image"
              style={{
                boxShadow: "-50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
                margin: "0 0px 0 50",
              }}
            >
              <Image
                src={imageJeddah}
                alt="Service overview"
                width={580}
                height={450}
              />
            </div>
          </div>

        </div>

        {/* Jeddah Section */}
        <div className="row justify-content-center align-items-center g-4 mt-5 mb-3">
          <div className="col-xl-6 col-md-12">
            <div className="service-overview-content text-center national-box">
              <h2 className="national-text">
               خصم على خدمات وإجراءات أمراض الذكورة والعقم لدى الرجال
              </h2>
            </div>
            <div className="service-overview-content text-center national-box-2 mt-3">
              <h5 className="national-text-2">بنون – جدة</h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-center align-items-center g-4">
             <div className="col-xl-5 col-md-12">
            <div
              className="service-overview-image mb-3"
              style={{
                boxShadow: "50px 50px 0px #d7f2fb",
                overflow: "hidden",
                display: "inline-block",
              }}
            >
              <Image
                src={imageRiyadh}
                alt="Service overview"
                width={580}
                height={450}
              />
            </div>
          </div>
          <div className="col-xl-5 col-md-12">
            <div className="service-overview-content national-list">
              <p className="national-p">
                <strong>يسرنا في بنون – جدة تقديم خصم 20%</strong> على خدمات وإجراءات أمراض الذكورة والعقم لدى الرجال*۔

              </p>
              <p className="national-p">
               العرض قائم من{" "}
                <strong> 15 سبتمبر وحتى 15 أكتوبر 2025۔</strong>
                <br />
             لا يشمل العرض الاستشارات الطبية
              </p>
              <p className="national-p">تطبق الشروط والأحكام۔*</p>

              <Link
                href="https://book.bnoon.sa/ar"
                className="btn btn-primary contact-btn"
              >
               احجز موعدك اليوم
              </Link>

              <div className="d-flex flex-column mt-3 gap-2">
                <div className="d-flex align-items-center">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone"
                    width={14}
                    height={14}
                    className="me-2"
                  />
                  <span>بنون - جدة: 0126800800</span>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default NationalDayOffer;
