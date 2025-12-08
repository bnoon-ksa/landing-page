import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);

async function connectDB() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGODB_URI);
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email } = await req.json();

    if (!email) return NextResponse.json({ success: false, error: "Email required" });

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return NextResponse.json({ success: false, error: "You are already subscribed!" });
    }

    await Subscriber.create({ email });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Mongo error:", err);
    return NextResponse.json({ success: false, error: err.message || "Database error" });
  }
}
