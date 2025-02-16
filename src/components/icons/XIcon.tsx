import React from "react";

interface XIconProps {
  focused: boolean;
  isDarkMode: boolean;
}

const XIcon: React.FC<XIconProps> = ({ focused, isDarkMode }) => (
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
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

export default XIcon;
