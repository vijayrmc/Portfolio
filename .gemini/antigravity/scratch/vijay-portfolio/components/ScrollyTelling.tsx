"use client";

import { useScroll, useTransform, motion, MotionValue, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import SystemGrid from "./canvas/SystemGrid";

export default function ScrollyTelling() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Fade out grid at the very end
    const gridOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        // Faster Scrub: Reduced height to 250vh
        <section ref={containerRef} className="relative h-[250vh] bg-[#0f0f0f]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {/* Generative System Grid Background */}
                <motion.div style={{ opacity: gridOpacity }} className="absolute inset-0">
                    <SystemGrid />
                    {/* Vignette for cinematic focus */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f0f0f_80%)] pointer-events-none" />
                </motion.div>

                {/* Scroll Progress Indicator */}
                <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 h-32 w-[1px] bg-white/10 hidden md:block">
                    <motion.div
                        style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                        className="w-full h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    />
                </div>

                <div className="relative w-full max-w-5xl px-6 md:px-12 z-10">
                    {/* 
               Compressed Ranges for 2.5x distance instead of 4x.
               Beats need to overlap slightly or transition quickly.
            */}
                    <Beat
                        progress={scrollYProgress}
                        range={[0.05, 0.22]}
                        title="I work where the problem is unclear."
                        lines={["Early stage.", "No playbooks.", "Real constraints."]}
                        align="center"
                    />

                    <Beat
                        progress={scrollYProgress}
                        range={[0.28, 0.45]}
                        title="I reduce ambiguity by building systems."
                        lines={["Define the problem.", "Ship fast.", "Learn from usage."]}
                        align="left"
                    />

                    <Beat
                        progress={scrollYProgress}
                        range={[0.55, 0.72]}
                        title="The output is not decks or roadmaps."
                        lines={["It’s software that real users rely on."]}
                        align="right"
                    />

                    <Beat
                        progress={scrollYProgress}
                        range={[0.80, 0.95]}
                        title="Ownership over titles."
                        lines={["Execution over explanations."]}
                        align="center"
                        isLast={true}
                    />
                </div>
            </div>
        </section>
    );
}

interface BeatProps {
    progress: MotionValue<number>;
    range: [number, number];
    title: string;
    lines: string[];
    align?: "left" | "center" | "right";
    isLast?: boolean;
}

function Beat({ progress, range, title, lines, align = "center", isLast = false }: BeatProps) {
    // Overall container opacity
    const endRange = isLast ? range[1] : range[1] + 0.05;
    const opacityCallback = useTransform(progress, [range[0] - 0.05, range[0], endRange, endRange + 0.05], [0, 1, 1, 0]);

    // Alignment
    const alignmentClasses = {
        left: "text-left items-start",
        center: "text-center items-center mx-auto",
        right: "text-right items-end ml-auto"
    };

    return (
        <motion.div
            style={{ opacity: opacityCallback }}
            className={`absolute inset-0 flex flex-col justify-center pointer-events-none ${alignmentClasses[align]}`}
        >
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-[#e0e0e0] max-w-3xl">
                <RevealText progress={progress} range={[range[0], range[0] + 0.05]} text={title} />
            </h2>
            <div className="space-y-3">
                {lines.map((line, i) => (
                    <div key={i} className="text-xl md:text-3xl text-gray-400 font-light leading-relaxed">
                        <RevealText
                            progress={progress}
                            range={[range[0] + 0.05 + (i * 0.02), range[0] + 0.1 + (i * 0.02)]}
                            text={line}
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

// Word-by-word reveal
function RevealText({ text, progress, range }: { text: string, progress: MotionValue<number>, range: [number, number] }) {
    const words = text.split(" ");
    const step = (range[1] - range[0]) / words.length;

    return (
        <span className="inline-block">
            {words.map((word, i) => {
                const start = range[0] + (i * step);
                const end = start + step;
                // Reveal: Blur goes 10->0, Opacity 0->1, Y 10->0
                const opacity = useTransform(progress, [start, end], [0, 1]);
                const blur = useTransform(progress, [start, end], [10, 0]);
                const y = useTransform(progress, [start, end], [10, 0]);

                return (
                    <motion.span
                        key={i}
                        style={{ opacity, filter: useMotionTemplate`blur(${blur}px)`, y }}
                        className="inline-block mr-[0.25em]"
                    >
                        {word}
                    </motion.span>
                )
            })}
        </span>
    )
}
