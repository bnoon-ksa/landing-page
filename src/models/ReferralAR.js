import mongoose from "mongoose";

const ReferralARSchema = new mongoose.Schema(
  {
    branch: { type: String, default: "" },

    referringPhysicianName: { type: String, required: true },
    referringPhysicianPhone: { type: String, required: true },
    referringPhysicianEmail: { type: String, default: "" },

    facilityName: { type: String, default: "" },
    organizationCity: { type: String, default: "" },

    patientName: { type: String, required: true },
    patientPhone: { type: String, required: true },
    gender: { type: String, default: "" },

    reason: { type: String, default: "" },
    otherReasonText: { type: String, default: "" },

    recaptcha: { type: String, default: "" },
  },
  { timestamps: true }
);

// ✅ IMPORTANT: delete cached model if exists (dev fix)
if (mongoose.models.ReferralAR) {
  delete mongoose.models.ReferralAR;
}

export default mongoose.model("ReferralAR", ReferralARSchema);
