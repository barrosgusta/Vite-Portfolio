import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

interface IconFrameProps {
  icon: ReactNode
  href?: string
  toCopy?: string
  className?: string
}

export function IconWithActions({icon, href = '', toCopy, className}: IconFrameProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleOpenUrl = (url : string) => {
    window.open(url, "_blank")
  };

  const handleCopyClick = (toCopy: string) => {
    navigator.clipboard.writeText(toCopy)
    setIsCopied(true)
    handleHideMessage()
  } 

  const handleHideMessage = async () => {
    await new Promise(r => setTimeout(r, 1000))
    setIsCopied(false)
  }

  return (
      <div className="relative">
        <div className={cn("duration-300 opacity-0 scale-0 absolute inset-0 mx-auto w-20 h-6 left-1/2 -top-2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 rounded-lg text-xs py-1 text-center shadow-default", isCopied && "opacity-100 scale-100 -translate-y-6")}>
            Copiado
        </div>

        <div 
          onClick={toCopy ? () => handleCopyClick(toCopy) : () => handleOpenUrl(href)}
          className={cn("duration-75 cursor-pointer hover:text-black dark:hover:text-white active:scale-95 text-zinc-800 dark:text-zinc-300", className)} >
          {/* <div className="flex items-center justify-center text-zinc-900 text-xl text-center h-full dark:text-zinc-200"> */}
            {icon}     
          {/* </div> */}
        </div>
      </div>     
    )           
}