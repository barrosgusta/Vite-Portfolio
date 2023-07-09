import { ReactNode } from "react";

interface IconFrameProps {
  icon: ReactNode
  isSmall?: boolean
  href?: string
}

export function IconFrame({icon, isSmall = false, href}: IconFrameProps) {
  const HandleLinkClick = (url : string) => {
    window.open(url, "_blank")
  };

  return (
    isSmall ? (
      <div onClick={() => HandleLinkClick(href)} className="rounded-md w-8 h-8 border hover:border-zinc-500 border-indigo-400 bg-zinc-100 m-2 shadow-default transition-all delay-75 hover:bg-zinc-950 hover:shadow-none hover:cursor-pointer" >
        <div className="flex items-center justify-center text-zinc-900 hover:text-zinc-50 text-s text-center h-full">
         {icon}     
       </div>
      </div> 
    ) : (
      <div className="rounded-xl w-12 h-12 border border-indigo-400 bg-zinc-100 m-2 shadow-default" >
        <div className="flex items-center justify-center text-zinc-900 text-xl text-center h-full">
         {icon}     
       </div>
      </div>
    ) 
  )
}