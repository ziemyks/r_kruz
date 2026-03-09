"use client";

import { motion } from "framer-motion";
import { Timer, Zap, Target } from "lucide-react";
import Image from "next/image";

const stats = [
    { icon: <Timer className="w-5 h-5" />, label: "Ātrums", value: "Šorttreka jauda" },
    { icon: <Zap className="w-5 h-5" />, label: "Fokuss", value: "Olimpiskā intensitāte" },
    { icon: <Target className="w-5 h-5" />, label: "Stratēģija", value: "Precizitāte" },
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
                        <div className="aspect-[2/3] md:aspect-[4/5] bg-gradient-to-br from-midnight to-bronze/20 rounded-2xl overflow-hidden glass relative group">
                            <Image
                                src="/assets/roberts-medal.jpg"
                                alt="Roberts Krūzbergs ar Olimpisko bronzas medaļu"
                                fill
                                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-60" />
                        </div>

                        <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-bronze/30 shadow-2xl">
                            <div className="text-bronze text-3xl font-bold mb-1">BRONZA</div>
                            <div className="text-white/60 text-xs uppercase tracking-widest text-center">MILANO-KORTINA 2026</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-white">
                            Ceļš uz <br />
                            <span className="text-gradient-bronze underline decoration-bronze/20 underline-offset-8">Vēsturisku Izcilību</span>
                        </h2>

                        <div className="bg-bronze/10 border-l-4 border-bronze p-6 rounded-r-xl mb-8">
                            <h3 className="text-bronze font-bold text-lg mb-2 uppercase tracking-tight">"Neiespējamā" Medaļa</h3>
                            <p className="text-slate-200 font-medium leading-relaxed italic">
                                Startējot ar ceļa traumu, Roberts spēja pārvarēt sāpes un konkurenci, izcīnot Latvijas vēsturē pirmo Olimpisko medaļu šorttrekā. Tas ir stāsts par neizmērojamu gribasspēku.
                            </p>
                        </div>

                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Medaļa nav tikai rezultāts – tas ir disciplīnas, izturības un stratēģiskas plānošanas kopums. Roberts Krūzbergs dalās pieredzē par to, kā saglabāt fokusu un augstāko sniegumu pat visgrūtākajos apstākļos, palīdzot komandām un vadītājiem sasniegt jaunas virsotnes.
                        </p>

                        <div className="space-y-4 mb-10">
                            <h4 className="text-white font-bold text-xl mb-4">Galvenie Sasniegumi:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="glass p-4 rounded-xl border-white/5">
                                    <div className="text-bronze font-bold">Olimpiskā Bronza</div>
                                    <div className="text-white/60 text-sm">2026, 1500m (Vēsturē pirmā)</div>
                                </div>
                                <div className="glass p-4 rounded-xl border-white/5">
                                    <div className="text-bronze font-bold">Eiropas Sudrabs</div>
                                    <div className="text-white/60 text-sm">2026, 1500m (Tilburga)</div>
                                </div>
                                <div className="glass p-4 rounded-xl border-white/5">
                                    <div className="text-bronze font-bold">5. vieta Olimpiādē</div>
                                    <div className="text-white/60 text-sm">2026, 1000m (Rekorda sniegums)</div>
                                </div>
                                <div className="glass p-4 rounded-xl border-white/5">
                                    <div className="text-bronze font-bold">2x Olimpiādes Dalībnieks</div>
                                    <div className="text-white/60 text-sm">Pekina 2022 & Milano-Kortina 2026</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <div className="px-4 py-2 rounded-full glass border-bronze/20 text-bronze-light text-sm font-medium uppercase tracking-wider">Izturība</div>
                            <div className="px-4 py-2 rounded-full glass border-bronze/20 text-bronze-light text-sm font-medium uppercase tracking-wider">Disciplīna</div>
                            <div className="px-4 py-2 rounded-full glass border-bronze/20 text-bronze-light text-sm font-medium uppercase tracking-wider">Sniegums</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
