"use client";

import { motion } from "framer-motion";
import { Timer, Zap, Target } from "lucide-react";

const stats = [
    { icon: <Timer className="w-5 h-5" />, label: "Ātrums", value: "Šorttreka jauda" },
    { icon: <Zap className="w-5 h-5" />, label: "Fokuss", value: "Olimpiskā intensitāte" },
    { icon: <Target className="w-5 h-5" />, label: "Stratēģija", value: "1500m precizitāte" },
];

export default function About() {
    return (
        <section id="achievement" className="py-24 bg-[#050811] relative border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-gradient-to-br from-midnight to-bronze/20 rounded-2xl overflow-hidden glass relative group">
                            {/* Image Placeholder */}
                            <div className="absolute inset-0 flex items-center justify-center text-white/5 font-bold text-9xl select-none rotate-12">
                                1500M
                            </div>
                            {/* We'll use next/image here when assets are ready */}
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
                        </div>

                        {/* Achievement Badge */}
                        <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-bronze/30 shadow-2xl">
                            <div className="text-bronze text-3xl font-bold mb-1">BRONZA</div>
                            <div className="text-white/60 text-xs uppercase tracking-widest">PEKINA 2022</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Ceļš uz <br />
                            <span className="text-gradient-bronze underline decoration-bronze/20 underline-offset-8">Olimpisko izcilību</span>
                        </h2>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Medaļas izcīnīšana olimpiskajās spēlēs 1500 m šorttrekā nav tikai stāsts par ātrumu – tas ir stāsts par izturību, stratēģisko tālredzību un nerimstošu tiekšanos pēc sekundes simtdaļu uzlabojumiem gadu garumā.
                            Roberts Krūzbergs dalās pieredzē par to, kas nepieciešams, lai sasniegtu virsotnes, kad uz tevi skatās visa pasaule.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="p-4 rounded-xl glass border-white/5 hover:border-bronze/20 transition-colors">
                                    <div className="text-bronze mb-2">{stat.icon}</div>
                                    <div className="text-white font-semibold text-sm">{stat.value}</div>
                                    <div className="text-white/40 text-xs uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-bronze mt-2.5" />
                                <p className="text-slate-300 font-medium">Augsta spiediena vides pārvarēšana</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-bronze mt-2.5" />
                                <p className="text-slate-300 font-medium">Stratēģiskā plānošana maksimālam sniegumam</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-1.5 h-1.5 rounded-full bg-bronze mt-2.5" />
                                <p className="text-slate-300 font-medium">Garīgā noturība pret grūtībām</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
