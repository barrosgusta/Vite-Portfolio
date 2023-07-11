import { Link } from 'lucide-react'
import Pic from '../../assets/images/portfolio/web-portfolio.png'
import { IconFrame } from '../IconFrame/IconFrame'
interface PicMiniatureProps {
    url: string
    title: string
    additionaTailwindClasses?: string
}

export function PicMiniature({url, title, additionaTailwindClasses}: PicMiniatureProps) {
    return (
        <figure className={'rounded-xl w-96 border border-indigo-400 shadow-default duration-300 overflow-hidden hover:scale-150 z-30 hover:z-50'
        + ' ' + additionaTailwindClasses}>
            <h4 className='p-1 text-center text-zinc-800 font-sfpmedium bg-zinc-100 shadow-md z-20
            dark:text-zinc-100 dark:bg-zinc-800'>{title}</h4>
            <div className='absolute z-10'>
                <IconFrame icon={<Link />} isSmall={true} href={url} />
            </div>
            <img src={Pic} className="w-screen object-cover z-0" />
        </figure>
    )
}