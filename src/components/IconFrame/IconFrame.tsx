import { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface IconFrameProps {
  icon: ReactNode
  isSmall?: boolean
  href?: string
  toCopy?: string
  className?: string
}

export function IconFrame({icon, isSmall = false, href = '', toCopy, className}: IconFrameProps) {
  const [isCopied, setIsCopied] = useState(false)

  const HandleSmallIconClick = (url : string) => {
    window.open(url, "_blank")
  };

  const HandleCopyClick = (toCopy: string) => {
    navigator.clipboard.writeText(toCopy)
    setIsCopied(true)
    HandleHideMessage()
  } 

  const HandleHideMessage = async () => {
    await new Promise(r => setTimeout(r, 1000))
    setIsCopied(false)
  }

  return (
    isSmall ? (
      <div 
        onClick={() => HandleSmallIconClick(href)} 
        className={twMerge("rounded-md w-8 h-8 border hover:border-zinc-500 border-indigo-400 bg-zinc-100 m-2 shadow-default transition-all hover:bg-zinc-950 hover:shadow-none hover:cursor-pointer dark:bg-zinc-800", className)}
      >
        <div className="flex items-center justify-center text-zinc-900 hover:text-zinc-50 text-center h-full dark:text-zinc-200">
          {icon}     
        </div>

      </div> 
    ) : (
      <div className="relative">
        <div className={twMerge("duration-300 opacity-0 scale-0 absolute inset-0 mx-auto w-20 -translate-x-2 h-6 bg-slate-50 rounded-lg text-xs py-1 text-center shadow-default", isCopied && "opacity-100 scale-100 -translate-y-6")}>
            Copiado
        </div>

        <div 
          onClick={toCopy ? () => HandleCopyClick(toCopy) : undefined}
          className={twMerge("rounded-xl w-12 h-12 border border-indigo-400 bg-zinc-100 m-2 shadow-default dark:bg-zinc-800", toCopy && "duration-75 cursor-pointer hover:invert active:scale-95")} >

          <div className="flex items-center justify-center text-zinc-900 text-xl text-center h-full dark:text-zinc-200">
            {icon}     
          </div>

        </div>
      </div>     
    )           
  )
}