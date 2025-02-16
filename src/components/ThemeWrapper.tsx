import React from "react";

import { useTheme } from "../context/ThemeContext";

interface ThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="font-satoshi bg-light-surface primary-colors-violet-50">
      <div className={theme === "dark" ? "dark" : ""}>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ThemeWrapper;
