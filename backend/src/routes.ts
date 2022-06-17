import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

export const routes = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "baac197de8054e",
        pass: "e5daa87333bc84"
    }
});

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedback = await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot
        }
    })

    await transport.sendMail({
        from: "Equipe Feedback <oi@equipefeedback.com",
        to: 'Wesley Ferreira <wesley@gmail.com>',
        subject: 'Novo feedback',
        html: [
            `<p>Tipo ${type}</p>`,
            `<p>${comment}</p>`
        ].join('\n')
    })

    return res.status(201).json({ data: feedback });
})
