import Footer from "./Footer";

export type TProjects = {
    title: string;
    company: string;
    short_description: string;
    description: string;
    link: string;
    thumbnail: string;
    technologies?: string[];
}
export const projects: TProjects[] = [
    {
        title: "Syndigo",
        company: "Avensia Philippines Inc.",
        description:
            "It's not a project but a platform that I currently work on for clients. A certified implementation consultant. Responsible for the master data and product information, from Data Modelling, Workflows, Business Rules, Authorizations, and Integrations. The challenge for me personally are data clean ups for broken characters/invalid data types, and working with the platform's limitations and finding workarounds to achieve the desired results based from the client's needs which sometimes breaks the platform ✌️",
        link: "https://syndigo.com/product-information-management/",
        thumbnail: "/projects/syndigo-min.png",
        technologies: ["RBL", "Excel", "Postman", "Javascript"],
        short_description: "It's not a project but I just want to put it here incase you're looking for an Application Developer which uses this platform 🙆‍♂️",
    },
    {
        title: "AI Labs — AI Agents",
        company: "Personal",
        description:
            "It's still a work in progress. I've been playing around and building bots for personal use. From automating tasks like documentation, emails, reporting, and generating content for products.",
        link: "https://syndigo.com/product-information-management/",
        thumbnail: "/projects/syndigo-min.png",
        technologies: ["n8n", "OpenAI", "Google Labs", "Perplexity", "ElevenLabs"],
        short_description: "It's still a work in progress, been building bots for personal use.",
    },
    {
        title: "Dental System",
        company: "Personal",
        description: "A stripped down patient management system I originally built for my brother's dental clinic to manage patient records, images, and treatments. It also includes reporting features for fees and balances. Over time, I expanded it into an account based app, which is now used by other dental clinics as well.",
        link: "https://dentsys.tenghuey.dev/",
        thumbnail: `/projects/dentsys-min.png`,
        technologies: ["Next.js", "React", "Tailwind CSS", "MySQL", "Node.js", "Express", "Zustand", "AWS S3"],
        short_description: "A stripped down patient management system that handles patient records, images, and treatments.",
    },
    {
        title: "KD Auto Care Center",
        company: "Personal",
        description: "An inventory system created for my friend's business. It helps manage the inventory of parts, and services. It includes features for tracking item movement and generating reports on orders and sales, helping streamline day-to-day operations. I recently added an AI that sends a monthly report at the end of the month.",
        link: "https://kdauto.vercel.app/",
        thumbnail: `/projects/kdauto-min.png`,
        technologies: ["Next.js", "React", "Tailwind CSS", "MySQL", "Node.js", "Express", "Zustand", 'n8n', 'OpenAI'],
        short_description: "An inventory system created for my friend's business. It helps manage the inventory of parts, and services.",
    },
    {
        title: "Cains Boat Yard",
        company: "Personal",
        description: "A friend of mine asked me to build a landing page for his client for his boat yard business. Good thing they referred a webpage to base it on, so I just had to replicate it. Used realtimecolors.com to get their preferences on the primary colors etc. Simply a static page with a email APIs for the contact form.",
        link: "https://www.cairnsboatyard.com.au/home",
        thumbnail: `/projects/cainsboat-min.png`,
        technologies: ["Next.js", "React", "Tailwind CSS", "EmailJS"],
        short_description: "A static landing page.",
    },
    {
        title: "Cairns Boat Storage",
        company: "Personal",
        description: "The same client but for boat storage. Just slap everything I did from the previous project and change the colors and texts.",
        link: "https://www.cairnsboatstorage.com.au/",
        thumbnail: `/projects/cairnsstorage-min.png`,
        technologies: ["Next.js", "React", "Tailwind CSS", "EmailJS"],
        short_description: "A static landing page.",
    },
    {
        title: "Kyocera Fleet Services",
        company: "KYOCERA Document Solutions Philippines Inc.",
        description: "I did not develop the web application, but I was responsible for the development of remote management features of this, bridging the communication between firmware and web application. This product helps service personnel do remote maintenance on Kyocera devices. A really fulfilling project I would say.",
        link: "https://www.kyoceradocumentsolutions.eu/en/products/software/kyocera-fleet-services.html",
        thumbnail: `/projects/kyocera-kfs-min.png`,
        technologies: ["C++", "Network", "Python", "ASTAH", "Perforce"],
        short_description: "A product that helps service personnel do remote maintenance on Kyocera devices.",
    },
    {
        title: "Command Center RX",
        company: "KYOCERA Document Solutions Philippines Inc.",
        description: "That 192.168.1.1 that you access in routers to change your settings, the same goes with printers but with a lot more settings. I mostly worked on horizontal developments, replicating issues, and testing. I'm just following what I've been told to do.",
        link: "https://www.kyoceradocumentsolutions.com/asia/en/products/business-application/command-center-rx.html",
        thumbnail: `/projects/kyocera-ccrx-min.png`,
        technologies: ["Javascript", "JQuery", "Jenkins", "Perforce"],
        short_description: "A web-based application that allows users to manage their Kyocera devices through local network.",
    },

]
export const SectionProjects = () => {
    return (
        <div
            className="
                        w-[95vw] max-w-3xl mx-auto
                        backdrop-blur-sm bg-white/5 border border-transparent rounded-xl shadow-xl
                        p-8 sm:p-10
                        max-h-[calc(100vh-8rem)] overflow-auto scrollbar-hide
                    "
        >
            <h2 className="text-xl md:text-3xl font-semibold mb-4 border-b-2 border-black/10 w-fit">Projects</h2>
            <p className="text-lg mb-8">
                Some corpo and personal projects to keep up with the latest trends.
                It&#39;s very tiring to keep up with everything so I try to focus on the things that I find interesting and useful within my line of experience.
                I enjoy building things that would add value to the quality of life of the people around me, and that they don&#39;t have to pay overpriced software applications.
            </p>
            <ul className="space-y-4">
                {projects.map((project, idx) => (
                    <li
                        key={project.title + idx}
                        className="bg-white/5 p-4 rounded-lg shadow hover:shadow-lg transition hover:cursor-pointer"
                        onClick={() => {
                            if (project.link) {
                                window.open(project.link, "_blank", "noopener,noreferrer");
                            }
                        }}
                    >
                        <div className="flex-1">
                            <a
                                href={'#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-semibold"
                            >
                                {project.title}
                            </a>
                            <div className="text-xs mb-1">{project.company}</div>
                            <p className="text-md mb-2">{project.description}</p>
                            {project.technologies && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {project.technologies.map((tech, techIdx) => (
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
                    </li>
                ))}
            </ul>
            <Footer />
        </div>
    )
}