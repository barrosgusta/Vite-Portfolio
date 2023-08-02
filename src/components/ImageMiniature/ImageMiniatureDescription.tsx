import { twMerge } from 'tailwind-merge'

interface ImageMiniatureDescriptionProps {
    description?: string
    className?: string
}

export function ImageMiniatureDescription({description, className}: ImageMiniatureDescriptionProps) {
    return (
        <div className={twMerge("text-zinc-800 dark:text-zinc-200 font-sfp duration-300 absolute group-hover:border-t border-zinc-200 dark:border-zinc-600 bottom-0 h-0 group-hover:h-24 w-full backdrop-blur-3xl bg-zinc-100/90 dark:bg-zinc-800/90", className)}>
            <p className='text-sm text-center mx-5 my-3'>{description}</p>
        </div>
    )
}