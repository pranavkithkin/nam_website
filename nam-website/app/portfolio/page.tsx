"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function PortfolioPage() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filters = [
        { id: "all", label: "All Projects" },
        { id: "corporate-gifts", label: "Corporate Gifts" },
        { id: "digital-printing", label: "Digital Printing" },
        { id: "custom-uniforms", label: "Custom Uniforms" },
    ];

    const projects = [
        {
            id: 1,
            title: "Corporate Anniversary Gifts",
            category: "corporate-gifts",
            client: "Global Solutions Inc.",
            description: "Premium gift sets for 500+ employees featuring branded notebooks, pens, and custom gift boxes.",
            image: "/images/portfolio-1.webp",
        },
        {
            id: 2,
            title: "Large Format Billboard Campaign",
            category: "digital-printing",
            client: "Dubai Marketing Group",
            description: "Design and installation of vibrant billboards across Dubai's prime locations.",
            image: "/images/portfolio-2.webp",
        },
        {
            id: 3,
            title: "Luxury Hotel Uniform Program",
            category: "custom-uniforms",
            client: "Premier Hotels & Resorts",
            description: "Complete uniform solution for 200+ hospitality staff including reception, housekeeping, and management.",
            image: "/images/portfolio-3.webp",
        },
        {
            id: 4,
            title: "Executive Gift Collection",
            category: "corporate-gifts",
            client: "Finance Corporation",
            description: "Luxury leather goods and premium accessories for C-suite executives.",
            image: "/images/corporate-gifts.webp",
        },
        {
            id: 5,
            title: "Marketing Collateral Suite",
            category: "digital-printing",
            client: "Tech Innovations LLC",
            description: "Brochures, business cards, and promotional materials for product launch.",
            image: "/images/digital-printing.webp",
        },
        {
            id: 6,
            title: "Industrial Workwear Program",
            category: "custom-uniforms",
            client: "Construction Group",
            description: "Safety-first uniforms for 300+ construction and industrial workers.",
            image: "/images/custom-uniforms.webp",
        },
    ];

    const filteredProjects = activeFilter === "all"
        ? projects
        : projects.filter(p => p.category === activeFilter);

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
                            Our Portfolio
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Explore our recent projects and see how we've helped businesses across the UAE
                            elevate their brand presence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
                <div className="container-custom py-6">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeFilter === filter.id
                                    ? "bg-navy-primary text-white shadow-button"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-6">
                                    <div className="text-sm text-gold-primary font-semibold mb-2">
                                        {project.client}
                                    </div>
                                    <h3 className="text-xl font-bold text-navy-primary mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-xl text-gray-500">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-navy-primary text-white">
                <div className="container-custom text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Let's create something amazing together. Contact us today to discuss your requirements.
                        </p>
                        <a href="/contact" className="btn-accent cursor-target">
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
