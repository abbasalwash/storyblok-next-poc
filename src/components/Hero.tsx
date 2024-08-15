import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { HeroStoryblok } from "../../component-types-sb";

const Hero = ({ blok }: { blok: HeroStoryblok }) => {
    return (
        <div {...storyblokEditable(blok)} className={`min-h-[500px]
    relative
    flex
    items-end
    justify-center
    p-9
    my-6
    rounded-[5px]
    overflow-hidden ${blok.layout === 'constrained' ? 'container mx-auto' : ''}`}>
            <div className="relative z-10 text-center">
                <h1 className="text-6xl text-black font-bold mb-3">{blok.headline}</h1>
                <h2 className="text-4xl text-black font-light">{blok.subheadline}</h2>
            </div>
            {blok.background_image && (
                <Image
                    width={800} 
                    height={400}
                    src={blok.background_image?.filename}
                    alt="hero"
                    className="absolute top-0 left-0 z-0 w-full h-full object-cover"
                />)}
        </div>
    );
};

export default Hero;