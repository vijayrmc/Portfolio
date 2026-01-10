"use client";

import Header from "@/components/Header";
import { BentoGrid, BentoItem } from "@/components/bento/Bento";
import { BENTO_PRODUCTS, BENTO_PROTOTYPES, BENTO_ARTIFACTS } from "@/lib/bento-data";

export default function WorkPage() {
    return (
        <main className="bg-[#0f0f0f] min-h-screen text-[#e0e0e0]">
            <Header />

            <section className="pt-48 px-6 md:px-12 max-w-7xl mx-auto pb-48 space-y-32">

                {/* SECTION 1: PRODUCTS (Big 3) */}
                <div>
                    <h2 className="text-2xl font-medium text-white mb-8 border-b border-white/10 pb-4">Products & Systems</h2>
                    <BentoGrid className="auto-rows-[400px]">
                        {BENTO_PRODUCTS.map((item, index) => (
                            <BentoItem key={index} {...item} />
                        ))}
                    </BentoGrid>
                </div>

                {/* SECTION 2: PROTOTYPES (Apps) */}
                <div>
                    <h2 className="text-2xl font-medium text-white mb-8 border-b border-white/10 pb-4">Prototypes & Concepts</h2>
                    <BentoGrid className="auto-rows-[250px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                        {BENTO_PROTOTYPES.map((item, index) => (
                            <BentoItem key={index} {...item} colSpan={1} />
                        ))}
                    </BentoGrid>
                </div>

                {/* SECTION 3: ARTIFACTS (Docs & Strategy) */}
                <div>
                    <div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
                        <h2 className="text-2xl font-medium text-white">Strategy, Artifacts & Docs</h2>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-widest hidden md:block">Reference Library</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {BENTO_ARTIFACTS.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                className="group relative flex items-center gap-4 p-4 bg-[#111] border border-white/5 rounded-xl hover:bg-[#161616] hover:border-white/10 transition-all duration-300 overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 md:duration-700" />

                                {/* Icon Box */}
                                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1a1a1a] flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-[#222] transition-colors">
                                    {item.icon ? <item.icon size={18} strokeWidth={1.5} /> : (item.image && <div className="w-full h-full bg-cover bg-center rounded-md opacity-70 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: `url(${item.image})` }} />)}
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col min-w-0">
                                    <span className="text-sm font-medium text-gray-300 group-hover:text-white truncate transition-colors">
                                        {item.title}
                                    </span>
                                    {item.tags && item.tags.length > 0 && (
                                        <span className="text-[10px] text-gray-600 group-hover:text-gray-500 uppercase tracking-wider font-mono truncate">
                                            {item.tags[0]}
                                        </span>
                                    )}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </section>
        </main>
    );
}
