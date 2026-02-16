"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Dumbbell, CreditCard, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: Dumbbell,
        title: "Все виды спорта",
        description: "Бассейны, тренажерные залы, йога, танцы, кроссфит и многое другое в одном абонементе.",
        color: "text-accent-magenta",
        bg: "bg-accent-magenta/10"
    },
    {
        icon: MapPin,
        title: "500+ залов",
        description: "Тренируйтесь рядом с домом или работой. Доступ ко всем партнерам сети NS TECH.",
        color: "text-accent-cyan",
        bg: "bg-accent-cyan/10"
    },
    {
        icon: CreditCard,
        title: "Честная рассрочка",
        description: "Покупайте абонемент в рассрочку 0-0-12 без переплат и скрытых комиссий.",
        color: "text-accent-lime",
        bg: "bg-accent-lime/10"
    },
    {
        icon: Clock,
        title: "Заморозка",
        description: "Приостанавливайте действие абонемента, если уезжаете в отпуск или заболели.",
        color: "text-primary",
        bg: "bg-primary/10"
    }
];

export function Features() {
    return (
        <Section className="bg-gray-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Новый способ добавить спорт в свою жизнь
                </h2>
                <p className="text-lg text-gray-600">
                    Забудьте о скучных тренировках в одном зале. С NS TECH вы получаете свободу выбора и разнообразие.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full hover:shadow-lg transition-shadow border-none shadow-md bg-white">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.bg}`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
