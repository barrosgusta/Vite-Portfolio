import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextBoxRootProps {
    children: ReactNode;
    className?: string;
}

export function TextBoxRoot({ children, className = "border-zinc-700 bg-zinc-800" }: TextBoxRootProps) {
    return (
        <div className={twMerge("py-5 rounded-xl backdrop-blur-3xl bg-opacity-70 border shadow-default", className)} >
            <div className="flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}