import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React from "react";
import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";

const Waitlist = () => {
  return (
    <section id="waitlist-form" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <SectionTitle
            title="Be the First to Know!"
            subtitle="Sign up now for exclusive early access and a special launch discount. We're building something great for Malawi!"
          />
        </div>
        <Card className="max-w-xl mx-auto p-6 sm:p-10 shadow-2xl">
          <form
            className="grid gap-6"
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
    </section>
  );
};

export default Waitlist;
