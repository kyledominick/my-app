import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import * as MaterialIcons from "@mui/icons-material";

function Card({ id, color, iconType, icon }) {
  const navigate = useNavigate();

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
      {/* Render Material UI Icon */}
      {iconType === "material" && IconComponent && (
        <IconComponent className="grid-card-icon" />
      )}

      {/* Render Material Symbol */}
      {iconType === "symbol" && (
        <span className="material-symbols-outlined grid-card-icon">
          {icon}
        </span>
      )}
    </div>
  );
}

export default Card;