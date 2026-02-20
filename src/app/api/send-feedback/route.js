import { connectDB } from '../../../lib/mongodb';
import nodemailer from 'nodemailer';
import FeedbackEN from '../../../models/FeedbackEN';

export async function POST(req) {
  try {
    const data = await req.json();

    // 1️⃣ Connect to MongoDB
    await connectDB();

    // 2️⃣ Save feedback to DB
    const feedback = new FeedbackEN(data);
    await feedback.save();

    // 3️⃣ Send email
    const recipient = data.branch === 'Riyadh' ? 'feedback@bnoon.sa' : 'feedback@bnoon.sa';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Bnoon Feedback" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: `New Feedback from ${data.name} (${data.branch})`,
      html: `
        <h3>Feedback Details</h3>
        <p><strong>Branch:</strong> ${data.branch}</p>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Rating:</strong> ${data.rating}</p>
        <p><strong>Feedback Type:</strong> ${data.feedbackType.join(', ')}</p>
        <p><strong>Details:</strong><br/>${data.feedbackDetails}</p>
        ${data.story ? `<p><strong>Story:</strong><br/>${data.story}</p>` : ''}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('❌ English feedback error:', err);
    return new Response(JSON.stringify({ error: err.message || 'Failed to send feedback' }), {
      status: 500,
    });
  }
}
