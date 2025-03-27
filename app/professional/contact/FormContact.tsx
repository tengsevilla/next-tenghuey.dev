"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { IPayloadEmail, sendEmail } from "@/lib/models/api.email";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

// Zod schema for validation
const emailSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    subject: z.string().optional(), // Not in form but required by interface
    sendTo: z.string().optional(),  // Not in form but required by interface
});


export default function FormContact() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<IPayloadEmail>({
        resolver: zodResolver(emailSchema),
    });

    const onSubmit = async (data: IPayloadEmail) => {
        console.log("Submitting email payload:", data);
        const payload = {
            ...data,
            subject: "New Message from Portfolio",
            sendTo: "sevillanthonyy@gmail.com"
        }
        const response = await sendEmail(payload);
        if (response.mailsent) {
            toast.success("Message sent successfully!");
        } else {
            toast.error("Failed to Message. Please try again.");
        }
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full">
                    <Input
                        type="email"
                        placeholder="Your Email"
                        {...register("email")}
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <div className="w-full">
                    <Input
                        type="text"
                        placeholder="Your Name"
                        {...register("name")}
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>
            </div>
            <div>
                <textarea
                    placeholder="Your Message"
                    rows={6}
                    className="w-full border border-border rounded px-4 py-2 bg-background text-foreground"
                    {...register("message")}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
            </div>
            <Button
                type="submit"
                className="w-full bg-primary text-white shadow-lg hover:opacity-100"
                isLoading={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
