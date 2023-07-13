import { ReactNode } from "react"

interface SubmitButtonProps {
    additionaTailwindClasses?: string
    text: string
    icon?: ReactNode
}

export function SubmitButton({additionaTailwindClasses, text, icon}: SubmitButtonProps) {
    return (
        <button type="submit" className={"duration-100 font-sfpmedium inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-default hover:shadow-sm text-base font-medium text-zinc-100 bg-indigo-600 hover:bg-indigo-700"
        + " " + additionaTailwindClasses}>
            {icon}
            {text}
        </button>   
    )
}