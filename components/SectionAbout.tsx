import { DividerCloud } from "./DividerCloud";
import Image from "next/image";
import { FC } from "react";
import {
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
    SiPostman,
    SiGithub,
    SiVercel,
    SiShadcnui,
    SiHeroku,
    SiHostinger,
    SiN8N,
    SiNodedotjs,
    SiMysql,
} from "react-icons/si";
import { BiLogoVisualStudio, BiCode } from "react-icons/bi";
import { VscAzureDevops } from "react-icons/vsc";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import { Card } from "./ui/card";
import Link from "next/link";
import Footer from "./Footer";
import { Navigation, useNavStore } from "@/lib/stores/navStore";

type Item = {
    label: string;
    description: string;
    Icon: FC<{ className?: string }>;
};

const technologies: Item[] = [
    { label: "React", description: "UI Library", Icon: SiReact },
    { label: "Next.js", description: "React Framework", Icon: SiNextdotjs },
    { label: "TypeScript", description: "Typed Superset of JavaScript", Icon: SiTypescript },
    { label: "NodeJS", description: "JavaScript Runtime", Icon: SiNodedotjs },
    { label: "Tailwind CSS", description: "Styling Library", Icon: SiTailwindcss },
    { label: "ShadCN UI", description: "Components Framework", Icon: SiShadcnui },
    { label: "Zustand", description: "State Management", Icon: BiCode },
    { label: "MySQL", description: "Database", Icon: SiMysql },
];

const tools: Item[] = [
    { label: "Visual Studio Code", description: "Text Editor", Icon: BiLogoVisualStudio },
    { label: "Postman", description: "APIs", Icon: SiPostman },
    { label: "Excel", description: "Data handling", Icon: PiMicrosoftExcelLogoFill },
    { label: "n8n", description: "Automation", Icon: SiN8N },
];

const platforms: Item[] = [
    { label: "Syndigo", description: "Product Information Management", Icon: BiCode },
    { label: "Azure", description: "Cloud Computing Service", Icon: VscAzureDevops },
    { label: "GitHub", description: "Version control", Icon: SiGithub },
    { label: "Vercel", description: "Web hosting", Icon: SiVercel },
    { label: "Hostinger", description: "Web hosting and database", Icon: SiHostinger },
    { label: "Heroku", description: "API hosting", Icon: SiHeroku },
];

