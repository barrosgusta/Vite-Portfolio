import { Dialog, DialogContent } from "@/components/ui/dialog";
import ImageCarousel from "./image-carousell";
import { ReactNode } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PillSeparator } from "./pill-separator";
import { IconFrame } from "./icon-frame";
import { GithubIcon, Globe2 } from "lucide-react";

type ProjectModalProps = {
    imagesSource: string[];
    projectUrl?: string;
    siteUrl?: string;
    onClose: () => void;
    isOpen: boolean;
    children: ReactNode;
}

export function ProjectModalHeader({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col text-center lg:text-left">
            {children}
        </div>
    )
}

export function ProjectModalTitle({ children }: { children: ReactNode }) {
    return (
        <h3 className="mb-3 text-lg font-semibold leading-none dark:text-white">
            {children}
        </h3>
    )
}

export function ProjectModalDescription({ children }: { children: ReactNode }) {
    return (
        <p className="dark:text-zinc-300">
            {children}
        </p>
    )
}

export function ProjectModalTechnologies({ children }: { children: ReactNode }) {
    return (
        <ScrollArea className="flex flex-col items-center justify-center bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 shadow-default rounded-2xl max-h-72">
            <div className="p-4">
                <div className="">
                    <h3 className="text-lg text-center font-bold leading-none dark:text-white">
                        Tecnologias
                    </h3>
                </div>
                <PillSeparator className="mt-3 mb-1" />
                <section className="grid grid-cols-1">
                    {children}
                </section>
            </div>
        </ScrollArea>
    )
}

export function ProjectModalContent({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col lg:justify-between w-full h-full gap-4">
            {children}
        </div>
    )
}

export function ProjectModal({ imagesSource, projectUrl, siteUrl, onClose, isOpen, children }: ProjectModalProps) {
    const onOpenChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="w-screen h-screen lg:h-auto lg:max-h-[60vh] min-h-fit p-0 xl:max-w-[1500px]">
                <ScrollArea className="lg:overflow-visible">
                    <div className="m-6">
                        {(projectUrl || siteUrl) && (<div className="hidden w-fit lg:block absolute z-50 top-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-[480%] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
                            {projectUrl && (<IconFrame href={projectUrl} isSmall icon={<GithubIcon size={35} />} className="w-16 h-16 rounded-xl" />)}
                            {siteUrl && (<IconFrame href={siteUrl} isSmall icon={<Globe2 size={35} />} className="w-16 h-16 rounded-xl" />)}
                        </div>)}
                        <div className="grid lg:grid-cols-2 mb-auto gap-4 items-center lg:flex-row">
                            {(projectUrl || siteUrl) && (<div className="lg:hidden flex items-center justify-center">
                                {projectUrl && (<IconFrame href={projectUrl} isSmall icon={<GithubIcon size={35} />} className="w-16 h-16 rounded-xl" />)}
                                {siteUrl && (<IconFrame href={siteUrl} isSmall icon={<Globe2 size={35} />} className="w-16 h-16 rounded-xl" />)}
                            </div>)}
                            <ImageCarousel className="aspect-[15/9] lg:aspect-[14/9]" images={imagesSource} />
                            <PillSeparator className="lg:hidden" />
                            {children}
                        </div>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}