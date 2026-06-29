import React from "react";

function CustomImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full object-cover rounded-lg"
    />
  );
}

export default CustomImage;