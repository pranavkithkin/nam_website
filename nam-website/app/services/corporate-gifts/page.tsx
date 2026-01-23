"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, Package, Sparkles, Gift, Award } from "lucide-react";

export default function CorporateGiftsPage() {
    const features = [
        {
            title: "Premium Selection",
            description: "Curated collection of high-quality corporate gifts suitable for any occasion.",
        },
        {
            title: "Custom Branding",
            description: "Professional logo printing and embossing on all gift items.",
        },
        {
            title: "Bulk Orders",
            description: "Competitive pricing for large volume orders with quick turnaround.",
        },
        {
            title: "Gift Packaging",
            description: "Elegant packaging solutions that enhance your brand presentation.",
        },
    ];

    const categories = [
        "Executive Gifts",
        "Tech Accessories",
        "Branded Stationery",
        "Premium Drinkware",
        "Leather Goods",
        "Promotional Items",
        "Gift Hampers",
        "Event Giveaways",
    ];

    const process = [
        { step: "1", title: "Consultation", description: "Discuss your requirements, budget, and timeline" },
        { step: "2", title: "Selection", description: "Choose from our catalog or custom design options" },
        { step: "3", title: "Customization", description: "Add your branding with professional design support" },
        { step: "4", title: "Delivery", description: "Receive your gifts on time, beautifully packaged" },
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/corporate-gifts.png"
                        alt="Premium Corporate Gifts"
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
                            <Gift className="w-10 h-10 text-gold-primary" />
                            <p className="font-accent text-gold-primary text-2xl">Corporate Gifts</p>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                            Premium Gifts That Leave Lasting Impressions
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed mb-8">
                            Elevate your corporate gifting with our carefully curated selection of premium
                            items, customized to reflect your brand's excellence.
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
                        <h2 className="section-title">Our Gift Categories</h2>
                        <p className="section-subtitle">
                            From executive gifts to promotional items, we have something for every occasion
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
                                <Sparkles className="w-8 h-8 text-gold-primary mx-auto mb-3" />
                                <p className="font-semibold text-navy-primary">{category}</p>
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
                            Simple, straightforward, and designed around your needs
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
                            Ready to Impress Your Clients?
                        </h2>
                        <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                            Let us help you create the perfect corporate gifts that reflect your brand's excellence.
                        </p>
                        <Link href="/contact" className="btn-accent cursor-target inline-flex items-center gap-2 cursor-target">
                            Get Started Today
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
