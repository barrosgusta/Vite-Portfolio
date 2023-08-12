import { Github, Globe } from 'lucide-react'
import { IconFrame } from '../IconFrame/IconFrame'
import { twMerge } from 'tailwind-merge'

interface ImageMiniatureRootProps {
    imageSource: string
    projectUrl: string
    siteUrl?: string
    title: string
    className?: string
    children?: React.ReactNode
}

export function ImageMiniatureRoot({imageSource, projectUrl, siteUrl, title, className, children}: ImageMiniatureRootProps) {
    return (
        <figure className={twMerge("group duration-300 relative rounded-xl w-96 border border-indigo-400 shadow-default overflow-hidden hover:scale-110", className)}>
            {children}
            <h4 className='p-1 text-center text-zinc-800 font-semibold bg-zinc-100 shadow-md z-20 dark:text-zinc-100 dark:bg-zinc-800'>
                {title}
            </h4>
            <div className='opacity-0 group-hover:opacity-100 duration-300 absolute right-0 p-2 z-10'>
                <div className='flex'>
                    {projectUrl && (<IconFrame icon={<Github />} isSmall={true} href={projectUrl} className='m-0 ml-1' />)}
                    {siteUrl && (<IconFrame icon={<Globe />} isSmall={true} href={siteUrl} className='m-0 ml-1' />)}
                </div>
            </div>
            <img src={imageSource} className="w-screen object-cover z-0 aspect-video" loading='lazy' />
        </figure>
    )
}