import { ReactNode } from "react";

interface TextBoxProps {
    title: string;
    text: string;
    icon: ReactNode;
    }

export function TextBox({title, text, icon}: TextBoxProps) {
    return (
        <div className="p-3 rounded-xl flex flex-col items-center justify-center w-96 border border-slate-500 bg-zinc-800 m-5 shadow-default shadow-slate-950" >
            <div className="flex flex-row items-center">
                <div className="text-white text-xl m-5">
                    {icon}
                </div>
                
                <div className="text-white text-xs text-justify justify-center mr-3">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-sm text-zinc-300">{text}</p>
                </div>
            </div>
        </div>
    )
}