import React from "react";

function SectionHeader({ smallText, title, description }) {
  return (
    <div>
      <p className="text-gray-400">{smallText}</p>

      <h2 className="text-4xl font-bold mt-2">
        {title}
      </h2>

      <p className="text-gray-500 mt-3 max-w-xl">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;