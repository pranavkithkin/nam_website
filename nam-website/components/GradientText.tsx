"use client";

import { ReactNode } from "react";

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    animate?: boolean;
}

export default function GradientText({
    children,
    className = "",
    animate = true,
}: GradientTextProps) {
    return (
        <span className={`${animate ? "gradient-text" : ""} ${className}`}>
            {children}
        </span>
    );
}
