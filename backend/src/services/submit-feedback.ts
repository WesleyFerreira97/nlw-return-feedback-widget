import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/feedback-repository";

interface SubmitFeedbackData {
    type: string;
    comment: string;
    screenshot?: string;
}

// Camada de aplicação - Lida com regras de negócio da aplicação e chama métodos externos de  outras camadas
// Chama métodos da camada de dados ( Repositories ), no entanto não aplica regras de negócio da camada de dados 

export class SubmitFeedbackService {
    constructor(
        private feedbackRepository: FeedbackRepository,
        private mailAdapter: MailAdapter
    ) { }

    async handle(request: SubmitFeedbackData) {
        const { type, comment, screenshot } = request;

        await this.feedbackRepository.create({
            type,
            comment,
            screenshot
        })

        await this.mailAdapter.sendMail({
            subject: 'New Subject',
            body: [
                `<p>Tipo ${type}</p>`,
                `<p>${comment}</p>`
            ].join('\n')
        })
    }
}
