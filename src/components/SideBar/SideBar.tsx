import { PillSeparator } from '../PillSeparator';
import { ProfilePicture } from '../ProfilePicture';
import { SideBarInfo } from './SideBarInfo';

export function SideBar() {
    return (
        <div className="grid grid-flow-col md:flex md:justify-center md:items-center lg:grid-flow-row lg:grid place-items-center  backdrop-blur-3xl backdrop-saturate-200 z-10 rounded-xl bg-zinc-100 bg-opacity-60 h-fit w-full lg:w-[260px] xl:w-[235px] border border-zinc-400 shadow-default 
        dark:bg-zinc-800 dark:bg-opacity-80 dark:border-zinc-700">
            <div className='grid grid-flow-col lg:grid-flow-row place-items-center m-8'>
                <div className='grid grid-flow-row place-items-center md:p-2 xl:p-0'>
                    <ProfilePicture className='mb-2 lg:m-5 w-40 h-40 lg:w-44 lg:h-44' />
                    <h1 className="text-zinc-800 dark:text-zinc-200 text-xl text-center font-sfpmedium drop-shadow-sm">
                        Gustavo Barros da Silveira
                    </h1>
                    <div className='mt-2 text-xs text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-default py-1 px-3'>
                        Desenvolvedor
                    </div>
                </div>
                

                <div className='hidden md:flex lg:grid lg:justify-center place-items-center h-full'>
                    <PillSeparator className="rotate-90 lg:rotate-0 w-24 lg:m-5" />

                    <div className="lg:place-items-center">
                        <SideBarInfo />
                    </div>
                </div>
            </div>
        </div>
    );
}
