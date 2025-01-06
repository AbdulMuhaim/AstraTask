import React, { useState } from "react";
import middleEastImage from "../assets/3d-rendering-planet-earth.jpg";

const MiddleEastMap = () => {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false); // New state for transitions

  const locations = [
    {
      name: "Qatar",
      coordinates: { top: "50%", left: "60%" },
      details: {
        location: "Doha",
        offices: 1,
        projects: "10+",
        image:
          "https://media02.stockfood.com/largepreviews/MjE3MjQ5NDM1Mw==/70080463-Construction-Site-in-Doha-Qatar.jpg",
      },
    },
    {
      name: "Saudi Arabia",
      coordinates: { top: "70%", left: "50%" },
      details: {
        location: "Amaala",
        offices: 3,
        projects: "20+",
        image:
          "https://www.cbnme.com/wp-content/uploads/2024/09/amaala-progress-2-1-1-1024x575.jpg",
      },
    },
  ];

  const handleMouseEnterPoint = (index) => {
    setHoveredPoint(index);
    setIsTransitioning(true);
    setActiveCard(index);
  };

  const handleMouseLeavePoint = () => {
    setHoveredPoint(null);
    setTimeout(() => {
      if (!hoveredPoint) {
        setIsTransitioning(false);
        setActiveCard(null);
      }
    }, 600); // Matches fade-out duration
  };

  const handleMouseEnterCard = (index) => {
    if (!isTransitioning) setActiveCard(index);
  };

  const handleMouseLeaveCard = () => {
    setTimeout(() => {
      if (!hoveredPoint) setActiveCard(null);
    }, 300);
  };

  return (
    <div className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: `url(${middleEastImage})`,
        }}
      ></div>

      {/* Locations List */}
      <div className="absolute inset-0 flex flex-col items-start justify-center p-8">
        <h1 className="text-4xl font-bold mb-4">Our Locations</h1>
        <ul className="list-disc pl-6 space-y-2">
          {locations.map((location) => (
            <li key={location.name}>{location.name}</li>
          ))}
        </ul>
      </div>

      {/* Location Points */}
      {locations.map((location, index) => (
        <div
          key={index}
          className="absolute cursor-pointer"
          style={{
            top: location.coordinates.top,
            left: location.coordinates.left,
          }}
          onMouseEnter={() => handleMouseEnterPoint(index)}
          onMouseLeave={handleMouseLeavePoint}
        >
          {/* Outer Circle Effect */}
          <div className="relative w-4 h-4">
            <div className="absolute w-6 h-6 bg-lime-400 rounded-full z-20"></div>
            <div className="outer-circle"></div>
          </div>

          {(hoveredPoint === index || activeCard === index) && (
            <div
              className={`absolute z-30 w-64 p-4 bg-white text-black rounded-lg shadow-lg transition-all transform ${
                hoveredPoint === index ? "fade-in-right" : "fade-out-right"
              } ${isTransitioning ? "pointer-events-none" : ""}`} // Prevent hover during transition
              style={{
                top: "50%",
                left: "100%",
                transform: "translateY(-50%) translateX(20px)",
              }}
              onMouseEnter={() => handleMouseEnterCard(index)}
              onMouseLeave={handleMouseLeaveCard}
            >
              <h3 className="text-xl font-bold mb-2">{location.name}</h3>
              <p className="font-serif pb-1">Offices: {location.details.offices}</p>
              <p className="font-serif pb-1">Location: {location.details.location}</p>
              <p className="font-serif pb-1">Projects: {location.details.projects}</p>
              <img
                src={location.details.image}
                alt={`${location.name} project`}
                className="mt-2 w-full rounded-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MiddleEastMap;
