import { CloseButton } from "./CloseButton";
import { useState } from "react";

type FeedbackType = keyof typeof feedbackTypes

const feedbackTypes = {
    BUG: {
        title: "Reportar um bug",
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

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu feedback</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <>
                            <button
                                key={key}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-zinc-800 hover:border-violet-500 focus:border-violet-500 focus:outline-none"
                                onClick={() => setFeedbackType(key as FeedbackType)}
                                type="button"
                            >
                                <img src={value.image.source} alt={value.image.alt} />
                                <span>{value.title}</span>
                            </button>
                        </>
                    )
                })

                }
            </div>

            <footer className="text-xs text-neutral-400">
                Feito por <a className="underline underline-offset-2" href="https://github.com/wesleyferreira97"> Wesley Ferreira</a>
            </footer>

        </div>
    )
}
