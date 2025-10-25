
import { Resend } from "resend";
import { EmailTemplate } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const dataForm = await req.json();
    try {
      const data = await resend.emails.send({
        from: "JMQ <JMQ@resend.dev>",
        to: ["josephmora08@outlook.com"],
        subject: "Portafolio Deloveper",
        react: EmailTemplate({
          firstName: dataForm.username,
          message: dataForm.message,
          email: dataForm.email,
        }),
        text: "Tarredev",
      });
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
