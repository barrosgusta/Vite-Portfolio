import { NavBarForm } from '../NavBar/NavBarForm';
import { AnimatedRoutes } from './AnimatedRoutes';

export function MainForm() {
    return (
        <div className="relative backdrop-blur-3xl backdrop-saturate-200 z-10 w-full rounded-xl bg-zinc-100 bg-opacity-60 border border-zinc-400 shadow-default
        dark:bg-zinc-800 dark:bg-opacity-80 dark:border-zinc-700 transition-transform duration-1000">
                <div className='absolute right-0'>
                    <NavBarForm />
                </div>
                <AnimatedRoutes />
        </div>
    );
}