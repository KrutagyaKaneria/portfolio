"use server";

import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const { name, email, message } = data;

  try {
    // In production, don't create a test account — directly use your real credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.ethereal.email", // fallback for dev
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true" || false, // SSL true or false
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO!,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5; padding: 30px;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);">
            
            <div style="background-color: #16a34a; padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">New Contact Request ✉️</h1>
            </div>
    
            <div style="padding: 30px;">
              <p style="font-size: 18px; color: #111827;"><strong>Name:</strong> ${name}</p>
              <p style="font-size: 18px; color: #111827;"><strong>Email:</strong> ${email}</p>
    
              <div style="margin-top: 25px; padding: 20px; background-color: #f9fafb; border-left: 5px solid #16a34a; border-radius: 8px;">
                <p style="margin: 0; font-size: 16px; color: #374151;"><strong>Message:</strong></p>
                <p style="margin-top: 10px; font-size: 16px; color: #374151; line-height: 1.6;">
                  ${message.replace(/\n/g, "<br>")}
                </p>
              </div>
    
              <p style="margin-top: 30px; font-size: 14px; color: #9ca3af; text-align: center;">This message was sent from your portfolio contact form.</p>
            </div>
    
          </div>
        </div>
      `,
    };
    
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    // console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
