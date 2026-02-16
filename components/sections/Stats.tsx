"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function Stats() {
    const { t } = useLanguage();

    const stats = [
        { value: "75,000", label: t.stats.players },
        { value: "5,000", label: t.stats.teams },
        { value: "6,000", label: t.stats.tournaments },
        { value: "4", label: t.stats.apps },
    ];

    return (
        <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-4xl md:text-6xl font-bold mb-2 text-primary">
                                {stat.value}
                            </p>
                            <p className="text-lg text-gray-400 uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
