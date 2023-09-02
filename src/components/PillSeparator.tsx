import { twMerge } from "tailwind-merge"

interface PillSeparatorProps {
    className?: string
}

export function PillSeparator({ className }: PillSeparatorProps) {
    return (
        <div className={twMerge("rounded-xl border border-zinc-500/60 dark:border-zinc-200/60 h-0", className)}/>
    )
}