"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/lib/LanguageContext";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary to-[#0033CC] opacity-90" />
                <div className="absolute top-[-20%] right-[-10%] w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-accent-magenta/20 blur-3xl mix-blend-overlay" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-4 sm:gap-6 text-white max-w-2xl text-center lg:text-left items-center lg:items-start"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 w-fit backdrop-blur-sm border border-white/20">
                            <span className="text-sm font-medium">{t.hero.badge}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                            {t.hero.title}
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-lg">
                            {t.hero.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
                            <a href="https://apps.apple.com/kz/app/minifootball/id6449434914" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full text-base sm:text-lg h-12 sm:h-14 px-8 w-full sm:w-auto">
                                    App Store
                                </Button>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=kz.llf.onesportone" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-white text-primary hover:bg-gray-100 rounded-full text-base sm:text-lg h-12 sm:h-14 px-8 w-full sm:w-auto">
                                    Google Play
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Mobile Mockup - shown on small screens */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center lg:hidden"
                    >
                        <div className="w-[200px] h-[400px] sm:w-[240px] sm:h-[480px] bg-black rounded-[32px] border-[5px] border-gray-800 shadow-2xl overflow-hidden">
                            <img src={t.minifootball.screenshots.matchDetail.src} alt={t.minifootball.screenshots.matchDetail.alt} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>

                    {/* Desktop Mockups - hidden on small screens */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block h-full min-h-[600px]"
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-black rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden z-20 rotate-[-10deg]">
                                <img src={t.minifootball.screenshots.matchDetail.src} alt={t.minifootball.screenshots.matchDetail.alt} className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-[20%] -translate-y-[40%] w-[300px] h-[600px] bg-black rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden z-10 rotate-[10deg]">
                                <img src={t.minifootball.screenshots.teamProfile.src} alt={t.minifootball.screenshots.teamProfile.alt} className="w-full h-full object-cover" />
                            </div>
                        </div>

                        <div className="absolute top-[20%] right-[10%] w-24 h-24 rounded-2xl bg-accent-lime rotate-12 z-10 opacity-80 blur-sm animate-pulse" />
                        <div className="absolute bottom-[20%] left-[10%] w-32 h-32 rounded-full bg-accent-cyan -rotate-12 z-0 opacity-60 blur-md" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
