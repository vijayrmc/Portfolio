"use client";

import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex items-center justify-between pointer-events-none">

            {/* Logo area (Left) - Pointer events auto to allow clicking */}
            <div className="pointer-events-auto">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tighter text-white z-50 hover:opacity-80 transition-opacity"
                >
                    Vijay.b
                </Link>
            </div>

            {/* Right Nav */}
            <nav className="flex items-center gap-8 pointer-events-auto">

                <Link
                    href="/work"
                    className="text-xl font-medium text-[#e0e0e0] hover:text-white transition-colors"
                >
                    Work
                </Link>

                <div className="w-[1px] h-4 bg-white/20" />

                <Link
                    href="https://www.linkedin.com/in/vijay-b-b51375323/"
                    target="_blank"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm uppercase tracking-wider"
                >
                    <Linkedin size={18} strokeWidth={1.5} />
                    <span className="hidden md:inline">LinkedIn</span>
                </Link>

                <a
                    href="mailto:b.vijay0452@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm uppercase tracking-wider"
                >
                    <Mail size={18} strokeWidth={1.5} />
                    <span className="hidden md:inline">Contact</span>
                </a>
            </nav>
        </header>
    );
}
