"use client";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { DividerCloud } from "./DividerCloud";
import { FC, useRef } from "react";
import { projects } from "./SectionProjects";
import Footer from "./Footer";
import { useNavStore } from "@/lib/stores/navStore";

export const SectionHome = () => {
    const { setNav } = useNavStore();
    return (
        <div
            className="
                        w-[95vw] max-w-3xl mx-auto
                        backdrop-blur-sm bg-white/5 border border-transparent rounded-xl shadow-xl
                        p-8 sm:p-10
                        max-h-[calc(100vh-8rem)] overflow-auto scrollbar-hide
                    "
        >
            {/* your scrollable content */}
            <div className="w-full">
                <div className="flex items-start justify-between mb-4">
                    <h1 className="text-xl md:text-3xl font-semibold flex items-center gap-1 border-b-2 border-black/10">
                        Hey ho<span role="img" aria-label="waving hand">👋</span>
                    </h1>

                    <Link
                        onClick={() => setNav("about")}
                        href={'#about'}
                        className={cn(
                            "rounded-md font-medium transition-colors text-sm",
                            "text-black hover:text-black/60",
                            "py-2",
                            // "hover:bg-white/30 hover:black/60 hover:shadow",
                            "cursor-pointer"
                        )}
                        tabIndex={0}
                    >
                        read more
                        <ArrowUpRight className="inline-block ml-1" size={16} />
                    </Link>

                </div>
                <p className="text-black text-lg mb-4">
                    I&#39;m Anthony. I work as a developer in the Information Management Team at Avensia Philippines Inc. I live in Cebu, and occasionally in Roxas.
                    I decided to shift my journal notes to digital format. I like to keep things organized to keep track of what I do, so this is more personal, for my old self.
                </p>
            </div>

            <DividerCloud />
            <CarouselProjects />

            <DividerCloud />
            <div className="w-full">
                <div className="flex items-start justify-between mb-2">
                    <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-1 border-b-2 border-black/10 mb-4">
                        work experience
                    </h1>
                </div>
                <div className="bg-white/5 rounded-lg shadow p-6 flex flex-col text-black gap-6">
                    <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0">
                            <Image
                                src={'/avensia.jpg'}
                                alt={'Avensia'}
                                width={100}
                                height={100}
                                className="rounded-full  w-14 h-14 border border-transparent"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-2 sm:gap-0">
                            <div className="md:text-lg font-semibold flex flex-col sm:flex-row items-start sm:items-baseline gap-2">
                                <span>Avensia Philippines Inc.</span>
                                <span className="inline-block bg-white/10 px-2 py-0.5 rounded text-xs font-normal">
                                    2021 - Present
                                </span>
                            </div>
                            <div className="text-sm">Senior Developer</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0">
                            <Image
                                src={'/kyocera.webp'}
                                alt={'Kyocera Logo'}
                                width={120}
                                height={120}
                                className="rounded-full object-cover w-14 h-14 border border-transparent"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-2 sm:gap-0">
                            <div className="md:text-lg font-semibold flex flex-col sm:flex-row items-start sm:items-baseline gap-2">
                                <span>KYOCERA Document Solutions Philippines Inc.</span>
                                <span className="inline-block bg-white/10 px-2 py-0.5 rounded text-xs font-normal">
                                    2016 - 2021
                                </span>
                            </div>
                            <div className=" text-sm">Software Developer II</div>
                        </div>
                    </div>
                </div>
            </div>

            <DividerCloud />
            <div className="w-full">
                <div className="flex items-start justify-between mb-2">
                    <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-1 border-b-2 border-black/10 mb-4">
                        notes
                    </h1>

                    <Link
                        onClick={() => setNav("notes")}
                        href={'#notes'}
                        className={cn(
                            "rounded-md font-medium transition-colors text-sm",
                            "text-black hover:text-black/60",
                            "py-2",
                            // "hover:bg-white/30 hover:black/60 hover:shadow",
                            "cursor-pointer"
                        )}
                        tabIndex={0}
                    >
                        view all
                        <ArrowUpRight className="inline-block ml-1" size={16} />
                    </Link>
                </div>
                <p className="text-black text-lg mb-4">
                    A collection of my thoughts, encounters, and everything in between.
                </p>
                <div className="bg-white/5 rounded-lg p-6 flex flex-col text-black shadow hover:shadow-lg transition hover:cursor-pointer">
                    <h2 className="text-lg font-medium">Avensia IM Team Building</h2>
                    <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs">Jan 1 2020</span>
                        <span className="w-1 h-1 rounded-full bg-black/10" />
                        <div className="flex gap-2">
                            <span
                                key={'1'}
                                className="bg-white/10 px-2 py-1 rounded text-xs"
                            >
                                Video
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


const CarouselProjects = () => {
    const { setNav } = useNavStore();
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const cardWidth = scrollRef.current.firstChild instanceof HTMLElement
                ? scrollRef.current.firstChild.offsetWidth + 16 // card + gap
                : 320;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -cardWidth : cardWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-start justify-between mb-2">
                <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-1 border-b-2 border-black/10 mb-4">
                    projects
                </h1>
                <Link
                    onClick={() => setNav("projects")}
                    href={'#projects'}
                    className={cn(
                        "rounded-md font-medium transition-colors text-sm",
                        "text-black hover:text-black/60",
                        "py-2 cursor-pointer"
                    )}
                    tabIndex={0}
                >
                    view all
                    <ArrowUpRight className="inline-block ml-1" size={16} />
                </Link>
            </div>
            {/* Subtitle & Controls */}
            <div className="flex justify-between items-start mb-2">
                <p className="text-black text-lg mb-4">
                    Corpo projects and some personal ones for friends and myself.
                </p>
                <div className="flex gap-2">
                    <button
                        aria-label="Scroll left"
                        onClick={() => scroll("left")}
                        className="bg-white/10 hover:bg-white/30 rounded-md p-1 transition-colors cursor-pointer"
                        type="button"
                    >
                        <ArrowLeft size={16} />
                    </button>
                    <button
                        aria-label="Scroll right"
                        onClick={() => scroll("right")}
                        className="bg-white/10 hover:bg-white/30 rounded-md p-1 transition-colors cursor-pointer"
                        type="button"
                    >
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto gap-4 pb-2 snap-x snap-mandatory scrollbar-hide"
                tabIndex={0}
                aria-label="projects carousel"
            >
                {projects.map((p, index) => (
                    <div
                        key={index}
                        className="min-w-[320px] max-w-[350px] flex-shrink-0 snap-start"
                    >
                        <InfoCard
                            heading={p.title}
                            description={p.short_description}
                            tags={p.technologies || []}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

interface InfoCardProps {
    heading: string;
    description: string;
    tags: string[];
}

const InfoCard: FC<InfoCardProps> = ({
    heading,
    description,
    tags,
}) => (
    <div className="bg-white/5 rounded-lg shadow p-6 flex flex-col gap-4 h-60">
        <h2 className="text-xl font-semibold">{heading}</h2>
        <p>{description}</p>
        <div className="flex items-end gap-3 mt-auto">
            <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-white/10 px-2 py-0.5 rounded text-xs"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);