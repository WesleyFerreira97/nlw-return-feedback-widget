import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSucessStep";

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
    const [feedbackSent, setFeedbackSent] = useState<boolean>(false)

    const handleRestartFeedback = () => {
        setFeedbackSent(false)
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {feedbackSent ? (
                <FeedbackSucessStep onFeedbackRestartRequested={handleRestartFeedback} />
            ) : (
                <>
                    {!feedbackType ? (
                        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
                    ) : (
                        <FeedbackContentStep
                            feedbackType={feedbackType}
                            onRestartFeedback={handleRestartFeedback}
                            onFeedbackSent={() => setFeedbackSent(true)}
                        />
                    )}
                </>
            )}

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://github.com/wesleyferreira97"> Wesley Ferreira</a>
            </footer>

        </div >
    )
}