const WorkExperience = [
    {
        company: "Avensia Philippines Inc.",
        position: "Senior Developer",
        duration: "2021 - Present",
        description: "A swedish company. My primary role is Master Data Specialist, where I manage and maintain the integrity of product data across different systems for clients. Our platform being used is Syndigo, a PIM (Product Information Management) system. Love the work culture where they really care for their employees and the work-life balance is great.",
        logo: "/avensia.jpg",
        technologies: ['Syndigo', 'PIM', 'Data Management', 'JIRA', 'Azure']
    },
    {
        company: "KYOCERA Document Solutions Philippines Inc.",
        position: "Software Engineer II",
        duration: "2019 - 2021",
        description: "My first job as a software developer for a japanese company. Developed low-level code for printers and multifunctional ones. I was able to learn a lot about the architecture and processes they have for product release. They follow a waterfall method where I learned about the importance of documentation and thorough review processes. I was able to work with a lot of different teams or components. Overall I appreciated the strictness they have in their processes, it made me a better developer.",
        logo: "/kyocera.webp",
        technologies: ['C++', 'Javascript', 'Python', 'JIRA', 'Perforce']
    }
]
export const SectionAbout = () => {

    const { setNav } = useNavStore();
    const subtleNav = (nav: Navigation) => {
        setNav(nav);
    }
    return (
        <div
            className="
                        w-[95vw] max-w-3xl mx-auto
                        backdrop-blur-sm bg-white/5 border border-transparent rounded-xl shadow-xl
                        p-8 sm:p-10
                        max-h-[calc(100vh-8rem)] overflow-auto scrollbar-hide
                    "
        >
            <h2 className="text-xl md:text-3xl font-semibold mb-4 border-b-2 border-black/10 w-fit">About</h2>
            <p className="text-lg mb-4">
                A software developer that prefers to code only in typescript, and likes to look at large datasets. I prefer sitting at the corner of the of a cafe and order a brewed coffee, no add ons, just black. I curate and listen to <Link href={'#playlists'} onClick={() => subtleNav("playlists")} className="underline">playlists</Link> based on my mood. I occasionally read <Link href={'#books'} onClick={() => subtleNav("books")} className="underline">books</Link> while waiting for all the episodes to be released. I enjoy spending my time with people who are close to me. I don&#39;t plan during my travels, just come what may kind of vibe. Loves to film candid moments, or just take random <Link href={'#photos'} onClick={() => subtleNav("photos")} className="underline">photos</Link> when I feel like it.
            </p>

            {/* You can tell a lot from a person based on the music they listen to.  */}

            <DividerCloud />
            <div className="w-full">
                <div className="flex items-start justify-between mb-2">
                    <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-1 border-b-2 border-black/10 mb-4">
                        work experience
                    </h1>
                </div>
                <div className="bg-white/5 rounded-lg shadow p-6 flex flex-col text-black gap-6">
                    {
                        WorkExperience.map((work, idx) => (
                            <div key={idx} className="flex items-center gap-4 w-full">
                                <div className="flex-shrink-0 hidden sm:block">
                                    <Image
                                        src={work.logo}
                                        alt={work.company}
                                        width={120}
                                        height={120}
                                        className="rounded-full object-cover w-14 h-14 border border-transparent"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-2 sm:gap-0">
                                    <div className="md:text-lg font-semibold flex flex-col sm:flex-row items-start sm:items-baseline gap-2">
                                        <span>{work.company}</span>
                                        <span className="inline-block bg-white/10 px-2 py-0.5 rounded text-xs font-normal">
                                            {work.duration}
                                        </span>
                                    </div>
                                    <div className="text-sm mb-2">{work.position}</div>
                                    <div className="text-md">
                                        {work.description}
                                    </div>
                                    {work.technologies && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {work.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={tech + techIdx}
                                                    className="bg-white/10 px-2 py-0.5 rounded text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <DividerCloud />
                <div className="w-full">
                    <div className="flex items-start justify-between mb-2">
                        <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-1 border-b-2 border-black/10 mb-4">
                            usage
                        </h1>
                    </div>
                    <p className="text-lg mb-8">
                        Tools, and technologies I use on a daily basis.
                    </p>
                    {/* Create a list with icons */}
                    <UsageSection title="Technologies" items={technologies} />
                    <UsageSection title="Tools" items={tools} />
                    <UsageSection title="Platforms" items={platforms} />
                </div>
                <DividerCloud />
                <div className="w-full">
                    <div className="flex items-start justify-between mb-2">
                        <h1 className="text-xl md:text-2xl font-semibold flex items-center gap-1 border-b-2 border-black/10 mb-4">
                            about this page
                        </h1>
                    </div>
                    <p className="text-lg mb-2">
                        Everything you see here I have designed and built myself. The website is using React and ShadCN as a design system. The pages are generated by NextJS and are hosted on Vercel.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
};

const UsageSection: FC<{ title: string; items: Item[] }> = ({ title, items }) => (
    <div className="mb-8">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {items.map(({ label, description, Icon }) => (
                <Card key={label} className="flex items-center gap-3 p-3 shadow hover:shadow-lg transition bg-white/5 border-0">
                    <Icon className="w-6 h-6 text-primary" />
                    <div>
                        <div className="text-base font-medium">{label}</div>
                        <div className="text-xs">{description}</div>
                    </div>
                </Card>
            ))}
        </div>
    </div>
);