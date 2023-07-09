import { Pi } from "lucide-react";
import { PillSeparator } from "../PillSeparator";
import { SideBarInfo } from "./SideBarInfo";
import { SideBarProfilePicture } from "./SideBarProfilePicture";

export function SideBar() {
    return (
        <div className="rounded-xl bg-zinc-100 h-fit p-4 grid place-items-center border border-zinc-400 shadow-default">
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