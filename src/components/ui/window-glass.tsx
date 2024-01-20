import { cn } from "@/lib/utils"
import { ReactNode } from "react"

type WindowGlassProps = {
    children: ReactNode,
    className?: string
};

export default function WindowGlass({children, className}: WindowGlassProps) {
    return (
        <div 
            className={cn(
                "backdrop-blur-lg",
                // "backdrop-saturate-200",
                // "dark:backdrop-saturate-100",
                "backdrop-brightness-150",
                // "backdrop-contrast-125",
                // "dark:backdrop-contrast-100",
                "rounded-xl",
                "bg-zinc-100/60",
                "border-2",
                "dark:border",
                "border-indigo-500/60",
                "shadow-default",
                "dark:bg-zinc-950/60",
                className
            )}
        >
            {children}
        </div>
    )
}