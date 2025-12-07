
"use client";

import React, { useState, useEffect, useRef } from "react";

const FeedbackSection = () => {
  const [formData, setFormData] = useState({
    branch: "",
    name: "",
    phone: "",
    email: "",
    rating: "",
    story: "",
    feedbackType: [] as string[],
    feedbackDetails: "",
    consent: false,
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
const [isOpen, setIsOpen] = useState(false); // inside FeedbackSection
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFieldInvalid = (field: string) =>
    submitted && !formData[field as keyof typeof formData];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const hasEmpty =
      !formData.branch ||
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.rating ||
      !formData.feedbackType.length ||
      !formData.feedbackDetails ||
      !formData.consent;

    if (hasEmpty) {
      setStatusMessage(" .Please fill all required fields");
      return;
    }

    try {
      const res = await fetch("/api/send-feedback-ar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatusMessage("!Thank you for your valuable feedback");
        setFormData({
          branch: "",
          name: "",
          phone: "",
          email: "",
          rating: "",
          story: "",
          feedbackType: [],
          feedbackDetails: "",
          consent: false,
        });
        setSubmitted(false);
      } else {
        setStatusMessage("❌ حدث خطأ أثناء الإرسال. حاول مرة أخرى لاحقًا.");
      }
    } catch (error) {
      setStatusMessage("❌ لم يتم الإرسال. تحقق من اتصالك بالإنترنت.");
    }
  };

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        {/* Title + description here ... */}
            <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div
                ref={headerRef}
                className={`left animate-left ${headerVisible ? "show" : ""}`}
              >

                <h2>شاركونا تجربتكم </h2>
              </div>
            </div>
            <div className="left">
              <p> في بنون، نحرص على تقديم رعاية استثنائية تتمحور حولكم. آراؤكم مهمة جداً بالنسبة لنا — فهي تساعدنا على التطور، وتجاوز التوقعات، وتعزيز جودة التجربة التي نطمح لتقديمها لكل مريض۔</p>
              <div className="d-flex align-items-center mb-2">
                <img src="/images/icons/mail.svg" alt="Email" width={24} height={24} className="me-2" />
                <p className="mb-0"> يمكنكم تقييم تجربتكم عبر النموذج أدناه </p>
              </div>
              <div className="d-flex align-items-center">
                <img src="/images/icons/location.svg" alt="LinkedIn" width={24} height={24} className="me-2" />
                <p > أو مراسلتنا على{" "} feedback@bnoon.sa </p>
              </div>
              <p className="mt-3">هل ترغبون بمشاركة قصتكم ورحلتكم العلاجية؟ قصتكم قد تكون مصدر أمل وإلهام لأزواج آخرين يمرون برحلة مشابهة. نرحّب بمشاركتكم، ومع موافقتكم، قد ننشرها على منصاتنا لتصل لمن يحتاجها۔</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-5 pbt-140">
          <form
            onSubmit={handleSubmit}
            className="w-100 appointment-form"
            style={{ maxWidth: "750px" }}
          >
            {/* all your existing fields stay exactly same */}
               {/* Branch */}
         

<div className="custom-dropdown mb-4" style={{ position: "relative" }}>
  <label className="form-label">الفرع *</label>
  <button
    type="button"
    className={`form-control ${isFieldInvalid("branch") ? "is-invalid" : ""}`}
    onClick={() => setIsOpen((prev) => !prev)}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between", // text left, icon right
      textAlign: "right", // keeps Arabic text aligned right
      color: formData.branch ? "#000" : "#808080",
      padding: "6px 12px",
    }}
  >
    <span>{formData.branch || "اختر الفرع"}</span>
    {/* Arrow icon on right */}
    <img
      src="/images/arrow.png" // your arrow icon path
      alt="arrow"
      style={{ width: "16px", height: "16px" }}
    />
  </button>

  {isOpen && (
    <ul
      className="dropdown-list"
      style={{
        position: "absolute",
        top: "100%",
        left: 0,
        right: 0,
        border: "1px solid #020202ff",
        background: "#fff",
        zIndex: 10,
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}
    >
      {["الرياض", "جدة", "الأحساء"].map((b) => (
        <li
          key={b}
          onClick={() => {
            setFormData((prev) => ({ ...prev, branch: b }));
            setIsOpen(false);
          }}
          style={{
            padding: "8px",
            cursor: "pointer",
            background: formData.branch === b ? "#004E78" : "#fff",
            color: formData.branch === b ? "#fff" : " rgb(33, 37, 41)",
          }}
        >
          {b}
        </li>
      ))}
    </ul>
  )}
</div>


            {/* Patient’s Name */}
            <div className="mb-4">
              <label className="form-label">اسم المريض/المريضة *</label>
              <input
                type="text"
                className={`form-control ${isFieldInvalid("name") ? "is-invalid" : ""
                  }`}
                name="name"
                placeholder="اسم المريض/المريضة "
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Patient’s Phone */}
            <div className="mb-4">
              <label className="form-label">رقم الجوال *</label>
              <input
                type="text"
                className={`form-control ${isFieldInvalid("phone") ? "is-invalid" : ""
                  }`}
                name="phone"
                placeholder="رقم الجوال"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="form-label">البريد الإلكتروني *</label>
              <input
                type="email"
                className={`form-control ${isFieldInvalid("email") ? "is-invalid" : ""
                  }`}
                name="email"
                placeholder=""
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Overall Rating */}
            <div className="mb-4">
              <label className="form-label">تقييم عام  *</label>
              <br />
              <small className="form-text text-muted mb-2">
               بناءً على تجربتكم، ما مدى احتمال أن توصي ب "بنون" لعائلتك أو أصدقائك ؟ من 1 إلى 10، حيث 10 هو الأعلى
              </small>

              <div className="d-flex flex-wrap gap-2 mt-2">
                {[...Array(10)].map((_, i) => (
                  <div className="form-check form-check-inline" key={i + 1}>
                    <input
                      className={`form-check-input ${isFieldInvalid("rating") ? "is-invalid" : ""}`}
                      type="radio"
                      name="rating"
                      id={`rating-${i + 1}`}
                      value={i + 1}
                      checked={formData.rating === String(i + 1)}
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor={`rating-${i + 1}`}>
                      {i + 1}
                    </label>
                  </div>
                ))}
              </div>
            </div>


            {/* Share your story */}
            <div className="mb-4">
              <label className="form-label">شاركوا قصتكم معنا</label> <br />
              <small className="form-text text-muted mb-2">
               إذا رغبتم في مشاركة تجربتكم، يمكنكم كتابتها هنا. خصوصيتكم محفوظة، ولن يتم نشر أي معلومات إلا بموافقتكم. قصتكم قد تمنح الأمل وتلهم آخرين في رحلتهم نحو الإنجاب۔
              </small>
              <textarea
                className="form-control"
                name="story"
                rows={4}
                placeholder=""
                value={formData.story}
                onChange={handleChange}
              ></textarea>

            </div>

            {/* Type of Feedback */}
            <div className="mb-4">
              <label className="form-label">نوع الملاحظة*</label>
              <div className="d-flex gap-3 flex-wrap">
                {["شكوى", "ملاحظة عامة", "اقتراح"].map((type) => (
                  <div key={type} className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className={`form-check-input ${isFieldInvalid("feedbackType") ? "is-invalid" : ""}`}
                      id={`feedback-${type}`}
                      value={type}
                      checked={formData.feedbackType.includes(type)}
                      onChange={(e) => {
                        const { value, checked } = e.target;
                        setFormData((prev) => {
                          if (checked) {
                            return { ...prev, feedbackType: [...prev.feedbackType, value] };
                          } else {
                            return {
                              ...prev,
                              feedbackType: prev.feedbackType.filter((item) => item !== value),
                            };
                          }
                        });
                      }}
                    />
                    <label className="form-check-label" htmlFor={`feedback-${type}`}>
                      {type}
                    </label>
                  </div>
                ))}
              </div>
              {isFieldInvalid("feedbackType") && (
                <div className="invalid-feedback d-block">
                 
                </div>
              )}
            </div>

            {/* Feedback Details */}
            <div className="mb-4">
              <label className="form-label">تفاصيل الملاحظة *</label>
              <textarea
                className={`form-control ${isFieldInvalid("feedbackDetails") ? "is-invalid" : ""
                  }`}
                name="feedbackDetails"
                rows={4}
                placeholder=""
                value={formData.feedbackDetails}
                onChange={handleChange}
              ></textarea>
            </div>
{/* Consent Checkbox */}
<div className="mb-4 form-check">
  <input
    type="checkbox"
    className={`form-check-input ${submitted && !formData.consent ? "is-invalid" : ""}`}
    id="consent"
    name="consent"
    checked={formData.consent || false}
    onChange={(e) =>
      setFormData((prev) => ({ ...prev, consent: e.target.checked }))
    }
  />
  <label className="form-check-label feedback-lable" htmlFor="consent">
   من خلال تعبئة هذا النموذج، فإنك توافق على سياسة الخصوصية الخاصة ببنون، وتسمح لنا بالتواصل معك لمتابعة ملاحظاتك إن لزم الأمر۔
  </label>
</div>
<div className="d-flex justify-content-center mt-3">
            <button type="submit" className="btn btn-primary btn-blog btn-large feedback-btn">
              إرسال
            </button></div>
            {statusMessage && (
              <p className="mt-3 text-center">{statusMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
