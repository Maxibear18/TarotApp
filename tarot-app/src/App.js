import React, { useState } from "react";
import tarotCards from "./finalTarotCards";
import "./App.css";

const spreadDetails = {
  one: {
    title: "One Card Draw",
    description: "A quick insight into your current situation or question. Simple and powerful.",
  },
  ppf: {
    title: "Past, Present, Future",
    description: "Gain clarity from the past, awareness in the present, and insight into the future.",
  },
};

function App() {
  const [spreadType, setSpreadType] = useState("one");
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [ppfFlipped, setPpfFlipped] = useState([false, false, false]);
  const [menuOpen, setMenuOpen] = useState(false);

  const drawCard = () => {
    setFlipped(false);
    setCard(null);
    setCards([]);
    setPpfFlipped([false, false, false]);

    setTimeout(() => {
      if (spreadType === "one") {
        const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        setCard(random);
      } else if (spreadType === "ppf") {
        const selected = [];
        const drawnNames = new Set();

        while (selected.length < 3) {
          const draw = tarotCards[Math.floor(Math.random() * tarotCards.length)];
          if (!drawnNames.has(draw.name)) {
            selected.push(draw);
            drawnNames.add(draw.name);
          }
        }
        setCards(selected);
      }
    }, 10);
  };

  const handleFlip = () => {
    setFlipped(true);
  };

  const handlePpfFlip = (index) => {
    const updated = [...ppfFlipped];
    updated[index] = true;
    setPpfFlipped(updated);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <div className="header-bar">
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
        <h1>🔮 Tarot Card Draw 🔮</h1>
      </div>

      {menuOpen && (
        <div className="menu-dropdown">
          <p onClick={() => {
            setSpreadType("one");
            setCard(null);
            setCards([]);
            setFlipped(false);
            setPpfFlipped([false, false, false]);
            setMenuOpen(false);
          }}>🔹 One Card Draw</p>
          <p onClick={() => {
            setSpreadType("ppf");
            setCard(null);
            setCards([]);
            setFlipped(false);
            setPpfFlipped([false, false, false]);
            setMenuOpen(false);
          }}>🔹 Past, Present, Future</p>
        </div>
      )}

      <div className="spread-info">
        <div className="spread-title">{spreadDetails[spreadType].title}</div>
        <div className="spread-description">{spreadDetails[spreadType].description}</div>
      </div>

      <button onClick={drawCard}>Draw a Card</button>

      {/* One Card Draw */}
      {spreadType === "one" && card && (
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

      {/* Past Present Future */}
      {spreadType === "ppf" && cards.length === 3 && (
        <div className="ppf-area">
          {["Past", "Present", "Future"].map((label, index) => (
            <div key={label} className="ppf-card-column">
              <h3 className="ppf-label">{label}</h3>
              <div className="card-container" onClick={() => handlePpfFlip(index)}>
                <div className={`card-inner ${ppfFlipped[index] ? "flipped" : ""}`}>
                  <div className="card-front">
                    <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
                  </div>
                  <div className="card-back">
                    <img src={cards[index].image} alt={cards[index].name} className="card-image" />
                  </div>
                </div>
              </div>
              {ppfFlipped[index] && (
                <div className="card-details">
                  <h3>{cards[index].name}</h3>
                  <p>{cards[index].meaning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="version-label">V 1.2</div>
    </div>
  );
}

export default App;
