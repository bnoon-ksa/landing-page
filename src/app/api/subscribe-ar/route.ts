import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI as string;

// ✅ Model for Arabic subscribers
const subscriberArSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const SubscriberAr =
  mongoose.models.SubscriberAr ||
  mongoose.model('SubscriberAr', subscriberArSchema, 'subscribe_ar');

// ✅ Connect DB
async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

// ✅ POST method
export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ success: false, error: 'Email required' });
    }

    const existing = await SubscriberAr.findOne({ email });
    if (existing) {
      return NextResponse.json({
        success: false,
        error: 'لقد اشتركت بالفعل!',
      });
    }

    const newSubscriber = new SubscriberAr({ email });
    await newSubscriber.save();

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Mongo error:', err);
    return NextResponse.json({
      success: false,
      error: err.message || 'Database error',
    });
  }
}
