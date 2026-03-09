"use server";

import { Resend } from "resend";

// Note: In a real production environment, the API Key should be in process.env.RESEND_API_KEY
// For this implementation, I will structure the action to be ready for the key.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendSpeechRequest(formData: FormData) {
    const company = formData.get("company") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const dates = formData.get("dates") as string;
    const message = formData.get("message") as string;

    if (!resend) {
        console.warn("RESEND_API_KEY is missing. Email not sent.");
        return { success: false, error: "Email configuration missing. Please check .env.local" };
    }

    try {
        const { data, error } = await resend.emails.send({
            from: "Roberts Krūzbergs Web <onboarding@resend.dev>",
            to: [process.env.RECIPIENT_EMAIL || "info@robertskruzbergs.lv"],
            subject: `Jauns pasākuma pieprasījums: ${company}`,
            html: `
        <h1>Jauns motivācijas runas pieprasījums</h1>
        <p><strong>Uzņēmums:</strong> ${company}</p>
        <p><strong>Kontaktpersona:</strong> ${name}</p>
        <p><strong>E-pasts:</strong> ${email}</p>
        <p><strong>Vēlamie datumi:</strong> ${dates}</p>
        <p><strong>Pasākuma detaļas:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        console.error("Action Error:", err);
        return { success: false, error: "Failed to send request." };
    }
}
