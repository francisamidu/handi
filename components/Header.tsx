import { ArrowRight, Wrench } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full bg-transparent p-2">
      <div className="mx-auto max-w-screen-xl p-3 flex items-center justify-between !text-sm">
        <div className="flex items-center justify-between gap-2 border rounded-xl shadow-sm shadow-black/10 bg-white backdrop-blur-3xl p-2">
          <Link href="#" className="flex items-center mr-2" prefetch={false}>
            <Wrench className="h-6 w-6 text-sky-600 mr-2" />
            <span className="text-2xl font-bold text-slate-800">Handi</span>
          </Link>
          <nav className="hidden items-center space-x-8 lg:flex">
            <Link
              href="#services"
              className="font-medium text-slate-600 hover:text-sky-600 transition-colors mx-2"
              prefetch={false}
            >
              Services
            </Link>
            <Link
              href="#how-it-works"
              className="font-medium text-slate-600 hover:text-sky-600 transition-colors mx-2"
              prefetch={false}
            >
              How It Works
            </Link>
            <Link
              href="#value-propositions"
              className="font-medium text-slate-600 hover:text-sky-600 transition-colors mx-2"
              prefetch={false}
            >
              Why Handi?
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2 border rounded-xl shadow-sm shadow-black/10 bg-white backdrop-blur-3xl p-1">
          <Link
            className="px-4 hover:text-sky-600"
            href="#waitlist-form"
            onClick={scrollToWaitlist}
          >
            Login
          </Link>
          <Button className="text-sky-600 hover:bg-sky-100 hover:text-sky-600 bg-sky-50">
            <Link
              className="flex items-center gap-2"
              href="#waitlist-form"
              onClick={scrollToWaitlist}
            >
              Join Waitlist <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
