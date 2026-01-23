"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

export default function AboutPage() {
    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "We strive for excellence in every project, ensuring the highest quality standards and customer satisfaction.",
        },
        {
            icon: Eye,
            title: "Innovation",
            description: "Continuously evolving our services and adopting cutting-edge solutions to meet modern business needs.",
        },
        {
            icon: Award,
            title: "Quality",
            description: "Uncompromising commitment to quality in materials, craftsmanship, and service delivery.",
        },
        {
            icon: Users,
            title: "Partnership",
            description: "Building long-term relationships with clients through trust, transparency, and exceptional service.",
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
                        <p className="font-accent text-gold-primary text-3xl mb-4">About NAM UAE</p>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white">
                            Solutions Beyond Expectations
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Since 2018, we've been helping businesses across the UAE elevate their brand presence
                            and operational efficiency through premium corporate solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="section-title text-left">Our Story</h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    <strong className="text-navy-primary">Noor Al Masafi (NAM)</strong> was established in 2018
                                    with a clear vision: to provide businesses across the UAE with comprehensive solutions that
                                    enhance their brand presence and operational excellence.
                                </p>
                                <p>
                                    Based in the heart of Dubai's business district in Ras Al Khor, we've grown from a small
                                    operation to a trusted partner for over 500 companies across 12 industries. Our success
                                    is built on a foundation of quality, reliability, and customer-centric service.
                                </p>
                                <p>
                                    Today, we specialize in three core areas: <strong className="text-navy-primary">Corporate Gifts</strong>,
                                    {" "}<strong className="text-navy-primary">Digital Printing</strong>, and{" "}
                                    <strong className="text-navy-primary">Custom Uniforms</strong>. Each service is delivered
                                    with the same commitment to excellence that has defined our journey from the beginning.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/images/hero-background.png"
                                alt="NAM UAE Office"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-10 shadow-card"
                        >
                            <div className="w-16 h-16 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <Target className="w-8 h-8 text-gold-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-navy-primary mb-4">Our Mission</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To empower businesses across the UAE with premium corporate solutions that enhance
                                their brand identity, improve operational efficiency, and create lasting impressions
                                on their stakeholders.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-10 shadow-card"
                        >
                            <div className="w-16 h-16 bg-gold-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <Eye className="w-8 h-8 text-gold-primary" />
                            </div>
                            <h3 className="text-3xl font-bold text-navy-primary mb-4">Our Vision</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To be the most trusted and innovative provider of corporate solutions in the UAE,
                                recognized for our unwavering commitment to quality, customer service, and delivering
                                solutions that truly go beyond expectations.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title">Our Core Values</h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 bg-gold-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-10 h-10 text-gold-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-primary mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="section-padding bg-navy-primary text-white">
                <div className="container-custom">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { number: "500+", label: "Happy Clients" },
                            { number: "2000+", label: "Projects Delivered" },
                            { number: "12+", label: "Industries Served" },
                            { number: "98%", label: "Client Satisfaction" },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-5xl md:text-6xl font-extrabold text-gold-primary mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-lg text-white/80">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
