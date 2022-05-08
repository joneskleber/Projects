import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "429dad98320966",
    pass: "8e51d080f387cc",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@visao-ol.om.br>",
      to: "Jones Kleber <visao@visao-ol.com.br>",
      subject,
      html: body,
    });
  }
}
