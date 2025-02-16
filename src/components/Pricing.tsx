import React, { useState } from "react";

import { pricePlans } from "./PricePlans";
import PricingCard from "./PricingCard";
import Title from "./Title";
import ToggleButton from "./ToggleButton";

const Pricing: React.FC = () => {
  const [time, setTime] = useState("Month");

  const toggleTime = () => {
    setTime(prevTime => (prevTime === "Month" ? "Year" : "Month"));
  };

  return (
    <div className="mb-8">
      <Title />
      <ToggleButton
        label={time === "Month" ? "📅 Yearly" : "📆 Monthly"}
        handleToggle={toggleTime}
      />
      <main className="p-4">
        <section className="flex flex-wrap justify-center">
          {pricePlans.map((plan, planIndex) => {
            const focused = planIndex === 1;
            return (
              <PricingCard
                key={plan.title}
                plan={plan}
                focused={focused}
                time={time}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default Pricing;
