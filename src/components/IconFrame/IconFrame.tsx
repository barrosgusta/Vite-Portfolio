import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IconFrameProps {
  icon: ReactNode
  isSmall?: boolean
  href?: string
  className?: string
}

export function IconFrame({icon, isSmall = false, href = '', className}: IconFrameProps) {
  const HandleLinkClick = (url : string) => {
    window.open(url, "_blank")
  };

  return (
    isSmall ? (
      <div 
        onClick={() => HandleLinkClick(href)} 
        className={twMerge("rounded-md w-8 h-8 border hover:border-zinc-500 border-indigo-400 bg-zinc-100 m-2 shadow-default transition-all hover:bg-zinc-950 hover:shadow-none hover:cursor-pointer dark:bg-zinc-800", className)}
      >
        <div about="" className="flex items-center justify-center text-zinc-900 hover:text-zinc-50 text-center h-full dark:text-zinc-200">
          {icon}     
        </div>

      </div> 
    ) : (
      <div className="rounded-xl w-12 h-12 border border-indigo-400 bg-zinc-100 m-2 shadow-default dark:bg-zinc-800" >

        <div className="flex items-center justify-center text-zinc-900 text-xl text-center h-full dark:text-zinc-200">
          {icon}     
        </div>

      </div>
    )           
  )
}