import React from "react";
import { ButtonProps } from "@/interfaces";

const sizeClasses = { sm: "px-2 py-1 text-sm", md: "px-4 py-2", lg: "px-6 py-3 text-lg" };

const Button: React.FC<ButtonProps> = ({ size = "md", shape = "md", onClick, children }) => (
  <button
    onClick={onClick}
    className={`bg-blue-600 text-white hover:bg-blue-700 transition ${sizeClasses[size]} ${shape === "full" ? "rounded-full" : "rounded-md"}`}
  >
    {children}
  </button>
);

export default Button;