import React from "react";

interface ToggleButtonProps {
  label: string;
  handleToggle: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, handleToggle }) => (
  <div className="flex justify-center my-4">
    <button
      onClick={() => handleToggle()}
      className="px-2 py-1 border-2 border-transparent rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
    >
      <span className="flex items-center">{label}</span>
    </button>
  </div>
);

export default ToggleButton;
