import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import Image from "next/image";
import { CheckCircle, Hammer, ShieldCheck } from "lucide-react";

const waitlistAvatars = [
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/65.jpg",
  "https://randomuser.me/api/portraits/men/24.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/12.jpg",
];

const Waitlist = () => {
  return (
    <section id="waitlist-form" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: Value Props */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8">
              Malawi’s all-in-one handyman platform.
            </h2>
            <ul className="space-y-8">
              <li className="flex items-start gap-4">
                <span className="mt-1">
                  <ShieldCheck className="w-7 h-7 text-sky-500" />
                </span>
                <div>
                  <div className="font-semibold text-lg text-slate-900 mb-1">
                    Trusted, Vetted Pros
                  </div>
                  <div className="text-slate-600">
                    Every handyman is background-checked and reviewed to keep
                    you safe and satisfied.
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1">
                  <Hammer className="w-7 h-7 text-yellow-500" />
                </span>
                <div>
                  <div className="font-semibold text-lg text-slate-900 mb-1">
                    Book Any Job, Anytime
                  </div>
                  <div className="text-slate-600">
                    Plumbing, electrical, carpentry, repairs and more—just post
                    your project and we’ll match you fast.
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-1">
                  <CheckCircle className="w-7 h-7 text-green-500" />
                </span>
                <div>
                  <div className="font-semibold text-lg text-slate-900 mb-1">
                    Secure Payments, Peace of Mind
                  </div>
                  <div className="text-slate-600">
                    Pay safely online or with mobile money. Your payment is only
                    released when the job is done.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT: Waitlist Form */}
          <div>
            <div className="text-center mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Join our journey and get early access
              </h3>
              <p className="text-slate-600 max-w-md mx-auto">
                Join our waitlist today and be the first to know when we launch
                in Malawi! 🎉
              </p>
            </div>
            {/* Avatars */}
            <div className="flex justify-center mb-6">
              {waitlistAvatars.map((src, i) => (
                <span
                  key={i}
                  className={
                    `inline-block w-16 h-16 rounded-full border-2 border-white shadow-lg overflow-hidden ` +
                    (i === 0 ? "ml-0" : "-ml-3")
                  }
                >
                  <Image
                    src={src}
                    width={50}
                    height={50}
                    alt="Handyman avatar"
                    className="w-full h-full object-cover"
                  />
                </span>
              ))}
            </div>
            <Card className="p-6 shadow-xl">
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for joining the waitlist!");
                }}
              >
                <div>
                  <Label
                    htmlFor="full-name"
                    className="text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="full-name"
                    placeholder="e.g. Chisomo Banda"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-700"
                  >
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+265 XXX XXX XXX"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-slate-700 mb-2 block">
                    I am a...
                  </Label>
                  <RadioGroup
                    defaultValue="customer"
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <div className="flex items-center space-x-2 p-3 border border-slate-200 rounded-md flex-1 hover:border-sky-500 transition-colors">
                      <RadioGroupItem value="customer" id="customer" />
                      <Label
                        htmlFor="customer"
                        className="font-normal cursor-pointer"
                      >
                        Customer (Looking for handymen)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-3 border border-slate-200 rounded-md flex-1 hover:border-sky-500 transition-colors">
                      <RadioGroupItem value="handyman" id="handyman" />
                      <Label
                        htmlFor="handyman"
                        className="font-normal cursor-pointer"
                      >
                        Handyman (Offering services)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 text-lg"
                >
                  Join Now & Get Early Access
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
