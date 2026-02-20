import mongoose from 'mongoose';

const FeedbackENSchema = new mongoose.Schema(
  {
    branch: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    rating: { type: String, required: true },
    story: { type: String },
    feedbackType: { type: [String], required: true },
    feedbackDetails: { type: String, required: true },
    consent: { type: Boolean, required: true },
  },
  { timestamps: true },
);

const FeedbackEN = mongoose.models.FeedbackEN || mongoose.model('FeedbackEN', FeedbackENSchema);

export default FeedbackEN;
