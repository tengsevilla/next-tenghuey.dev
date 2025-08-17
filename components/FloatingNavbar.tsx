"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
    SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Typewriter } from "./ui/typewrite-text";
import { useAnimateStore } from "@/lib/stores/animateStore";
import { useNavStore } from "@/lib/stores/navStore";

type NavItem = {
    label: string;
    href: string;
};

const navItems: NavItem[] = [
    { label: "home", href: "personal" },
    { label: "projects", href: "projects" },
    { label: "notes", href: "notes" },
    { label: "about", href: "about" },
];

export function AnimatedFloatingNavbar() {
    // const [stage, setStage] = React.useState<"intro" | "animating" | "nav">("intro");
    const { stage, setStage } = useAnimateStore();

    React.useEffect(() => {
        // Start animating after mount
        const timer1 = setTimeout(() => setStage("animating"), 3000);
        // Switch to nav after animation
        const timer2 = setTimeout(() => setStage("nav"), 3500);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [setStage]);

    return (
        <>
            {/* Centered "Hello, friend." animated div */}
            {(stage === "intro" || stage === "animating") && (
                <div
                    className={cn(
                        "fixed left-1/2 z-50 -translate-x-1/2 flex items-center justify-center w-full",
                        "transition-all duration-800 ease-in-out",
                        stage === "intro"
                            ? "top-1/2 -translate-y-1/2 opacity-100"
                            : // Animate to top nav position
                            "top-6 translate-y-0 opacity-0"
                    )}
                >
                    <div className="bg-white/15 backdrop-blur-md rounded-xl px-8 py-4 shadow-xl text-3xl font-bold text-black select-none">
                        {/* Hello, friend. */}
                        <Typewriter
                            text={["Hello, friend."]}
                            speed={80}
                            loop={false}
                            className="text-xl font-medium"
                        />
                    </div>
                </div>
            )}

            {/* Floating navbar appears after animation */}
            {stage === "nav" && (
                <FloatingNavbar />
            )}
        </>
    );
}

// FloatingNavbar: your original component
export function FloatingNavbar() {
    const { setNav } = useNavStore();
    return (
        <nav
            className={cn(
                "fixed top-6 left-1/2 z-50 -translate-x-1/2 w-[95vw] max-w-3xl",
                "backdrop-blur-md bg-white/15 border border-transparent",
                "rounded-xl shadow-lg flex items-center justify-between px-6 py-2",
                "animate-fade-in"
            )}
            aria-label="Main navigation"
        >
            {/* Brand */}
            <Link
                href="/"
                className="text-2xl font-semibold text-black select-none tracking-wide drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]"
            >
                tenghuey.dev
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden md:flex gap-2">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={`#${item.label}`}
                        className={cn(
                            "rounded-md font-medium transition-colors",
                            "text-black hover:text-black/60",
                            "py-2 px-4",
                            "cursor-pointer"
                        )}
                        tabIndex={0}
                        onClick={() => {
                            setNav(item.label as "home" | "projects" | "notes" | "about");
                        }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <button
                            aria-label="Open menu"
                            className="p-2 rounded-md bg-transparent hover:bg-black focus:outline-none"
                        >
                            <Menu className="text-black" size={24} />
                        </button>
                    </SheetTrigger>
                    <SheetContent
                        side="top"
                        className="bg-white/90 backdrop-blur-md border-b border-white/30 rounded-b-xl flex flex-col pt-8 pb-4"
                    >
                        {/* Visually hidden title for accessibility */}
                        <SheetTitle>
                            <VisuallyHidden>Navigation menu</VisuallyHidden>
                        </SheetTitle>
                        <div className="flex flex-col items-center gap-2">
                            {navItems.map((item, index) => (
                                <SheetClose asChild key={item.label}>
                                    <Link
                                        key={index}
                                        href={`#${item.label}`}
                                        className={cn(
                                            "w-full text-center rounded-md font-medium text-black transition-colors",
                                            "hover:bg-black hover:text-white py-2 px-4"
                                        )}
                                    >
                                        {item.label}
                                    </Link>
                                </SheetClose>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}

export default AnimatedFloatingNavbar;