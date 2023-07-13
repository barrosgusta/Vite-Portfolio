import { ReactNode } from "react";

interface TextBoxRootProps {
    children: ReactNode;
    additionalTailwindClasses?: string;
}

export function TextBoxRoot({ children, additionalTailwindClasses = "border-zinc-700 bg-zinc-800" }: TextBoxRootProps) {
    return (
        <div className={"py-5 rounded-xl backdrop-blur-3xl bg-opacity-70 border shadow-default"
        + " " + additionalTailwindClasses} >
            <div className="flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}