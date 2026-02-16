"use client";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { MiniFootball } from "@/components/sections/MiniFootball";
import { ITServices } from "@/components/sections/ITServices";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <About />
      <Stats />
      <MiniFootball />
      <ITServices />
      <Footer />
    </main>
  );
}
