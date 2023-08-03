import { twMerge } from "tailwind-merge";

interface TextBoxContentProps {
    className?: string;
    children: React.ReactNode;
}

export function TextBoxContent({ children, className }: TextBoxContentProps) {
    return (
        <div className={twMerge("text-left justify-center", className)}>
            {children}
        </div>       
    )
}