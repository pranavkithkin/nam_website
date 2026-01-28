"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate API call - replace with actual implementation
            await new Promise((resolve) => setTimeout(resolve, 1500));
            console.log("Form data:", data);

            setSubmitStatus("success");
            reset();

            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        } catch (error) {
            setSubmitStatus("error");
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Our Location",
            content: "Ras Al Khor, Dubai, United Arab Emirates",
        },
        {
            icon: Phone,
            title: "Phone Number",
            content: "+971 50 136 1811",
            href: "tel:+971501361811",
        },
        {
            icon: Mail,
            title: "Email Address",
            content: "info@namuae.com",
            href: "mailto:info@namuae.com",
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Monday - Saturday: 9:00 AM - 6:00 PM",
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-navy-primary to-navy-dark text-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Ready to elevate your business? We're here to help. Contact us today for a free consultation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl font-bold text-navy-primary mb-6">
                                    Send Us a Message
                                </h2>
                                <p className="text-gray-700 mb-8">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                {...register("name")}
                                                id="name"
                                                type="text"
                                                className="input-field"
                                                placeholder="John Doe"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                {...register("email")}
                                                id="email"
                                                type="email"
                                                className="input-field"
                                                placeholder="john@example.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number *
                                            </label>
                                            <input
                                                {...register("phone")}
                                                id="phone"
                                                type="tel"
                                                className="input-field"
                                                placeholder="+971 50 123 4567"
                                            />
                                            {errors.phone && (
                                                <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                {...register("company")}
                                                id="company"
                                                type="text"
                                                className="input-field"
                                                placeholder="Your Company"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Service Interest *
                                        </label>
                                        <select
                                            {...register("service")}
                                            id="service"
                                            className="input-field"
                                        >
                                            <option value="">Select a service</option>
                                            <option value="corporate-gifts">Corporate Gifts</option>
                                            <option value="digital-printing">Digital Printing</option>
                                            <option value="custom-uniforms">Custom Uniforms</option>
                                            <option value="general-inquiry">General Inquiry</option>
                                        </select>
                                        {errors.service && (
                                            <p className="mt-1 text-sm text-red-500">{errors.service.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            id="message"
                                            rows={6}
                                            className="input-field"
                                            placeholder="Tell us about your project..."
                                        />
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                                        )}
                                    </div>

                                    {submitStatus === "success" && (
                                        <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg">
                                            Thank you for your message! We'll get back to you within 24 hours.
                                        </div>
                                    )}

                                    {submitStatus === "error" && (
                                        <div className="bg-red-50 border border-red-200 text-red-800 px-6 py-4 rounded-lg">
                                            Something went wrong. Please try again or contact us directly.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-primary w-full inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-target"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            </motion.div>
                        </div>

                        {/* Contact Info */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold text-navy-primary mb-6">
                                    Contact Information
                                </h2>

                                {contactInfo.map((info, index) => {
                                    const Icon = info.icon;
                                    const content = info.href ? (
                                        <a
                                            href={info.href}
                                            className="text-gray-700 hover:text-gold-primary transition-colors cursor-target"
                                        >
                                            {info.content}
                                        </a>
                                    ) : (
                                        <p className="text-gray-700">{info.content}</p>
                                    );

                                    return (
                                        <div
                                            key={index}
                                            className="flex gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                        >
                                            <div className="w-12 h-12 bg-gold-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-gold-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-navy-primary mb-1">
                                                    {info.title}
                                                </h3>
                                                {content}
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* WhatsApp CTA */}
                                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mt-8">
                                    <h3 className="font-bold text-navy-primary mb-3 text-xl">
                                        Prefer WhatsApp?
                                    </h3>
                                    <p className="text-gray-700 mb-4">
                                        Get in touch instantly via WhatsApp for quick responses.
                                    </p>
                                    <a
                                        href="https://wa.me/971501361811"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-primary w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 cursor-target"
                                    >
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.802613689405!2d55.35032955!3d25.1873832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f670f5e718b9d%3A0x66978433362145e5!2sRas%20Al%20Khor%20Industrial%20Area%20-%20Dubai!5e0!3m2!1sen!2sae!4v1706015500000!5m2!1sen!2sae"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="NAM UAE Location"
                />
            </section>
        </>
    );
}
