import Heading from "./Heading";
import SubHeading from "./SubHeading";
import NewsCard from "./NewsCard";

// Import Images React Way
import image11 from "../assets/image11.png";
import image22 from "../assets/image22.png";
import image33 from "../assets/image33.png";

function NewsSection() {
  const newsData = [
    {
      image: image11,
      title: "Best For Web Startups and Web Apps",
      author: "Ham Brook",
      date: "Jan 18, 2020",
    },
    {
      image: image22,
      title: "Best For Web Startups and Web Apps",
      author: "James Phelps",
      date: "Jan 18, 2020",
    },
    {
      image: image33,
      title: "Best For Web Startups and Web Apps",
      author: "James Phelps",
      date: "Jan 18, 2020",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Heading */}
      <Heading />

      {/* Main Title */}
      <SubHeading />

      {/* Description */}
      <p className="text-gray-500 mt-4 max-w-2xl">
        Lorem ipsum dolor sit amet,
        consectetur adipisicing elit.
        Eligendi, explicabo, quasi.
        Magni deserunt sunt labore.
      </p>

      {/* News Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {newsData.map((item, index) => (
          <NewsCard
            key={index}
            image={item.image}
            title={item.title}
            author={item.author}
            date={item.date}
          />
        ))}
      </div>

    </section>
  );
}

export default NewsSection;