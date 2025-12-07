import mongoose from "mongoose";

const FeedbackARSchema = new mongoose.Schema(
  {
    الفرع: String,
    الاسم: String,
    الجوال: String,
    البريد_الإلكتروني: String,
    التقييم: String,
    القصة: String,
    نوع_الملاحظة: [String],
    تفاصيل_الملاحظة: String,
    الموافقة: Boolean,
  },
  { 
    timestamps: true,
    strict: true  // VERY IMPORTANT
  }
);


export default mongoose.models.FeedbackAR || mongoose.model("FeedbackAR", FeedbackARSchema);
