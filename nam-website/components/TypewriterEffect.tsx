"use client";

import { useState, useEffect } from "react";

interface TypewriterEffectProps {
    text: string;
    speed?: number;
    className?: string;
    showCursor?: boolean;
    onComplete?: () => void;
}

export default function TypewriterEffect({
    text,
    speed = 50,
    className = "",
    showCursor = true,
    onComplete,
}: TypewriterEffectProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (!isComplete) {
            setIsComplete(true);
            onComplete?.();
        }
    }, [currentIndex, text, speed, isComplete, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && !isComplete && (
                <span className="inline-block w-0.5 h-[1em] bg-current ml-1 animate-pulse" />
            )}
        </span>
    );
}
