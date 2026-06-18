// FeatureCard Component
// Receives icon and title from FeaturesSection.jsx

function FeatureCard({ icon, title }) {
  return (
    <div
      className="
        group

        /* Card Layout */
        h-56
        flex
        flex-col
        justify-center
        items-center

        /* Background */
        bg-gray-50

        /* Shadow */
        shadow-md

        /* Cursor */
        cursor-pointer

        /* Smooth Animation */
        transition-all
        duration-300

        /* Move Up Slightly */
        hover:-translate-y-2

        /* Hover Color */
        hover:bg-sky-400
        hover:text-white
      "
    >
      {/* Icon */}
      <div
        className="
          text-6xl
          mb-6

          /* Smooth Zoom */
          transition-transform
          duration-300

          /* Zoom Icon */
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold">
        {title}
      </h3>
    </div>
  );
}

export default FeatureCard;