import { useState } from 'react';
import ProfileImage from '../../assets/images/profile1.png';
import HoverProfileImage from '../../assets/images/profile2.png';

export function SideBarProfilePicture() {
    const [isHovering, setIsHovering] = useState(false);

    const HandleMouseEnter = () => {
        setIsHovering(true);
    }

    const HandleMouseLeave = () => {
        setIsHovering(false);
    }

    return (
        <div className="rounded-xl w-40 h-40 border border-slate-500 bg-zinc-800 m-5 shadow-default hover:shadow-slate-950 hover:bg-white transition-all delay-100" >
            <img src={isHovering ? HoverProfileImage : ProfileImage} 
            alt="Profile Picture" 
            className="flex items-center justify-center text-white text-xs text-center h-full"
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={HandleMouseLeave} />
        </div>
    )
}