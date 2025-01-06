import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext"; // Adjust the path to ThemeContext
import "./Header.css"; // Import the CSS file for styling

const Header = () => {
    const { theme } = useTheme(); // Access the theme from context

    return (
        <header
            className="sticky-header"
            style={{
                backgroundColor: theme.headerBackground,
                color: theme.headerText,
            }}
        >
            <h1>
                <Link to="/" style={{ textDecoration: "none", color: theme.headerText }}>
                    kyledominick
                </Link>
            </h1>
        </header>
    );
};

export default Header;