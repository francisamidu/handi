import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = ({
  scrollToWaitlist,
}: {
  scrollToWaitlist: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <section className="relative bg-transparent pt-20 pb-12 md:pt-32 md:pb-20 flex flex-col items-center overflow-hidden ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="g:text-left flex flex-col items-center justify-center text-center">
          <p className="text-sm text-sky-600 font-bold flex items-center bg-sky-200 px-3 py-1 rounded-full">
            Launches in August 2025 <ArrowRight className="ml-2" size={16} />
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl my-6">
            The Easiest Way to Hire{" "}
            <span className="text-sky-600">Trusted Handymen</span> in Malawi.
          </h1>
          <p className="mt-6 text-lg text-slate-600 sm:text-xl max-w-xl mx-auto lg:mx-0">
            From a leaky tap to a full paint job, find the right person for the
            job, right now. Get reliable help, fast.
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
        {/* Profile Cards Section */}
        <div className="relative w-full mt-20 flex flex-col items-center">
          {/* SVG Connecting Lines */}
          <svg
            viewBox="0 0 900 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-12 left-1/2 -translate-x-1/2 w-[90%] h-20 pointer-events-none"
          >
            <path
              d="M60 40 Q 225 80 450 40 Q 675 0 840 40"
              stroke="#2563eb"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="60" cy="40" r="4" fill="#2563eb" />
            <circle cx="230" cy="60" r="4" fill="#2563eb" />
            <circle cx="450" cy="40" r="4" fill="#2563eb" />
            <circle cx="670" cy="20" r="4" fill="#2563eb" />
            <circle cx="840" cy="40" r="4" fill="#2563eb" />
          </svg>
          <div className="flex flex-row items-end justify-center gap-4 w-full max-w-screen-xl relative z-10">
            {/* Card 1 */}
            <div
              className="flex flex-col items-center justify-end bg-blue-100 rounded-xl shadow-lg w-40 h-56 px-6 py-2"
              style={{
                background:
                  "url(https://randomuser.me/api/portraits/men/75.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white rounded-lg px-2 py-1 mt-2 text-center w-36 shadow">
                <div className="font-semibold text-xs">Guy Hawkins</div>
                <div className="text-xs text-slate-500">Plumber</div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="flex flex-col items-center justify-end bg-yellow-100 rounded-xl shadow-lg w-40 h-56 px-6 py-2"
              style={{
                background:
                  "url(https://randomuser.me/api/portraits/men/66.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white rounded-lg px-2 py-1 mt-2 text-center w-36 shadow">
                <div className="font-semibold text-xs">Cameron Williamson</div>
                <div className="text-xs text-slate-500">Electrician</div>
              </div>
            </div>
            {/* Card 3 (Center, Highlighted) */}
            <div
              className="flex flex-col items-center justify-end bg-teal-100 rounded-xl shadow-xl w-48 h-64 px-6 py-2 z-10 scale-110"
              style={{
                background:
                  "url(https://randomuser.me/api/portraits/women/65.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white rounded-lg px-2 py-2 mt-2 text-center w-40 shadow">
                <div className="font-bold text-base">Bessie Cooper</div>
                <div className="text-xs text-slate-500">Carpenter</div>
              </div>
            </div>
            {/* Card 4 */}
            <div
              className="flex flex-col items-center justify-end bg-pink-100 rounded-xl shadow-lg w-40 h-56 px-6 py-2"
              style={{
                background:
                  "url(https://randomuser.me/api/portraits/men/77.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white rounded-lg px-2 py-1 mt-2 text-center w-36 shadow">
                <div className="font-semibold text-xs">Esther Howard</div>
                <div className="text-xs text-slate-500">Painter</div>
              </div>
            </div>
            {/* Card 5 */}
            <div
              className="flex flex-col items-center justify-end bg-yellow-50 rounded-xl shadow-lg w-40 h-56 px-6 py-2"
              style={{
                background:
                  "url(https://randomuser.me/api/portraits/men/78.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="bg-white rounded-lg px-2 py-1 mt-2 text-center w-36 shadow">
                <div className="font-semibold text-xs">Robert Fox</div>
                <div className="text-xs text-slate-500">Tiler</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
