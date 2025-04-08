import { HeroParallax, TItems } from "@/components/ui/hero-parallax";
import { Navbar } from "@/components/Navbar";

const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://tenghuey.dev';

export default function Page() {
    const items: TItems[] = [
        {
            title: "",
            company: "",
            description: "",
            link: "#",
            thumbnail: `${baseUrl}/projects/blank.png`,
        },
        {
            title: "Kyocera Fleet Services",
            company: "KYOCERA Document Solutions Philippines Inc.",
            description: "Assigned to the Remote Maintenance Component, I was responsible for the development of remote management features for Kyocera Fleet Services. This product helps service personnel do remote maintenance on Kyocera devices.",
            link: "https://www.kyoceradocumentsolutions.eu/en/products/software/kyocera-fleet-services.html",
            thumbnail: `${baseUrl}/projects/kyocera-kfs-min.png`,
        },
        {
            title: "Command Center RX",
            company: "KYOCERA Document Solutions Philippines Inc.",
            description: "As part of the Service Team, I had worked with the Command Center RX, a web-based application that allows users to manage their Kyocera devices through local network.",
            link: "https://www.kyoceradocumentsolutions.com/asia/en/products/business-application/command-center-rx.html",
            thumbnail: `${baseUrl}/projects/kyocera-ccrx-min.png`,
        },
        {
            title: "BAMA Gruppen AS",
            company: "Avensia Philippines Inc.",
            description: "A leading supplier of fresh fruits and vegetables in Norway. I am responsible for the of product data using the Syndigo Platform. Configured data models, digital-assets, business rules, workflows, integrations, and authorizations.",
            link: "https://www.bama.no/",
            thumbnail: `${baseUrl}/projects/bama-min.png`,
        },
        {
            title: "",
            company: "",
            description: "",
            link: "#",
            thumbnail: `${baseUrl}/projects/blank.png`,
        },
        {
            title: "",
            company: "",
            description: "",
            link: "#",
            thumbnail: `${baseUrl}/projects/blank.png`,
        },
        {
            title: "Nordiska Kompaniet",
            company: "Avensia Philippines Inc.",
            description: "A world-class department store and an iconic destination for shopping and experiences since 1902. I am responsible for the of product data using the Syndigo Platform. Configured business rules, workflows, and integrations.",
            link: "https://www.nk.se/",
            thumbnail: `${baseUrl}/projects/nk-min.png`,
        },

        {
            title: "Saint-Gobain Distribution Norway",
            company: "Avensia Philippines Inc.",
            description: "It is among the world's leading companies in the production of building materials. I am responsible for the of product data using the Syndigo Platform. Configured data models, digital-assets, business rules, workflows, integrations, and authorizations.",
            link: "https://www.saint-gobain.no/",
            thumbnail: `${baseUrl}/projects/sgdn-min.png`,
        },
        {
            title: "Triton Cloud",
            company: "Hivemind Technologies",
            description: "Worked as a freelance frontend developer. I was assigned to this project to develop the frontend of the Triton Cloud, an app that manages and monitors the activities using mapbox. Site is already down or discontinued.",
            link: "#",
            thumbnail: `${baseUrl}/projects/hivemind-min.png`,
        },
        {
            title: "",
            company: "",
            description: "",
            link: "#",
            thumbnail: `${baseUrl}/projects/blank.png`,
        },
        {
            title: "",
            company: "",
            description: "",
            link: "#",
            thumbnail: `${baseUrl}/projects/blank.png`,
        },
        {
            title: "Landing Page",
            company: "Cains Boat Yard",
            description: "Still under development. A landing page for a boat yard company.",
            link: "https://www.cairnsboatyard.com.au/home",
            thumbnail: `${baseUrl}/projects/cainsboat-min.png`,
        },
        {
            title: "Dental Patient Management",
            company: "Personal Project",
            description: "A patient management system I originally built for my brother's dental clinic to manage patient records, images, and treatments. It also includes reporting features for fees and balances. Over time, I expanded it into an account-based app, which is now used by other dental clinics as well.",
            link: "https://dentsys.tenghuey.dev/",
            thumbnail: `${baseUrl}/projects/dentsys-min.png`,
        },
        {
            title: "KD Auto Care Center",
            company: "Personal Project",
            description: "An inventory system created for my friend's business. It helps manage the inventory of parts, and services. It includes features for tracking item movement and generating reports on orders and sales, helping streamline day-to-day operations",
            link: "https://kdauto.tenghuey.dev/",
            thumbnail: `${baseUrl}/projects/kdauto-min.png`,
        },
        {
            title: "",
            company: "",
            description: "",
            link: "#",
            thumbnail: `${baseUrl}/projects/blank.png`,
        },
    ];
    return (
        <div className="">
            <Navbar theme="light" />
            <main className="">
                <HeroParallax items={items} >
                    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
                        <h1 className="text-4xl md:text-6xl font-bold dark:text-white">
                            Projects
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl mt-8 dark:text-neutral-200">
                            I&apos;ve worked on a variety of projects—from my full-time roles to freelance and personal work. Each one helped me grow and pick up new skills. Here are a few examples I&apos;m proud of.
                        </p>
                    </div>
                </HeroParallax>
            </main>
        </div>
    );
}

