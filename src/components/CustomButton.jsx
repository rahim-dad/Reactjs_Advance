import React from "react";

function CustomButton({
  text,
  icon,
  bgColor,
  textColor,
  border,
}) {
  return (
    <button
      className={`
      flex items-center gap-2
      px-5 py-3
      rounded-lg
      font-medium
      ${bgColor}
      ${textColor}
      ${border}
      `}
    >
      {text}
      {icon}
    </button>
  );
}

export default CustomButton;