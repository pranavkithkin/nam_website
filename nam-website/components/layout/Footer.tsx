import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Download, FileText } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-primary text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <div className="relative h-16 w-auto mb-6 mix-blend-screen">
                            <Image
                                src="/images/nam-logo.png"
                                alt="NAM UAE Logo"
                                width={160}
                                height={80}
                                className="h-full w-auto object-contain invert grayscale brightness-200 contrast-200"
                            />
                        </div>
                        <p className="font-accent text-gold-primary text-xl mb-4">
                            Solutions Beyond Expectations
                        </p>
                        <p className="text-white/80 text-base leading-relaxed">
                            Premier provider of corporate gifts, digital printing, and custom uniforms in Dubai, UAE.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-heading font-semibold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/digital-printing" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Digital Printing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/corporate-gifts" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Corporate Gift Items
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/website-development" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Website Development
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/custom-uniforms" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Custom Uniforms
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/safety-equipments" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Safety Equipments
                                </Link>
                            </li>
                            <li>
                                <Link href="/portfolio" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Portfolio
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-xl font-heading font-semibold mb-6 text-white">Resources</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/documents/profiles/NAM-Corporate-Profile.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-gold-primary transition-colors cursor-target flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Corporate Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/documents/catalogs/NAM-Product-Catalog.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-gold-primary transition-colors cursor-target flex items-center gap-2"
                                >
                                    <Download className="w-4 h-4" />
                                    Product Catalog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/documents/profiles/NAM-Promotional-Gifts-Profile.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-gold-primary transition-colors cursor-target flex items-center gap-2"
                                >
                                    <FileText className="w-4 h-4" />
                                    Gifts Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/documents/brochures/NAM-Printing-Services.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-gold-primary transition-colors cursor-target flex items-center gap-2"
                                >
                                    <FileText className="w-4 h-4" />
                                    Printing Brochure
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/documents/brochures/NAM-Uniform-Printing.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white/80 hover:text-gold-primary transition-colors cursor-target flex items-center gap-2"
                                >
                                    <FileText className="w-4 h-4" />
                                    Uniform Brochure
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-heading font-semibold mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-gold-primary flex-shrink-0 mt-1" />
                                <span className="text-white/80 text-base">
                                    Ras Al Khor, Dubai, United Arab Emirates
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-gold-primary flex-shrink-0" />
                                <a href="tel:+971501361811" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    +971 50 136 1811
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-gold-primary flex-shrink-0" />
                                <a href="mailto:info@namuae.com" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    info@namuae.com
                                </a>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 hover:bg-gold-primary rounded-full flex items-center justify-center transition-colors cursor-target"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 hover:bg-gold-primary rounded-full flex items-center justify-center transition-colors cursor-target"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 hover:bg-gold-primary rounded-full flex items-center justify-center transition-colors cursor-target"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white/10 hover:bg-gold-primary rounded-full flex items-center justify-center transition-colors cursor-target"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-white/60 text-sm">
                            © {currentYear} Noor Al Masafi (NAM). All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-white/60 hover:text-gold-primary text-sm transition-colors cursor-target">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-white/60 hover:text-gold-primary text-sm transition-colors cursor-target">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
