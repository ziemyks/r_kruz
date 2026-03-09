export default function Footer() {
    return (
        <footer className="py-12 bg-[#050811] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <div className="text-2xl font-bold mb-2">
                            Roberts <span className="text-bronze">Krūzbergs</span>
                        </div>
                        <p className="text-slate-500 text-sm italic">
                            "Ceļš uz sudrabu un zeltu vienmēr sākas ar bronzas domāšanas veidu."
                        </p>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-slate-400">
                        <a href="#achievement" className="hover:text-bronze transition-colors">Sasniegumi</a>
                        <a href="#contact" className="hover:text-bronze transition-colors">Runas</a>
                        <a href="#contact" className="hover:text-bronze transition-colors">Kontakti</a>
                    </div>

                    <div className="text-slate-600 text-xs">
                        © {new Date().getFullYear()} Roberts Krūzbergs. Radīts izcilībai.
                    </div>
                </div>
            </div>
        </footer>
    );
}
