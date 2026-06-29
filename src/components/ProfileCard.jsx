import React from "react";

import CustomImage from "./CustomImage";
import CustomButton from "./CustomButton";
import SocialIcon from "./SocialIcon";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaFigma,
} from "react-icons/fa";

import { FiExternalLink } from "react-icons/fi";

function ProfileCard({
  image,
  name,
  description,
}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">

      {/* Profile Image */}

      <CustomImage
        src={image}
        alt={name}
      />

      {/* Name */}

      <h2 className="text-3xl font-bold mt-5">
        {name} 👋
      </h2>

      {/* Description */}

      <p className="mt-5 leading-8">
        {description}
      </p>

      {/* Buttons */}

      <div className="flex gap-4 mt-8">

        <CustomButton
          text="Book A Call"
          icon={<FiExternalLink />}
          bgColor="bg-blue-500"
          textColor="text-white"
        />

        <CustomButton
          text="Send Email"
          border="border"
          textColor="text-black"
        />

      </div>

      {/* Social Icons */}

      <div className="flex gap-3 mt-8">

        <SocialIcon
          icon={<FaFacebookF />}
        />

        <SocialIcon
          icon={<FaInstagram />}
        />

        <SocialIcon
          icon={<FaLinkedinIn />}
        />

        <SocialIcon
          icon={<FaFigma />}
        />

      </div>

    </div>
  );
}

export default ProfileCard;