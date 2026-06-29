import React from "react";

import CustomImage from "./CustomImage";

function ProjectCard({
  image,
  title,
  category,
}) {
  return (
    <div className="bg-white p-3 rounded-xl shadow">

      <CustomImage
        src={image}
        alt={title}
      />

      <div className="mt-4 flex justify-between">

        <div>

          <h3 className="text-2xl font-bold">
            {title}
          </h3>

          <p className="text-gray-500">
            {category}
          </p>

        </div>

        <a
          href="#"
          className="text-blue-500 underline"
        >
          See Project
        </a>

      </div>

    </div>
  );
}

export default ProjectCard;