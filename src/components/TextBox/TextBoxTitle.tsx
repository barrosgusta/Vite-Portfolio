import { twMerge } from "tailwind-merge";

interface TextBoxTitleProps {
    className?: string;
    children: React.ReactNode;
}

export function TextBoxTitle({ children, className }: TextBoxTitleProps) {
    return (
        <h1 className={twMerge("text-2xl font-bold drop-shadow-lg", className)}>
            {children}
        </h1> 
    )
}