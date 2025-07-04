// components/ui/CustomButton.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface CustomButtonProps {
  text: string;
  variant?: "secondary";
  size?: "sm" | "md" | "lg" | "xl";
  showIcon?: boolean;
  onClick?: () => void;
}

export default function CustomButton({
  text,
  variant = "secondary",
  size = "md",
  showIcon = true,
  onClick,
}: CustomButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Secondary Button - Outline style
  if (variant === "secondary") {
    return (
      <Button
        variant="outline"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
          border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white 
          font-semibold transition-all duration-300 group
          ${size === "sm" ? "px-4 py-2 text-sm" : ""}
          ${size === "md" ? "px-6 py-3 text-base" : ""}
          ${size === "lg" ? "px-8 py-4 text-lg" : ""}
          ${size === "xl" ? "px-10 py-5 text-xl" : ""}
        `}
      >
        {showIcon && (
          <Calendar
            className={`mr-2 transition-transform duration-300 ${
              isHovered ? "scale-110" : ""
            } ${
              size === "sm"
                ? "h-4 w-4"
                : size === "xl"
                ? "h-6 w-6"
                : "h-5 w-5"
            }`}
          />
        )}
        {text}
      </Button>
    );
  }

  return null;
}
