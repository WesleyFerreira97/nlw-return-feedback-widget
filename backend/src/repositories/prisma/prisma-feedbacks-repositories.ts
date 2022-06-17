import { prismaClient } from "../../prisma";
import { FeedbackData, FeedbackRepository } from "../feedback-repository";

export class PrismaFeedbackRepositories implements FeedbackRepository {
    async create({ type, comment, screenshot }: FeedbackData) {
        await prismaClient.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        })
    }
}