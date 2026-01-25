"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShieldCheck, HardHat, Eye, Footprints } from "lucide-react";

export default function SafetyEquipmentsPage() {
    const features = [
        {
            title: "Compliance Certified",
            description: "All products meet international safety standards (ANSI, EN, OSHA) and local UAE regulations.",
        },
        {
            title: "Premium Quality",
            description: "Durable materials designed to withstand harsh industrial environments and construction sites.",
        },
        {
            title: "Custom Branding",
            description: "Option to print or embroider your company logo on helmets, vests, and coveralls.",
        },
        {
            title: "Bulk Supply",
            description: "Capacity to outfit entire workforces with consistent, high-quality safety gear.",
        },
    ];

    const categories = [
        { name: "Safety Helmets", icon: "/images/icons/Safety Helmets.png" },
        { name: "Safety Vests", icon: "/images/icons/Safety Jackets.png" }, // Mapped to Safety Jackets
        { name: "Safety Shoes", icon: "/images/icons/Safety Shoes.png" },
        { name: "Protective Eyewear", icon: "/images/icons/Protective Eyewear.png" },
        { name: "Hand Protection", icon: "/images/icons/Hand protection.png" },
        { name: "Coveralls", icon: "/images/icons/Coveralls.png" },
        { name: "Hearing Protection", icon: "/images/icons/Ear protection wear.png" },
        { name: "Respiratory Gear", icon: "/images/icons/Respiratory Gear.png" },
    ];

    const process = [
        { step: "1", title: "Assessment", description: "Analyze your workplace hazards and safety requirements" },
        { step: "2", title: "Selection", description: "Choose appropriate PPE based on compliance needs" },
        { step: "3", title: "Branding", description: "Add your company logo for professional team appearance" },
        { step: "4", title: "Distribution", description: "Timely delivery and distribution to your workforce" },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/safety-equipments.png"
                        alt="Industrial Safety Equipments"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                    <div className="gradient-overlay" />
                </div>

                <div className="container-custom relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="w-10 h-10 text-gold-primary" />
                            <p className="font-accent text-gold-primary text-2xl">Safety Solutions</p>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                            Protect Your Workforce With Premium Gear
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            Top-tier Personal Protective Equipment (PPE) ensuring safety, compliance, and comfort for industrial and construction professionals.
                        </p>
                        <Link href="/contact" className="btn-primary inline-flex items-center gap-2 cursor-target">
                            Request a Quote
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8 text-gold-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-navy-primary mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-700">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Categories */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Our Safety Range</h2>
                        <p className="section-subtitle">
                            Comprehensive protection from head to toe for every industrial application
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {categories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-lg p-6 text-center shadow-card hover:shadow-card-hover transition-all"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center relative">
                                    <Image
                                        src={category.icon}
                                        alt={category.name}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-semibold text-navy-primary">{category.name}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Info / Catalog Section */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/safety-equipments-detail.png"
                                    alt="Worker wearing safety equipment"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title mb-6">Your Partner in Workplace Safety</h2>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                At NAM, we understand that safety is non-negotiable. Our range of safety equipment incorporates the latest technologies in materials and design to ensure maximum protection without compromising on comfort or productivity.
                            </p>
                            <p className="text-gray-700 mb-8 leading-relaxed">
                                Whether you manage a construction site, a manufacturing plant, or an oil & gas facility, we can supply the certified gear your team needs to stay safe and compliant.
                            </p>

                            <a
                                href="/documents/Nam catalog ind v8 _compressed (1)_compressed_compressed (1).pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-navy-primary border-navy-primary hover:bg-navy-primary hover:text-white inline-flex items-center gap-2"
                            >
                                <ArrowRight className="w-5 h-5" />
                                View Full Safety Catalog
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Safety Implementation</h2>
                        <p className="section-subtitle">
                            Ensuring your workforce is properly equipped and protected
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
                        <ShieldCheck className="w-16 h-16 text-gold-primary mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Safety First, Always
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Equip your team with the best. Contact us today for a consultation on your safety equipment needs.
                        </p>
                        <Link href="/contact" className="btn-accent cursor-target inline-flex items-center gap-2 cursor-target">
                            Get a Quote
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
