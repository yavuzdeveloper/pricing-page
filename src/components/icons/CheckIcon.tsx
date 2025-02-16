import React from "react";

interface CheckIconProps {
  focused: boolean;
  isDarkMode: boolean;
}

const CheckIcon: React.FC<CheckIconProps> = ({
  focused,

  isDarkMode,
}) => (
  <span
    className={`flex items-center justify-center w-5 h-5 rounded-full mr-2
       ${focused ? "bg-white" : isDarkMode ? "bg-purple-100" : "bg-blue-500"}`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-3 w-3 ${
        focused ? "text-blue-500" : isDarkMode ? "text-gray-800" : "text-white"
      } }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

export default CheckIcon;
