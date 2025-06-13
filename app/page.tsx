"use client";

import type React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Waitlist from "@/components/Waitlist";
import Services from "@/components/Services";
import ValueProp from "@/components/ValueProp";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("waitlist-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-dvh text-slate-700">
      {/* Header */}
      <section className="bg-white/50">
        <Header />
        {/* Hero Section */}
        <Hero scrollToWaitlist={scrollToWaitlist} />
      </section>

      <main className="flex-1">
        {/* How It Works Section */}
        <Intro />

        {/* Value Propositions Section */}
        <ValueProp />

        {/* Services Offered Section */}
        <Services />

        {/* Waitlist Form Section */}
        <Waitlist />
      </main>

      {/* Footer */}
      <Footer scrollToWaitlist={scrollToWaitlist} />
    </div>
  );
}
