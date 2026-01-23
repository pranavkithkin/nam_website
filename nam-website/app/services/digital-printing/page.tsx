"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Printer, FileText, Image as ImageIcon, Layers } from "lucide-react";

export default function DigitalPrintingPage() {
    const features = [
        {
            title: "High-Quality Output",
            description: "State-of-the-art printing technology for crisp, vibrant results.",
        },
        {
            title: "Fast Turnaround",
            description: "Quick production times without compromising on quality.",
        },
        {
            title: "Large Format",
            description: "From business cards to billboards, we handle all sizes.",
        },
        {
            title: "Custom Finishes",
            description: "Gloss, matte, embossing, and specialty finishes available.",
        },
    ];

    const services = [
        {
            icon: FileText,
            title: "Business Stationery",
            items: ["Business Cards", "Letterheads", "Envelopes", "Folders", "Notebooks"],
        },
        {
            icon: ImageIcon,
            title: "Marketing Materials",
            items: ["Brochures", "Flyers", "Catalogs", "Posters", "Banners"],
        },
        {
            icon: Layers,
            title: "Large Format Printing",
            items: ["Billboards", "Vehicle Graphics", "Wall Murals", "Exhibition Displays", "Signage"],
        },
        {
            icon: Printer,
            title: "Promotional Items",
            items: ["Stickers", "Labels", "Packaging", "POS Displays", "Window Graphics"],
        },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/digital-printing.png"
                        alt="Digital Printing Services"
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
                            <Printer className="w-10 h-10 text-gold-primary" />
                            <p className="font-accent text-gold-primary text-2xl">Digital Printing</p>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                            Professional Printing Solutions for Every Need
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            From business cards to large format displays, we deliver exceptional print quality
                            that brings your brand to life.
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

            {/* Services Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="section-title">Our Printing Services</h2>
                        <p className="section-subtitle">
                            Comprehensive printing solutions for all your business needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-gold-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-7 h-7 text-gold-primary" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-navy-primary">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {service.items.map((item, idx) => (
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

            {/* Materials & Finishes */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl font-bold text-navy-primary mb-6">
                                Premium Materials & Finishes
                            </h2>
                            <div className="space-y-6 text-gray-700 text-lg">
                                <p>
                                    We use only the highest quality materials and inks to ensure your prints
                                    look professional and last for years.
                                </p>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-navy-primary mb-2">Paper Stock</h4>
                                        <p>Premium quality papers from 80gsm to 400gsm, recycled options available</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-primary mb-2">Specialty Finishes</h4>
                                        <p>Gloss/matte lamination, spot UV, embossing, foiling, die-cutting</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy-primary mb-2">Outdoor Materials</h4>
                                        <p>Weather-resistant vinyl, mesh, canvas, and rigid substrates</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/images/digital-printing.png"
                                alt="Printing Materials"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
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
                        <Printer className="w-16 h-16 text-gold-primary mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Need Professional Printing?
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Get a custom quote for your printing project. Fast turnaround and exceptional quality guaranteed.
                        </p>
                        <Link href="/contact" className="btn-accent inline-flex items-center gap-2 cursor-target">
                            Get Your Quote
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
