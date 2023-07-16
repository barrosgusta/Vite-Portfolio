interface ProfilePictureProps {
    additionalTailwindClasses?: string;
}

export function ProfilePicture({ additionalTailwindClasses }: ProfilePictureProps) {
    return (
        <div className={"rounded-xl border border-zinc-500 bg-zinc-800 shadow-default hover:bg-white transition-all duration-75"
            + " " + additionalTailwindClasses} >
            <img src="https://github.com/barrosgusta.png" 
            alt="Profile" 
            className="flex items-center justify-center text-white text-xs text-center h-full"
            />
        </div>
    )
}