// app/components/Footer.tsx

'use client';

import * as React from 'react';
import Link from 'next/link';
import { SiGmail, SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';

const socialLinks: Array<{
    href: string;
    label: string;
    icon: React.ReactElement;
}> = [
        {
            href: 'mailto:sevillanthonyy@gmail.com',
            label: 'Email',
            icon: <SiGmail className="w-7 h-7" />,
        },
        {
            href: 'https://www.linkedin.com/in/anthonysevilla/',
            label: 'LinkedIn',
            icon: <SiLinkedin className="w-7 h-7" />,
        },
        {
            href: 'https://github.com/tengsevilla',
            label: 'GitHub',
            icon: <SiGithub className="w-7 h-7" />,
        },
        {
            href: 'https://www.instagram.com/anthonysevillaa/',
            label: 'Instagram',
            icon: <SiInstagram className="w-7 h-7" />,
        },
    ];

export const Footer: React.FC = () => (
    <footer className="w-full border-t border-black/10 pt-8 mt-4 bg-transparent text-black">
        <div className="container mx-auto flex flex-col items-center gap-4">
            <div className="flex items-center gap-8">
                {socialLinks.map(({ href, label, icon }) => (
                    <Link
                        key={label}
                        href={href}
                        aria-label={label}
                        className="transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {icon}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col items-center gap-0.5 text-sm">
                <span>Anthony Sevilla &mdash; Developer</span>
                <span>
                    &copy; {new Date().getFullYear()} tenghuey.dev
                </span>
                {/* <span>
                    <Link
                        href="#"
                        className="underline hover:text-primary transition-colors"
                    >
                        Page Statistics
                    </Link>
                </span> */}
            </div>
        </div>
    </footer>
);

export default Footer;