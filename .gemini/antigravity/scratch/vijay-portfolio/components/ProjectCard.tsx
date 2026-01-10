"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    project: {
        id: string;
        name: string;
        description?: string;
        website?: string; // Added website property
        cta?: string;     // Added cta property
        category?: string; // Added category property
    }
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const isExternal = project.website?.startsWith("http");
    const href = project.website || `/work/${project.id}`;

    return (
        <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            className="group block relative bg-[#121212] border border-white/5 rounded-lg overflow-hidden transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-white/5"
        >
            <div className="p-8 h-full flex flex-col justify-between min-h-[300px]">
                {/* Top: Header */}
                <div className="flex justify-between items-start">
                    <div className="space-y-2">
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-1 rounded-sm">
                            {project.category || "Case Study"}
                        </span>
                        <h3 className="text-2xl font-medium text-white group-hover:text-blue-200 transition-colors">
                            {project.name}
                        </h3>
                    </div>

                    <div className="bg-white/5 p-2 rounded-full text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-all transform group-hover:-translate-y-1 group-hover:translate-x-1">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                {/* Middle: Description */}
                <div className="max-w-md">
                    <p className="text-gray-400 font-light leading-relaxed">
                        {project.description || "A deep dive into the problem, solution, and impact."}
                    </p>
                </div>

                {/* Bottom: Link */}
                <div className="pt-8 flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-white transition-colors uppercase tracking-widest">
                    {project.cta || "View Case Study"}
                    <span className="block h-[1px] w-8 bg-gray-700 group-hover:w-16 group-hover:bg-white transition-all duration-300" />
                </div>
            </div>

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </Link>
    );
}
