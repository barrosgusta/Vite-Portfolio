interface TextBoxContentProps {
    title: string;
    titleAdditionaTailwindClasses?: string;
    text: string;
    textAdditionaTailwindClasses?: string;
}

export function TextBoxContent({title, titleAdditionaTailwindClasses = "text-zinc-50", text, textAdditionaTailwindClasses = "text-zinc-200"}: TextBoxContentProps) {
    return (
        <div className="text-left justify-center">
            <h1 className={"text-2xl font-bold drop-shadow-lg" +  " " + titleAdditionaTailwindClasses}>{title}</h1>
            <p className={"text-sm drop-shadow-lg" + " " + textAdditionaTailwindClasses}>{text}</p>
        </div>       
    )
}