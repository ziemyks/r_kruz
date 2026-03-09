"use client";

import { motion } from "framer-motion";
import { Award, ChevronRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-midnight">
            {/* Background Kinetic Lines */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="speed-line top-1/4" />
                <div className="speed-line top-1/2" style={{ animationDelay: '1s' }} />
                <div className="speed-line top-3/4" style={{ animationDelay: '2s' }} />
            </div>

            {/* Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-bronze/10 rounded-full blur-[120px] z-0" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-bronze/20"
                >
                    <Award className="w-4 h-4 text-bronze" />
                    <span className="text-sm font-medium tracking-wider uppercase text-bronze-light">Milano-Kortina 2026 Bronzas Medaļnieks</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold mb-6 tracking-tight text-white leading-[1.1]"
                >
                    Roberts <br />
                    <span className="text-gradient-bronze">Krūzbergs</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
                >
                    Pirmais Latvijas sportists vēsturē, kurš izcīnījis Olimpisko medaļu šorttrekā. <br className="hidden md:block" />
                    Stāsts par izturību, disciplīnu un augstākā līmeņa sniegumu.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#contact"
                        className="group px-8 py-4 bg-bronze hover:bg-bronze-dark text-white rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-bronze/20"
                    >
                        Pieteikt motivācijas runu
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="#achievement"
                        className="px-8 py-4 glass hover:bg-white/10 text-white rounded-full font-semibold transition-all"
                    >
                        Vēsturiskie Sasniegumi
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
            >
                <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
