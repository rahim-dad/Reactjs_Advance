// // App.jsx
// import React from 'react';
// // Importing the main NewsSection container component
// import NewsSection from './NewsSection'; 

// // Optional: Global reset styles to match the layout perfectly
// const appStyles = {
//   margin: 0,
//   padding: 0,
//   boxSizing: 'border-box',
// };

// function App() {
//   return (
//     <div style={appStyles}>
//       {/* This renders your complete component tree: SectionHeader -> Grid -> BlogCards */}
//       <NewsSection />
//     </div>
//   );
// }

// export default App;



import NewsSection from "./components/NewsSection";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <>
      {/* First Project */}
      <NewsSection />

      {/* Space Between Projects */}
      <div className="py-20"></div>

      {/* Second Project */}
      <FeaturesSection />
    </>
  );
}

export default App;



