"use client";

import { motion } from "framer-motion";

export default function EntryFrame() {
    return (
        <section className="h-screen flex flex-col justify-center items-center px-6 md:px-24">
            <div className="text-center">
                <h1 className="text-6xl md:text-9xl font-semibold tracking-tighter mb-8 bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                    Vijay
                </h1>
                <div className="space-y-4">
                    <p className="text-xl md:text-3xl font-medium tracking-tight text-gray-300">
                        AI-native Product Builder (0→1)
                    </p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed"
                    >
                        AI Product Manager who’s shipped 3 products end-to-end, turning real user problems into AI/agentic workflows through sharp discovery and execution.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
