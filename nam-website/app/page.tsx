"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Gift, Printer, Shirt, Users, Award, TrendingUp, MessageSquare, Globe, ShieldCheck } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import GradientText from "@/components/GradientText";
import MagneticButton from "@/components/MagneticButton";
import Card3D from "@/components/Card3D";
import TypewriterEffect from "@/components/TypewriterEffect";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function HomePage() {
  const stats = [
    { number: 500, label: "Happy Clients", suffix: "+" },
    { number: 2000, label: "Projects Completed", suffix: "+" },
    { number: 12, label: "Industries Served", suffix: "+" },
    { number: 8, label: "Years Experience", suffix: "" },
  ];

  const services = [
    {
      icon: Printer,
      title: "Digital Printing",
      description: "High-quality printing solutions for business cards, brochures, banners, and large format displays.",
      href: "/services/digital-printing",
      image: "/images/digital-printing.webp",
    },
    {
      icon: Gift,
      title: "Corporate Gift Items",
      description: "Premium branded gifts that leave lasting impressions. From executive gifts to bulk corporate giveaways.",
      href: "/services/corporate-gifts",
      image: "/images/corporate-gifts.webp",
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional website design and development services to establish your digital presence.",
      href: "/services/website-development",
      image: "/images/website-building.webp",
    },
    {
      icon: Shirt,
      title: "Custom Uniforms",
      description: "Professional uniforms tailored to your brand. Corporate, industrial, and hospitality wear.",
      href: "/services/custom-uniforms",
      image: "/images/custom-uniforms.webp",
    },
    {
      icon: ShieldCheck,
      title: "Safety Equipments",
      description: "Comprehensive range of safety equipment and personal protective gear for workplace safety.",
      href: "/services/safety-equipments",
      image: "/images/safety-equipments-detail.png",
    },
  ];

  const testimonials = [
    {
      quote: "NAM UAE delivered exceptional quality corporate gifts for our annual conference. The attention to detail and timely delivery exceeded our expectations.",
      author: "Ahmed Al Mansoori",
      position: "CEO, Dubai Construction Corp",
    },
    {
      quote: "Their digital printing services are top-notch. We've used them for all our marketing materials and the results are consistently outstanding.",
      author: "Sarah Williams",
      position: "Marketing Director, Finance Solutions",
    },
    {
      quote: "The custom uniforms transformed our team's professional image. Quality fabrics and perfect fit every time.",
      author: "Michael Chen",
      position: "Operations Manager, Hospitality Group",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/images/hero-background.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-background.webm" type="video/webm" />
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Darker overlay for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-navy-primary/80 via-navy-primary/70 to-navy-primary/60" />
          <AnimatedBackground variant="mesh" className="absolute inset-0 opacity-40">
            <></>
          </AnimatedBackground>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="font-accent text-white text-3xl md:text-4xl mb-6 drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Solutions Beyond Expectations
            </p>
            <h1 className="text-5xl md:text-7xl text-white font-extrabold mb-8 leading-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.7)' }}>
              Elevating Your Business with{" "}
              <GradientText className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">
                Premium Solutions
              </GradientText>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 leading-relaxed max-w-3xl drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Premier provider of corporate gifts, digital printing, and custom uniforms in Dubai.
              Serving businesses across the UAE since 2018.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <MagneticButton className="btn-primary inline-flex items-center justify-center gap-2 cursor-target">
                <Link href="/contact" className="flex items-center gap-2 cursor-target">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>
              <Link href="/services/corporate-gifts" className="btn-secondary inline-flex items-center justify-center gap-2 bg-white/10 border-white text-white hover:bg-white hover:text-navy-primary glow-on-hover cursor-target">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}

      </section>

      {/* Statistics Section */}
      <section className="bg-navy-primary section-padding border-t border-white/10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-white">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-extrabold mb-2">
                  <GradientText className="text-5xl md:text-6xl font-extrabold">
                    <AnimatedCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </GradientText>
                </div>
                <div className="text-lg md:text-xl text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-navy-primary border-t border-white/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">Our Premium Services</h2>
            <p className="section-subtitle text-gray-300">
              Comprehensive business solutions tailored to elevate your brand and operational efficiency
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <Card3D className="h-full" glowEffect={true}>
                    <Link href={service.href} className="block group h-full cursor-target">
                      <div className="card-base h-full">
                        <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className="w-16 h-16 bg-gold-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-8 h-8 text-gold-primary" />
                          </motion.div>
                          <h3 className="text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center text-white font-semibold group-hover:text-gold-primary transition-colors">
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </Card3D>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-navy-primary border-t border-white/10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-title text-white">What Our Clients Say</h2>
            <p className="section-subtitle text-gray-300">
              Trusted by leading businesses across the UAE
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-card-hover transition-all duration-400 glow-on-hover"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                >
                  <MessageSquare className="w-12 h-12 text-gold-primary mb-6" />
                </motion.div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-navy-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-primary to-transparent" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80 mb-10 leading-relaxed">
              Let's discuss how we can help elevate your brand with our premium solutions.
              Get in touch today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-navy-primary px-10 py-5 rounded-lg font-semibold text-lg hover:bg-gold-primary hover:text-navy-primary transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-target">
                Contact Us Now
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="border-2 border-white text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-white hover:text-navy-primary transition-all duration-300 inline-flex items-center justify-center cursor-target">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/971501361811"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 group cursor-target"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse" />
      </a>
    </>
  );
}
