import React from "react";

import { CheckIcon, XIcon } from "./icons";
import { useTheme } from "../context/ThemeContext";

interface PricingCardProps {
  plan: {
    title: string;
    desc: string;
    prices: { Month: number; Year: number };
    options: { label: string; value: boolean }[];
  };
  time: string;
  focused: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, focused, time }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <article
      className={`${
        focused ? "bg-blue-500" : isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } p-6 shadow-md w-full max-w-sm flex flex-col ${
        focused ? "transform scale-105" : ""
      } rounded-lg`}
      style={{
        boxShadow: focused
          ? isDarkMode
            ? "0px 4px 44px 0px #020617"
            : "0px 4px 44px 0px #A78BFA"
          : "none",
      }}
    >
      <h2
        className={`text-xl font-bold ${
          focused ? "text-white" : isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        {plan.title}
      </h2>
      <p
        className={`${
          focused
            ? "text-white"
            : isDarkMode
            ? "text-gray-400"
            : "text-gray-600"
        } mt-2`}
      >
        {plan.desc}
      </p>
      <p
        className={`mt-4 ${
          focused ? "text-white" : isDarkMode ? "text-white" : "text-gray-800"
        } inline-flex items-center`}
      >
        <span className="text-2xl font-bold">
          ${plan.prices[time as keyof typeof plan.prices]}
        </span>
        <span
          className={`text-xs ${
            focused || isDarkMode ? "text-white" : "text-gray-600"
          } ml-1`}
        >
          / {time}
        </span>
      </p>

      <button
        className={`mt-4 px-4 py-2 rounded transition duration-300 ${
          focused
            ? isDarkMode
              ? "bg-white text-blue-500 hover:bg-gray-100 hover:text-blue-600"
              : "bg-orange-500 text-white hover:bg-orange-600"
            : isDarkMode
            ? "bg-gray-700 text-gray-300 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-400"
            : "bg-gray-200 text-blue-500 border-2 border-blue-500 hover:bg-gray-300 hover:border-blue-600"
        }`}
      >
        Get Started Now
      </button>
      <ul className="mt-4 space-y-2">
        {plan.options.map((option, index) => (
          <li
            key={option.label}
            className={`flex items-center ${!option.value ? "opacity-50" : ""}`}
          >
            {option.value ? (
              <CheckIcon focused={focused} isDarkMode={isDarkMode} />
            ) : (
              <XIcon focused={focused} isDarkMode={isDarkMode} />
            )}
            <span
              className={`${
                focused
                  ? "text-white"
                  : isDarkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              {option.label}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PricingCard;
