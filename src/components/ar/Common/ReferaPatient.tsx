"use client";



import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type FormData = {
  // Branch
  branch: string;

  // Referring Physician
  referringPhysicianName: string;
  referringPhysicianPhone: string;
  referringPhysicianEmail: string;
  facilityName: string;
  organizationCity: string;
  district: string;

  // Patient
  patientName: string;
  patientPhone: string;
  dateOfBirth: string;
  gender: string;

  // Reason
  reason: string;
  otherReasonText: string;

  // reCAPTCHA
  recaptcha: string | null;
};
const SAUDI_CITIES = [
  "الرياض",
  "جدة",
  "مكة المكرمة",
  "المدينة المنورة",
  "الدمام",
  "الخبر",
  "الظهران",
  "الأحساء",
  "القطيف",
  "الجبيل",
  "الطائف",
  "أبها",
  "خميس مشيط",
  "جازان",
  "نجران",
  "الباحة",
  "بريدة",
  "عنيزة",
  "حائل",
  "تبوك",
  "سكاكا",
  "عرعر",
  "ينبع",
  "القنفذة",
  "الرس",
  "الزلفي",
  "وادي الدواسر",
  "بيشة",
  "القريات",
  "رابغ",
  "الخرج",
];



const AppointmentSection = () => {
  const [formData, setFormData] = useState<FormData>({
    branch: "",

    referringPhysicianName: "",
    referringPhysicianPhone: "",
    referringPhysicianEmail: "",
    facilityName: "",
    organizationCity: "",
    district: "",

    patientName: "",
    patientPhone: "",
    dateOfBirth: "",
    gender: "",

    reason: "",
    otherReasonText: "",

    recaptcha: null,
  });

const messageRef = useRef<HTMLParagraphElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [message, setMessage] = useState<React.ReactNode>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
useEffect(() => {
  if (message && messageRef.current) {
    messageRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}, [message]);
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




const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};
  const isFieldInvalid = (field: keyof FormData) =>
    submitted && !String(formData[field] ?? "").trim();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setMessage(null);

    const requiredFields: (keyof FormData)[] = [
      "branch",
      "referringPhysicianName",
      "referringPhysicianPhone",
      "referringPhysicianEmail",
      "patientName",
      "patientPhone",
      "dateOfBirth",
      "gender",
      "reason",
    ];

    const hasEmpty = requiredFields.some((field) => !String(formData[field] ?? "").trim());
    if (hasEmpty) {
      setMessage(
        <div className="alert alert-danger text-end" role="alert">
          ❌ الرجاء تعبئة جميع الحقول المطلوبة.
        </div>
      );
      
      return;
    }

    if (formData.reason === "أسباب أخرى" && !formData.otherReasonText.trim()) {
      setMessage(
        <div className="alert alert-danger text-end" role="alert">
          ❌ الرجاء تحديد السبب الطبي (أسباب أخرى).
        </div>
      );
     
      return;
    }

    if (!formData.recaptcha) {
      setMessage(
        <div className="alert alert-danger text-end" role="alert">
          ❌ الرجاء التحقق من reCAPTCHA قبل الإرسال.
        </div>
      );
      
      return;
    }

    try {
      setSubmitting(true);

      const response = await fetch("/api/send-appointment-ar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({} as any));

      if (!response.ok) {
        const errMsg = data?.error ? ` ${data.error}` : "";
        setMessage(
          <div className="alert alert-danger text-end" role="alert">
            ❌ فشل الإرسال.{errMsg}
          </div>
        );
        
        return;
      }

setShowThankYou(true);
setMessage(
  <div className="alert alert-success text-end" role="alert">
    شكراً لكم على إرسال طلب تحويل مريض إلى بنون.
    <br />
    سيقوم فريقنا بالتواصل خلال 48 ساعة لاستكمال الخطوات اللازمة.
    <br />
    نتطلّع إلى التواصل معكم قريباً.
  </div>
);

setSubmitted(false);

      setFormData({
        branch: "",

        referringPhysicianName: "",
        referringPhysicianPhone: "",
        referringPhysicianEmail: "",
        facilityName: "",
        organizationCity: "",
        district: "",

        patientName: "",
        patientPhone: "",
        dateOfBirth: "",
        gender: "",

        reason: "",
        otherReasonText: "",

        recaptcha: null,
      });

      
    } catch (error) {
      console.error(error);
      setMessage(
        <div className="alert alert-danger text-end" role="alert">
          ❌ حدث خطأ. الرجاء المحاولة لاحقاً.
        </div>
      );
     
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fertility-area mt-3 text-center mb-5" lang="ar" dir="rtl">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2
                  ref={headerRef}
                  className={`left animate-left ${headerVisible ? "show" : ""}`}
                >
                  طلب تحويل مريض
                </h2>
              </div>
            </div>

           
              <p className="text-center">
                نشكركم على ثقتكم بنا وتحويل المريض لغرض الخصوبة. يجب تعبئة هذه الاستمارة من
                قبل ممارس طبي فقط.
                <br />
                الرجاء تعبئة النموذج أدناه، وسيقوم أحد أعضاء فريقنا بالتواصل مع المريض خلال
                فترة وجيزة لتقديم المساعدة وحجز الموعد المطلوب.
                <br />
                في حال رغبتك بالتحدث إلى فريقنا الطبي قبل تحويل المريض، يرجى الاتصال بالرقم
                920010022.
              </p>
            
          </div>
        </div>

        {/* FORM START */}
        <div className="d-flex justify-content-center align-items-center mb-5 pbt-140">
  {!showThankYou && (
        <form
          onSubmit={handleSubmit}
          className="appointment-form mx-auto"
          style={{ maxWidth: "1000px", direction: "rtl", textAlign: "right" }}
        >
          {/* التحويل إلى */}
          <div className="card p-3 mb-3">
           <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center flex-wrap gap-3 gap-md-4">
  <h6 className="mb-0 form-label text-size">التحويل إلى: *</h6>

  <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-2 gap-sm-3 gap-md-4 flex-wrap">
    {['بنون – جدة', 'بنون – الرياض', 'بنون – الأحساء'].map((b) => (
      <label key={b} className="form-check-label form-lable mb-0 d-flex align-items-center">
        <input
          type="radio"
          name="branch"
          className={`form-check-input ms-2 ${isFieldInvalid('branch') ? 'is-invalid' : ''}`}
          value={b}
          checked={formData.branch === b}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              branch: (e.target as HTMLInputElement).value,
            }))
          }
        />
        {b}
      </label>
    ))}
  </div>
</div>

            {isFieldInvalid("branch") && (
              <div className="invalid-feedback d-block text-end mt-2">
                الرجاء اختيار الفرع.
              </div>
            )}
          </div>

          {/* معلومات الطبيب المحوّل */}
          <h5 className="mb-3 text-size">معلومات الطبيب المحوّل</h5>
          <div className="card p-3 mb-3">
            <div className="mb-3">
              <label className="form-label text-size">اسم الطبيب *</label>
              <input
                className={`form-control ${isFieldInvalid("referringPhysicianName") ? "is-invalid" : ""}`}
                name="referringPhysicianName"
                value={formData.referringPhysicianName}
                onChange={handleChange}
                type="text"
                style={{ direction: "rtl", textAlign: "right" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-size">رقم الهاتف *</label>
              <input
                className={`form-control ${isFieldInvalid("referringPhysicianPhone") ? "is-invalid" : ""}`}
                name="referringPhysicianPhone"
                value={formData.referringPhysicianPhone}
                onChange={handleChange}
                type="tel"
                style={{ direction: "rtl", textAlign: "right" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-size">البريد الإلكتروني *</label>
              <input
                className={`form-control ${isFieldInvalid("referringPhysicianEmail") ? "is-invalid" : ""}`}
                name="referringPhysicianEmail"
                value={formData.referringPhysicianEmail}
                onChange={handleChange}
                type="email"
                style={{ direction: "rtl", textAlign: "right" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-size">اسم المنشأة الطبية</label>
              <input
                className="form-control"
                name="facilityName"
                value={formData.facilityName}
                onChange={handleChange}
                type="text"
                style={{ direction: "rtl", textAlign: "right" }}
              />
            </div>
<div className="mb-3">
  <label className="form-label text-size">المدينة</label>
  <select
    className="form-select form-control"
    name="organizationCity"
    value={formData.organizationCity}
    onChange={handleChange}
    style={{ direction: "rtl", textAlign: "right" }}
  >
    <option value="">اختر المدينة</option>
    {SAUDI_CITIES.map((city) => (
      <option key={city} value={city}>
        {city}
      </option>
    ))}
  </select>
</div>



          
          </div>

          {/* معلومات المريض */}
          <h5 className="mb-3 text-size">معلومات المريض</h5>
          <div className="card p-3 mb-3">
            <div className="mb-3">
              <label className="form-label text-size">اسم المريض/المريضة *</label>
              <input
                className={`form-control ${isFieldInvalid("patientName") ? "is-invalid" : ""}`}
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                type="text"
                style={{ direction: "rtl", textAlign: "right" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label text-size">رقم الهاتف *</label>
              <input
                className={`form-control ${isFieldInvalid("patientPhone") ? "is-invalid" : ""}`}
                name="patientPhone"
                value={formData.patientPhone}
                onChange={handleChange}
                type="tel"
                style={{ direction: "rtl", textAlign: "right" }}
              />
            </div>


            <div className="mb-0">
              <label className="form-label text-size d-block">الجنس *</label>
              <div className="d-flex gap-4 flex-wrap">
                {["ذكر", "أنثى"].map((g) => (
                  <label key={g} className="form-check-label form-lable mb-0 d-flex align-items-center">
                    <input
                      className={`form-check-input ms-2 ${isFieldInvalid("gender") ? "is-invalid" : ""}`}
                      type="radio"
                      name="gender"
                      checked={formData.gender === g}
                      onChange={() =>
                        setFormData((prev) => ({ ...prev, gender: g }))
                      }
                    />
                    {g}
                  </label>
                ))}
              </div>

              {isFieldInvalid("gender") && (
                <div className="invalid-feedback d-block text-end mt-2">
                  الرجاء اختيار الجنس.
                </div>
              )}
            </div>
          </div>

          {/* السبب الطبي للتحويل */}
          <h5 className="mb-3 text-size" >السبب الطبي للتحويل *</h5>
          <div className="card p-3 mb-3">
            <div className="row">
              {[
                "استشارة طبية",
                "الفحوصات الجينية للأجنة قبل الإرجاع (PGT-A / PGT-M)",
                "الحقن المجهري وأطفال الأنابيب (IVF)",
                "تأخر الحمل الغير مفسّر",
                "العقم المرتبط بالرجل",
                "تنشيط الإباضة",
                "قطع القناة المنوية سابقاً",
                "حفظ الخصوبة لأسباب طبية",
                "الإجهاض المتكرر",
                "أسباب أخرى",
              ].map((r) => (
                <div className="col-md-6 mb-2" key={r}>
                  <label className="form-check-label form-lable mb-0 d-flex align-items-center">
                    <input
                      className={`form-check-input ms-2 ${isFieldInvalid("reason") ? "is-invalid" : ""}`}
                      type="radio"
                      name="reason"
                      value={r}
                      checked={formData.reason === r}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          reason: (e.target as HTMLInputElement).value,
                        }))
                      }
                    />
                    {r}
                  </label>
                </div>
              ))}
            </div>

            {isFieldInvalid("reason") && (
              <div className="invalid-feedback d-block text-end mt-2">
                الرجاء اختيار السبب الطبي.
              </div>
            )}

            {formData.reason === "أسباب أخرى" && (
              <div className="mt-3">
                <label className="form-label text-size fw-bold">
                  الرجاء تحديد السبب الطبي <span className="text-danger">*</span>
                </label>
                <textarea
                  className={`form-control ${submitted && !formData.otherReasonText.trim() ? "is-invalid" : ""}`}
                  name="otherReasonText"
                  value={formData.otherReasonText}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, otherReasonText: e.target.value }))
                  }
                  rows={4}
                  style={{ direction: "rtl", textAlign: "right" }}
                />
              </div>
            )}
          </div>

          {/* reCAPTCHA */}
          <div className="my-3 d-flex ">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              hl="ar"
              onChange={(value: string | null) =>
                setFormData((prev) => ({ ...prev, recaptcha: value }))
              }
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary btn-blog feedback-btn btn-large mt-3"
              disabled={submitting}
            >
              {submitting ? "..." : "إرسال"}
            </button>
          </div>

          {/* Mid-form message (EN form style) */}
  {message && !showThankYou && (
  <p ref={messageRef} className="form-message mt-3">
    {message}
  </p>
  
)}

         
        </form>
         )}

  {/* ✅ success message only (form hidden) */}
  {showThankYou && message && (
    <p ref={messageRef} className="form-message">
      {message}
    </p>
    
  )}
  </div>
        {/* FORM END */}
      </div>
          <style jsx>{`
  .form-lable {
    font-family: 'Alexandria' !important;
}
        label.form-check-label {
    font-size: 14px;
}
        @media (max-width: 767px) {
         .text-size{
      font-size:12px;
      font-weight:700;
      }
        label.form-check-label {
    font-size: 12px;
}
     .form-control {
            padding: 0.2rem 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AppointmentSection;
