"use client";

import { motion } from "framer-motion";
import { Send, Calendar, User, Mail, Building2, MessageSquare, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { sendSpeechRequest } from "@/app/actions/send-email";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("sending");

        const formData = new FormData(e.currentTarget);
        const result = await sendSpeechRequest(formData);

        if (result.success) {
            setStatus("success");
        } else {
            setStatus("error");
            setErrorMessage(result.error || "Something went wrong.");
        }
    }

    if (status === "success") {
        return (
            <section id="contact" className="py-24 bg-midnight flex items-center justify-center min-h-[600px]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center glass p-12 rounded-3xl border-bronze/20 max-w-lg"
                >
                    <CheckCircle2 className="w-16 h-16 text-bronze mx-auto mb-6" />
                    <h2 className="text-3xl font-bold mb-4">Pieprasījums nosūtīts!</h2>
                    <p className="text-slate-400 mb-8 italic">"Pirmais solis līdz medaļai ir rīcība."</p>
                    <p className="text-slate-300">Roberts izskatīs jūsu pieprasījumu un sazināsies ar jums tuvākajā laikā.</p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="mt-8 text-bronze hover:text-bronze-light font-medium transition-colors"
                    >
                        Nosūtīt vēl vienu pieprasījumu
                    </button>
                </motion.div>
            </section>
        );
    }

    return (
        <section id="contact" className="py-24 bg-midnight relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bronze/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Pieteikt <span className="text-bronze">motivācijas runu</span></h2>
                        <p className="text-slate-400 text-lg">Sadarbojieties ar olimpieti, lai iedvesmotu savu komandu un tiektos uz izcilību.</p>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-12 rounded-3xl border-bronze/10 shadow-2xl space-y-8"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                        <Building2 className="w-4 h-4 text-bronze" /> Uzņēmuma nosaukums
                                    </label>
                                    <input
                                        name="company"
                                        type="text"
                                        required
                                        placeholder="Ievadiet uzņēmuma nosaukumu"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bronze transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                        <User className="w-4 h-4 text-bronze" /> Kontaktpersona
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Vārds, uzvārds"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bronze transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                        <Mail className="w-4 h-4 text-bronze" /> E-pasts
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="epasts@uznemums.lv"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bronze transition-colors"
                                    />
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                        <Calendar className="w-4 h-4 text-bronze" /> Vēlamais datums(-i)
                                    </label>
                                    <input
                                        name="dates"
                                        type="text"
                                        required
                                        placeholder="piem. 2026. gada 15.-20. oktobris"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bronze transition-colors"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-400 flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4 text-bronze" /> Papildu informācija
                                    </label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        placeholder="Pastāstiet vairāk par pasākumu un jūsu mērķiem..."
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-bronze transition-colors resize-none"
                                    />
                                </div>
                            </div>
                        </div>

                        {status === "error" && (
                            <p className="text-red-400 text-sm text-center">{errorMessage}</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-4 bg-bronze hover:bg-bronze-dark text-white rounded-xl font-bold transition-all shadow-lg shadow-bronze/20 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "sending" ? "Sūta..." : "Nosūtīt pieprasījumu"}
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>

                        <p className="text-center text-xs text-slate-500">
                            Atbilde parasti tiek sniegta 24-48 darba stundu laikā.
                        </p>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
