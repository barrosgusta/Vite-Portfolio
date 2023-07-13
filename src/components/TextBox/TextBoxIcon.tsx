import { ReactNode } from "react";

interface TextBoxIconProps {
    icon: ReactNode;
    additionalTailwindClasses?: string;
}

export function TextBoxIcon({icon, additionalTailwindClasses = "text-white"}: TextBoxIconProps) {
    return (
        <div className={"text-5xl drop-shadow-lg mr-3"
        + " " + additionalTailwindClasses}>
            {icon}
        </div>
    )
}