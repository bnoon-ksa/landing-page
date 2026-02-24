'use client';

import React, { useMemo, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type ReferralFormData = {
  referTo: '' | 'Bnoon – Jeddah' | 'Bnoon – Riyadh' | 'Bnoon – Al Ahsa';

  physicianName: string;
  physicianPhone: string;
  physicianEmail: string; // optional
  healthcareFacilityName: string; // optional
  organizationCity: string; // dropdown (Arabic cities)

  patientName: string;
  patientPhone: string;
  gender: '' | 'Male' | 'Female';

  reasons: string[]; // mandatory (at least one)
  medicalReason: string; // optional

  recaptcha: string; // mandatory
};

const AppointmentSection = () => {
  const [formData, setFormData] = useState<ReferralFormData>({
    referTo: '',

    physicianName: '',
    physicianPhone: '',
    physicianEmail: '',
    healthcareFacilityName: '',
    organizationCity: '',

    patientName: '',
    patientPhone: '',
    gender: '',

    reasons: [],
    medicalReason: '',

    recaptcha: '',
  });

  const messageRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState<React.ReactNode>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const REASONS = useMemo(
    () => [
      'Consultation',
      'Genetic Testing (PGT-A/PGT-M)',
      'IVF/ICSI',
      'Unexplained Infertility',
      'Male Factor Infertility',
      'Ovulation Induction',
      'Previous Vasectomy',
      'Fertility Preservation for Medical Reason',
      'Recurrent Pregnancy Loss',
      'Other',
    ],
    [],
  );

  const SAUDI_CITIES = useMemo(
    () => [
      'Riyadh',
      'Jeddah',
      'Makkah',
      'Madinah',
      'Dammam',
      'Khobar',
      'Dhahran',
      'Al Ahsa',
      'Qatif',
      'Jubail',
      'Taif',
      'Abha',
      'Khamis Mushait',
      'Jazan',
      'Najran',
      'Al Baha',
      'Buraidah',
      'Unaizah',
      'Hail',
      'Tabuk',
      'Sakakah',
      'Arar',
      'Yanbu',
      'Al Qunfudhah',
      'Ar Rass',
      'Zulfi',
      'Wadi ad-Dawasir',
      'Bisha',
      'Al Qurayyat',
      'Rabigh',
      'Al Kharj',
    ],
    [],
  );

  const scrollToMessage = () => {
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 50);
  };

  const setField = <K extends keyof ReferralFormData>(key: K, value: ReferralFormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const toggleReason = (reason: string) => {
    setFormData((prev) => {
      const exists = prev.reasons.includes(reason);
      return {
        ...prev,
        reasons: exists ? prev.reasons.filter((r) => r !== reason) : [...prev.reasons, reason],
      };
    });
  };

  const validate = (): string[] => {
    const errors: string[] = [];

    // Mandatory only:
    if (!formData.physicianName.trim()) errors.push('Physician Name is required.');
    if (!formData.physicianPhone.trim()) errors.push('Physician Phone is required.');

    if (!formData.patientName.trim()) errors.push('Patient Name is required.');
    if (!formData.patientPhone.trim()) errors.push('Patient Phone is required.');
    if (!formData.gender) errors.push('Gender is required.');

    if (formData.reasons.length === 0)
      errors.push('Please select at least one reason for referring.');

    if (!formData.recaptcha) errors.push('Please complete reCAPTCHA.');

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setShowThankYou(false);

    const errors = validate();
    if (errors.length) {
      setMessage(
        <div className="alert alert-danger text-start" role="alert">
          <strong>Please fix the following:</strong>
          <ul className="mb-0">
            {errors.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>,
      );
      scrollToMessage();
      return;
    }

    try {
      setSubmitting(true);

      const res = await fetch('/api/referrals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg =
          (data?.errors && Array.isArray(data.errors) && data.errors.join(', ')) ||
          data?.message ||
          'Submission failed. Please try again.';
        setMessage(
          <div className="alert alert-danger text-start" role="alert">
            {msg}
          </div>,
        );
        scrollToMessage();
        return;
      }

      setMessage(
        <>
          <strong>Thank you! Your referral has been received.</strong>
          <br />
          Our team will contact the patient shortly to support and facilitate the next steps in
          their care.
          <br />
          <em>We look forward to connecting soon.</em>
        </>,
      );
      setShowThankYou(true);
      scrollToMessage();

      // ✅ reset only existing fields (district/dateOfBirth removed)
      setFormData({
        referTo: '',
        physicianName: '',
        physicianPhone: '',
        physicianEmail: '',
        healthcareFacilityName: '',
        organizationCity: '',
        patientName: '',
        patientPhone: '',
        gender: '',
        reasons: [],
        medicalReason: '',
        recaptcha: '',
      });

      scrollToMessage();
    } catch {
      setMessage(
        <div className="alert alert-danger text-start" role="alert">
          Network error. Please try again.
        </div>,
      );
      scrollToMessage();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fertility-area mt-3 text-center mb-5">
      <div className="container">
        <div className="section-title">
          <div className="row justify-content-center align-items-center g-4">
            <div className="col-lg-12 col-md-12">
              <div className="left">
                <h2 className="">Refer a Patient</h2>
              </div>
            </div>

            <div className="text-space">
              <p className="text-center">
                Thank you for placing your trust in Bnoon and for referring your patient for
                fertility care. Please note that this form is intended to be completed exclusively
                by licensed medical practitioners.
                <br />
                Kindly complete the form below, and a member of our healthcare team will contact the
                patient promptly to support and facilitate the next steps in their care.
                <br />
                Should you wish to discuss a case or speak directly with one of our physicians prior
                to making a referral, please contact us at 920010022.
              </p>
            </div>
          </div>
        </div>

        {/* FORM START */}
        {!showThankYou && (
          <form
            onSubmit={handleSubmit}
            className="appointment-form text-start mx-auto refer-form"
            style={{ maxWidth: '1000px' }}
          >
            {/* Refer to */}
                <div className="card p-3 mb-3">
              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 gap-md-5">
                <h6 className="mb-0 form-label text-size">Refer to:</h6>

                <div className="d-flex flex-column flex-md-row gap-2 gap-md-5">
                  {(['Bnoon – Jeddah', 'Bnoon – Riyadh', 'Bnoon – Al Ahsa'] as const).map(
                    (branch) => (
                      <label
                        key={branch}
                        className="form-check-label mb-0 d-flex align-items-center"
                      >
                        <input
                          type="radio"
                          name="referTo"
                          className="form-check-input me-2"
                          value={branch}
                          checked={formData.referTo === branch}
                          onChange={(e) =>
                            setField('referTo', e.target.value as ReferralFormData['referTo'])
                          }
                        />
                        {branch}
                      </label>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Referring Physician Information */}
            <h5 className="mb-3 text-size title-size">Referring Physician Information</h5>
            <div className="card p-3 mb-3">
              <div className="mb-3">
                <label className="form-label text-size">Physician Name *</label>
                <input
                  className="form-control"
                  value={formData.physicianName}
                  onChange={(e) => setField('physicianName', e.target.value)}
                  type="text"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-size">Phone *</label>
                <input
                  className="form-control"
                  value={formData.physicianPhone}
                  onChange={(e) => setField('physicianPhone', e.target.value)}
                  type="tel"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-size">Email Address</label>
                <input
                  className="form-control"
                  value={formData.physicianEmail}
                  onChange={(e) => setField('physicianEmail', e.target.value)}
                  type="email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-size">Healthcare Facility Name</label>
                <input
                  className="form-control"
                  value={formData.healthcareFacilityName}
                  onChange={(e) => setField('healthcareFacilityName', e.target.value)}
                  type="text"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-size">Organization City</label>
                <select
                  className="form-select form-control"
                  value={formData.organizationCity}
                  onChange={(e) => setField('organizationCity', e.target.value)}
                >
                  <option value="">Select City</option>

                  {SAUDI_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Referred Patient Information */}
            <h5 className="mb-3 text-size title-size">Referred Patient Information</h5>
            <div className="card p-3 mb-3">
              <div className="mb-3">
                <label className="form-label text-size">Patient Name *</label>
                <input
                  className="form-control"
                  value={formData.patientName}
                  onChange={(e) => setField('patientName', e.target.value)}
                  type="text"
                />
              </div>

              <div className="mb-3">
                <label className="form-label text-size">Patient Phone *</label>
                <input
                  className="form-control"
                  value={formData.patientPhone}
                  onChange={(e) => setField('patientPhone', e.target.value)}
                  type="tel"
                />
              </div>

              <div className="mb-2">
                <label className="form-label d-block text-size">Gender *</label>
                <div className="d-flex gap-4 flex-wrap">
                  <label className="form-check-label mb-0">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      name="gender"
                      checked={formData.gender === 'Male'}
                      onChange={() => setField('gender', 'Male')}
                    />
                    Male
                  </label>

                  <label className="form-check-label mb-0">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      name="gender"
                      checked={formData.gender === 'Female'}
                      onChange={() => setField('gender', 'Female')}
                    />
                    Female
                  </label>
                </div>
              </div>
            </div>

            {/* Reason for Referring */}
            <h5 className="mb-3 text-size title-size">Reason for Referring *</h5>
            <div className="card p-3 mb-3">
              <div className="row">
                {REASONS.map((r) => (
                  <div className="mb-2" key={r}>
                    <label className="form-check-label">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        checked={formData.reasons.includes(r)}
                        onChange={() => toggleReason(r)}
                      />
                      {r}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-3">
                <label className="form-label text-size">Insert the medical reason (optional)</label>
                <textarea
                  className="form-control"
                  rows={4}
                  value={formData.medicalReason}
                  onChange={(e) => setField('medicalReason', e.target.value)}
                  placeholder="Write medical reason..."
                />
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="my-3">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={(value: string | null) => setField('recaptcha', value || '')}
              />
            </div>

            {/* Submit */}
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary feedback-btn btn-large mt-3"
                disabled={submitting}
              >
                {submitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
        {message && (
          <div ref={messageRef} className="form-message">
            {message}
          </div>
        )}

        {/* FORM END */}
      </div>
      <style jsx>{`
         /* Hard override: affects only the referral form, not navbar or global layout */
  .refer-form{
      border: none;
    border-radius: 0px;
    padding: 0px;
      }
.appointment-form,
.appointment-form * {
    box-sizing: border-box !important;
}

.appointment-form {
    max-width: 1000px !important;
    margin: 0 auto !important;
    font-family: "Segoe UI", Tahoma, Arial, sans-serif !important;
    color: #163246 !important;
}

.appointment-form .card {
    background: #ffffff !important;
    border: 1px solid #d8e4ee !important;
    border-radius: 12px !important;
    padding: 18px !important;
    margin-bottom: 16px !important;
    box-shadow: 0 6px 18px rgba(11, 50, 78, 0.06) !important;
}

.appointment-form .title-size {
    color: #0f4e72 !important;
    margin: 22px 0 10px !important;
    font-size: 21px !important;
    font-weight: 700 !important;
    line-height: 1.25 !important;
}

.appointment-form .form-label {
    display: block !important;
    margin-bottom: 8px !important;
    color: #1e3748 !important;
    font-size: 15px !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
}

.appointment-form .form-control,
.appointment-form .form-select,
.appointment-form input[type="text"],
.appointment-form input[type="email"],
.appointment-form input[type="tel"],
.appointment-form textarea,
.appointment-form select {
    appearance: none !important;
    -webkit-appearance: none !important;
    width: 100% !important;
    min-height: 46px !important;
    border: 1px solid #cfdeea !important;
    border-radius: 10px !important;
    background: #ffffff !important;
    color: #132f41 !important;
    padding: 10px 12px !important;
    margin: 0 !important;
    font-size: 15px !important;
    font-weight: 400 !important;
    line-height: 1.4 !important;
    box-shadow: none !important;
    transition: border-color 0.2s ease, box-shadow 0.2s ease !important;
}

.appointment-form select,
.appointment-form .form-select {
    padding-right: 36px !important;
    background-image: linear-gradient(45deg, transparent 50%, #4d6679 50%), linear-gradient(135deg, #4d6679 50%, transparent 50%) !important;
    background-position: calc(100% - 16px) calc(50% - 2px), calc(100% - 11px) calc(50% - 2px) !important;
    background-size: 5px 5px, 5px 5px !important;
    background-repeat: no-repeat !important;
}

.appointment-form textarea,
.appointment-form textarea.form-control {
    min-height: 110px !important;
    resize: vertical !important;
    padding-top: 10px !important;
}

.appointment-form .form-control:hover,
.appointment-form .form-select:hover,
.appointment-form input:hover,
.appointment-form textarea:hover,
.appointment-form select:hover {
    border-color: #b8cfdf !important;
}

.appointment-form .form-control:focus,
.appointment-form .form-select:focus,
.appointment-form input:focus,
.appointment-form textarea:focus,
.appointment-form select:focus,
.appointment-form .form-check-input:focus,
.appointment-form .btn:focus {
    outline: none !important;
    border-color: #0b6aa2 !important;
    box-shadow: 0 0 0 3px #8dc8e8 !important;
}

.appointment-form .form-check-label {
    color: #1d3748 !important;
    font-size: 15px !important;
    line-height: 1.4 !important;
    font-weight: 500 !important;
}

.appointment-form .form-check-input,
.appointment-form input[type="radio"],
.appointment-form input[type="checkbox"] {
    width: 16px !important;
    height: 16px !important;
    margin-right: 8px !important;
    accent-color: #0b6aa2 !important;
    box-shadow: none !important;
    vertical-align: middle !important;
}

.appointment-form .row {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 8px 16px !important;
    margin: 0 !important;
}

.appointment-form .btn,
.appointment-form button[type="submit"] {
    border: none !important;
    border-radius: 10px !important;
    padding: 12px 26px !important;
    cursor: pointer !important;
    font-weight: 700 !important;
    font-size: 16px !important;
    line-height: 1.2 !important;
    text-decoration: none !important;
}

.appointment-form .btn-primary,
.appointment-form button[type="submit"] {
    background: #0b6aa2 !important;
    color: #ffffff !important;
}

.appointment-form .btn-primary:hover,
.appointment-form button[type="submit"]:hover {
    background: #085b8b !important;
}

.appointment-form .feedback-btn {
    min-width: 200px !important;
}

.appointment-form .mb-0 { margin-bottom: 0 !important; }
.appointment-form .mb-2 { margin-bottom: 8px !important; }
.appointment-form .mb-3 { margin-bottom: 16px !important; }
.appointment-form .mt-3 { margin-top: 16px !important; }

/* ===== Refer-to section styling (CSS-only) ===== */
/* Highlight the first card (Refer to) */
.appointment-form .card {
    border-left: 4px solid #0b6aa2 !important;
    background: linear-gradient(135deg, #f5fbff 0%, #ffffff 55%, #f5fbff 100%) !important;
}

/* Make the radio options look like pills */
.appointment-form .card:first-of-type .d-flex.flex-column.flex-md-row.gap-2.gap-md-5 {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 10px !important;
}

.appointment-form .card:first-of-type .form-check-label {
    display: inline-flex !important;
    align-items: center !important;
    padding: 7px 16px !important;
    border-radius: 999px !important;
    border: 1px solid #cfdeea !important;
    background: #f6fbff !important;
    color: #0f4e72 !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    letter-spacing: 0.2px !important;
    cursor: pointer !important;
    transition: background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, color 0.18s ease !important;
}

.appointment-form .card:first-of-type .form-check-label:hover {
    border-color: #b3ccdd !important;
    box-shadow: 0 6px 14px rgba(15, 80, 128, 0.12) !important;
}

/* Hide the native radio circle inside the pill (keep it clickable via the label) */
.appointment-form .card:first-of-type .form-check-input {
    position: absolute !important;
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
    margin: 0 !important;
    pointer-events: none !important;
}

/* Use :has to color the active pill when its radio is checked (no HTML change needed) */
.appointment-form .card:first-of-type .form-check-label:has(input[type="radio"]:checked) {
    border-color: #0b6aa2 !important;
    background: linear-gradient(135deg, #0b6aa2, #0f86c0) !important;
    color: #ffffff !important;
    box-shadow: 0 8px 18px rgba(5, 84, 134, 0.35) !important;
}

/* Header text styling (scoped to this section only) */
.container > .section-title {
    margin-bottom: 18px !important;
}

.container > .section-title h2.left {
    margin: 0 0 10px !important;
    text-align: center !important;
    font-size: 38px !important;
    font-weight: 600 !important;
    line-height: 1.15 !important;
    letter-spacing: 0.2px !important;
    color: #0d4f75 !important;
}

.container > .section-title .text-space {
    max-width: 960px !important;
    margin: 0 auto !important;
}

.container > .section-title .text-space p.text-center {
    margin: 0 auto 22px !important;
    text-align: center !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    line-height: 1.75 !important;
    color: #4c6273 !important;
}

@media (max-width: 768px) {
    .appointment-form .row {
        grid-template-columns: 1fr !important;
    }

    .appointment-form .d-flex.flex-column.flex-md-row {
        flex-direction: column !important;
        align-items: flex-start !important;
    }

    .appointment-form .feedback-btn,
    .appointment-form button[type="submit"] {
        width: 100% !important;
    }
         .refer-form {
       
        padding: 0px !important;
    }
        .container > .section-title h2.left {
   
    font-size: 22px !important;
}

}
      `}</style>
    </div>
  );
};

export default AppointmentSection;
