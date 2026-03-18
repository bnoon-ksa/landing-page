import { connectDB } from '../../../lib/mongodb';
import AppointmentEN from '../../../models/AppointmentEN';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();

    await connectDB();
    await AppointmentEN.create(data);

    const recipient =
      data.branch === 'Riyadh'
        ? 'rizno1@gmail.com'
        : data.branch === 'Jeddah'
        ? 'appointments.jeddah@bnoon.sa'
        : data.branch === 'Al Ahsa'
        ? 'callcenter.alahsa@bnoon.sa'
        : '';

    if (!recipient) {
      throw new Error("No recipient email defined for this branch");
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false,
      auth: {
        user: "bnooninfo@bnoon.sa",
        pass: "vpupjvfrntavidhw",
      },
    });

    // Optional test email (remove in production)
    // await transporter.sendMail({
    //   from: "bnooninfo@bnoon.sa",
    //   to: "appointments.jeddah@bnoon.sa",
    //   subject: "Test",
    //   text: "Test email",
    // });

    await transporter.sendMail({
      from: `"Appointment Request" <bnooninfo@bnoon.sa>`,
      to: recipient,
      subject: `New Appointment Request - Website (${data.branch})`,
      html: `
        <h3>Appointment Details</h3>
        <p><b>I am interested in:</b> ${data.interest || 'N/A'}</p>
        <p><b>Branch:</b> ${data.branch}</p>
        <p><b>Select Type of Visit:</b> ${data.visitType || 'N/A'}</p>
        <p><b>Doctor:</b> ${data.doctor || 'N/A'}</p>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Is this appointment for you?:</b> ${data.isForYou}</p>
        <p><b>Nationality:</b> ${data.nationality || 'N/A'}</p>
        <p><b>Country of Residence:</b> ${data.countryOfResidence || 'N/A'}</p>
        <p><b>City (if in Saudi Arabia):</b> ${data.cityIfInSA || 'N/A'}</p>
        <p><b>Gender:</b> ${data.gender || 'N/A'}</p>
        <p><b>Mobile:</b> ${data.mobile}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Preferred Date:</b> ${data.preferredDate || 'N/A'}</p>
        <p><b>Preferred Time:</b> ${data.preferredTime || 'N/A'}</p>
        <p><b>How did you hear about us?:</b> ${data.howHeard || 'N/A'}</p>
      `,
    });

    return Response.json(
      { success: true, message: 'Saved & email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ API Error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
