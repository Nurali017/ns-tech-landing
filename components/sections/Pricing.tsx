"use client";

import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { motion } from "framer-motion";

const plans = [
    {
        duration: "1 Месяц",
        price: "19 990 ₸",
        features: [
            "Доступ во все залы",
            "Заморозка на 7 дней",
            "Безлимитные посещения"
        ],
        popular: false
    },
    {
        duration: "3 Месяца",
        price: "54 990 ₸",
        features: [
            "Доступ во все залы",
            "Заморозка на 30 дней",
            "Безлимитные посещения",
            "Выгода 10%"
        ],
        popular: true
    },
    {
        duration: "1 Год",
        price: "159 990 ₸",
        oldPrice: "239 880 ₸",
        features: [
            "Доступ во все залы",
            "Заморозка на 90 дней",
            "Безлимитные посещения",
            "Максимальная выгода",
            "Рассрочка 0-0-12"
        ],
        popular: false
    }
];

export function Pricing() {
    return (
        <Section className="bg-gray-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Выберите свой абонемент
                </h2>
                <p className="text-lg text-gray-600">
                    Честные цены без скрытых доплат. Платите за результат, а не за стены.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex"
                    >
                        <Card className={`relative w-full flex flex-col ${plan.popular ? 'border-primary shadow-xl scale-105 z-10' : 'border-gray-200'}`}>
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                    ХИТ ПРОДАЖ
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                    {plan.oldPrice && (
                                        <span className="text-lg text-gray-400 line-through">{plan.oldPrice}</span>
                                    )}
                                </div>
                            </div>

                            <ul className="mb-8 space-y-4 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-green-600" />
                                        </div>
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary-hover' : 'bg-gray-900 hover:bg-gray-800'}`}
                                size="lg"
                            >
                                Выбрать
                            </Button>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
