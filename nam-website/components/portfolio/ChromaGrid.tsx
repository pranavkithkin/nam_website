'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import type { Project, Industry } from '@/data/projects';

export interface ChromaGridProps {
    projects: Project[];
    className?: string;
    radius?: number;
    damping?: number;
    fadeOut?: number;
    ease?: string;
}

type SetterFn = (v: number | string) => void;

// Industry-based color mapping adapted to NAM palette
const industryColors: Record<Industry, { border: string; gradient: string }> = {
    healthcare: { border: '#C9B896', gradient: 'linear-gradient(145deg, #C9B896, #1B2A4E)' },
    education: { border: '#D9C9A6', gradient: 'linear-gradient(165deg, #D9C9A6, #1B2A4E)' },
    ecommerce: { border: '#B4A07E', gradient: 'linear-gradient(180deg, #B4A07E, #1B2A4E)' },
    corporate: { border: '#C9B896', gradient: 'linear-gradient(195deg, #C9B896, #141F3A)' },
    creative: { border: '#D9C9A6', gradient: 'linear-gradient(210deg, #D9C9A6, #2A3F6F)' },
    industrial: { border: '#B4A07E', gradient: 'linear-gradient(225deg, #B4A07E, #1B2A4E)' },
    hospitality: { border: '#C9B896', gradient: 'linear-gradient(135deg, #C9B896, #1B2A4E)' },
    food: { border: '#D9C9A6', gradient: 'linear-gradient(155deg, #D9C9A6, #1B2A4E)' },
    technology: { border: '#B4A07E', gradient: 'linear-gradient(170deg, #B4A07E, #141F3A)' },
};

const ChromaGrid: React.FC<ChromaGridProps> = ({
    projects,
    className = '',
    radius = 300,
    damping = 0.45,
    fadeOut = 0.6,
    ease = 'power3.out'
}) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const fadeRef = useRef<HTMLDivElement>(null);
    const setX = useRef<SetterFn | null>(null);
    const setY = useRef<SetterFn | null>(null);
    const pos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const el = rootRef.current;
        if (!el) return;
        setX.current = gsap.quickSetter(el, '--x', 'px') as SetterFn;
        setY.current = gsap.quickSetter(el, '--y', 'px') as SetterFn;
        const { width, height } = el.getBoundingClientRect();
        pos.current = { x: width / 2, y: height / 2 };
        setX.current(pos.current.x);
        setY.current(pos.current.y);
    }, []);

    const moveTo = (x: number, y: number) => {
        gsap.to(pos.current, {
            x,
            y,
            duration: damping,
            ease,
            onUpdate: () => {
                setX.current?.(pos.current.x);
                setY.current?.(pos.current.y);
            },
            overwrite: true
        });
    };

    const handleMove = (e: React.PointerEvent) => {
        const r = rootRef.current!.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
    };

    const handleLeave = () => {
        gsap.to(fadeRef.current, {
            opacity: 1,
            duration: fadeOut,
            overwrite: true
        });
    };

    const handleCardClick = (url?: string) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    const handleCardMove: React.MouseEventHandler<HTMLElement> = e => {
        const c = e.currentTarget as HTMLElement;
        const rect = c.getBoundingClientRect();
        c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };

    return (
        <div
            ref={rootRef}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            className={`relative w-full h-full flex flex-wrap justify-center items-start gap-6 ${className}`}
            style={
                {
                    '--r': `${radius}px`,
                    '--x': '50%',
                    '--y': '50%'
                } as React.CSSProperties
            }
        >
            {projects.map((project) => {
                const colors = industryColors[project.industry];
                const imageUrl = project.heroImage || project.thumbnail;

                return (
                    <article
                        key={project.slug}
                        onMouseMove={handleCardMove}
                        onClick={() => handleCardClick(project.liveUrl)}
                        className={`group relative flex flex-col w-[340px] rounded-[20px] overflow-hidden border-2 transition-all duration-300 ${project.liveUrl ? 'cursor-pointer' : 'cursor-default'}`}
                        style={
                            {
                                '--card-border': colors.border,
                                background: colors.gradient,
                                '--spotlight-color': 'rgba(201, 184, 150, 0.15)',
                                borderColor: colors.border
                            } as React.CSSProperties
                        }
                    >
                        {/* Spotlight effect on hover */}
                        <div
                            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                            style={{
                                background:
                                    'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
                            }}
                        />

                        {/* Project Image */}
                        <div className="relative z-10 flex-1 p-[10px] box-border">
                            <div className="relative w-full aspect-[16/10] rounded-[12px] overflow-hidden bg-navy-dark">
                                {imageUrl ? (
                                    <img
                                        src={imageUrl}
                                        alt={project.name}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-gold-primary">
                                        {project.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Project Info */}
                        <footer className="relative z-10 p-4 text-white font-sans">
                            <div className="flex items-start justify-between gap-3 mb-2">
                                <h3 className="m-0 text-lg font-semibold leading-tight">{project.name}</h3>
                                {project.region && (
                                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 whitespace-nowrap">
                                        {project.region}
                                    </span>
                                )}
                            </div>
                            <p className="m-0 text-sm opacity-85 mb-3 line-clamp-2">{project.tagline}</p>
                            <div className="flex items-center justify-between">
                                <span
                                    className="text-xs px-3 py-1 rounded-full font-medium"
                                    style={{ backgroundColor: `${colors.border}30`, color: colors.border }}
                                >
                                    {project.industry.charAt(0).toUpperCase() + project.industry.slice(1)}
                                </span>
                                {project.isDemo && (
                                    <span className="text-xs opacity-60">Demo</span>
                                )}
                            </div>
                        </footer>
                    </article>
                );
            })}

            {/* Grayscale mask that follows cursor - reduced for colorful hover */}
            <div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                    backdropFilter: 'grayscale(0.6) brightness(0.85) saturate(0.7)',
                    WebkitBackdropFilter: 'grayscale(0.6) brightness(0.85) saturate(0.7)',
                    background: 'rgba(0,0,0,0.001)',
                    maskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)',
                    WebkitMaskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)'
                }}
            />

            {/* Fade overlay for when mouse leaves - reduced for colorful effect */}
            <div
                ref={fadeRef}
                className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
                style={{
                    backdropFilter: 'grayscale(0.6) brightness(0.85) saturate(0.7)',
                    WebkitBackdropFilter: 'grayscale(0.6) brightness(0.85) saturate(0.7)',
                    background: 'rgba(0,0,0,0.001)',
                    maskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
                    WebkitMaskImage:
                        'radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)',
                    opacity: 1
                }}
            />
        </div>
    );
};

export default ChromaGrid;
