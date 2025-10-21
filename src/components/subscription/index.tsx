import { pricingPlans } from "@/lib/demoData/subcriptionPackage";
import React from "react";
import PlanCard from "./PlanCard";

export default function Subscription() {
  return (
    <div className="w-full min-h-screen bg-primary">
      <div className="container mx-auto">
        <div>
          <h2 className="text-center text-white text-2xl md:text-3xl mb-6 pt-16">
            Choose Your Plan
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 justify-center place-items-center py-7">
          {pricingPlans?.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </div>
  );
}
