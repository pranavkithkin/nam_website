"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
    const blogPosts = [
        {
            id: 1,
            title: "10 Corporate Gift Ideas That Leave Lasting Impressions",
            excerpt: "Discover the most effective corporate gift strategies to strengthen business relationships and boost brand recognition in 2024.",
            category: "Corporate Gifts",
            date: "January 15, 2024",
            readTime: "5 min read",
            slug: "corporate-gift-ideas-2024",
        },
        {
            id: 2,
            title: "The Complete Guide to Digital Printing for Business",
            excerpt: "Everything you need to know about choosing the right printing solutions for your marketing materials and brand collateral.",
            category: "Digital Printing",
            date: "January 10, 2024",
            readTime: "7 min read",
            slug: "digital-printing-guide",
        },
        {
            id: 3,
            title: "How Custom Uniforms Boost Employee Morale and Brand Identity",
            excerpt: "Learn how professional uniforms can transform your team's performance and enhance your company's professional image.",
            category: "Custom Uniforms",
            date: "January 5, 2024",
            readTime: "6 min read",
            slug: "uniforms-boost-morale",
        },
        {
            id: 4,
            title: "Sustainable Corporate Gifting: Eco-Friendly Options for 2024",
            excerpt: "Explore environmentally conscious gift options that align with modern corporate sustainability goals.",
            category: "Corporate Gifts",
            date: "December 28, 2023",
            readTime: "4 min read",
            slug: "sustainable-corporate-gifting",
        },
        {
            id: 5,
            title: "Large Format Printing: Best Practices for Maximum Impact",
            excerpt: "Expert tips for creating eye-catching billboards, banners, and displays that command attention.",
            category: "Digital Printing",
            date: "December 20, 2023",
            readTime: "8 min read",
            slug: "large-format-printing-best-practices",
        },
        {
            id: 6,
            title: "Choosing the Right Uniform Fabric for Your Industry",
            excerpt: "A comprehensive guide to selecting durable, comfortable fabrics for corporate, industrial, and hospitality uniforms.",
            category: "Custom Uniforms",
            date: "December 15, 2023",
            readTime: "5 min read",
            slug: "choosing-uniform-fabric",
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
                            Our Blog
                        </h1>
                        <p className="text-xl text-white/90 leading-relaxed">
                            Insights, tips, and industry news to help you make informed decisions for your business.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
                            >
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                                        <span className="px-3 py-1 bg-gold-primary/10 text-gold-dark font-semibold rounded-full">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-navy-primary mb-4 group-hover:text-gold-primary transition-colors">
                                        <Link href={`/blog/${post.slug}`} className="cursor-target">
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-700 leading-relaxed mb-6">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-sm text-gray-600 pt-6 border-t border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 mt-6 text-navy-primary font-semibold group-hover:text-gold-primary transition-colors cursor-target"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center bg-gray-50 rounded-2xl p-12"
                    >
                        <h2 className="text-4xl font-bold text-navy-primary mb-4">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-gray-700 mb-8">
                            Subscribe to our newsletter for the latest insights and industry tips.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input-field flex-1"
                            />
                            <button type="submit" className="btn-primary cursor-target whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
