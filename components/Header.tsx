import { Wrench } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
const scrollToWaitlist = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  document
    .getElementById("waitlist-form")
    ?.scrollIntoView({ behavior: "smooth" });
};
const Header = () => {
  return (
    <header
      className={`${
        false ? "sticky top-0 z-50 shadow-sm backdrop-blur-md" : ""
      }w-full bg-white/95`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <Wrench className="h-8 w-8 text-sky-600" />
            <span className="text-2xl font-bold text-slate-800">Handi</span>
          </Link>
          <nav className="hidden items-center space-x-8 lg:flex">
            <Link
              href="#services"
              className="text-base font-medium text-slate-600 hover:text-sky-600 transition-colors"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="text-base font-medium text-slate-600 hover:text-sky-600 transition-colors"
              prefetch={false}
            >
              How It Works
            </Link>
            <Link
              href="#value-propositions"
              className="text-base font-medium text-slate-600 hover:text-sky-600 transition-colors"
              prefetch={false}
            >
              Why Handi?
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-sky-600 text-sky-600 hover:bg-sky-50 hover:text-sky-700 hidden sm:inline-flex"
            >
              <Link href="#waitlist-form" onClick={scrollToWaitlist}>
                Customer Sign Up
              </Link>
            </Button>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white">
              <Link href="#waitlist-form" onClick={scrollToWaitlist}>
                Handyman Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
