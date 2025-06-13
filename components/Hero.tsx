import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  scrollToWaitlist,
}: {
  scrollToWaitlist: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <section className="relative bg-gradient-to-b pt-20 pb-12 md:pt-32 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-64 overflow-hidden -z-10">
        {/* Simplified wave pattern */}
        <div className="absolute -top-32 left-1/2 w-[200%] h-96 -translate-x-1/2 rounded-b-full bg-sky-100/70 opacity-50"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              The Easiest Way to Hire{" "}
              <span className="text-sky-600">Trusted Handymen</span> in Malawi.
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl max-w-xl mx-auto lg:mx-0">
              From a leaky tap to a full paint job, find the right person for
              the job, right now. Get reliable help, fast.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 text-lg w-full sm:w-auto"
                asChild
              >
                <Link href="#waitlist-form" onClick={scrollToWaitlist}>
                  Join the Waitlist
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sky-600 text-sky-600 hover:bg-sky-50 px-8 py-3 text-lg w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?width=600&height=450"
              width={600}
              height={450}
              alt="Friendly handyman helping a happy customer"
              className="rounded-xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
