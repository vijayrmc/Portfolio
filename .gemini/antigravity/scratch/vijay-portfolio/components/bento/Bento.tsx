"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface BentoGridProps {
    children: ReactNode;
    className?: string;
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] ${className}`}>
            {children}
        </div>
    );
}

interface BentoItemProps {
    title: string;
    description?: string;
    href?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
    className?: string;
    image?: string;
    icon?: any;
    tags?: string[];
    children?: ReactNode; // For custom content like images or icons
}

export function BentoItem({
    title,
    description,
    href,
    colSpan = 1,
    rowSpan = 1,
    className = "",
    image,
    icon: Icon,
    tags,
    children
}: BentoItemProps) {

    // Classes for spans
    const colClasses = {
        1: "md:col-span-1",
        2: "md:col-span-2",
        3: "md:col-span-3",
    };

    const rowClasses = {
        1: "row-span-1",
        2: "row-span-2",
    };

    const hasImage = !!image;

    const Content = (
        <motion.div
            whileHover={{ y: -5, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`
                group relative h-full w-full p-6 md:p-8
                ${hasImage ? 'bg-[#0f0f0f]' : 'bg-[#121212]'}
                border border-white/10 rounded-2xl
                overflow-hidden flex flex-col justify-between
                hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 transition-all
                ${colClasses[colSpan]} ${rowClasses[rowSpan]} ${className}
            `}
        >
            {/* Background Image (Smart Fit) */}
            {hasImage && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                    {/* 1. Blurred Background layer - Fills the card with color atmosphere */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-40 blur-xl scale-125 transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${image})` }}
                    />

                    {/* 2. Main Image - Fitted perfectly (Contain) */}
                    <div
                        className="absolute inset-4 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105 z-10"
                        style={{ backgroundImage: `url(${image})` }}
                    />

                    {/* 3. Gradient Overlay - Ensures text readability at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent z-20" />
                </div>
            )}

            {/* Hover Gradient (for non-image cards) */}
            {!hasImage && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            )}

            {/* Top Content (Tags or Icon) */}
            <div className={`relative z-10 flex-1 flex flex-col items-start justify-start ${hasImage ? 'justify-end pb-0' : ''}`}>
                {children}

                {/* Show Icon if no image, or as overlay */}
                {Icon && !hasImage && (
                    <div className="mb-4 p-3 rounded-lg bg-white/5 text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors border border-white/5">
                        <Icon size={28} strokeWidth={1.5} />
                    </div>
                )}

                {/* Tags */}
                {tags && (
                    <div className="flex flex-wrap gap-2 mb-4">
                        {tags.map(tag => (
                            <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-white/5 px-2 py-1 rounded-sm border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Content (Text) */}
            <div className="relative z-10 mt-4">
                <div className="flex items-center justify-between mb-2 gap-4">
                    <h3 className="text-xl font-medium text-white group-hover:text-blue-100 transition-colors line-clamp-2">
                        {title}
                    </h3>
                    {href && (
                        <ArrowUpRight className="text-gray-500 group-hover:text-white transition-colors flex-shrink-0" size={18} />
                    )}
                </div>
                {description && (
                    <p className="text-gray-400 font-light leading-relaxed text-sm line-clamp-2">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );

    if (href) {
        return <Link href={href} target={href.startsWith("http") ? "_blank" : undefined} className={`${colClasses[colSpan]} ${rowClasses[rowSpan]} block`}>{Content}</Link>;
    }

    return Content;
}
