interface NavButtonProps {
    text: string;
    zIndex?: number;
    paddingRight?: number;
    onClick?: () => void;
}

export function NavButton({text, zIndex, paddingRight, onClick}: NavButtonProps) {
    return (
        <button 
            onClick={onClick} 
            className= "absolute font-semibold bg-zinc-900 text-slate-300 border-s-2 rounded-es-xl rounded-se-xl py-1 px-4 transition-all delay-75 hover:bg-zinc-800 hover:text-slate-200 hover:border-slate-500 hover:shadow-default hover:shadow-slate-950" 
            style={{zIndex: zIndex, paddingRight: paddingRight}}
        >{text}
        </button>
    )
} 