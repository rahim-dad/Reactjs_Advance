// Complete Features Section

import FeaturesHeading from "./FeaturesHeading";
import FeaturesParagraph from "./FeaturesParagraph";
import FeatureCard from "./FeatureCard";

// React Icons
import {
  FaTools,
  FaBullseye,
  FaHeadset,
  FaFlag,
  FaCog,
  FaPencilRuler,
} from "react-icons/fa";

function FeaturesSection() {
  const features = [
    {
      title: "Expert Technicians",
      icon: <FaTools />,
    },
    {
      title: "Professional Service",
      icon: <FaBullseye />,
    },
    {
      title: "Great Support",
      icon: <FaHeadset />,
      
    },
    {
      title: "Expert Technicians",
      icon: <FaCog />,
    },
    {
      title: "Professional Service",
      icon: <FaFlag />,
    },
    {
      title: "Great Support",
      icon: <FaPencilRuler />,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">

      {/* Heading */}
      <FeaturesHeading />

      {/* Paragraph */}
      <FeaturesParagraph />

      {/* Cards Grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {features.map((item, index) => (
        <FeatureCard
  key={index}
  title={item.title}
  icon={item.icon}
/>
        ))}
      </div>

    </section>
  );
}

export default FeaturesSection;