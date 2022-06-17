import express from 'express'
import { NodeMailerAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbackRepositories } from './repositories/prisma/prisma-feedbacks-repositories';
import { SubmitFeedbackService } from './services/submit-feedback';

export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;

    const feedbackRepository = new PrismaFeedbackRepositories();
    const sendMailAdapter = new NodeMailerAdapter();

    const submitFeedback = new SubmitFeedbackService(
        feedbackRepository,
        sendMailAdapter
    );

    await submitFeedback.handle({
        type,
        comment,
        screenshot
    })

    return res.status(201).send()
})
