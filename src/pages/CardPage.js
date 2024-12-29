import React from "react";
import { useParams } from "react-router-dom";
import pageData from "../data/pageData.json";
import cardData from "../data/cardData.json";
import { useTheme } from "../context/ThemeContext"; // Import theme context
import "./CardPage.css";

function CardPage() {
  const { id } = useParams(); // Get the card ID from the URL
  const card = cardData.find((card) => card.id === parseInt(id));
  const { toggleTheme } = useTheme(); // Access the toggleTheme function

  if (!card) {
    return <div>Card not found</div>; // Handle missing card gracefully
  }

  const content = pageData[id]?.content || [];

  return (
    <div className="card-page">
      <header style={{ backgroundColor: card.color }}>
        <h1>{card.title}</h1>
      </header>
      <main>
        {content.map((text, index) => (
          <div key={index} className="content-card">
            {text}
          </div>
        ))}
      </main>
      <footer style={{ backgroundColor: card.color }}>
        <p>Footer for {card.title}</p>
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle Theme
        </button>
      </footer>
    </div>
  );
}

export default CardPage;