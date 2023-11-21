import { AnimatedRoutes } from './animated-routes';
import { NavBarWindow } from './nav-bar/nav-bar-window';

export default function MainWindow() {
    return (
        <div className="p-7
        relative backdrop-blur-lg backdrop-saturate-200 backdrop-brightness-150 dark:backdrop-brightness-100 z-10 w-full rounded-xl bg-zinc-100/60 border border-zinc-300/60 shadow-default
        dark:bg-zinc-800/60 dark:border-zinc-700/60 transition-transform duration-1000">
                <div className='absolute right-0'>
                    <NavBarWindow />
                </div>
                <AnimatedRoutes />
        </div>
    );
}