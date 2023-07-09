import { PillSeparator } from "../PillSeparator";
import { SideBarInfo } from "./SideBarInfo";
import { SideBarProfilePicture } from "./SideBarProfilePicture";

export function SideBar() {
    return (
        <div className="backdrop-blur-2xl z-10 rounded-xl bg-zinc-100 bg-opacity-60 h-fit p-4 grid place-items-center border border-zinc-400 shadow-default">
            <SideBarProfilePicture />
            <h1 className="text-zinc-600 text-xl text-center font-bold ">Gustavo Barros da Silveira</h1>
            <PillSeparator />
            <div className="grid place-items-center">
                <SideBarInfo />
            </div>
            <PillSeparator />
        </div>
    )
}