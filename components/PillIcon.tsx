import React from "react";

interface PillIconProps {
  size?: number;
  className?: string;
}

export default function PillIcon({ size = 24, className = "" }: PillIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="rotate(45 12 12)">
        {/* Top-Right / Upper Half with cutout */}
        <path
          d="M 7 11 Q 12 12.5 17 11 L 17 7 A 5 5 0 0 0 7 7 Z M 12 5.5 A 1.25 1.25 0 0 1 14.5 5.5 L 14.5 7.5 A 1.25 1.25 0 0 1 12 7.5 Z"
          fillRule="evenodd"
        />
        {/* Bottom-Left / Lower Half */}
        <path d="M 7 12.5 Q 12 14 17 12.5 L 17 17 A 5 5 0 0 1 7 17 Z" />
      </g>
    </svg>
  );
}
