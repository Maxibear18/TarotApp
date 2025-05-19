import React, { useState } from "react";
import tarotCards from "./finalTarotCards";
import "./App.css";

function App() {
  const [card, setCard] = useState(null);
  const [flipped, setFlipped] = useState(false);

  const drawCard = () => {
    const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    setCard(random);
    setFlipped(false); 
  };

  const handleFlip = () => {
    setFlipped(true);
  };

  return (
    <div className="App">
      <h1>🔮 Tarot Card Draw</h1>
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
