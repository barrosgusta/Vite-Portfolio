import { twMerge } from "tailwind-merge"

interface ImageMiniatureDescriptionProps {
    children: React.ReactNode 
    className?: string
}

export function ImageMiniatureDescription({children, className}: ImageMiniatureDescriptionProps) {
    return (
        <div className={twMerge("grid place-items-center shadow-default text-zinc-800 dark:text-zinc-200 font-sfp duration-300 absolute group-hover:border-t border-zinc-200 dark:border-zinc-600 bottom-0 h-0 group-hover:h-24 w-full backdrop-blur-xl bg-zinc-100/90 dark:bg-zinc-800/90", className)}>
            {children}
        </div>
    )
}