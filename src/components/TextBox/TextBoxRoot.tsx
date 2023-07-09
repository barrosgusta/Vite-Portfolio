import { ReactNode } from "react";

interface TextBoxRootProps {
    children: ReactNode;
}

export function TextBoxRoot({ children }: TextBoxRootProps) {
    return (
        <div className="p-3 rounded-xl flex flex-col items-center justify-center w-96 border border-slate-500 bg-zinc-800 m-5 shadow-default" >
            <div className="flex flex-row items-center">
                {children}
            </div>
        </div>
    )
}