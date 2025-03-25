import LetterGlitch from "@/components/LetterGlitch/LetterGlitch";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import { CarouselLogos } from "./CarouselLogos";
import { Button } from "@/components/ui/button";
import { Code, DownloadIcon } from "lucide-react";

export default function Page() {

    return (
        <div className="">
            <Navbar theme="dark" />
            <main className="">
                <div className="h-[100vh] relative">
                    <LetterGlitch
                        glitchSpeed={300}
                        centerVignette={true}
                        outerVignette={true}
                        smooth={true}
                        glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
                    />
                    <div className="absolute inset-0 flex flex-row items-center justify-center z-10">
                        <div className="text-center w-full sm:w-200">
                            <Image src="/avatar01.jpeg" alt="Avatar" width={180} height={180} className="rounded-full mx-auto mb-4 shadow-2xl" />
                            <h1 className="text-white text-4xl font-semibold" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Anthony A. Sevilla</h1>
                            <div className="relative mt-4">
                                <div className="absolute inset-0 bg-black opacity-50 blur-lg rounded-lg"></div>
                                <div className="relative text-white px-4 pb-4" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)" }}>
                                    Software Engineer | Master Data Specialist | Full-Stack Developer
                                </div>
                            </div>
                            <div className="relative mt-4">
                                <div className="absolute inset-0 bg-black opacity-50 blur-lg rounded-lg"></div>
                                <CarouselLogos />
                            </div>
                            <div className="mt-8 flex justify-center space-x-4">
                                <Button asChild className="bg-secondary/80 text-black shadow-lg hover:opacity-100 hover:text-white" >
                                    <a href="/SEVILLA_ANTHONY_CV.pdf" download>
                                        <DownloadIcon className="mr-1" />
                                        Download CV
                                    </a>
                                </Button>
                                <Button asChild className="bg-gray-500/50 text-white shadow-lg hover:opacity-100">
                                    <a href="/professional/projects">
                                        <Code className="mr-1" />
                                        See Projects
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}
