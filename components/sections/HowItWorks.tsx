"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Smartphone, Download, QrCode } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: Download,
        title: "Скачайте приложение",
        description: "Приложение доступно в App Store и Google Play. Зарегистрируйтесь за пару минут."
    },
    {
        icon: Smartphone,
        title: "Выберите абонемент",
        description: "Оплатите онлайн или оформите рассрочку без переплат."
    },
    {
        icon: QrCode,
        title: "Тренируйтесь",
        description: "Приходите в любой зал, сканируйте QR-код на ресепшене и занимайтесь!"
    }
];

export function HowItWorks() {
    return (
        <Section>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Content */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Как это работает?
                    </h2>
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className="flex gap-6"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Button size="lg" className="rounded-full px-8">
                            Начать тренироваться
                        </Button>
                    </div>
                </div>

                {/* Right Side: Visual */}
                <div className="relative">
                    {/* Abstract visual representation of the app flow */}
                    <div className="relative mx-auto w-[300px] h-[600px] bg-gray-900 rounded-[40px] border-8 border-gray-800 shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gray-800">
                            {/* Screen 1: Login */}
                            <motion.div
                                animate={{ opacity: [1, 0, 0], x: [0, -100, -100] }}
                                transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 1] }}
                                className="absolute inset-0 bg-white p-6 flex flex-col justify-center items-center"
                            >
                                <div className="w-16 h-16 bg-primary rounded-2xl mb-6"></div>
                                <div className="w-48 h-4 bg-gray-200 rounded mb-2"></div>
                                <div className="w-32 h-4 bg-gray-200 rounded"></div>
                            </motion.div>

                            {/* Screen 2: List */}
                            <motion.div
                                animate={{ opacity: [0, 1, 0], x: [100, 0, -100] }}
                                transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 0.8] }}
                                className="absolute inset-0 bg-gray-100 p-4"
                            >
                                <div className="w-full h-12 bg-white rounded-xl mb-4 shadow-sm"></div>
                                <div className="space-y-3">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-full h-24 bg-white rounded-xl shadow-sm"></div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Screen 3: QR */}
                            <motion.div
                                animate={{ opacity: [0, 0, 1], x: [100, 100, 0] }}
                                transition={{ duration: 4, repeat: Infinity, times: [0, 0.7, 1] }}
                                className="absolute inset-0 bg-primary flex items-center justify-center"
                            >
                                <div className="w-48 h-48 bg-white rounded-2xl p-4">
                                    <div className="w-full h-full bg-black/10 flex items-center justify-center text-xs text-center">
                                        QR CODE SCAN
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Decorative circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-gray-200 rounded-full -z-10" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-gray-200 rounded-full -z-10" />
                </div>
            </div>
        </Section>
    );
}
