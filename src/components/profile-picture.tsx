import { twMerge } from "tailwind-merge";

interface ProfilePictureProps {
    className?: string;
}

export function ProfilePicture({ className }: ProfilePictureProps) {
    return (
        <div className={twMerge("rounded-xl border-2 dark:border-zinc-700/70 border-zinc-100/90 bg-zinc-800 shadow-default transition-all duration-75 overflow-hidden", className)} >
            <img src="https://github.com/barrosgusta.png" 
            alt="Profile" 
            className="flex items-center justify-center text-white text-xs text-center h-full"
            />
        </div>
    )
}