"use client";

import { useLanguage } from "@/lib/LanguageContext";

export function Header() {
    const { locale, setLocale } = useLanguage();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
                <div className="text-2xl font-bold text-white">
                    NS TECH
                </div>

                <div className="flex items-center gap-1 bg-white/10 rounded-full p-1 backdrop-blur-sm border border-white/20">
                    <button
                        onClick={() => setLocale('en')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            locale === 'en'
                                ? 'bg-white text-primary shadow-sm'
                                : 'text-white/70 hover:text-white'
                        }`}
                    >
                        EN
                    </button>
                    <button
                        onClick={() => setLocale('kz')}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                            locale === 'kz'
                                ? 'bg-white text-primary shadow-sm'
                                : 'text-white/70 hover:text-white'
                        }`}
                    >
                        KZ
                    </button>
                </div>
            </div>
        </header>
    );
}
