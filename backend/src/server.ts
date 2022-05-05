import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "baac197de8054e",
        pass: "e5daa87333bc84"
    }
});


app.post('/feedbacks', async (req, res) => {
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

app.listen(3333, () => {
    console.log('Server started on port 3333');
})
