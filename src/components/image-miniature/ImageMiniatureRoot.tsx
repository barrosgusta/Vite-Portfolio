import { twMerge } from 'tailwind-merge'

interface ImageMiniatureRootProps {
    imageSource: string
    title: string
    className?: string
    children?: React.ReactNode
    onClick?: () => void
}

export function ImageMiniatureRoot({imageSource, title, className, children, onClick}: ImageMiniatureRootProps) {
    return (
        <figure onClick={onClick} className={twMerge("group duration-300 relative rounded-xl w-96 border border-indigo-400 shadow-default-sm overflow-hidden hover:scale-105 hover:cursor-pointer", className)}>
            {children}
            <h4 className='p-1 text-center text-zinc-800 font-semibold bg-zinc-100 shadow-md z-20 dark:text-zinc-100 dark:bg-zinc-800'>
                {title}
            </h4>
            <img src={imageSource} className="w-screen object-cover z-0 aspect-video" loading='lazy' />
        </figure>
    )
}