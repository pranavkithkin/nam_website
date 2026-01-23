"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Card3DProps {
    children: ReactNode;
    className?: string;
    intensity?: number;
    glowEffect?: boolean;
}

export default function Card3D({
    children,
    className = "",
    intensity = 15,
    glowEffect = true,
}: Card3DProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 200 };
    const rotateX = useSpring(y, springConfig);
    const rotateY = useSpring(x, springConfig);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const percentX = (e.clientX - centerX) / (rect.width / 2);
        const percentY = (e.clientY - centerY) / (rect.height / 2);

        x.set(percentX * intensity);
        y.set(-percentY * intensity);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative ${className}`}
        >
            {/* Glow effect */}
            {glowEffect && (
                <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-gold-primary to-navy-primary rounded-lg opacity-0 blur transition-opacity duration-500 ${isHovered ? "opacity-75" : ""
                        }`}
                />
            )}

            {/* Content */}
            <div className="relative" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
}
