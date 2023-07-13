interface PillSeparatorProps {
    additionalTailwindClasses?: string
}


export function PillSeparator({ additionalTailwindClasses = "w-24 m-4"}: PillSeparatorProps) {
    return (
        <div className={"rounded-xl border-2 border-zinc-500 dark:border-zinc-200 h-0 shadow-md"
        + " " + additionalTailwindClasses}></div>
    )
}