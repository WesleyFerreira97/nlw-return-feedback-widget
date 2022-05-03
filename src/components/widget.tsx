import React from 'react'
import { ChatTeardropDots } from 'phosphor-react'

export function FeedbackWidget() {
    return (
        <div className="absolute bottom-5 right-5">
            <p>Conteúdo do feedback</p>

            <button className="bg-violet-600 px-3 rounded-full h-12 flex items-center group">
                <ChatTeardropDots className='w-6 h-6' />

                <span className='max-w-0 pl-2 overflow-hidden'>
                    Feedback
                </span>
            </button>
        </div>
    )
}
