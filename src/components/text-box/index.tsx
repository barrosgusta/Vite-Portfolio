import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const TextBox = { 
    Root: TextBoxRoot,
    Content : {
        Root: TextBoxContent,
        Title: TextBoxTitle,
        Description: TextBoxDescription,
    },
    Icon: TextBoxIcon,  
};

interface TextBoxContentProps {
    className?: string;
    children: React.ReactNode;
};

export function TextBoxContent({ children, className }: TextBoxContentProps) {
    return (
        <div className={cn("text-left justify-center", className)}>
            {children}
        </div>       
    )
};


interface TextBoxDescriptionProps {
    className?: string;
    children: React.ReactNode;
};

export function TextBoxDescription({ children, className }: TextBoxDescriptionProps) {
    return (
        <h1 className={cn("opacity-95 text-2xl drop-shadow-lg", className)}>
            {children}
        </h1>
    )
};

interface TextBoxIconProps {
    icon: ReactNode;
    className?: string;
};

export function TextBoxIcon({icon, className = "text-white"}: TextBoxIconProps) {
    return (
        <div className={cn("text-5xl drop-shadow-lg mr-3", className)}>
            {icon}
        </div>
    )
};

interface TextBoxRootProps {
    children: ReactNode;
    className?: string;
};

export function TextBoxRoot({ children, className = "border-zinc-700 bg-zinc-800" }: TextBoxRootProps) {
    return (
        <div className={cn("py-5 rounded-xl backdrop-blur-3xl border shadow-default duration-300 hover:scale-[1.02] hover:shadow-xl z-0", className)} >
            <div className="flex justify-center items-center">
                {children}
            </div>
        </div>
    )
};

interface TextBoxTitleProps {
    className?: string;
    children: React.ReactNode;
};

export function TextBoxTitle({ children, className }: TextBoxTitleProps) {
    return (
        <h1 className={cn("text-2xl font-bold drop-shadow-lg", className)}>
            {children}
        </h1> 
    )
}