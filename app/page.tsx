"use client";

import type React from "react";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import {
  Wrench,
  ListChecks,
  UserCheck,
  Handshake,
  Hammer,
  Plug,
  Sprout,
  ShieldCheck,
  CreditCard,
  CalendarDays,
  Facebook,
  Instagram,
  Mail,
  Briefcase,
  Search,
  Rocket,
  Palette,
  PenToolIcon as Tool,
  TreePine,
  MoreHorizontal,
} from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Waitlist from "@/components/Waitlist";
import Services from "@/components/Services";
import ValueProp from "@/components/ValueProp";
import Intro from "@/components/Intro";

// Helper component for section titles

export default function LandingPage() {
  const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document
      .getElementById("waitlist-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-dvh bg-white text-slate-700">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

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
      <footer className="bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <Link
                href="#"
                className="flex items-center gap-2 mb-4"
                prefetch={false}
              >
                <Wrench className="h-8 w-8 text-sky-500" />
                <span className="text-2xl font-bold text-white">Handi</span>
              </Link>
              <p className="text-slate-400 max-w-md">
                Handi is dedicated to connecting Malawians with reliable,
                skilled handymen for all home service needs. Building trust and
                empowering local professionals.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#services"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="hover:text-sky-400 transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#waitlist-form"
                    onClick={scrollToWaitlist}
                    className="hover:text-sky-400 transition-colors"
                  >
                    Join Waitlist
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-sky-400" />
                  <a
                    href="mailto:support@Handimalawi.com"
                    className="hover:text-sky-400 transition-colors"
                  >
                    support@Handimalawi.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Facebook className="w-5 h-5 text-sky-400" />
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 text-sky-400" />
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 pt-8 text-center">
            <p className="text-sm text-slate-500">
              &copy; {new Date().getFullYear()} Handi Malawi. All rights
              reserved. The easiest way to get things done.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
