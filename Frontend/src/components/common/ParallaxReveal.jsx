import React from 'react';
import './ParallaxReveal.css';
import Ronaldo from "../../assets/img/brazil.jpg";
import messi from "../../assets/img/france.jpeg";
import rice from "../../assets/img/portugal.webp";

// 1. Import your images here
// import image1 from './assets/bag-closeup.jpg';
// import image2 from './assets/laptop-sleeve.jpg';
// import image3 from './assets/model-luggage.jpg';

// Placeholder images for demonstration
// const image1 = "../assets/img/Retro-classic.jpeg";
// const image2 = "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2574&auto=format&fit=crop";
// const image3 = "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2670&auto=format&fit=crop";

const ParallaxReveal = () => {
  const sections = [
    {
      id: 1,
      image: Ronaldo,
      title: "SPACE. REDEFINED.",
      text: "80% for puck? 20% for success.\nAn architecture that makes every inch count.",
      cta: "Shop Now",
    },
    {
      id: 2,
      image: messi,
      title: "BOLD. ELEVATED.",
      text: "Engineered to move with you.\nBuilt for journeys that never stand still.",
      cta: "Shop Now",
    },
    {
      id: 3,
      image: rice,
      title: "MOVE. CONFIDENTLY.",
      text: "Smart storage. Clean profile.\nReady for every departure.",
      cta: "Shop Now",
    }
  ];

  return (
    <div className="parallax-container">
      {sections.map((section, index) => (
        <div key={section.id} className="parallax-section" style={{ zIndex: index + 1 }}>
          
          {/* Background Image */}
          <img
            src={section.image}
            alt={section.title}
            className={`parallax-bg ${index === 0 ? 'parallax-bg-first' : ''}`}
          />
          
          {/* Dark Overlay */}
          <div className="overlay"></div>

          {/* Text Content */}
          <div className="content">
            <h1 className="title">{section.title}</h1>
            <div className="promo-card">
              <p className="subtitle">{section.text}</p>
            </div>
            <button className="shop-btn">{section.cta}</button>
          </div>
        </div>
      ))}
      
      {/* Optional: Footer or content below to show the scroll continuing */}
      <div style={{ height: '50vh', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555' }}>
        <p>Scroll End</p>
      </div>
    </div>
  );
};

export default ParallaxReveal;

