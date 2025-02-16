import React from "react";

import { useTheme } from "../context/ThemeContext";
import ToggleButton from "./ToggleButton";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-end mb-8">
      <ToggleButton
        label={theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        handleToggle={toggleTheme}
      />
    </div>
  );
};

export default Header;
