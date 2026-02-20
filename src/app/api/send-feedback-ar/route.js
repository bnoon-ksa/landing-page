import nodemailer from 'nodemailer';
import { connectDB } from '../../../lib/mongodb';
import FeedbackAR from '../../../models/FeedbackAR'; // no .js needed

export async function POST(req) {
  try {
    const data = await req.json();
    const { branch, name, phone, email, rating, story, feedbackType, feedbackDetails, consent } =
      data;

    // Connect to MongoDB
    await connectDB();

    // Save feedback to DB
    // Save feedback to DB
    const feedback = new FeedbackAR({
      الفرع: branch,
      الاسم: name,
      الجوال: phone,
      البريد_الإلكتروني: email,
      التقييم: rating,
      القصة: story,
      نوع_الملاحظة: feedbackType,
      تفاصيل_الملاحظة: feedbackDetails,
      الموافقة: consent,
    });
    await feedback.save();

    // Choose email recipient
    const recipient = branch === 'الرياض' ? 'feedback@bnoon.sa' : 'feedback@bnoon.sa';

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Bnoon Feedback" <${process.env.SMTP_USER}>`,
      to: recipient,
      subject: `ملاحظة جديدة من ${name} (${branch})`,
      html: `
    <h3>📋 تفاصيل الملاحظة</h3>
    <p><strong>الفرع:</strong> ${branch}</p>
    <p><strong>اسم المريض/المريضة:</strong> ${name}</p>
    <p><strong>رقم الجوال:</strong> ${phone}</p>
    <p><strong>البريد الإلكتروني:</strong> ${email}</p>
    <p><strong>التقييم العام:</strong> ${rating}</p>
    <p><strong>نوع الملاحظة:</strong> ${feedbackType.join(', ')}</p>
    <p><strong>تفاصيل الملاحظة:</strong><br/>${feedbackDetails}</p>
    ${story ? `<p><strong>قصتكم:</strong><br/>${story}</p>` : ''}
    <p><strong>الموافقة على الشروط:</strong> ${consent ? 'نعم' : 'لا'}</p>
  `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error sending feedback:', error);
    return new Response(JSON.stringify({ error: error.message || 'Failed to send feedback' }), {
      status: 500,
    });
  }
}
