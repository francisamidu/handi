import React from "react";
import { motion } from "motion/react";
import SectionTitle from "./SectionTitle";
import {
  Briefcase,
  CreditCard,
  Handshake,
  ListChecks,
  Search,
  UserCheck,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Intro = () => {
  return (
    <section className="py-20 bg-[#f6faff]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Badge */}
        <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-5">
          How it Works
        </span>
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 text-center">
          Getting started is <span className="text-sky-500">easy</span>
        </h2>
        {/* Subtitle */}
        <p className="text-slate-500 mb-12 text-center max-w-2xl mx-auto">
          Ready to connect with top talent or discover the perfect match for
          your project? The possibilities are limitless, and the first step is
          just a click away.
        </p>
        {/* Steps */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {/* Step 1 */}
          <motion.div
            className="flex-1 bg-white rounded-2xl shadow-lg border border-blue-100 flex flex-col items-center px-6 py-8 min-w-[260px] max-w-sm mx-auto relative"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
              <ListChecks className="w-7 h-7 text-blue-500" />
            </div>
            <div className="text-lg font-semibold text-slate-800 mb-2">
              Post a <span className="text-sky-500">Job</span>
            </div>
            <div className="text-slate-500 text-center mb-10">
              Tell us what you need done. It's free and only takes a minute.
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500 font-bold text-base">
                1
              </span>
            </div>
          </motion.div>
          {/* Step 2 */}
          <motion.div
            className="flex-1 bg-white rounded-2xl shadow-lg border border-blue-100 flex flex-col items-center px-6 py-8 min-w-[260px] max-w-sm mx-auto relative"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
              <UserCheck className="w-7 h-7 text-blue-500" />
            </div>
            <div className="text-lg font-semibold text-slate-800 mb-2">
              Get <span className="text-sky-500">Matched</span>
            </div>
            <div className="text-slate-500 text-center mb-10">
              Review profiles, compare quotes, and choose your preferred
              handyman.
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500 font-bold text-base">
                2
              </span>
            </div>
          </motion.div>
          {/* Step 3 */}
          <motion.div
            className="flex-1 bg-white rounded-2xl shadow-lg border border-blue-100 flex flex-col items-center px-6 py-8 min-w-[260px] max-w-sm mx-auto relative"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
              <Handshake className="w-7 h-7 text-blue-500" />
            </div>
            <div className="text-lg font-semibold text-slate-800 mb-2">
              Get It <span className="text-sky-500">Done</span>
            </div>
            <div className="text-slate-500 text-center mb-10">
              Relax while your handyman completes the job to your satisfaction.
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <span className="w-7 h-7 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-500 font-bold text-base">
                3
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
