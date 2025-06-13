import React from "react";
import SectionTitle from "./SectionTitle";
import {
  Briefcase,
  CreditCard,
  Handshake,
  ListChecks,
  Search,
  UserCheck,
} from "lucide-react";

const Intro = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="How It Works"
          subtitle="A simple, straightforward process for everyone."
        />
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center md:text-left">
              For Customers
            </h3>
            <div className="space-y-8">
              {[
                {
                  icon: <ListChecks className="w-8 h-8 text-sky-600" />,
                  title: "Post a Job",
                  description:
                    "Tell us what you need. It's free and takes minutes.",
                },
                {
                  icon: <UserCheck className="w-8 h-8 text-sky-600" />,
                  title: "Get Matched",
                  description: "We connect you with skilled, vetted handymen.",
                },
                {
                  icon: <Handshake className="w-8 h-8 text-sky-600" />,
                  title: "Get It Done",
                  description:
                    "Hire your choice and pay securely through the app.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-sky-100 flex items-center justify-center text-2xl font-bold text-sky-600">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 text-center md:text-left">
              For Handymen
            </h3>
            <div className="space-y-8">
              {[
                {
                  icon: <Briefcase className="w-8 h-8 text-green-600" />,
                  title: "Create Your Profile",
                  description: "Showcase your skills and set your own rates.",
                },
                {
                  icon: <Search className="w-8 h-8 text-green-600" />,
                  title: "Get Job Alerts",
                  description: "Receive notifications for jobs near you.",
                },
                {
                  icon: <CreditCard className="w-8 h-8 text-green-600" />,
                  title: "Get Paid",
                  description:
                    "Complete the work and get paid quickly and securely.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-600">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-1">
                      {step.title}
                    </h4>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
