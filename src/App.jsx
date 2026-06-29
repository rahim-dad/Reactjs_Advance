import React from "react";

// Images
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";

import image11 from "./assets/image11.png";
import image22 from "./assets/image22.png";
import image33 from "./assets/image33.png";

// Components
import ProfileCard from "./components/ProfileCard";
import ProjectCard from "./components/ProjectCard";
import NewsCard from "./components/NewsCard";
import FeatureCard from "./components/FeatureCard";
import SectionHeader from "./components/SectionHeader";

// Icons
import {
  FaRocket,
  FaKey,
  FaPencilRuler,
  FaLightbulb,
  FaFlag,
  FaBullseye,
} from "react-icons/fa";

function App() {
  return (
    <div className="p-10">

      {/* ===================== */}
      {/* PROJECT 1 */}
      {/* ===================== */}

      <div className="grid lg:grid-cols-3 gap-8">

        <ProfileCard
          image={image5}
          name="Priscillia Beaumont"
          description="A passionate Full-Stack Developer & Product Designer with 12 years experience across 24+ countries worldwide."
        />

        <div className="lg:col-span-2">

          <h2 className="text-3xl font-bold mb-5">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <ProjectCard
              image={image2}
              title="Minimal Furniture Shop"
              category="Web Design"
            />

            <ProjectCard
              image={image3}
              title="Cold Brew Identity"
              category="Branding"
            />

            <ProjectCard
              image={image4}
              title="Wellness Mobile App"
              category="UI/UX"
            />

            <ProjectCard
              image={image1}
              title="SaaS Dashboard"
              category="Development"
            />

          </div>

        </div>
      </div>

      <div className="py-24"></div>

      {/* ===================== */}
      {/* PROJECT 2 */}
      {/* ===================== */}

    <SectionHeader
  smallText="Blog"
  title="News & Updates"
  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
/>

      <div className="grid md:grid-cols-3 gap-8 mt-10">

        <NewsCard
          image={image11}
          title="Best For Web Startups and Web Apps"
          info="James Phelps • Jan 18, 2020 • News"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />

        <NewsCard
          image={image22}
          title="Best For Web Startups and Web Apps"
          info="James Phelps • Jan 18, 2020 • News"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />

        <NewsCard
          image={image33}
          title="Best For Web Startups and Web Apps"
          info="James Phelps • Jan 18, 2020 • News"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />

      </div>

      <div className="py-24"></div>

      {/* ===================== */}
      {/* PROJECT 3 */}
      {/* ===================== */}

      <h2 className="text-4xl font-bold text-center">
        Some Features that Made us Unique
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Who are in extremely love with eco friendly system.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <FeatureCard
          icon={<FaLightbulb />}
          title="Expert Technicians"
        />

        <FeatureCard
          icon={<FaKey />}
          title="Professional Service"
        />

        <FeatureCard
          icon={<FaPencilRuler />}
          title="Great Support"
      
        />

        <FeatureCard
          icon={<FaRocket />}
          title="Fast Performance"
        />

        <FeatureCard
          icon={<FaFlag />}
          title="Professional Service"
        />

        <FeatureCard
          icon={<FaBullseye />}
          title="Great Support"
        />

      </div>

    </div>
  );
}

export default App;