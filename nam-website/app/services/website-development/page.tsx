"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Code, Sparkles, Globe, Award, Zap, Monitor, Smartphone } from "lucide-react";
import { projects } from "@/data/projects";
import ChromaGrid from "@/components/portfolio/ChromaGrid";

export default function WebsiteDevelopmentPage() {
    const features = [
        {
            icon: Code,
            title: "Custom Development",
            description: "Tailored websites built with modern technologies to match your unique requirements.",
        },
        {
            icon: Smartphone,
            title: "Responsive Design",
            description: "Mobile-first approach ensuring perfect experience across all devices.",
        },
        {
            icon: Zap,
            title: "Fast Performance",
            description: "Optimized for speed with cutting-edge performance techniques.",
        },
        {
            icon: Globe,
            title: "SEO Optimized",
            description: "Built-in best practices to help your website rank higher in search results.",
        },
    ];

    const technologies = [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "Vercel",
        "AWS",
    ];

    const process = [
        { step: "1", title: "Discovery", description: "Understanding your business goals and requirements" },
        { step: "2", title: "Design", description: "Creating wireframes and visual designs for approval" },
        { step: "3", title: "Development", description: "Building your website with clean, maintainable code" },
        { step: "4", title: "Launch", description: "Deploying and optimizing your website for success" },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 min-h-[60vh] flex items-center bg-navy-primary">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                        src="/images/website-development.png"
                        alt="Website Development"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-navy-primary/80" /> {/* Overlay for text readability */}
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <Globe className="w-10 h-10 text-gold-primary" />
                            <p className="font-accent text-gold-primary text-2xl">Website Development</p>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                            Premium Websites That Drive Results
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            Transform your digital presence with professionally crafted websites designed
                            to engage your audience and grow your business in the UAE and beyond.
                        </p>
                        <Link href="/contact" className="btn-accent inline-flex items-center gap-2 cursor-target">
                            Start Your Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-8 h-8 text-gold-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-primary mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Portfolio Showcase */}
            <section className="section-padding bg-navy-primary">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our <span className="text-gold-primary">Portfolio</span>
                        </h2>
                        <p className="text-lg text-white/80 max-w-2xl mx-auto">
                            Explore our collection of websites across various industries, each crafted with
                            attention to detail and built for success.
                        </p>
                    </motion.div>

                    {/* ChromaGrid Portfolio */}
                    <div className="relative min-h-[800px]">
                        <ChromaGrid
                            projects={projects}
                            radius={350}
                            damping={0.4}
                            fadeOut={0.5}
                            ease="power3.out"
                        />
                    </div>
                </div>
            </section>

            {/* Technologies */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Technologies We Use</h2>
                        <p className="section-subtitle">
                            Building with cutting-edge tools and frameworks for optimal performance
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-4">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-lg px-6 py-3 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                            >
                                <p className="font-semibold text-navy-primary">{tech}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Our Process</h2>
                        <p className="section-subtitle">
                            A proven methodology to deliver exceptional websites on time
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative"
                            >
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gold-primary rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-navy-primary">
                                        {item.step}
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-primary mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gold-primary/30 -ml-4" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-navy-primary">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Award className="w-16 h-16 text-gold-primary mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Build Your Dream Website?
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Let's create a stunning online presence that captures your brand's essence
                            and drives real business results.
                        </p>
                        <Link href="/contact" className="btn-accent cursor-target inline-flex items-center gap-2">
                            Get Started Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
