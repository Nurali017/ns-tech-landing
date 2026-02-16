"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function About() {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-white">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-primary">
                        {t.about.title}
                    </h2>
                    <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                        {t.about.description}
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
