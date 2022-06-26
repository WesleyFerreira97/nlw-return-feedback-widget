import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'
import { Widgetform } from './WidgetForm'

export function FeedbackWidget() {

    return (
        <Popover className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Popover.Panel>
                <Widgetform />
            </Popover.Panel>

            <Popover.Button className="bg-violet-600 text-white px-3 rounded-full h-12 flex items-center group">
                <ChatTeardropDots className='w-6 h-6' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}
