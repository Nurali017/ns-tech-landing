"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export function MiniFootball() {
    const { t } = useLanguage();

    return (
        <Section className="bg-gray-50 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mb-6">
                            <span className="text-sm font-bold uppercase tracking-wider">Product</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                            {t.minifootball.title}
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {t.minifootball.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {t.minifootball.features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3 h-3 text-green-600" />
                                    </div>
                                    <span className="text-gray-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Smartphone className="w-5 h-5 text-primary" />
                                {t.minifootball.apps[0]} & Ecosystem
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {t.minifootball.apps.map((app, index) => (
                                    <span key={index} className="px-3 py-1 bg-gray-100 rounded-lg text-sm text-gray-600">
                                        {app}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6">
                            <a href={t.minifootball.downloadLink} target="_blank" rel="noopener noreferrer">
                                <Button size="lg" className="bg-primary text-white hover:bg-primary-hover rounded-full">
                                    <Smartphone className="w-5 h-5 mr-2" />
                                    {t.hero.ctaPrimary}
                                </Button>
                            </a>
                        </div>
                    </motion.div>

                    {/* Visuals - Two Phone Mockups */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative z-20 w-[280px] h-[560px] bg-black rounded-[44px] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
                            <img
                                src={t.minifootball.screenshots.matchDetail.src}
                                alt={t.minifootball.screenshots.matchDetail.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-8 -right-8 md:-right-16 w-[260px] h-[520px] bg-black rounded-[40px] border-[6px] border-gray-800 shadow-xl overflow-hidden z-10 rotate-6 opacity-90 hidden md:block">
                            <img
                                src={t.minifootball.screenshots.matchFeed.src}
                                alt={t.minifootball.screenshots.matchFeed.alt}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
}
