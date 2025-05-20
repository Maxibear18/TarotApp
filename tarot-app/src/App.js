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
      <div className="header-bar">
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
        <h1>🔮 Tarot Card Draw</h1>
      </div>

      {menuOpen && (
        <div className="menu-dropdown">
          <p
            onClick={() => {
              setCard(null);
              setFlipped(false);
              setMenuOpen(false);
            }}
          >
            🔹 One Card Draw
          </p>
        </div>
      )}

      <div className="spread-info">
        <div className="spread-title">{spreadInfo.title}</div>
        <div className="spread-description">{spreadInfo.description}</div>
      </div>

      <button onClick={drawCard}>Draw a Card</button>

      {card && (
        <div className="card-area">
          <div className="card-container" onClick={handleFlip}>
            <div className={`card-inner ${flipped ? "flipped" : ""}`}>
              <div className="card-front">
                <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
              </div>
              <div className="card-back">
                <img src={card.image} alt={card.name} className="card-image" />
              </div>
            </div>
          </div>

          {flipped && (
            <div className="card-details">
              <h2>{card.name}</h2>
              <p>{card.meaning}</p>
            </div>
          )}
        </div>
      )}

      <div className="version-label">V 1.1</div>
    </div>
  );
}

export default App;
