import { ArrowLeft } from 'phosphor-react';
import React, { useEffect, useState } from 'react'
import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onRestartFeedback: () => void;
}

export function FeedbackContentStep({ feedbackType, onRestartFeedback }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];
    const [screenshot, setScreenshot] = useState<string | null>(null);
    const [comment, setComment] = useState('');

    function handleSubmitFeedback(e: React.FormEvent) {
        e.preventDefault();
        console.log(screenshot, comment);
    }

    return (
        <>
            <header>
                <button
                    type="button"
                    className='top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
                    onClick={onRestartFeedback}
                >
                    <ArrowLeft weight='bold' className='w-4 h-4' />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2 mr-8e">
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
                <textarea
                    onChange={e => setComment(e.target.value)}
                    className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-violet-500 focus:ring-violet-300 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
                />


                <footer className='flex gap-2 mt-2'>
                    <ScreenshotButton
                        screenshot={screenshot}
                        onScreenshotTook={setScreenshot}
                    />

                    <button
                        disabled={comment.length === 0}
                        type="submit"
                        className='p-2 bg-violet-600 rounded-md border-transparent flex-1 flex justify-center items-center text-white font-bold text-sm hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:hover:bg-violet-600'
                    >
                        Enviar Formulário
                    </button>
                </footer>
            </form>

        </>
    )
}
