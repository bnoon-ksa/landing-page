import mongoose from 'mongoose';

const ReferralSchema = new mongoose.Schema(
  {
    referTo: { type: String, default: '' },

    physicianName: { type: String, required: true },
    physicianPhone: { type: String, required: true },
    physicianEmail: { type: String, default: '' },
    healthcareFacilityName: { type: String, default: '' },
    organizationCity: { type: String, default: '' },

    patientName: { type: String, required: true },
    patientPhone: { type: String, required: true },
    gender: { type: String, required: true },

    reasons: { type: [String], default: [] },
    medicalReason: { type: String, default: '' },

    recaptcha: { type: String, default: '' },
  },
  { timestamps: true },
);

export default mongoose.models.ReferralEN || mongoose.model('ReferralEN', ReferralSchema);
