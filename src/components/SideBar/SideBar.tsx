import { SideBarInfo } from "./SideBarInfo";
import { SideBarProfilePicture } from "./SideBarProfilePicture";

export function SideBar() {
    return (
        <div className="rounded-xl bg-zinc-800 p-4 grid place-items-center border border-slate-400 shadow-default shadow-slate-950">
            <SideBarProfilePicture />
            <h1 className="text-white text-xl text-center font-bold ">Gustavo Barros da Silveira</h1>
            <div className="border border-slate-500 w-24 h-0 my-2"></div>
            <div className="grid place-items-center">
                <SideBarInfo />
            <div className="border border-slate-500 w-24 h-0 my-2"></div>
            </div>
        </div>
    )
}