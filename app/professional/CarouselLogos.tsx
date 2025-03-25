import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { CPlusPlus, TypeScript, NextJS, MySQL, MonggoDB, Vercel, Heroku, AWS, Syndigo, React as ReactIcon, NodeJS } from "@/data/devIcons";


const logos = [
    {
        id: "C++",
        component: CPlusPlus,
        className: "w-32 text-white"
    },
    {
        id: "TypeScript",
        component: TypeScript,
        className: "w-32 text-white"
    },
    {
        id: "NodeJS",
        component: NodeJS,
        className: "w-32 text-white"
    },
    {
        id: "React",
        component: ReactIcon,
        className: "w-32 text-white"
    },
    {
        id: "NextJS",
        component: NextJS,
        className: "w-32 text-white"
    },
    {
        id: "MySQL",
        component: MySQL,
        className: "w-32 text-white"
    },
    {
        id: "MonggoDB",
        component: MonggoDB,
        className: "w-32 text-white"
    },
    {
        id: "Vercel",
        component: Vercel,
        className: "w-32 text-white"
    },
    {
        id: "Heroku",
        component: Heroku,
        className: "w-32 text-white"
    },
    {
        id: "AWS",
        component: AWS,
        className: "w-32 text-white"
    },
    {
        id: "Syndigo",
        component: Syndigo,
        className: "w-32 text-white"
    }
]


export function CarouselLogos() {
    return (
        <div className="relative py-2">
            <InfiniteSlider
                className='flex h-full w-full items-center'
                duration={30}
                gap={48}
            >
                {logos.map(({ id, component: Logo, className }) => (
                    <div
                        key={id}
                        className={`flex flex-row items-center gap-2 ${className}`}
                    >
                        <Logo />
                        {id}
                    </div>
                ))}
            </InfiniteSlider>
            <ProgressiveBlur
                className='pointer-events-none absolute top-0 left-0 h-full w-[100px]'
                direction='left'
                blurIntensity={1}
            />
            <ProgressiveBlur
                className='pointer-events-none absolute top-0 right-0 h-full w-[100px]'
                direction='right'
                blurIntensity={1}
            />
        </div>
    )
}