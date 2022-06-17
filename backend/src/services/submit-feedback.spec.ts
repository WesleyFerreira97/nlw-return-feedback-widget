import { SubmitFeedbackService } from './submit-feedback'

describe('Submit Feedback', () => {
    it('should be able to submit a feedback', async () => {
        const submitFeedback = new SubmitFeedbackService(
            { create: async () => { } },
            { sendMail: async () => { } }
        );

        await expect(submitFeedback.handle({
            type: 'Bug',
            comment: 'Example',
            screenshot: 'test.jpg'
        })).resolves.not.toThrow();
    })
})


