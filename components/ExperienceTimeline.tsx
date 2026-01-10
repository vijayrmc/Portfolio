"use client";

import { motion, useScroll, useTransform, MotionValue, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

const EXPERIENCE_DATA = [
    {
        period: "Mar 2025 — Present",
        company: "AMZBrandStudio / WorkinX Digital",
        role: "Product Manager",
        title: "AI Operating System for Amazon Creative Agencies",
        why: "Creative agencies were slowed down by fragmented tools, manual audits, and broken feedback loops. Founders were stuck coordinating instead of scaling.",
        what: "An AI-driven operating system that unified project intake, listing audits, copy generation, visual reviews, and revision workflows.",
        how: "Designed core product workflows and shipped AI-powered audits, visual annotation tools, and assisted copy pipelines, guided by 50+ user interviews and live usage data.",
        impact: [
            "~30% faster project starts",
            "~75% reduction in audit time (≈3 hours → ≈45 minutes)",
            "~40% fewer revision cycles",
            "~8 hours/week saved for founders by automating coordination work"
        ]
    },
    {
        period: "Aug 2024 — Dec 2024",
        company: "Bitech Exchange",
        role: "Associate Product Manager",
        title: "0→1 Real-Money Crypto & Gift Card Platform",
        why: "Early users did not trust real-money transactions. Any confusion meant drop-offs. Any bug meant loss of credibility.",
        what: "A complete 0→1 transaction experience built from scratch to public launch.",
        how: "Defined the initial product scope and built transaction flows, verification, payout communication, and launch readiness end-to-end under real financial risk.",
        impact: [
            "Shipped from scratch to launch",
            "5,000+ live real-money transactions",
            "Zero critical launch failures",
            "~18% reduction in time-to-first-transaction",
            "~25% increase in first-session success"
        ]
    }
];

const INDEPENDENT_BUILD = {
    name: "Mailgen Pro",
    role: "Solo Builder",
    title: "Micro-SaaS for AI-Driven Outreach",
    why: "Cold outreach for e-commerce sellers was slow, repetitive, and poorly contextualized.",
    what: "A micro-SaaS that turns a product URL into a complete outbound email sequence.",
    how: "Built structured extraction logic, prompt pipelines, and the full product flow end-to-end as a solo builder, iterating directly from user feedback.",
    impact: [
        "Generates full outreach sequences in under 30 seconds",
        "~20% increase in lead generation for early users",
        "~25% improvement in clarity and repeat usage after iteration"
    ]
};

const PART_TIME_PROJECT = {
    name: "AssetOS (Part-time)",
    role: "Contributor",
    title: "Real Estate Intelligence Platform",
    why: "Property analysis for investors was slow, manual, and inconsistent.",
    what: "An AI-driven real-estate intelligence workflow.",
    how: "Contributed to AI-based data extraction and automated insight workflows alongside the core team.",
    impact: [
        "~20–30% reduction in manual analysis effort",
        "Faster turnaround for investment evaluation" // User didn't give a number, keeping text
    ]
};

export default function ExperienceTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto text-[#e0e0e0] relative">

            {/* Sticky Header - Moved up and simplified */}
            <div className="sticky top-12 z-30 mb-24 md:mb-0 md:absolute md:top-12 md:left-0 pointer-events-none">
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-widest border-b border-white/10 pb-4 inline-block backdrop-blur-xl bg-[#0f0f0f]/90 px-4 py-2 rounded-sm shadow-2xl">
                    Experience
                </h2>
            </div>

            {/* Connecting Line Container - Moved to 400px for more space */}
            <div className="absolute left-[400px] top-32 bottom-0 w-[1px] bg-white/5 hidden lg:block">
                <motion.div
                    style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                    className="w-full h-full bg-gradient-to-b from-white/50 via-white/20 to-transparent shadow-[0_0_10px_white]"
                />
            </div>

            <div className="space-y-48 relative z-10">
                {/* Main Experience Items */}
                {EXPERIENCE_DATA.map((item, i) => (
                    <TimelineItem key={i} data={item} />
                ))}

                {/* Transition */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ margin: "-100px", once: true }}
                    transition={{ duration: 0.8 }}
                    className="py-12 text-center md:text-left pl-0 lg:pl-[450px]"
                >
                    <p className="text-xl md:text-2xl text-gray-400 font-light italic">
                        Alongside early-stage roles, I started building products independently.
                    </p>
                </motion.div>

                {/* Independent Build */}
                <div>
                    <div className="lg:pl-[450px] mb-12">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest pl-2 border-l-2 border-white/20">
                            Independent Build
                        </h3>
                    </div>
                    <TimelineItem data={{ ...INDEPENDENT_BUILD, period: "", company: INDEPENDENT_BUILD.name }} />
                </div>


                {/* Part-time Project */}
                <div>
                    <div className="lg:pl-[450px] mb-12">
                        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest pl-2 border-l-2 border-white/20">
                            Part-Time Project
                        </h3>
                    </div>
                    <TimelineItem data={{ ...PART_TIME_PROJECT, period: "", company: PART_TIME_PROJECT.name }} />
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ data }: { data: any }) {
    const itemRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: itemRef,
        offset: ["start end", "end start"]
    });

    // "Push Right & Blur" Effect
    const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-50, 0, 0, 50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const blurObj = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [10, 0, 0, 10]);

    return (
        <motion.div
            ref={itemRef}
            style={{ x, opacity }}
            className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-24 group transition-all"
        >
            <motion.div style={{ filter: useMotionTemplate`blur(${blurObj}px)` }} className="contents">
                {/* Left: Meta - Increased padding right to avoid touching line */}
                <div className="flex flex-col gap-1 relative pr-16 text-right lg:text-right items-end">
                    {/* No Dot */}

                    {data.period && <span className="text-xs text-gray-500 font-mono mb-2 display-block">{data.period}</span>}

                    {/* Role is now Primary (Larger) */}
                    {data.role && (
                        <h3 className="text-3xl font-medium text-white group-hover:text-blue-200/90 transition-colors leading-tight">
                            {data.role}
                        </h3>
                    )}

                    {/* Company is secondary */}
                    <div className="text-lg text-gray-500 font-normal mb-4">
                        {data.company}
                    </div>

                    <p className="text-gray-400 text-lg leading-snug">{data.title}</p>
                </div>

                {/* Right: Content */}
                <div className="space-y-12">
                    <GridRow label="Why" text={data.why} />
                    <GridRow label="What" text={data.what} />
                    <GridRow label="How" text={data.how} />

                    <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6">
                        <span className="text-gray-500 text-sm font-medium uppercase tracking-wide pt-1">
                            Impact
                        </span>
                        <ul className="space-y-2">
                            {data.impact.map((point: string, idx: number) => (
                                <li key={idx} className="text-gray-300 font-light text-lg">
                                    • {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

function GridRow({ label, text }: { label: string, text: string }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6 border-l border-white/5 pl-6 md:pl-0 md:border-l-0">
            <span className="text-gray-500 text-sm font-medium uppercase tracking-wide pt-1">
                {label}
            </span>
            <p className="text-gray-300 font-light text-xl leading-relaxed">
                {text}
            </p>
        </div>
    );
}
