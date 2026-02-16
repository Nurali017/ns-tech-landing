"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Code2, Monitor, Server, Database, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function ITServices() {
    const { t } = useLanguage();

    const servicesIcons = [Code2, Monitor, Server, Database];

    const clients = [
        { name: "FC Kaysar", url: "https://kaysar.kz" },
        { name: "KMFF", url: "https://kmff.kz" },
        { name: "KFF League", url: "https://kffleague.kz" },
        { name: "Invest Building Service", url: "#" },
        { name: "TAU GROUP", url: "#" },
    ];

    const portfolioProjects = [
        t.services.portfolio.kffleague,
        t.services.portfolio.kaysar,
        t.services.portfolio.kmff,
    ];

    return (
        <Section className="bg-white">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan-dark w-fit mb-6 border border-accent-cyan/20">
                        <span className="text-sm font-bold uppercase tracking-wider text-cyan-700">IT Services</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                        {t.services.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                        {t.services.techStack}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {t.services.list.map((service, index) => {
                        const Icon = servicesIcons[index] || Code2;
                        return (
                            <Card key={index} className="bg-gray-50 border-none hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{service}</h3>
                            </Card>
                        );
                    })}
                </div>

                {/* Portfolio Showcase */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-10">{t.services.clientsTitle}</h3>

                    {portfolioProjects.map((project, projectIndex) => (
                        <div key={projectIndex} className="mb-14 last:mb-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900">
                                        {project.name}
                                    </h4>
                                    <p className="text-gray-500">
                                        {project.description}
                                    </p>
                                </div>
                                {'screenshots' in project && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-primary hover:underline font-medium shrink-0"
                                    >
                                        {project.url.replace('https://', '')}
                                        <ArrowUpRight className="w-4 h-4" />
                                    </a>
                                )}
                            </div>
                            {'screenshots' in project && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {project.screenshots.map((screenshot, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -5 }}
                                            className="group relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm"
                                        >
                                            <div className="aspect-[16/10] bg-gray-100 overflow-hidden">
                                                <img
                                                    src={screenshot.src}
                                                    alt={screenshot.alt}
                                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="p-4 bg-white">
                                                <p className="text-sm text-gray-600">{screenshot.caption}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Client List */}
                <div className="border-t border-gray-100 pt-12">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {clients.map((client, index) => (
                            <a
                                key={index}
                                href={client.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 rounded-full border border-gray-200 hover:border-primary hover:text-primary transition-colors text-gray-600 font-medium"
                            >
                                {client.name}
                            </a>
                        ))}
                    </div>
                </div>

            </Container>
        </Section>
    );
}
