import React from "react";

function FeatureCard({ icon, title, active }) {
  return (
    <div
      className={`
        p-10
        rounded-lg
        shadow
        text-center
        select-none

        ${active ? "bg-sky-400 text-white" : "bg-white"}

        hover:shadow
        hover:scale-100
        hover:cursor-default
        transition-none
      `}
    >
      <div className="flex justify-center text-5xl">
        {icon}
      </div>

      <h3 className="mt-5 font-semibold">
        {title}
      </h3>
    </div>
  );
}

export default FeatureCard;