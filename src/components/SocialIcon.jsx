import React from "react";

function SocialIcon({ icon }) {
  return (
    <div
      className="
      w-12
      h-12
      border
      rounded-lg
      flex
      items-center
      justify-center
      cursor-pointer
      "
    >
      {icon}
    </div>
  );
}

export default SocialIcon;