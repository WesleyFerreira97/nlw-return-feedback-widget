import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export type FeedbackType = keyof typeof feedbackTypes

export const feedbackTypes = {
    BUG: {
        title: "Problemas",
        image: {
            source: "https://img.icons8.com/color/48/000000/bug.png",
            alt: "Reportar um bug"
        }
    },
    FEEDBACK: {
        title: "Enviar feedback",
        image: {
            source: "https://img.icons8.com/color/48/000000/feedback.png",
            alt: "Enviar feedback"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: "https://img.icons8.com/color/48/000000/question-mark.png",
            alt: "Outros"
        }
    }

}

export function Widgetform() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    const handleRestartFeedback = () => setFeedbackType(null);

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : (
                <FeedbackContentStep
                    feedbackType={feedbackType}
                    onRestartFeedback={handleRestartFeedback}
                />
            )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://github.com/wesleyferreira97"> Wesley Ferreira</a>
            </footer>

        </div >
    )
}