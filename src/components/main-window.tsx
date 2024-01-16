import { AnimatedRoutes } from "./animated-routes";
import { NavBarWindow } from "./nav-bar/nav-bar-window";
import WindowGlass from "./ui/window-glass";

export default function MainWindow() {
    return (
        <WindowGlass className="p-5 md:p-7 relative z-10 w-full transition-transform duration-1000">
                <div className="absolute right-0 -translate-y-7">
                    <NavBarWindow />
                </div>
                <AnimatedRoutes />
        </WindowGlass>
    );
}