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
            className= "absolute text-lg font-semibold bg-zinc-200 text-zinc-600 border-s-2 border-zinc-50 rounded-es-xl rounded-se-xl py-1 px-4 transition-all hover:bg-zinc-100 hover:text-slate-900 hover:border-slate-200" 
            style={{zIndex: zIndex, paddingRight: paddingRight}}
        >{text}
        <div>
            <div className="lg:grid-cols-4 grid sm:grid-cols-3 grid-cols-2">

        </div>
        </div>
        </button>
    )
} 