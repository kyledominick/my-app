import React from "react";
import "./Grid.css";
import { useNavigate } from "react-router-dom";
import cardData from "../../data/cardData.json";

function Grid() {
  const navigate = useNavigate(); // React Router's navigation function

  const handleCardClick = (id) => {
    navigate(`/card/${id}`); // Navigate to the corresponding card page
  };

  return (
    <div className="grid-container">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="grid-card"
          style={{ backgroundColor: card.color }}
          onClick={() => handleCardClick(card.id)} // Handle card click
        >
          {/* Render Material UI Icon or Material Symbol */}
          {card.iconType === "material" && (
            <span className="grid-card-icon material-symbols-outlined">
              {card.icon}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export default Grid;