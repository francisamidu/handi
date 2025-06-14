import { ShieldCheck, Rocket, CreditCard, Briefcase } from "lucide-react";
import React from "react";
import Image from "next/image";

const ValueProp = () => {
  return (
    <section id="value-propositions" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Badge, Heading, Subtitle */}
        <div className="flex flex-col items-center mb-12">
          <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-4">
            Why Choose Handi?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
            Connecting You with{" "}
            <span className="text-sky-500">Trusted Local Pros</span>
          </h2>
          <p className="text-slate-500 text-center max-w-2xl mx-auto mb-10">
            Handi makes it easy to find, hire, and pay skilled handymen for any
            home project—quickly, safely, and with total peace of mind.
          </p>
        </div>
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Image with floating profile card */}
          <div className="relative flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=420&h=340&facepad=2"
              width={450}
              height={350}
              alt="Handyman at work"
              className="rounded-2xl shadow-xl object-cover border border-slate-200"
              priority
            />
            {/* Floating Profile Card */}
            <div className="absolute left-6 -bottom-8 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 min-w-[220px] border border-slate-100">
              <Image
                src="https://randomuser.me/api/portraits/men/75.jpg"
                width={44}
                height={44}
                alt="Cameron Williamson"
                className="rounded-full border-2 border-white shadow"
              />
              <div>
                <div className="text-xs text-slate-500 font-medium mb-1 flex items-center gap-1">
                  <span className="inline-block px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded-full text-[10px] mr-1">
                    Top Rated Pro
                  </span>
                  <span className="text-yellow-400">★★★★★</span>
                </div>
                <div className="font-semibold text-sm text-slate-800 leading-tight">
                  Cameron Williamson
                </div>
                <div className="text-xs text-slate-500">
                  Handyman & Home Repairs
                </div>
                <div className="flex gap-1 mt-1">
                  <span className="bg-blue-50 text-blue-700 text-[10px] px-1.5 py-0.5 rounded font-medium">
                    Plumbing
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-[10px] px-1.5 py-0.5 rounded font-medium">
                    Electrical
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-[10px] px-1.5 py-0.5 rounded font-medium">
                    Carpentry
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Benefits grid + buttons */}
          <div className="flex flex-col items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full mb-8">
              {/* Card 1 */}
              <div className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col gap-2 shadow-sm">
                <span className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center mb-2">
                  <ShieldCheck className="w-5 h-5 text-pink-500" />
                </span>
                <div className="font-semibold text-slate-800 text-base">
                  Trusted & <span className="text-sky-500">Vetted Pros</span>
                </div>
                <div className="text-xs text-slate-500">
                  Only reliable, background-checked handymen and women—so you
                  always get quality service.
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col gap-2 shadow-sm">
                <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-2">
                  <Rocket className="w-5 h-5 text-blue-500" />
                </span>
                <div className="font-semibold text-slate-800 text-base">
                  Simple <span className="text-sky-500">Booking</span>
                </div>
                <div className="text-xs text-slate-500">
                  Post your job, get matched fast, and chat directly with your
                  pro.
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col gap-2 shadow-sm">
                <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center mb-2">
                  <CreditCard className="w-5 h-5 text-green-500" />
                </span>
                <div className="font-semibold text-slate-800 text-base">
                  Secure, <span className="text-sky-500">Easy Payments</span>
                </div>
                <div className="text-xs text-slate-500">
                  Pay safely online or with mobile money. Your payment is held
                  until the job is done.
                </div>
              </div>
              {/* Card 4 */}
              <div className="bg-white border border-slate-100 rounded-xl p-5 flex flex-col gap-2 shadow-sm">
                <span className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center mb-2">
                  <Briefcase className="w-5 h-5 text-yellow-500" />
                </span>
                <div className="font-semibold text-slate-800 text-base">
                  Grow <span className="text-sky-500">Your Business</span>
                </div>
                <div className="text-xs text-slate-500">
                  For handymen: find more work, manage your schedule, and get
                  paid on time—every time.
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex gap-3 mt-2">
              <button className="px-6 py-2 rounded-lg bg-sky-500 text-white font-semibold text-sm shadow hover:bg-sky-600 transition">
                Find a Handyman
              </button>
              <button className="px-6 py-2 rounded-lg border border-sky-500 text-sky-500 font-semibold text-sm bg-white hover:bg-sky-50 transition">
                Join as a Pro
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
