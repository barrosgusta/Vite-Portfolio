interface TextBoxContentProps {
    title: string;
    text: string;
}

export function TextBoxContent({title, text}: TextBoxContentProps) {
    return (
        <div className="text-white text-xs text-justify justify-center mr-3">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-sm text-zinc-300">{text}</p>
        </div>       
    )
}