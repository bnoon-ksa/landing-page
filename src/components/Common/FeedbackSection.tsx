"use client";

import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
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
    recaptcha: "", 
    consent: false,
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
const [isOpen, setIsOpen] = useState(false);

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

if (
  !formData.branch ||
  !formData.name ||
  !formData.phone ||
  !formData.email ||
  !formData.rating ||
  formData.feedbackType.length === 0 ||
  !formData.consent
) {
  setStatusMessage("❌ Please fill all required fields.");
  return;
}

    try {
     const res = await fetch("/api/send-feedback", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


      const data = await res.json();
      if (data.success) {
        setStatusMessage("✅ Thank you for your valuable feedback!");
        setFormData({
          branch: "",
          name: "",
          phone: "",
          email: "",
          rating: "",
          story: "",
          feedbackType: [],
          feedbackDetails: "",
    recaptcha: "", 
          consent: false,
        });
        setSubmitted(false);
      } else {
        setStatusMessage("❌ Failed to send feedback.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      setStatusMessage("❌ Failed to send feedback.");
    }
  };

  return (
    <div className="fertility-area mt-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div
                ref={headerRef}
                className={`left animate-left ${headerVisible ? "show" : ""}`}
              >
                <h2>Submit Feedback</h2>
              </div>
            </div>
            <div className="left">
              <p>
                At Bnoon, we’re committed to exceptional care. We truly value
                your input — it enables us to grow, exceed expectations, and
                enhance the patient-centered experience we aim to provide.
              </p>
              <div className="d-flex align-items-center mb-2">
                <img
                  src="/images/icons/mail.svg"
                  alt="Email"
                  width={24}
                  height={24}
                  className="me-2"
                />
                <p className="mb-0">
                 Fill out the form below to rate your experience.  
                </p>
              </div>
              <div className="d-flex align-items-center">
                <img
                  src="/images/icons/location.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="me-2"
                />
                <p>
                 Or share your feedback at feedback@bnoon.sa 
                </p>
              </div>
              <p>
                Want to share your story? We'd love to hear it — and with your
                permission, we may feature it on our social media to inspire
                other couples trying to conceive. Email us or fill it below.
              </p>
              <p>
                <strong>Thank you for being part of the Bnoon family. </strong>
              </p>
              <p>
                Please take a moment to share your feedback by filling the below
                survey:
              </p>
            </div>
          </div>
        </div>

        {/* FORM START */}
        <div className="d-flex justify-content-center align-items-center mb-5 pbt-140">
          <form
            onSubmit={handleSubmit}
            className="w-100 appointment-form"
            style={{ maxWidth: "750px" }}
          >
            {/* Branch */}
           <div className="custom-dropdown mb-3" style={{ position: "relative" }}>
  <label className="form-label">
    Select Branch <span style={{ color: isFieldInvalid("branch") ? "red" : "black" }}>*</span>
  </label>

  {/* Button */}
  <button
    type="button"
    className={`form-control ${isFieldInvalid("branch") ? "is-invalid" : ""}`}
    onClick={() => setIsOpen((prev) => !prev)}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between", // text left, arrow right
      color: formData.branch ? "#000" : "#808080",
      padding: "6px 12px",
    }}
  >
    <span>{formData.branch || "Select branch"}</span>

    <img
      src="/images/arrow.png"
      alt="arrow"
      style={{ width: "16px", height: "16px" }}
    />
  </button>

  {/* Dropdown List */}
  {isOpen && (
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
      }}
    >
      {["Riyadh", "Jeddah", "Al Ahsa"].map((branch) => (
        <li
          key={branch}
          onClick={() => {
            setFormData((prev) => ({ ...prev, branch }));
            setIsOpen(false);
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


            {/* Patient’s Name */}
            <div className="mb-3">
              <label className="form-label">
                Patient’s Name{" "}
                <span
                  style={{ color: isFieldInvalid("name") ? "red" : "black" }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                className={`form-control ${
                  isFieldInvalid("name") ? "is-invalid" : ""
                }`}
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Patient’s Phone */}
            <div className="mb-3">
              <label className="form-label">
                Patient’s Phone No.{" "}
                <span
                  style={{ color: isFieldInvalid("phone") ? "red" : "black" }}
                >
                  *
                </span>
              </label>
              <input
                type="text"
                className={`form-control ${
                  isFieldInvalid("phone") ? "is-invalid" : ""
                }`}
                name="phone"
                placeholder="Enter phone no."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">
                Email Address{" "}
                <span
                  style={{ color: isFieldInvalid("email") ? "red" : "black" }}
                >
                  *
                </span>
              </label>
              <input
                type="email"
                className={`form-control ${
                  isFieldInvalid("email") ? "is-invalid" : ""
                }`}
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Rating */}
            <div className="mb-3">
              <label className="form-label">
                Overall Rating{" "}
                <span
                  style={{ color: isFieldInvalid("rating") ? "red" : "black" }}
                >
                  *
                </span>
              </label>
              <br />
              <small className="form-text text-muted">
                Based on your experience today, how likely are you to recommend
                Bnoon to your friends and family? On a scale of 1–10 where 10 is
                the highest.
              </small>

              <div className="d-flex flex-wrap gap-2 mt-2">
                {[...Array(10)].map((_, i) => (
                  <div className="form-check form-check-inline" key={i + 1}>
                    <input
                      className={`form-check-input ${
                        isFieldInvalid("rating") ? "is-invalid" : ""
                      }`}
                      type="radio"
                      name="rating"
                      id={`rating-${i + 1}`}
                      value={i + 1}
                      checked={formData.rating === String(i + 1)}
                      onChange={handleChange}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`rating-${i + 1}`}
                    >
                      {i + 1}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Story */}
            <div className="mb-3">
              <label className="form-label">Share your Story</label>
                <br />
              <small className="form-text text-muted">
               If you’d like to share your story, please do so below. Your information will remain confidential and will only be shared publicly with your consent. Your story could offer hope and inspiration to other couples trying to conceive. 
              </small>
              <textarea
                className="form-control"
                name="story"
                rows={4}
                placeholder="Please type here..."
                value={formData.story}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Type of Feedback */}
            <div className="mb-3">
              <label className="form-label">
                Type of Feedback{" "}
                <span
                  style={{
                    color: isFieldInvalid("feedbackType") ? "red" : "black",
                  }}
                >
                  *
                </span>
              </label>
              <div className="d-flex gap-3 flex-wrap">
                {["Service", "Doctor", "Facilities", "Other"].map((type) => (
                  <div key={type} className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      className={`form-check-input ${
                        isFieldInvalid("feedbackType") ? "is-invalid" : ""
                      }`}
                      id={`feedback-${type}`}
                      value={type}
                      checked={formData.feedbackType.includes(type)}
                      onChange={(e) => {
                        const { value, checked } = e.target;
                        setFormData((prev) => {
                          if (checked) {
                            return {
                              ...prev,
                              feedbackType: [...prev.feedbackType, value],
                            };
                          } else {
                            return {
                              ...prev,
                              feedbackType: prev.feedbackType.filter(
                                (item) => item !== value
                              ),
                            };
                          }
                        });
                      }}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`feedback-${type}`}
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
              {isFieldInvalid("feedbackType") && (
                <div className="invalid-feedback d-block">
                  Please select at least one feedback type.
                </div>
              )}
            </div>

            {/* Feedback Details */}
            <div className="mb-3">
              <label className="form-label">
                Patient's Feedback Details{" "}
                <span
                  style={{
                    color: isFieldInvalid("feedbackDetails") ? "red" : "black",
                  }}
                >
                  *
                </span>
              </label>
              <textarea
                className={`form-control ${
                  isFieldInvalid("feedbackDetails") ? "is-invalid" : ""
                }`}
                name="feedbackDetails"
                rows={4}
                placeholder=""
                value={formData.feedbackDetails}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Consent */}
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className={`form-check-input ${
                  submitted && !formData.consent ? "is-invalid" : ""
                }`}
                id="consent"
                name="consent"
                checked={formData.consent || false}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    consent: e.target.checked,
                  }))
                }
              />
              <label className="form-check-label" htmlFor="consent">
                By filling this form, you agree to Bnoon’s Privacy Policy, and
                you give us permission to contact you to discuss your feedback.
              </label>
            </div>
              <div className="my-3">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(value: string | null) =>
                setFormData((prev) => ({ ...prev, recaptcha: value || "" }))
              }
            />
            
            
            </div>
<div className="d-flex justify-content-center mt-3">
  <button type="submit" className="btn btn-primary btn-large feedback-btn">
    Submit
  </button>
</div>
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
