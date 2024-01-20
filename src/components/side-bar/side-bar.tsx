import { useTranslation } from "react-i18next";
import { ProfilePicture } from "../profile-picture";
import WindowGlass from "../ui/window-glass";
import { SideBarInfo } from "./side-bar-info";

export function SideBar() {
    const { t } = useTranslation();

    return (
        <WindowGlass className="h-full w-full lg:w-auto">
            <div className="grid grid-flow-col lg:grid-flow-row place-items-center gap-5 my-7 mx-5">
                <div className="grid grid-flow-row place-items-center justify-self-end lg:justify-self-auto">
                    <ProfilePicture className="w-32 h-32 lg:w-44 lg:h-44" />
                </div>
                <div className="grid lg:grid-flow-row lg:gap-5 place-items-center md:place-content-around justify-self-start lg:justify-self-auto h-full">
                    <h1 className="text-zinc-800 dark:text-zinc-200 text-xl text-center font-sfpmedium drop-shadow-sm">
                        Gustavo Barros da Silveira
                    </h1>
                    <div className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-default-sm py-1 px-3">
                        {t("sideBar.role")}
                    </div>
                    <div className="flex lg:grid lg:justify-center place-items-center h-full">
                        <div className="lg:place-items-center">
                            <SideBarInfo />
                        </div>
                    </div>
                </div>
            </div>
        </WindowGlass>
    );
}
