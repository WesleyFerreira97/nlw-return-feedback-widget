import express from 'express'
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

export const routes = express.Router()

var transport = nodemailer.createTransport({
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

    transport.sendMail({
        from: "Equipe Feedback <oi@equipefeedback.com",
        to: 'Wesley Ferreira <wesleyfc08@gmail.com>',
        subject: 'Novo feedback',
        html: '<p>Corpo do email</p>'
    })

    return res.status(201).json({ data: feedback });
})
