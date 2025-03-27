import { Navbar } from "@/components/Navbar";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { GitHub, LinkedIn } from "@/data/devIcons";
import { cn } from "@/lib/utils";
import FormContact from "./FormContact";

export default function Page() {
    return (
        <div className="">
            <Navbar theme="light" />
            <main className="">
                <div className="relative flex h-auto sm:h-[100vh] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-4 sm:p-20 md:shadow-xl">
                    <section className="z-10 py-16 px-4">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl">
                            {/* Left: Text Section */}
                            <div className="flex flex-col justify-center">
                                <h2 className="text-4xl font-bold mb-4">Connect with me!</h2>
                                <h3 className="text-4xl font-semibold mb-6">Let’s Build Apps.</h3>
                                <p className="text-muted-foreground max-w-md">
                                    Reach out and connect with me. Whether you have questions,
                                    feedback, or a job for me, I&apos;m here to listen and collaborate.
                                </p>
                            </div>

                            {/* Right: Form & Contact Card */}
                            <div className="bg-muted p-6 md:p-8 rounded-lg shadow-lg space-y-6">
                                {/* Form */}
                                <FormContact />

                                <hr className="border-border" />

                                {/* Contact Info */}
                                <div className="flex flex-col md:flex-row justify-between text-sm text-muted-foreground gap-4">
                                    <div>
                                        <p>sevillanthonyy@gmail.com</p>
                                        <p>+63 917 7705 002</p>
                                    </div>
                                    <div>
                                        <p>Philippines</p>
                                        <p>Cebu City, Cebu 6000</p>
                                    </div>
                                </div>

                                {/* Social Icons */}
                                <div className="flex justify-end space-x-4 pt-2">
                                    <a href="https://github.com/tengsevilla" target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                                        <GitHub />
                                    </a>
                                    <a href="https://www.linkedin.com/in/anthonysevilla/" target="_blank" rel="noopener noreferrer" className="w-5 h-5">
                                        <LinkedIn />
                                    </a>
                                </div>

                            </div>

                        </div>
                    </section>
                    <AnimatedGridPattern
                        numSquares={30}
                        maxOpacity={0.1}
                        duration={2}
                        className={cn(
                            "[mask-image:radial-gradient(1080px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                        )}
                    />
                </div>
            </main>
        </div>
    );
}
