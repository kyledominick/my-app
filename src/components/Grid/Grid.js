import React from "react";
import "./Grid.css";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme
import cardData from "../../data/cardData.json";

function Grid() {
  const navigate = useNavigate();
  const { theme } = useTheme(); // Access the current theme

  const handleCardClick = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <div className="grid-container">
      {cardData.map((card) => (
        <div
          key={card.id}
          className="grid-card"
          onClick={() => handleCardClick(card.id)}
        >
          {/* Circle Button */}
          <div className="circle-button">
            <div
              className="circle-back"
              style={{ backgroundColor: card.color }}
            ></div>
            <div
              className="circle-front"
              style={{
                backgroundColor: theme.background, // Use theme background color
              }}
            >
              {/* Render Material Symbol */}
              {card.iconType === "symbol" && (
                <span
                  className="material-symbols-outlined circle-icon"
                  style={{
                    color: theme.name === "dark" ? "#f5f5f5" : card.color, // Icon color based on theme
                  }}
                >
                  {card.icon}
                </span>
              )}
              {/* Render Material UI Icon */}
              {card.iconType === "material" && (
                <span
                  className="grid-card-icon material-symbols-outlined"
                  style={{
                    color: theme.name === "dark" ? "#f5f5f5" : card.color, // Icon color based on theme
                  }}
                >
                  {card.icon}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Grid;