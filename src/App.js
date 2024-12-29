import React from "react";
import "./App.css";
import Grid from "./components/Grid/Grid";
import CardPage from "./pages/CardPage";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemedApp />
      </Router>
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className="app"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      {/* Sticky Header */}
      <header className="sticky-header">
        <h1>kyledominick</h1>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Grid />} />
          <Route path="/card/:id" element={<CardPage />} />
        </Routes>
      </main>

      {/* Sticky Footer */}
      <footer className="sticky-footer">
        <button onClick={toggleTheme} className="theme-toggle">
          Toggle Theme
        </button>
      </footer>
    </div>
  );
}

export default App;