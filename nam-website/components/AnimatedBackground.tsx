"use client";

import { ReactNode } from "react";

interface AnimatedBackgroundProps {
    children: ReactNode;
    className?: string;
    variant?: "gradient" | "mesh";
}

export default function AnimatedBackground({
    children,
    className = "",
    variant = "gradient",
}: AnimatedBackgroundProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {variant === "gradient" && (
                    <div className="absolute inset-0 animated-gradient-bg opacity-90" />
                )}

                {variant === "mesh" && (
                    <>
                        <div className="absolute inset-0 bg-navy-primary" />
                        <div className="absolute inset-0">
                            {/* Gradient orbs */}
                            <div className="absolute top-0 left-0 w-96 h-96 bg-gold-primary/20 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-light/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-light/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
                        </div>
                    </>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-primary/50 to-navy-primary" />
            </div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
