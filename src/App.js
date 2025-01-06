import React from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "./App.css";
import Grid from "./components/Grid/Grid";
import CardPage from "./pages/CardPage";
import SubContentPage from "./pages/SubContentPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"; // Import the new Header component

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
  const { theme } = useTheme();

  return (
    <div
      className="app"
      style={{ backgroundColor: theme.background, color: theme.text }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main
        className="main-content"
        style={{
          backgroundColor: theme.background,
          color: theme.text,
        }}
      >
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Grid />} />

          {/* Card Page */}
          <Route path="/card/:id" element={<CardPage />} />

          {/* SubContentPage for /projects/:id/:subId */}
          <Route path="/projects/:id/:subId" element={<SubContentPage />} />

          {/* SubContentPage for /:cardTitle/:subTopic */}
          <Route path="/:cardTitle/:subTopic" element={<SubContentPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;