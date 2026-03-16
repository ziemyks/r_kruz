import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
const { data, error } = await resend.emails.send({
    from: "Roberts Krūzbergs Web <onboarding@resend.dev>",
    to: [process.env.RECIPIENT_EMAIL],
    subject: "Test",
    html: "<p>Test</p>"
});
console.log(JSON.stringify({ data, error }));
