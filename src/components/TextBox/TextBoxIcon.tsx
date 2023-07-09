import { ReactNode } from "react";

interface TextBoxIconProps {
    icon: ReactNode;
}

export function TextBoxIcon({icon}: TextBoxIconProps) {
    return (
        <div className="text-white text-xl m-5">
            {icon}
        </div>
    )
}