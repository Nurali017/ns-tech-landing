"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { Container } from "@/components/ui/Container";
import { Mail, Phone, MapPin, Instagram, Send, MessageCircle } from "lucide-react";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white py-12 md:py-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="md:col-span-1">
                        <h3 className="text-2xl font-bold mb-6 text-primary">NS TECH</h3>
                        <div className="flex flex-col gap-4 text-gray-400">
                            <div className="flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-primary" />
                                <span>Astana, Kazakhstan</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary" />
                                <a href="mailto:nuralisagyndykuly@gmail.com" className="hover:text-white transition-colors">
                                    nuralisagyndykuly@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <a href="tel:+77476454516" className="hover:text-white transition-colors">
                                    +7 747 645 4516
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary" />
                                <a href="tel:+77028616567" className="hover:text-white transition-colors">
                                    +7 702 861 6567
                                </a>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-6">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://t.me/nurali017" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <Send className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/77476454516" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10">
                            <span className="text-sm text-gray-400 block mb-1">Participant of</span>
                            <span className="font-bold text-blue-400">Astana Hub Technology Park</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">{t.footer.company}</h4>
                        <ul className="space-y-4 text-gray-400">
                            {t.footer.links.map((link, i) => (
                                <li key={i}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">{t.footer.partners}</h4>
                        <ul className="space-y-4 text-gray-400">
                            {t.footer.partnerLinks.map((link, i) => (
                                <li key={i}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">{t.footer.download}</h4>
                        <div className="flex flex-col gap-4">
                            <a href="https://apps.apple.com/kz/app/minifootball/id6449434914" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors border border-white/10 flex items-center gap-3">
                                <div className="w-8 h-8 flex-shrink-0 bg-white text-black rounded-lg flex items-center justify-center font-bold text-xs">
                                    Ap
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Download on the</p>
                                    <p className="font-bold">App Store</p>
                                </div>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=kz.llf.onesportone" target="_blank" rel="noopener noreferrer" className="block w-full bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors border border-white/10 flex items-center gap-3">
                                <div className="w-8 h-8 flex-shrink-0 bg-white text-black rounded-lg flex items-center justify-center font-bold text-xs">
                                    G
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400">Get it on</p>
                                    <p className="font-bold">Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>{t.footer.rights}</p>
                    <div className="flex gap-6">
                        {t.footer.legal.map((link, i) => (
                            <a key={i} href="#" className="hover:text-white transition-colors">{link}</a>
                        ))}
                    </div>
                </div>
            </Container>
        </footer>
    );
}
