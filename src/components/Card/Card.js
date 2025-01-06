import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import * as MaterialIcons from "@mui/icons-material";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme

function Card({ id, color, iconType, icon }) {
  const navigate = useNavigate();
  const { isCircle } = useTheme(); // Access the shape state

  // Dynamically determine the icon component
  let IconComponent = null;
  if (iconType === "material") {
    IconComponent = MaterialIcons[icon]; // Get the Material UI icon dynamically
  }

  const handleClick = () => {
    navigate(`/card/${id}`); // Navigate to the corresponding card page
  };

  return (
    <div
      className="grid-card"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      {/* Circle Button */}
      <div
        className="circle-button"
        style={{
          borderRadius: isCircle ? "50%" : "5%", // Dynamically set border-radius
        }}
      >
        <div
          className="circle-back"
          style={{
            backgroundColor: color,
            borderRadius: isCircle ? "50%" : "5%", // Dynamically set border-radius
          }}
        ></div>
        <div
          className="circle-front"
          style={{
            borderRadius: isCircle ? "50%" : "5%", // Dynamically set border-radius
          }}
        >
          {/* Render Material UI Icon */}
          {iconType === "material" && IconComponent && (
            <IconComponent className="circle-icon" />
          )}

          {/* Render Material Symbol */}
          {iconType === "symbol" && (
            <span className="material-symbols-outlined circle-icon">
              {icon}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;