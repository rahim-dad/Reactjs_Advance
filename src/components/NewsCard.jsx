// Single News Card Component

function NewsCard({
  image,
  title,
  author,
  date,
}) {
  return (
    <div className="w-full">

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Title */}
      <h2 className="text-xl font-medium mt-5">
        {title}
      </h2>

      {/* Author + Date + Link */}
      <p className="text-gray-400 text-sm mt-2">
        {author} - {date}
        {" "}
        <a
          href="#"
          className="text-orange-500"
        >
          News
        </a>
      </p>

      {/* Description */}
      <p className="text-gray-500 mt-3 leading-7">
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Natus eligendi nobis ea
        maiores sapiente veritatis reprehenderit
        suscipit quaerat rerum voluptatibus a eius.
      </p>

      {/* Continue Reading Link */}
      <a
        href="#"
        className="inline-block mt-5 text-orange-500"
      >
        Continue Reading...
      </a>
    </div>
  );
}

export default NewsCard;