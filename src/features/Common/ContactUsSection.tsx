"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";



const ContactUsSection = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeftVisible(true);
          observerLeft.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const observerRight = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRightVisible(true);
          observerRight.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observerLeft.observe(leftRef.current);
    if (rightRef.current) observerRight.observe(rightRef.current);

    return () => {
      observerLeft.disconnect();
      observerRight.disconnect();
    };
  }, []);

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        {/* Existing Section */}
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left text-center">
                <h2>فلنبدأ رحلتكم سوياً </h2>
              </div>
              <div className="left text-center mt-2">
                <p>
                  .ندرك في "بنون" أن الطريق نحو الأبوة أو الأمومة هو رحلة شديدة الخصوصية، وغالباً ما تكون محمّلة بالأسئلة والتحديات   </p>
                <p>
                  سواء كنتم تواجهون صعوبات في الحمل، أو تبحثون عن دعم لحالات صحية نسائية أو علاجات لأمراض الذكورة، أو تخطّطون لحمل صحي وآمن، فنحن هنا معكم — بالعلم، والخبرة، والرعاية الصادقة۔

                </p>
                <p>

                  يضم "بنون" فريقاً متعدد التخصصات يُقدّم خطط علاج مبنية على الأدلة، ومصمّمة لتتناسب مع احتياجات كل حالة — بدءاً من علاجات الخصوبة المتقدمة، مروراً بصحة الهرمونات، ووصولاً إلى رعاية الحمل والولادة وأمراض النساء۔</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Section with 2 Divs in one row */}
        <div className="row justify-content-center text-center g-4">
          {/* First Div */}
          <div className={`col-lg-6 col-md-8 animate-left ${leftVisible ? "show" : ""}`} ref={leftRef}>
            <div className="p-4 contact-border h-100">
              <Image
                src="/images/icons/c3.png"
                alt="Icon 1"
                width={80}
                height={80}
                className="mb-3"
              />
              <h5 className="mb-3">احجزوا موعدكم </h5>
              <Link href="request-an-appoinment" className="btn btn-primary mb-3 contact-btn">
                انقر هنا
              </Link>
              <p className="text-center">
                يرجى تعبئة نموذج "طلب موعد"، وسيقوم أحد منسقي رعاية المرضى بالتواصل معكم خلال 48 ساعة لتأكيد الموعد والإجابة عن أي استفسارات أولية۔
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className={`col-lg-6 col-md-8 animate-right ${rightVisible ? "show" : ""}`} ref={rightRef}>

            <div className="p-4 contact-border h-100">
              <Image
                src="/images/icons/recruiting-icons.png"
                alt="Icon 2"
                width={80}
                height={80}
                className="mb-3"
              />
              <h5 className="mb-3">تفضلون التحدث معنا مباشرة؟ </h5>
              <Link href="request-an-appoinment" className="btn btn-primary mb-3 contact-btn">
                اتصلوا بنا
              </Link>
              <p className="text-center" style={{ direction: "ltr", textAlign: "left" }}>
                +966 11 444 8080 :بنون – الرياض
                <br />
                +966 12 680 0800  :بنون – جدة
              </p>
            </div>
          </div>
        </div>

        <div className="section-title mt-5">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left text-center">
                <h2>مواقعنا  </h2>
              </div>
              <div className="left text-center mt-2">
                <p className=" text-center">
                 نُدير في "بنون" مراكز خصوبة رائدة في المملكة، صُمّمت بعناية لتوفّر أعلى درجات الراحة والخصوصية والنتائج المثلى:
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Section with 2 Divs in one row */}
        <div className="row text-center g-4">
          {/* First Div */}
          <div className="col-lg-6 col-md-8">
            <div className="p-0 p-lg-4 location-border h-100">
              <h5 className="mb-3 fw-bold">بنون - الرياض</h5>
              <p className="text-center" style={{ direction: "ltr" }}>
                شارع أبي جعفر بن منصور  <br />
                حي الشهداء، 13241 الرياض، المملكة العربية السعودية<br />
                +966 11 444 8080
              </p>

              {/* Google Map Embed */}
              <div className="map-responsive mt-3 text-center text-lg-end">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.3932190536176!2d46.732875315003445!3d24.78915548405014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efddca951caad%3A0xff57eb5bc69f10ea!2sBnoon%20-%20Riyadh!5e0!3m2!1sen!2s!4v1695980800000!5m2!1sen!2s"
                  width="90%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-lg-end">
                أوقات العمل:<br />
                من السبت إلى الخميس – 9:00 صباحاً حتى 2:30 ظهراً<br />
                الجمعة: مغلق
              </p>
            </div>
          </div>


          {/* Second Div */}
          <div className="col-lg-6 col-md-8">
            <div className="p-0 p-lg-4 location-border h-100 text-center">
              <h5 className="mb-3  fw-bold">بنون - جدة</h5>
              <p className="text-center" style={{ direction: "ltr" }}>
                مبنى كوارتز 3340، طريق الكورنيش، حي الشاطئ، جدة 23412 <br />
                المملكة العربية السعودية<br />
                +966 12 680 0800
              </p>

              {/* Google Map Embed */}
              <div className="map-responsive mt-3 text-center text-lg-end">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d39.123456!3d21.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x403eb3afa0ca3bd7!2sHealthPlus%20Fertility%20%26%20Women%27s%20Health%20Center%20-%20Jeddah!5e0!3m2!1sen!2s!4v1695974523456!5m2!1sen!2s"
                  width="90%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-lg-end">
                أوقات العمل:

                <br />
                من السبت إلى الخميس – 9:00 صباحاً حتى 8:30 مساءً <br />
                الجمعة: مغلق
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="col-lg-6 col-md-8">
            <div className="p-0 p-lg-4 location-border h-100 text-center">
              <h5 className="mb-3  fw-bold">بنون – الأحساء </h5>
              <p className="text-center">
                البرج الجنوبي، الطابق 12، مستشفى الموسى التخصصي
                <br />
                شارع ظهران، المبرز 36342
              </p>

              {/* Google Map Embed */}
              <div className="map-responsive mt-3 text-center text-lg-end">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3603.047541015566!2d49.569793675389626!3d25.43667407755768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDI2JzEyLjAiTiA0OcKwMzQnMjAuNSJF!5e0!3m2!1sen!2s!4v1765545965251!5m2!1sen!2s"
                  width="90%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-lg-end">
                أوقات العمل:

                <br />
                من السبت إلى الخميس – 9:00 صباحاً حتى 8 مساءً <br />
                الجمعة: مغلق
              </p>
            </div>
          </div>
          <div className="section-title border-top">
            <div className="row justify-content-center align-items-center g-4">
              <div className="col-lg-12 col-md-12">
                <div className="left text-center  mt-3">
                  <h2>​شاركونا رأيكم  </h2>
                </div>
                <div className="left text-center mt-2">
                  <p className="text-center">
                    في بنون، رأيكم يهمنا. نحن ملتزمون بتقديم أعلى معايير الرعاية، وملاحظاتكم تساعدنا على التطور والتحسّن لخدمتكم بشكل أفضل. سواء كانت ملاحظة، اقتراح، قصة، أو تقييم بسيط — نشكركم على تخصيص وقتكم لمشاركة تجربتكم معنا۔  </p>
                </div>
                <div className="mt-4"><Link href="submit-feedback" className="btn btn-primary mb-3 contact-btn">
                  اضغط هنا
                </Link></div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  );
};

export default ContactUsSection;
