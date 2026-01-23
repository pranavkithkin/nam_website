"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}

export default function MagneticButton({
    children,
    className = "",
    strength = 0.3,
    onClick,
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const deltaX = (e.clientX - centerX) * strength;
            const deltaY = (e.clientY - centerY) * strength;

            x.set(deltaX);
            y.set(deltaY);
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        const button = ref.current;
        if (button) {
            button.addEventListener("mousemove", handleMouseMove);
            button.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                button.removeEventListener("mousemove", handleMouseMove);
                button.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, [x, y, strength]);

    return (
        <motion.button
            ref={ref}
            style={{ x: springX, y: springY }}
            className={`shimmer-button ${className}`}
            onClick={onClick}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
}
