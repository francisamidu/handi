import {
  ShieldCheck,
  Rocket,
  CreditCard,
  Briefcase,
  CalendarDays,
  Handshake,
} from "lucide-react";
import React from "react";
import { Card } from "./ui/card";
import Image from "next/image";

const ValueProp = () => {
  return (
    <section id="value-propositions" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* For Customers */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="relative order-last lg:order-first">
            <Image
              src="/placeholder.svg?width=500&height=400"
              width={500}
              height={400}
              alt="Customer satisfaction"
              className="rounded-xl shadow-xl mx-auto"
            />
          </div>
          <div>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-sky-700 bg-sky-100 rounded-full mb-3">
              For Customers
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl mb-6">
              Your To-Do List, <span className="text-sky-600">Done.</span>
            </h2>
            <ul className="space-y-6">
              {[
                {
                  icon: <ShieldCheck className="w-7 h-7 text-sky-600" />,
                  title: "Vetted & Reviewed",
                  description:
                    "Access a network of trusted professionals with verified reviews.",
                },
                {
                  icon: <Rocket className="w-7 h-7 text-sky-600" />,
                  title: "Simple Booking",
                  description: "Find and book help in just a few clicks.",
                },
                {
                  icon: <CreditCard className="w-7 h-7 text-sky-600" />,
                  title: "Secure Payments",
                  description:
                    "Pay easily and securely with Airtel Money or TNM Mpamba. Your money is held until the job is complete.",
                },
              ].map((prop) => (
                <li key={prop.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-sky-100 rounded-full">
                    {prop.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-800">
                      {prop.title}
                    </h4>
                    <p className="text-slate-600">{prop.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* For Handymen */}
        <div>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full mb-3">
              For Handymen
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
              Grow Your Business,{" "}
              <span className="text-green-600">Your Way.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-10 h-10 text-green-600" />,
                title: "Find More Work",
                description:
                  "Get a steady stream of job requests without marketing costs.",
              },
              {
                icon: <CalendarDays className="w-10 h-10 text-green-600" />,
                title: "Manage Your Schedule",
                description: "Work when you want, where you want.",
              },
              {
                icon: <Handshake className="w-10 h-10 text-green-600" />,
                title: "Guaranteed Payments",
                description:
                  "No more chasing payments. We ensure you get paid on time.",
              },
            ].map((prop) => (
              <Card
                key={prop.title}
                className="text-center p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
                  {prop.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {prop.title}
                </h3>
                <p className="text-slate-600">{prop.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
