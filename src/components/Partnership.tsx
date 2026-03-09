"use client";

import { motion } from "framer-motion";
import { Handshake, Share2, Camera, Users, GraduationCap } from "lucide-react";

const opportunities = [
    {
        icon: <Handshake className="w-8 h-8 text-bronze" />,
        title: "Zīmola vēstnieka loma",
        description: "Ilgtermiņa partnerība, apvienojot jūsu zīmolu ar Olimpisko izcilību un disciplīnu."
    },
    {
        icon: <Share2 className="w-8 h-8 text-bronze" />,
        title: "Sadarbība sociālajos tīklos",
        description: "Autentisks saturs un kampaņas Robertsa sociālo mediju platformās."
    },
    {
        icon: <Camera className="w-8 h-8 text-bronze" />,
        title: "Kampaņu vizuālie materiāli",
        description: "Profesionālas foto un video sesijas jūsu mārketinga kampaņām."
    },
    {
        icon: <Users className="w-8 h-8 text-bronze" />,
        title: "Korporatīvie pasākumi",
        description: "Dalība tīklošanās pasākumos, apbalvošanas ceremonijās un komandas saliedēšanā."
    },
    {
        icon: <GraduationCap className="w-8 h-8 text-bronze" />,
        title: "Jauniešu iniciatīvas",
        description: "Sporta izglītības un motivācijas projekti jaunajai paaudzei."
    }
];

export default function Partnership() {
    return (
        <section id="partnership" className="py-24 bg-[#050811] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-bronze/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tighter"
                    >
                        Sadarbības <span className="text-gradient-bronze">Iespējas</span>
                    </motion.h2>
                    <div className="w-24 h-1 bg-bronze mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {opportunities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-bronze/30 transition-all group"
                        >
                            <div className="mb-6 p-4 bg-white/5 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Final larger card for contact focus */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: opportunities.length * 0.1 }}
                        className="lg:col-span-1 glass p-8 rounded-2xl border border-bronze/20 bg-gradient-to-br from-bronze/10 to-transparent flex flex-col justify-center items-center text-center group"
                    >
                        <h3 className="text-xl font-bold mb-4 text-white">Vēlaties sadarboties?</h3>
                        <p className="text-slate-400 text-sm mb-6">
                            Esam atvērti jauniem projektiem un kopīgām virsotnēm.
                        </p>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-bronze text-white rounded-full font-bold hover:bg-amber-600 transition-all shadow-lg shadow-bronze/20"
                        >
                            Sazināties
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
