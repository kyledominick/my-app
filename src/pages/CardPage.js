import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import pageData from "../data/pageData.json";
import cardData from "../data/cardData.json";
import { useTheme } from "../context/ThemeContext"; // Import theme context
import "./CardPage.css";

function CardPage() {
  const { id } = useParams(); // Get the card ID from the URL
  const navigate = useNavigate(); // For navigation
  const card = cardData.find((card) => card.id === parseInt(id));
  const { toggleTheme } = useTheme(); // Access the toggleTheme function

  if (!card) {
    return <div>Card not found</div>; // Handle missing card gracefully
  }

  const content = pageData[id]?.content || [];

  // Function to handle button click and update the URL
  const handleButtonClick = (subId, subTitle) => {
    const slug = subTitle.toLowerCase().replace(/\s+/g, "-"); // Convert title to slug
    navigate(`/${card.title.toLowerCase()}/${slug}`);
  };

  return (
    <div className="card-page">
      {/* Breadcrumb Pagination */}
      <nav className="breadcrumb" style={{ backgroundColor: card.color }}>
        <span onClick={() => navigate("/")}>Home</span> &gt;{" "}
        <span>{card.title}</span>
      </nav>

      <header style={{ backgroundColor: card.color }}>
        <h1>{card.title}</h1>
      </header>
      <main>
        {content.map((text, index) => (
          <button
            key={index}
            className="content-button"
            onClick={() => handleButtonClick(index, text)}
          >
            {text}
          </button>
        ))}
      </main>
      <footer style={{ backgroundColor: card.color }}>
        <p>Footer for {card.title}</p>
      </footer>
    </div>
  );
}

export default CardPage;