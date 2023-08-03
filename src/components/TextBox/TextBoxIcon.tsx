import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextBoxIconProps {
    icon: ReactNode;
    className?: string;
}

export function TextBoxIcon({icon, className = "text-white"}: TextBoxIconProps) {
    return (
        <div className={twMerge("text-5xl drop-shadow-lg mr-3", className)}>
            {icon}
        </div>
    )
}