import { PillSeparator } from '../PillSeparator';
import { SideBarInfo } from './SideBarInfo';
import { SideBarProfilePicture } from './SideBarProfilePicture';

export function SideBar() {
    return (
        <div className="grid grid-flow-col lg:grid-flow-row place-items-center backdrop-blur-3xl backdrop-saturate-200 z-10 rounded-xl bg-zinc-100 bg-opacity-60 h-fit w-60 p-4 border border-zinc-400 shadow-default 
        dark:bg-zinc-800 dark:bg-opacity-80 dark:border-zinc-700">
            <div className='grid grid-flow-row place-items-center'>
                <SideBarProfilePicture />
                <h1 className="text-zinc-800 dark:text-zinc-200 text-xl text-center font-sfpmedium drop-shadow-sm">
                    Gustavo Barros da Silveira
                </h1>
            </div>
            <div className='rotate-90 lg:rotate-0'>
                <PillSeparator />
            </div>
            
            <div className="grid grid-flow-col lg:place-items-center">
                <SideBarInfo />
            </div>
        </div>
    );
}
