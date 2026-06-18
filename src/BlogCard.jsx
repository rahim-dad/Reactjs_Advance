// BlogCard.jsx
import React from 'react';

const cardStyles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  imageWrapper: {
    width: '100%',
    aspectRatio: '4 / 3',
    overflow: 'hidden',
    borderRadius: '2px',
    backgroundColor: '#e5e5e5',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '20px',
  },
  cardTitle: {
    fontSize: '19px', // Slipped down slightly from 20px to fit everything on one line perfectly
    fontWeight: '600',
    color: '#111111',
    margin: '0 0 8px 0',
    lineHeight: '1.2',
    whiteSpace: 'normal', // Allows standard text flow while keeping text compact
  },
  metaContainer: {
    display: 'flex',
    gap: '6px',
    fontSize: '12px',
    color: '#888888',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: '12px',
  },
  orangeLink: {
    color: '#ff6600', 
    textDecoration: 'none',
    fontWeight: '500',
  },
  cardDescription: {
    fontSize: '14px',
    color: '#555555',
    lineHeight: '1.6',
    margin: '0 0 16px 0',
  },
};

const BlogCard = ({ image, title, author, date, category, description }) => {
  return (
    <div style={cardStyles.card}>
      <div style={cardStyles.imageWrapper}>
        <img src={image} alt={title} style={cardStyles.cardImage} />
      </div>

      <div style={cardStyles.contentWrapper}>
        {/* The single-line optimized title header */}
        <h3 style={cardStyles.cardTitle}>{title}</h3>

        <div style={cardStyles.metaContainer}>
          <span>{author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <a href="#" style={cardStyles.orangeLink}>
            {category}
          </a>
        </div>

        <p style={cardStyles.cardDescription}>{description}</p>

        <div>
          <a href="#" style={cardStyles.orangeLink}>
            Continue Reading...
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
