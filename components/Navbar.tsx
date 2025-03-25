import { NavItem, TubelightNavbar } from "./ui/tubelight-navbar";
import { Home, Briefcase, Mail } from 'lucide-react';

const navbarItemsProfessional: NavItem[] = [
    { name: "Home", url: "/professional", icon: <Home size={18} strokeWidth={2.5} /> },
    { name: "Projects", url: "/professional/projects", icon: <Briefcase size={18} strokeWidth={2.5} /> },
    { name: "Contact", url: "/professional/contact", icon: <Mail size={18} strokeWidth={2.5} /> },
];

interface Props {
    theme: "light" | "dark";
}
export function Navbar({ theme }: Props) {
    return (
        <TubelightNavbar items={navbarItemsProfessional} theme={theme} />
    )
}
