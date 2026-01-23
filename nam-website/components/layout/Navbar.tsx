"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import GooeyNav from "@/components/GooeyNav";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        {
            label: "Services",
            dropdown: [
                { href: "/services/corporate-gifts", label: "Corporate Gifts" },
                { href: "/services/digital-printing", label: "Digital Printing" },
                { href: "/services/custom-uniforms", label: "Custom Uniforms" },
            ],
        },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled || isMobileMenuOpen
                    ? "bg-white shadow-md py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center cursor-target">
                        <div className={cn("relative h-20 w-auto")}>
                            <Image
                                src="/images/nam-logo.png"
                                alt="NAM UAE Logo"
                                width={160}
                                height={80}
                                className={cn(
                                    "h-full w-auto object-contain transition-all duration-300"
                                )}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-2">
                        <GooeyNav items={navLinks} isScrolled={isScrolled} />
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="/contact" className="btn-primary cursor-target">
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "lg:hidden p-2",
                            isScrolled || isMobileMenuOpen ? "text-navy-primary" : "text-white"
                        )}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4 pt-4">
                            {navLinks.map((link, index) => (
                                <div key={index}>
                                    {link.dropdown ? (
                                        <div className="space-y-2">
                                            <div className="font-medium text-navy-primary">{link.label}</div>
                                            {link.dropdown.map((item, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={item.href}
                                                    className="block pl-4 text-gray-700 hover:text-gold-primary transition-colors"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="block text-navy-primary hover:text-gold-primary transition-colors font-medium"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/contact"
                                className="btn-primary text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
