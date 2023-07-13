interface TextBoxContentProps {
    title: string;
    titleAdditionalTailwindClasses?: string;
    text: string;
    textAdditionalTailwindClasses?: string;
}

export function TextBoxContent({title, titleAdditionalTailwindClasses = "text-zinc-50", text, textAdditionalTailwindClasses = "text-zinc-200"}: TextBoxContentProps) {
    return (
        <div className="text-left justify-center">
            <h1 className={"text-2xl font-bold drop-shadow-lg" +  " " + titleAdditionalTailwindClasses}>{title}</h1>
            <p className={"text-sm drop-shadow-lg" + " " + textAdditionalTailwindClasses}>{text}</p>
        </div>       
    )
}