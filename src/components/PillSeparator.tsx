import { twMerge } from "tailwind-merge"

interface PillSeparatorProps {
    className?: string
}

export function PillSeparator({ className }: PillSeparatorProps) {
    return (
        <div className={twMerge("rounded-xl border-2 border-zinc-500 dark:border-zinc-200 h-0 shadow-md", className)}/>
    )
}