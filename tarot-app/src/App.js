import React, { useState } from "react";
import tarotCards from "./finalTarotCards";
import "./App.css";

function App() {
  const [card, setCard] = useState(null);

  const drawCard = () => {
    const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    setCard(random);
  };

  return (
    <div className="App">
      <h1>🔮 Tarot Card Draw</h1>
      <button onClick={drawCard}>Draw a Card</button>

      {card && (
        <div className="card-display">
          <img src={card.image} alt={card.name} className="card-image" />
          <h2>{card.name}</h2>
          <p>{card.meaning}</p>
        </div>
      )}
    </div>
  );
}

export default App;