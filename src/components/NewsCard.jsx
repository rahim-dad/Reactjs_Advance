import React from "react";

import CustomImage from "./CustomImage";

function NewsCard({
  image,
  title,
  info,
  description,
}) {
  return (
    <div>

      <CustomImage
        src={image}
        alt={title}
      />

      <h3 className="text-xl font-semibold mt-5">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mt-2">
        {info}
      </p>

      <p className="text-gray-500 mt-3">
        {description}
      </p>

      <a
        href="#"
        className="
        text-orange-500
        block
        mt-4
        "
      >
        Continue Reading...
      </a>

    </div>
  );
}

export default NewsCard;