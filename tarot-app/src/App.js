import React, { useState } from "react";
import tarotCards from "./finalTarotCards";
import "./App.css";


const spreadInfo = {
  title: "One Card Draw",
  description: "A quick insight into your current situation or question. Simple and powerful."
};

function App() {
  const [card, setCard] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const drawCard = () => {
    setFlipped(false);
    setCard(null);
    setTimeout(() => {
      const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
      setCard(random);
    }, 10);
  };

  const handleFlip = () => {
    setFlipped(true);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="menu-dropdown">
          <p onClick={drawCard}>🔹 One Card Draw</p>
          {/* Additional spreads can be added here */}
        </div>
      )}

      {/* Title + Spread Description */}
      <h1>🔮 Tarot Card Draw</h1>
      <p className="spread-description">
        <strong>{spreadInfo.title}:</strong> {spreadInfo.description}
      </p>

      <button onClick={drawCard}>Draw a Card</button>

      {card && (
        <div className="card-container" onClick={handleFlip}>
          <div className={`card-inner ${flipped ? "flipped" : ""}`}>
            <div className="card-front">
              <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
            </div>
            <div className="card-back">
              <img src={card.image} alt={card.name} className="card-image" />
              <h2>{card.name}</h2>
              <p>{card.meaning}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
