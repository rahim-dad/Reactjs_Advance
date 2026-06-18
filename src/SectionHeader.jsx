// SectionHeader.jsx
import React from 'react';

// Updated inline styles to align text to the left
const headerStyles = {
  container: {
    marginBottom: '48px',
    maxWidth: '650px',
    textAlign: 'left', // Aligns the whole block content to the left edge
  },
  subtitle: {
    display: 'block', // Ensures the label stays on its own line
    fontSize: '14px',
    fontWeight: '600',
    color: '#777777',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    textAlign: 'left', // Aligns the "Blog" text left
  },
  mainTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#111111',
    margin: '4px 0 12px 0',
    textAlign: 'left', // Aligns "News & Updates" left
  },
  description: {
    fontSize: '14px',
    color: '#555555',
    lineHeight: '1.6',
    margin: 0,
    textAlign: 'left', // Aligns the paragraph text left
  },
};

const SectionHeader = () => {
  return (
    <div style={headerStyles.container}>
      {/* Category/Blog Label */}
      <span style={headerStyles.subtitle}>Blog</span>
      {/* Main Heading Text */}
      <h2 style={headerStyles.mainTitle}>News & Updates</h2>
      {/* Short Sub-description */}
      <p style={headerStyles.description}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, explicabo, quasi. 
        Magni deserunt sunt labore.
      </p>
    </div>
  );
};

export default SectionHeader;