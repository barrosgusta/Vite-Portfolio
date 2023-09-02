import { ArrowLeft, ArrowRight } from "lucide-react"
import { useState } from "react"
import { twMerge } from "tailwind-merge"

type ImageCarouselProps = {
    images: string[],
    className?: string
} 

export default function ImageCarousel({ images, className }: ImageCarouselProps) {
    const [currImage, setCurrImage] = useState(0)

    const handleNextImage = () => {
        if (currImage === images.length - 1) {
            setCurrImage(0)
        } else {
            setCurrImage(currImage + 1)
        }
    }

    const handlePrevImage = () => {
        if (currImage === 0) {
            setCurrImage(images.length - 1)
        } else {
            setCurrImage(currImage - 1)
        }
    }

    return (
        <div className={twMerge("overflow-hidden aspect-[14/9] relative rounded-xl shadow-inner border border-zinc-300 dark:border-zinc-800", className)}>
            <div 
                className="flex h-full w-full transition-transform duration-500"
                style={{ transform: `translateX(-${currImage * 100}%)` }}
            >
                {images.map((image) => (
                    <img className="block object-cover " key={image} src={image} alt="image" />
                ))}
            </div>
            <div className={twMerge("absolute inset-0 flex items-center justify-between duration-300", images.length === 1 && "hidden")}>
                <button onClick={handlePrevImage} className="group flex items-center justify-start h-full w-24">
                    <ArrowLeft className="ml-4" color="white" />
                    <div className="opacity-0 group-hover:opacity-30 absolute top-0 duration-300 bg-gradient-to-r from-zinc-700 h-full w-36" />
                </button>
                <button onClick={handleNextImage} className="group flex items-center justify-end h-full w-24" >
                    <ArrowRight className="mr-4" color="white" />
                    <div className="opacity-0 group-hover:opacity-30 absolute top-0 duration-300 bg-gradient-to-l from-zinc-700 h-full w-36" />
                </button>
            </div>
        </div>
    );
};
