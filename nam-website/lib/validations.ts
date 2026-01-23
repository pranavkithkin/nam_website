import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().optional(),
    service: z.string().min(1, "Please select a service"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const quoteFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
    company: z.string().min(2, "Company name is required"),
    service: z.string().min(1, "Please select a service"),
    quantity: z.string().optional(),
    deadline: z.string().optional(),
    message: z.string().min(10, "Please provide project details"),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
