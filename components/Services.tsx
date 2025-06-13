import {
  PenToolIcon as Tool,
  Plug,
  Hammer,
  Palette,
  Wrench,
  Sprout,
  TreePine,
  MoreHorizontal,
} from "lucide-react";
import React from "react";
import SectionTitle from "./SectionTitle";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-sky-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Services Offered"
          subtitle="A wide range of services to cover all your home needs."
          className="text-white"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: <Tool className="h-8 w-8" />, name: "Plumbing" },
            { icon: <Plug className="h-8 w-8" />, name: "Electrical" },
            { icon: <Hammer className="h-8 w-8" />, name: "Carpentry" },
            { icon: <Palette className="h-8 w-8" />, name: "Painting" },
            {
              icon: <Wrench className="h-8 w-8" />,
              name: "Appliance Repair",
            },
            { icon: <Sprout className="h-8 w-8" />, name: "Gardening" },
            { icon: <TreePine className="h-8 w-8" />, name: "Landscaping" },
            {
              icon: <MoreHorizontal className="h-8 w-8" />,
              name: "And More...",
            },
          ].map((service) => (
            <div
              key={service.name}
              className="flex flex-col items-center p-6 bg-sky-700/50 rounded-xl hover:bg-sky-700 transition-colors cursor-pointer"
            >
              <div className="mb-4 text-sky-300">{service.icon}</div>
              <span className="font-medium text-center">{service.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
