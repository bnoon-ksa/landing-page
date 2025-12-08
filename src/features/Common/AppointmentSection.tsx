"use client";

import React, { useState, useEffect, useRef } from "react";
import { Placeholder } from "react-bootstrap";
const AppointmentSection = () => {
  const [formData, setFormData] = useState({

    interest: "",
    branch: "",
    doctor: "",
    name: "",
    isForYou: "",  // 👈 yahan "yes" ki jagah empty rakho
    nationality: "",
    countryOfResidence: "",
    cityIfInSA: "",
    gender: "",
    mobile: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    howHeard: "",
  });
  const nationalities = [
    "سعودي",
    "أفغاني",
    "ألباني",
    "جزائري",
    "أمريكي",
    "أندوري",
    "أنغولي",
    "أنتيغوي",
    "أرجنتيني",
    "أرميني",
    "أسترالي",
    "نمساوي",
    "أذربيجاني",
    "باهامي",
    "بحريني",
    "بنغلاديشي",
    "باربادوسي",
    "بيلاروسي",
    "بلجيكي",
    "بليزي",
    "بنيني",
    "بوتاني",
    "بوليفي",
    "بوسني / هيرزغوفي",
    "بوتسواني",
    "برازيلي",
    "بروناي",
    "بلغاري",
    "بوركينابي",
    "بوروندي",
    "كمبودي",
    "كاميروني",
    "كندي",
    "رأس أخضري",
    "أفريقي وسطي",
    "تشادي",
    "تشيلي",
    "صيني",
    "كولومبي",
    "قمري",
    "كونغولي",
    "كوستاريكي",
    "كرواتي",
    "كوبي",
    "قبرصي",
    "تشيكي",
    "دنماركي",
    "جيبوتي",
    "دومينيكاني",
    "هولندي",
    "تيموري شرقي",
    "إكوادوري",
    "مصري",
    "إماراتي",
    "إنجليزي",
    "غيني استوائي",
    "إريتري",
    "إستوني",
    "إثيوبي",
    "فيجي",
    "فنلندي",
    "فرنسي",
    "غابوني",
    "غامبي",
    "جورجي",
    "ألماني",
    "غاني",
    "يوناني",
    "غرينادي",
    "غواتيمالي",
    "غيني",
    "غوياني",
    "هايتي",
    "هندوراسي",
    "مجري",
    "آيسلندي",
    "هندي",
    "إندونيسي",
    "إيراني",
    "عراقي",
    "إيرلندي",
    "إسرائيلي",
    "إيطالي",
    "إيفواري",
    "جامايكي",
    "ياباني",
    "أردني",
    "كازاخستاني",
    "كيني",
    "كيتيسي / نيفيسي",
    "كيريباتي",
    "كوري شمالي",
    "كوري جنوبي",
    "كويتي",
    "قيرغيزستاني",
    "لاوسي",
    "لاتفي",
    "لبناني",
    "ليبيري",
    "ليبي",
    "ليختنشتايني",
    "ليتواني",
    "لوكسمبورغي",
    "مقدوني",
    "مدغشقري",
    "مالاوي",
    "ماليزي",
    "مالديفي",
    "مالي",
    "مالطي",
    "مارشالي",
    "موريتاني",
    "موريشي",
    "مكسيكي",
    "ميكرونيزي",
    "مولدوفي",
    "مونيغاسكي",
    "منغولي",
    "مونتينيغري",
    "مغربي",
    "موزمبيقي",
    "بورمي",
    "ناميبي",
    "ناوروي",
    "نيبالي",
    "نيوزيلندي",
    "نيكاراغوي",
    "نيجري",
    "نيجيري",
    "ني فانواتي",
    "نرويجي",
    "عماني",
    "باكستاني",
    "بالاوي",
    "فلسطيني",
    "بنمي",
    "بابوا غينيا جديدي",
    "باراغواياني",
    "بيروفي",
    "فلبيني",
    "بولندي",
    "برتغالي",
    "قطري",
    "روماني",
    "روسي",
    "رواندي",
    "سانت لوسياني",
    "سلفادوري",
    "سَن ماريني",
    "ساموي",
    "سعودي",
    "اسكتلندي",
    "سنغالي",
    "صربي",
    "سيشلي",
    "سيراليوني",
    "سنغافوري",
    "سلوفاكي",
    "سلوفيني",
    "جزر سليمان",
    "صومالي",
    "جنوب أفريقي",
    "إسباني",
    "سريلانكي",
    "سوداني",
    "سورينامي",
    "سوازي",
    "سويدي",
    "سويسري",
    "سوري",
    "تايواني",
    "طاجيكي",
    "تنزاني",
    "تايلاندي",
    "توغولي",
    "تونغاني",
    "ترينيدادي / توباغوني",
    "تونسي",
    "تركي",
    "تركماني",
    "توفالي",
    "أوغندي",
    "أوكراني",
    "أوروغوياني",
    "أوزبكي",
    "فاتيكاني",
    "فنزويلي",
    "فيتنامي",
    "ويلزي",
    "يمني",
    "زامبي",
    "زيمبابوي"
  ];

  // Top pe array define karlo
  const countriesList = [
    "المملكة العربية السعودية",
    "آيسلندا",
    "أذربيجان",
    "أرمينيا",
"أستراليا",
"أفغانستان",
"ألبانيا",
"ألمانيا",
"أنتيغوا وباربودا",
"أندورا",
"أنغولا",
"أوروغواي",
"أوزبكستان",
"أوغندا",
"أوكرانيا",
"إثيوبيا",
"إريتريا",
"إسبانيا",
"إستونيا",
"إسرائيل",
"إسواتيني",
"إندونيسيا",
"إيران",
"إيرلندا",
"إيطاليا",
"الأرجنتين",
"الأردن",
"الإكوادور",
"الإمارات العربية المتحدة",
"البحرين",
"البرازيل",
"البرتغال",
"البوسنة والهرسك",
"التشيك",
"الجبل الأسود",
"الجزائر",
"الدانمارك",
"الرأس الأخضر",
"السلفادور",
"السنغال",
"السودان",
"السويد",
"الصومال",
"الصين",
"العراق",
"الغابون",
"الفاتيكان",
"الفلبين",
"الكاميرون",
"الكونغو",
"الكونغو الديمقراطية",
"المالديف",
"المجر",
"المغرب",
"المكسيك",
"المملكة المتحدة",
"النمسا",
"النيجر",
"النرويج",
"الهند",
"الولايات المتحدة الأمريكية",
"اليابان",
"اليونان",
"باراغواي",
"باكستان",
"بالاو",
"بابوا غينيا الجديدة",
"بلجيكا",
"بنغلاديش",
"بنما",
"بنين",
"بوتان",
"بوتسوانا",
"بولندا",
"بوليفيا",
"بوركينا فاسو",
"بوروندي",
"بربادوس",
"بليز",
"بروناي",
"بلغاريا",
"بيلاروسيا",
"بيرو",
"تايلاند",
"تايوان",
"تركمانستان",
"تركيا",
"تنزانيا",
"تيمور الشرقية",
"توغو",
"تونغا",
"تونس",
"ترينيداد وتوباغو",
"تشاد",
"تشيلي",
"جمهورية أفريقيا الوسطى",
"جمهورية الدومينيكان",
"جزر القمر",
"جزر سليمان",
"جزر مارشال",
"جيبوتي",
"جامايكا",
"جورجيا",
"جنوب أفريقيا",
"جنوب السودان",
"دومينيكا",
"روسيا",
"رومانيا",
"رواندا",
"زامبيا",
"زيمبابوي",
"سان مارينو",
"سانت كيتس ونيفيس",
"سانت لوسيا",
"سانت فنسنت والغرينادين",
"ساموا",
"ساو تومي وبرينسيب",
"سريلانكا",
"سورينام",
"سوريا",
"سويسرا",
"سيراليون",
"سيشل",
"سلوفاكيا",
"سلوفينيا",
"سنغافورة",
"غانا",
"غرينادا",
"غواتيمالا",
"غينيا",
"غينيا الاستوائية",
"غينيا بيساو",
"غيانا",
"فانواتو",
"فلسطين",
"فنلندا",
"فيتنام",
"فيجي",
"فنزويلا",
"قبرص",
"قطر",
"كازاخستان",
"كرواتيا",
"كندا",
"كوبا",
"كوريا الجنوبية",
"كوريا الشمالية",
"كوستاريكا",
"كولومبيا",
"الكويت",
"كيريباتي",
"كينيا",
"قيرغيزستان",
"لبنان",
"لوكسمبورغ",
"ليبيريا",
"ليبيا",
"ليتوانيا",
"ليختنشتاين",
"ليسوتو",
"لاتفيا",
"لاوس",
"مدغشقر",
"مالطا",
"مالي",
"ماليزيا",
"مالاوي",
"مقدونيا الشمالية",
"موناكو",
"مولدوفا",
"ميكرونيزيا",
"ميانمار",
"موريشيوس",
"موريتانيا",
"موزمبيق",
"منغوليا",
"مصر",
"ناميبيا",
"ناورو",
"نيبال",
"نيجيريا",
"نيكاراغوا",
"نيوزيلندا",

"هولندا",
"هندوراس",
"هايتي",
"اليمن",
  ]
  const [isBranchOpen, setIsBranchOpen] = useState(false);
  const [isHowHeardOpen, setIsHowHeardOpen] = useState(false);
  const [isNationalityOpen, setIsNationalityOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);

  const [isInterestOpen, setIsInterestOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFieldInvalid = (field: string) =>
    submitted && !formData[field as keyof typeof formData];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    // check empty fields
    const requiredFields = ["branch", "name", "mobile", "email"];
    const hasEmpty = requiredFields.some(
      (field) => !formData[field as keyof typeof formData]
    );

    if (hasEmpty) {
      setMessage("❌ Please fill all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/send-appointment-ar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage(" .Thank you! Your request has been sent");
        setFormData({
          interest: "",
          branch: "",
          doctor: "",
          name: "",
          isForYou: "",
          nationality: "",
          countryOfResidence: "",
          cityIfInSA: "",
          gender: "",
          mobile: "",
          email: "",
          preferredDate: "",
          preferredTime: "",
          howHeard: "",
        });
        setSubmitted(false);
      } else {
        const errorData = await response.json();
        setMessage("❌ Failed to send. " + (errorData.error || ""));
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setMessage("❌ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="fertility-area mt-5 text-center">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 ref={headerRef}
                  className={`left animate-left ${headerVisible ? "show" : ""}`}>احجز موعدك الآن </h2>
              </div>
            </div>
            <div className="left ">
              <p className="text-center ">
                نحن هنا لنكون إلى جانبك في كل خطوة من رحلتك.<br />
                يرجى تعبئة النموذج أدناه لطلب موعد مع أحد أطبائنا المتخصصين، وسيقوم أحد منسقي مركز الاتصال بالتواصل معك خلال 48 ساعة لتأكيد الحجز والإجابة عن أي استفسارات أولية۔
              </p>
            </div>
          </div>
        </div>

        {/* FORM START */}
        <div className="d-flex justify-content-center align-items-center mb-5 pbt-140" style={{ minHeight: "100vh" }}>
          <form onSubmit={handleSubmit} className="appointment-form text-end" style={{ maxWidth: "800px", width: "100%" }}>
            {/* I am interested in */}
            <div className="row g-3">
              <div className="custom-dropdown mb-3" style={{ position: "relative", padding: "0px" }}>
                <label className="form-label">
                  ما الخدمة التي تبحث عنها؟{" "}
                  <span style={{ color: isFieldInvalid("interest") ? "red" : "black" }}>*</span>
                </label>

                {/* Button */}
                <button
                  type="button"
                  className={`form-control ${isFieldInvalid("interest") ? "is-invalid" : ""}`}
                  onClick={() => setIsInterestOpen((prev) => !prev)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: formData.interest ? "#000" : "#808080",
                    padding: "6px 12px",
                  }}
                >
                  <span>{formData.interest || "ما الخدمة التي تبحث عنها؟"}</span>
                  <img
                    src="/images/arrow.png"
                    alt="arrow"
                    style={{ width: "16px", height: "16px" }}
                  />
                </button>

                {/* Dropdown List */}
                {isInterestOpen && (
                  <ul
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      border: "1px solid #ccc",
                      background: "#fff",
                      zIndex: 20,
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      borderRadius: "4px",
                      maxHeight: "200px", // scroll height
                      overflowY: "auto",
                    }}
                  >
                    {[
                      "الرغبة في الحمل",
                      "استشارة أولية في الخصوبة",
                      "تجميد البويضات أو الحيوانات المنوية",
                      "فحوصات الخصوبة",
                      "متابعة الحمل",
                      "مشاكل الذكورة / أمراض الذكورة",
                      "مشاكل في أمراض النساء",
                      "فحص عام وتحاليل",
                      "أسباب أخرى",
                    ].map((option) => (
                      <li
                        key={option}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, interest: option }));
                          setIsInterestOpen(false);
                        }}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          background: formData.interest === option ? "#004E78" : "#fff",
                          color: formData.interest === option ? "#fff" : "#212529",
                        }}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>

            {/* Select Branch */}
            <div className="row g-3">
              <div className="custom-dropdown mb-3" style={{ position: "relative", padding: "0px" }}>
                <label className="appointmentform-label">
                  الفرع{" "}
                  <span style={{ color: isFieldInvalid("branch") ? "red" : "black" }}>*</span>
                </label>


                {/* Button */}
                <button
                  type="button"
                  className={`form-control ${isFieldInvalid("branch") ? "is-invalid" : ""}`}
                  onClick={() => setIsBranchOpen((prev) => !prev)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: formData.branch ? "#000" : "#808080",
                    padding: "6px 12px",
                  }}
                >
                  <span>{formData.branch || " الفرع"}</span>
                  <img
                    src="/images/arrow.png"
                    alt="arrow"
                    style={{ width: "16px", height: "16px" }}
                  />
                </button>

                {/* Dropdown List */}
                {isBranchOpen && (
                  <ul
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      border: "1px solid #ccc",
                      background: "#fff",
                      zIndex: 20,
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      borderRadius: "4px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {["الرياض", "جدة", "الأحساء"].map((branch) => (
                      <li
                        key={branch}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, branch }));
                          setIsBranchOpen(false);
                        }}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          background: formData.branch === branch ? "#004E78" : "#fff",
                          color: formData.branch === branch ? "#fff" : "#212529",
                        }}
                      >
                        {branch}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

            </div>


            {/* Doctor */}
            <div className="row g-3">

              <div className="custom-dropdown mb-3" style={{ position: "relative", padding: "0px" }}>
                <label className="appointmentform-label">
                  اختر الطبيب{" "}
                  <span style={{ color: isFieldInvalid("doctor") ? "red" : "black" }}>*</span>
                </label>

                {/* Button */}
                <button
                  type="button"
                  className={`form-control ${isFieldInvalid("doctor") ? "is-invalid" : ""}`}
                  onClick={() => setIsDoctorOpen((prev) => !prev)}
                  disabled={!formData.branch} // jab tak branch select na ho, disable
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: formData.doctor ? "#000" : "#808080",
                    padding: "6px 12px",
                    cursor: formData.branch ? "pointer" : "not-allowed",
                  }}
                >
                  <span>{formData.doctor || "اختر الطبيب"}</span>
                  <img
                    src="/images/arrow.png"
                    alt="arrow"
                    style={{ width: "16px", height: "16px" }}
                  />
                </button>

                {/* Dropdown List */}
                {isDoctorOpen && formData.branch && (
                  <ul
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      border: "1px solid #ccc",
                      background: "#fff",
                      zIndex: 20,
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      borderRadius: "4px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {(() => {
                      let doctors: string[] = [];
                      if (formData.branch === "الرياض") {
                        doctors = [
                          "الدكتور عبد العزيز الشهراني",
                          "الدكتور عاصم الوهيبي",
                          "الدكتور وجدي العمرى",
                          "الدكتورة داليا نور",
                          "الدكتور موسى النعمي",
                        ];
                      } else if (formData.branch === "جدة") {
                        doctors = [
                          "الدكتور فواز إدريس",
                          "الدكتور مازن بشارة",
                          "الدكتور أحمد الشيخ",
                          "الدكتورة رزان غيث",
                          "الدكتورة مايا البزرة",
                          "الدكتورة مرام دعدوع",
                          "الدكتور أحمد هارون",
                        ];
                      } else if (formData.branch === "الأحساء") {
                        doctors = [
                          "الدكتورة رانيا الشريفي",
                          "الدكتور بسام نصير ",
                          "الدكتور أحمد النويصر",
                          "الدكتورة مدين آل خلف",
                        ];
                      }
                      return doctors.map((doc) => (
                        <li
                          key={doc}
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, doctor: doc }));
                            setIsDoctorOpen(false);
                          }}
                          style={{
                            padding: "8px",
                            cursor: "pointer",
                            background: formData.doctor === doc ? "#004E78" : "#fff",
                            color: formData.doctor === doc ? "#fff" : "#212529",
                          }}
                        >
                          {doc}
                        </li>
                      ));
                    })()}
                  </ul>
                )}

              </div>
            </div>


            {/* Your Name */}
            <div className="row g-3">
              <div className="col-md-12 mb-3" style={{ position: "relative", padding: "0px" }}>
                <label className="appointmentform-label">الاسم الكامل<span style={{ color: isFieldInvalid("name") ? "red" : "black" }}>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="الاسم الكامل"
                  required
                />
              </div>
            </div>

            {/* Is this appointment for you */}
            <div className="row g-3">
              <div className="col-md-12 mb-3">
                <label className="appointmentform-label d-block mb-2">
                  هل الموعد لك شخصيًا؟<span style={{ color: isFieldInvalid("isForYou") ? "red" : "black" }}>*</span>
                </label>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isForYou"
                    id="isForYouYes"
                    value="yes"
                    checked={formData.isForYou === "yes"}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="isForYouYes">
                    لا
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="isForYou"
                    id="isForYouNo"
                    value="no"
                    checked={formData.isForYou === "no"}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="isForYouNo">
                    نعم
                  </label>
                </div>
              </div>
            </div>

            {/* Nationality */}
            <div className="row g-3">
              <div className="col-md-12 mb-3" style={{ position: "relative", padding: "0px" }}>
                <label className="appointmentform-label">
                  الجنسية
                  <span style={{ color: isFieldInvalid("nationality") ? "red" : "black" }}>*</span>
                </label>

                {/* Button for custom dropdown */}
                <button
                  type="button"
                  className={`form-control ${isFieldInvalid("nationality") ? "is-invalid" : ""}`}
                  onClick={() => setIsNationalityOpen((prev) => !prev)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: formData.nationality ? "#000" : "#808080",
                    padding: "6px 12px",
                  }}
                >
                  <span>{formData.nationality || "الجنسية"}</span>
                  <img
                    src="/images/arrow.png"
                    alt="arrow"
                    style={{ width: "16px", height: "16px" }}
                  />
                </button>

                {/* Dropdown list */}
                {isNationalityOpen && (
                  <ul
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      border: "1px solid #ccc",
                      background: "#fff",
                      zIndex: 20,
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      borderRadius: "4px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {nationalities.map((country, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, nationality: country }));
                          setIsNationalityOpen(false);
                        }}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          background: formData.nationality === country ? "#004E78" : "#fff",
                          color: formData.nationality === country ? "#fff" : "#212529",
                        }}
                      >
                        {country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Country of Residence */}
            <div className="row g-3">
              <div className="col-md-12 mb-3" style={{ position: "relative", padding: "0px" }}>
                <label className="appointmentform-label">
                  بلد الإقامة
                  <span style={{ color: isFieldInvalid("countryOfResidence") ? "red" : "black" }}>*</span>
                </label>

                {/* Button for custom dropdown */}
                <button
                  type="button"
                  className={`form-control ${isFieldInvalid("countryOfResidence") ? "is-invalid" : ""}`}
                  onClick={() => setIsCountryOpen((prev) => !prev)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: formData.countryOfResidence ? "#000" : "#808080",
                    padding: "6px 12px",
                  }}
                >
                  <span>{formData.countryOfResidence || "بلد الإقامة"}</span>
                  <img
                    src="/images/arrow.png"
                    alt="arrow"
                    style={{ width: "16px", height: "16px" }}
                  />
                </button>

                {/* Dropdown list */}
                {isCountryOpen && (
                  <ul
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      border: "1px solid #ccc",
                      background: "#fff",
                      zIndex: 20,
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      borderRadius: "4px",
                      maxHeight: "200px",
                      overflowY: "auto",
                    }}
                  >
                    {countriesList.map((country, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, countryOfResidence: country }));
                          setIsCountryOpen(false);
                        }}
                        style={{
                          padding: "8px",
                          cursor: "pointer",
                          background: formData.countryOfResidence === country ? "#004E78" : "#fff",
                          color: formData.countryOfResidence === country ? "#fff" : "#212529",
                        }}
                      >
                        {country}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>


            {/* City – show only if Saudi Arabia selected */}
            {formData.countryOfResidence === "المملكة العربية السعودية" && (
              <div className="row g-3">
                <div className="col-md-12 mb-3" style={{ position: "relative", padding: "0px" }}>
                  <label className="appointmentform-label">
                    إذا كنت تعيش في المملكة العربية السعودية، يرجى ذكر المدينة.{" "}
                    <span style={{ color: isFieldInvalid("cityIfInSA") ? "red" : "black" }}>*</span>
                  </label>

                  {/* Button for custom dropdown */}
                  <button
                    type="button"
                    className={`form-control ${isFieldInvalid("cityIfInSA") ? "is-invalid" : ""}`}
                    onClick={() => setIsCityOpen((prev) => !prev)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: formData.cityIfInSA ? "#000" : "#808080",
                      padding: "6px 12px",
                    }}
                  >
                    <span>{formData.cityIfInSA || "اختر المدينة"}</span>
                    <img
                      src="/images/arrow.png"
                      alt="arrow"
                      style={{ width: "16px", height: "16px" }}
                    />
                  </button>

                  {/* Dropdown list */}
                  {isCityOpen && (
                    <ul
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        right: 0,
                        border: "1px solid #ccc",
                        background: "#fff",
                        zIndex: 20,
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        borderRadius: "4px",
                        maxHeight: "200px",
                        overflowY: "auto",
                      }}
                    >
                      {[
                        "الرياض",
                        "المدينة المنورة",
                        "الدمام",
                        "جدة",
                        "الطائف",
                        "سكاكا",
                        "مكة المكرمة",
                        "تبوك",
                        "بريدة",
                        "الخبر",
                        "الظهران",
                        "أبها",
                        "خميس مشيط",
                        "حائل",
                        "القصيم (بريدة)",
                        "الأحساء (الهفوف والمبرز)",
                        "نجران",
                        "جازان",
                        "ينبع",
                        "الباحة",
                        "عرعر",
                        "أخرى",
                      ].map((city, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, cityIfInSA: city }));
                            setIsCityOpen(false);
                          }}
                          style={{
                            padding: "8px",
                            cursor: "pointer",
                            background: formData.cityIfInSA === city ? "#004E78" : "#fff",
                            color: formData.cityIfInSA === city ? "#fff" : "#212529",
                          }}
                        >
                          {city}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}


            {/* Gender */}
            <div className="row g-3">
              <div className="col-md-12 mb-3">
                <label className="appointmentform-label">الجنس<span style={{ color: isFieldInvalid("gender") ? "red" : "black" }}>*</span></label>
                <div className="d-flex gap-3 mt-2">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="genderMale"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="genderMale">
                      أنثى
                    </label>
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="genderFemale"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="genderFemale">
                      ذكر
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="row g-3">
              <div className="col-md-12 mb-3">
                <label className="appointmentform-label">رقم الجوال<span style={{ color: isFieldInvalid("mobile") ? "red" : "black" }}>*</span></label>
                <input
                  type="text"
                  className="form-control"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="رقم الجوال"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="row g-3">
              <div className="col-md-12 mb-3">
                <label className="appointmentform-label">البريد الإلكتروني<span style={{ color: isFieldInvalid("email") ? "red" : "black" }}>*</span></label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="البريد الإلكتروني"
                  required
                />
              </div>
            </div>

            {/* Preferred Date */}
            <div className="row g-3">
              <div className="col-md-12 mb-3">
                <label className="appointmentform-label">اختر التاريخ المفضل للموعد<span style={{ color: isFieldInvalid("preferredDate") ? "red" : "black" }}>*</span></label>
                <input
                  type="date"
                  className="form-control"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  placeholder="اختر التاريخ المفضل للموعد"
                  required
                />
              </div>
            </div>

            {/* Preferred Time */}
            {/* Preferred Time */}
            <div className="custom-dropdown mb-3" style={{ position: "relative", padding: "0px" }}>
              <label className="appointmentform-label">
                اختر الوقت المفضل{" "}
                <span style={{ color: submitted && !formData.preferredTime ? "red" : "black" }}>*</span>
              </label>

              {/* Button */}
              <button
                type="button"
                className={`form-control ${submitted && !formData.preferredTime ? "is-invalid" : ""}`}
                onClick={() => setIsTimeOpen((prev) => !prev)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: formData.preferredTime ? "#000" : "#808080",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                <span>{formData.preferredTime || "9AM to 8PM"}</span>
                <img src="/images/arrow.png" alt="arrow" style={{ width: "16px", height: "16px" }} />
              </button>

              {/* Dropdown List */}
              {isTimeOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    border: "1px solid #ccc",
                    background: "#fff",
                    zIndex: 20,
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    borderRadius: "4px",
                    maxHeight: "210px",
                    overflowY: "auto",
                    direction: "ltr",
                  }}
                >
                  {[
                    "9:00 AM", "9:15 AM", "9:30 AM", "9:45 AM",
                    "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
                    "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
                    "12:00 PM", "12:15 PM", "12:30 PM", "12:45 PM",
                    "1:00 PM", "1:15 PM", "1:30 PM", "1:45 PM",
                    "2:00 PM", "2:15 PM", "2:30 PM", "2:45 PM",
                    "3:00 PM", "3:15 PM", "3:30 PM", "3:45 PM",
                    "4:00 PM", "4:15 PM", "4:30 PM", "4:45 PM",
                    "5:00 PM", "5:15 PM", "5:30 PM", "5:45 PM",
                    "6:00 PM", "6:15 PM", "6:30 PM", "6:45 PM",
                    "7:00 PM", "7:15 PM", "7:30 PM", "7:45 PM",
                    "8:00 PM"
                  ].map((time) => (
                    <li
                      key={time}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, preferredTime: time }));
                        setIsTimeOpen(false);
                      }}
                      style={{
                        padding: "8px",
                        cursor: "pointer",
                        background: formData.preferredTime === time ? "#004E78" : "#fff",
                        color: formData.preferredTime === time ? "#fff" : "#212529",
                      }}
                    >
                      {time}
                    </li>
                  ))}
                </ul>
              )}
            </div>


            {/* How did you hear about us */}
            {/* How did you hear about us */}
            <div className="row g-3">
              <div className="col-md-12" style={{ position: "relative" }}>
                <label className="appointmentform-label">
                  كيف سمعت عنا؟
                  <span style={{ color: isFieldInvalid("howHeard") ? "red" : "black" }}>*</span>
                </label>
              </div>
            </div>

            {/* Button */}
            <div className="custom-dropdown mb-3" style={{ position: "relative", padding: "0px" }}>

              <button
                type="button"
                className={`form-control ${isFieldInvalid("howHeard") ? "is-invalid" : ""}`}
                onClick={() => setIsHowHeardOpen((prev) => !prev)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: formData.howHeard ? "#000" : "#808080",
                  padding: "6px 12px",
                  cursor: "pointer",
                }}
              >
                <span>{formData.howHeard || "كيف سمعت عنا؟"}</span>
                <img src="/images/arrow.png" alt="arrow" style={{ width: "16px", height: "16px" }} />
              </button>

              {/* Dropdown List */}
              {isHowHeardOpen && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    right: 0,
                    border: "1px solid #ccc",
                    background: "#fff",
                    zIndex: 20,
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    borderRadius: "4px",
                    maxHeight: "140px",
                    overflowY: "auto",
                  }}
                >
                  {[
                    "بحث عبر جوجل",
                    "إنستغرام",
                    "سناب شات",
                    "فيسبوك",
                    "تيك توك",
                    "موصى من صديق / قريب",
                    "تحويل من طبيب آخر",
                    "صحيفة / جريدة",
                    "مجلة",
                    "فعالية أو محاضرة",
                    "إعلان لوحة طرق",
                    "إذاعة",
                    "تلفزيون",
                    "عن طريق المعارف",
                  ].map((option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setFormData((prev) => ({ ...prev, howHeard: option }));
                        setIsHowHeardOpen(false);
                      }}
                      style={{
                        padding: "8px",
                        cursor: "pointer",
                        background: formData.howHeard === option ? "#004E78" : "#fff",
                        color: formData.howHeard === option ? "#fff" : "#212529",
                      }}
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>



            {/* Submit */}
            <div className="row g-3 mt-3">
              <div className="col-md-12 text-center">
                <button type="submit" className="btn btn-primary btn-blog feedback-btn btn-large mt-3">
                  إرسال
                </button>
              </div>
            </div>
            {message && <p className="mt-3 text-center">{message}</p>}
          </form>

        </div>
        {/* FORM END */}


      </div>
    </div>
  );
};

export default AppointmentSection;
