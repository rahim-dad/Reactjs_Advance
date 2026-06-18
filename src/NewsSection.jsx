// NewsSection.jsx
import React from 'react';
import SectionHeader from './SectionHeader';
import BlogCard from './BlogCard';

// Main layout styles
const layoutStyles = {
  sectionContainer: {
    backgroundColor: '#cccccc', // Background color matching your image
    minHeight: '100vh',
    padding: '64px 24px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  innerWrapper: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  // Handles structural columns responsively via CSS Grid
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  },
};

const NewsSection = () => {
  // Since the images are in the public folder, we use absolute paths like '/image11.jpg'
  // (Change the extension to .png or .jpeg if your files use those instead)
  const articles = [
    {
      id: 1,
      image: '/image11.png', 
      title: 'Best For Web Startups and Web Apps',
      author: 'Ham Brook',
      date: 'Jan 18, 2020',
      category: 'News',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
    },
    {
      id: 2,
      image: '/image22.png',
      title: 'Best For Web Startups and Web Apps',
      author: 'James Phelps',
      date: 'Jan 18, 2020',
      category: 'News',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
    },
    {
      id: 3,
      image: '/image33.png',
      title: 'Best For Web Startups and Web Apps',
      author: 'James Phelps',
      date: 'Jan 18, 2020',
      category: 'News',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
    },
  ];

  return (
    <section style={layoutStyles.sectionContainer}>
      <div style={layoutStyles.innerWrapper}>
        
        {/* Render isolated title section */}
        <SectionHeader />

        {/* Core dynamic card generator layout loop */}
        <div style={layoutStyles.grid}>
          {articles.map((article) => (
            <BlogCard 
              key={article.id}
              image={article.image}
              title={article.title}
              author={article.author}
              date={article.date}
              category={article.category}
              description={article.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsSection;