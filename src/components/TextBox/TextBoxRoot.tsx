import { ReactNode } from "react";

interface TextBoxRootProps {
    children: ReactNode;
    additionaTailwindClasses?: string;
}

export function TextBoxRoot({ children, additionaTailwindClasses = "border-zinc-700 bg-zinc-800" }: TextBoxRootProps) {
    return (
        <div className={"py-5 rounded-xl backdrop-blur-3xl bg-opacity-70 border shadow-default"
        + " " + additionaTailwindClasses} >
            <div className="flex justify-center items-center">
                {children}
            </div>
        </div>
    )
}