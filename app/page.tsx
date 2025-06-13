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
      <section
        className="bg-white/50"
        style={{
          backgroundImage: `
          linear-gradient(to right, #e5e7eb 1px, transparent 1px),
          linear-gradient(to bottom, #e5e7eb 1px, transparent 1px),
          repeating-linear-gradient(0deg, transparent, transparent 5px, #f1f5f9 5px, transparent 300px),
          repeating-linear-gradient(90deg, transparent, transparent 5px, #f1f5f9 5px, transparent 300px)
        `,
          backgroundSize: "56px 56px, 56px 56px, 300px 300px, 300px 300px",
          backgroundColor: "#fff",
        }}
      >
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
