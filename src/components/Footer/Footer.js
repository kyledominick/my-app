import React from "react";
import { useTheme } from "../../context/ThemeContext"; // Import useTheme
import "./Footer.css"; // Import the CSS file for styling

const Footer = () => {
    const { theme, toggleTheme, isCircle, toggleShape } = useTheme(); // Access theme, toggleTheme, and shape toggle functions

    return (
        <footer
            className="sticky-footer"
            style={{
                backgroundColor: theme.footerBackground,
                color: theme.footerText,
            }}
        >
            {/* Left Column */}
            <div className="footer-column footer-left">
                <span className="material-symbols-outlined footer-icon">login</span>
            </div>

            {/* Center Column */}
            <div className="footer-column footer-center">
                <div
                    className="shape-toggle"
                    onClick={toggleShape} // Toggle shape on click
                >
                    <span className="material-symbols-outlined footer-icon">
                        {isCircle ? "circle" : "square"} {/* Show the appropriate icon */}
                    </span>
                </div>
            </div>

            {/* Right Column */}
            <div className="footer-column footer-right">
                <span
                    className="material-symbols-outlined footer-icon theme-toggle-icon"
                    onClick={toggleTheme}
                >
                    {theme.name === "light" ? "dark_mode" : "light_mode"}
                </span>
            </div>
        </footer>
    );
};

export default Footer;