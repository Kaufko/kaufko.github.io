import { NextResponse } from "next/server";
import NodeMailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { subject, email, message } = await req.json();

        if (!subject || !email || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Ensure environment variables are available
        const mailUser = process.env.ETHEREAL_MAIL_USER;
        const mailPass = process.env.ETHEREAL_MAIL_PASS;
        
        if (!mailUser || !mailPass) {
            console.error("Missing Ethereal mail credentials");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        // Create a transporter object using Ethereal email
        const transporter = NodeMailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: mailUser,
                pass: mailPass,
            },
        });

        // Email content
        const mailOptions = {
            from: `<${email}>`,
            to: mailUser,
            subject: `${subject}`,
            text: `\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log("Message sent: %s", info.messageId);

        return NextResponse.json({ success: true, messageId: info.messageId });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
