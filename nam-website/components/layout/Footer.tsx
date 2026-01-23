import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-primary text-white">
            {/* Main Footer */}
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div>
                        <Image
                            src="/images/nam-logo.jpeg"
                            alt="NAM UAE Logo"
                            width={140}
                            height={70}
                            sizes="140px"
                            className="h-14 w-auto mb-6 brightness-0 invert"
                        />
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
                                <Link href="/services/corporate-gifts" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Corporate Gifts
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/digital-printing" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Digital Printing
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/custom-uniforms" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    Custom Uniforms
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

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-heading font-semibold mb-6 text-white">Our Services</h3>
                        <ul className="space-y-3">
                            <li className="text-white/80">Premium Corporate Gifts</li>
                            <li className="text-white/80">Business Cards & Stationery</li>
                            <li className="text-white/80">Large Format Printing</li>
                            <li className="text-white/80">Custom Uniforms Design</li>
                            <li className="text-white/80">Branded Merchandise</li>
                            <li className="text-white/80">Promotional Materials</li>
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
                                <a href="tel:+971563542146" className="text-white/80 hover:text-gold-primary transition-colors cursor-target">
                                    +971 56 354 2146
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
