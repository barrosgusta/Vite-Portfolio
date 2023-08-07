import { twMerge } from "tailwind-merge";

interface TextBoxDescriptionProps {
    className?: string;
    children: React.ReactNode;
}

export function TextBoxDescription({ children, className }: TextBoxDescriptionProps) {
    return (
        <h1 className={twMerge("opacity-95 text-2xl drop-shadow-lg", className)}>
            {children}
        </h1>
    )
}