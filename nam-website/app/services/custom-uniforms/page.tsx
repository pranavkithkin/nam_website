"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Shirt, Users, Palette, Ruler } from "lucide-react";

export default function CustomUniformsPage() {
    const features = [
        {
            title: "Professional Design",
            description: "Custom designs that reflect your brand identity and values.",
        },
        {
            title: "Quality Fabrics",
            description: "Premium, durable materials that withstand daily wear.",
        },
        {
            title: "Perfect Fit",
            description: "Precise measurements and tailoring for all body types.",
        },
        {
            title: "Bulk Production",
            description: "Scalable solutions for teams of any size.",
        },
    ];

    const uniformTypes = [
        {
            icon: Users,
            title: "Corporate Uniforms",
            description: "Professional attire for offices, banks, and corporate environments. Blazers, shirts, trousers, and accessories.",
            items: ["Executive Wear", "Business Casual", "Reception Uniforms", "Office Attire"],
        },
        {
            icon: Shirt,
            title: "Industrial Wear",
            description: "Durable workwear for construction, manufacturing, and industrial settings with safety features.",
            items: ["Coveralls", "Safety Vests", "Work Shirts", "Protective Gear"],
        },
        {
            icon: Palette,
            title: "Hospitality Uniforms",
            description: "Elegant uniforms for hotels, restaurants, and service industries that combine style and functionality.",
            items: ["Chef Uniforms", "Housekeeping", "Front Desk", "Restaurant Staff"],
        },
    ];

    const customization = [
        "Logo Embroidery",
        "Screen Printing",
        "Heat Transfer",
        "Custom Colors",
        "Name Tags",
        "Department Badges",
        "Special Finishes",
        "Reflective Elements",
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/custom-uniforms.png"
                        alt="Custom Uniforms"
                        fill
                        sizes="100vw"
                        className="object-cover"
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
                            <Shirt className="w-10 h-10 text-gold-primary" />
                            <p className="font-accent text-gold-primary text-2xl">Custom Uniforms</p>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                            Professional Uniforms Tailored to Your Brand
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            Transform your team's professional image with custom-designed uniforms that combine
                            quality, comfort, and brand identity.
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

            {/* Uniform Types */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Uniform Solutions for Every Industry</h2>
                        <p className="section-subtitle">
                            From corporate to industrial, we create uniforms that meet your specific needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {uniformTypes.map((type, index) => {
                            const Icon = type.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all"
                                >
                                    <div className="w-16 h-16 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-gold-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-primary mb-4">
                                        {type.title}
                                    </h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed">
                                        {type.description}
                                    </p>
                                    <ul className="space-y-2">
                                        {type.items.map((item, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-gray-700">
                                                <div className="w-2 h-2 bg-gold-primary rounded-full flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Customization Options */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Ruler className="w-12 h-12 text-gold-primary mb-6" />
                            <h2 className="text-4xl font-bold text-navy-primary mb-6">
                                Comprehensive Customization Options
                            </h2>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                                Make your uniforms truly yours with our extensive customization capabilities.
                                From logo placement to color matching, we ensure every detail aligns with your brand.
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {customization.map((option, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <Check className="w-5 h-5 text-gold-primary flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{option}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/images/custom-uniforms.png"
                                alt="Uniform Customization"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Fabric Quality */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h2 className="section-title">Premium Fabric Selection</h2>
                        <p className="section-subtitle mb-12">
                            We source only the finest fabrics to ensure comfort, durability, and professional appearance
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Breathable", desc: "Comfort for all-day wear" },
                                { title: "Durable", desc: "Long-lasting quality" },
                                { title: "Easy Care", desc: "Low maintenance fabrics" },
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-lg p-8 shadow-card"
                                >
                                    <h4 className="text-xl font-bold text-navy-primary mb-2">
                                        {feature.title}
                                    </h4>
                                    <p className="text-gray-700">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
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
                        <Shirt className="w-16 h-16 text-gold-primary mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Outfit Your Team?
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Contact us today to discuss your uniform requirements and receive a custom quote.
                        </p>
                        <Link href="/contact" className="btn-accent inline-flex items-center gap-2 cursor-target">
                            Get Started
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
