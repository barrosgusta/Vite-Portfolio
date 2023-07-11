import { ReactNode } from "react";

interface TextBoxIconProps {
    icon: ReactNode;
    additionaTailwindClasses?: string;
}

export function TextBoxIcon({icon, additionaTailwindClasses = "text-white"}: TextBoxIconProps) {
    return (
        <div className={"text-5xl drop-shadow-lg mr-3"
        + " " + additionaTailwindClasses}>
            {icon}
        </div>
    )
}