import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "baac197de8054e",
        pass: "e5daa87333bc84"
    }
});

export class NodeMailerAdapter implements MailAdapter {

    async sendMail({ subject, body }: SendMailData) {

        await transport.sendMail({
            from: "Equipe Feedback <oi@equipefeedback.com",
            to: 'Wesley Ferreira <wesley@gmail.com>',
            subject,
            html: body,
        })
    }
}