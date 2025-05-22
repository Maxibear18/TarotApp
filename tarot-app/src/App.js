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
  purpose: {
    title: "Passion & Purpose Spread",
    description: "Clarify life purpose and creative direction through five insightful cards.",
  },
};

function App() {
  const [spreadType, setSpreadType] = useState("one");
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [multiFlipped, setMultiFlipped] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const drawCard = () => {
    setFlipped(false);
    setCard(null);
    setCards([]);
    setMultiFlipped([]);

    setTimeout(() => {
      if (spreadType === "one") {
        const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        const reversed = Math.random() < 0.5;
        setCard({ ...random, reversed });
      } else if (spreadType === "ppf") {
        const selected = [];
        const drawnNames = new Set();
        while (selected.length < 3) {
          const draw = tarotCards[Math.floor(Math.random() * tarotCards.length)];
          if (!drawnNames.has(draw.name)) {
            drawnNames.add(draw.name);
            selected.push({ ...draw, reversed: Math.random() < 0.5 });
          }
        }
        setCards(selected);
        setMultiFlipped([false, false, false]);
      } else if (spreadType === "purpose") {
        const selected = [];
        const drawnNames = new Set();
        while (selected.length < 5) {
          const draw = tarotCards[Math.floor(Math.random() * tarotCards.length)];
          if (!drawnNames.has(draw.name)) {
            drawnNames.add(draw.name);
            selected.push({ ...draw, reversed: Math.random() < 0.5 });
          }
        }
        setCards(selected);
        setMultiFlipped([false, false, false, false, false]);
      }
    }, 10);
  };

  const handleFlip = () => {
    setFlipped(true);
  };

  const handleMultiFlip = (index) => {
    const updated = [...multiFlipped];
    updated[index] = true;
    setMultiFlipped(updated);
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
            setMultiFlipped([]);
            setMenuOpen(false);
          }}>🔹 One Card Draw</p>
          <p onClick={() => {
            setSpreadType("ppf");
            setCard(null);
            setCards([]);
            setFlipped(false);
            setMultiFlipped([false, false, false]);
            setMenuOpen(false);
          }}>🔹 Past, Present, Future</p>
          <p onClick={() => {
            setSpreadType("purpose");
            setCard(null);
            setCards([]);
            setFlipped(false);
            setMultiFlipped([false, false, false, false, false]);
            setMenuOpen(false);
          }}>🔹 Passion & Purpose</p>
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
                <img
                  src={card.image}
                  alt={card.name}
                  className={`card-image ${card.reversed ? "reversed" : ""}`}
                />
              </div>
            </div>
          </div>
          {flipped && (
            <div className="card-details">
              <h2>{card.name} {card.reversed ? "(Reversed)" : ""}</h2>
              <p>{card.reversed ? card.reversedMeaning : card.meaning}</p>
            </div>
          )}
        </div>
      )}

      {/* Past Present Future Spread */}
      {spreadType === "ppf" && cards.length === 3 && (
        <div className="ppf-area">
          {["Past", "Present", "Future"].map((label, index) => (
            <div key={label} className="ppf-card-column">
              <h3 className="ppf-label">{label}</h3>
              <div className="card-container" onClick={() => handleMultiFlip(index)}>
                <div className={`card-inner ${multiFlipped[index] ? "flipped" : ""}`}>
                  <div className="card-front">
                    <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
                  </div>
                  <div className="card-back">
                    <img
                      src={cards[index].image}
                      alt={cards[index].name}
                      className={`card-image ${cards[index].reversed ? "reversed" : ""}`}
                    />
                  </div>
                </div>
              </div>
              {multiFlipped[index] && (
                <div className="card-details">
                  <h3>{cards[index].name} {cards[index].reversed ? "(Reversed)" : ""}</h3>
                  <p>{cards[index].reversed ? cards[index].reversedMeaning : cards[index].meaning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {spreadType === "purpose" && cards.length === 5 && (
      <div className="v-spread">
        <div className="v-row v-top">
          {[0, 1].map((index) => (
            <div key={index} className="ppf-card-column">
              <h3 className="ppf-label">{["What drives you", "Hidden talents"][index]}</h3>
              <div className="card-container" onClick={() => handleMultiFlip(index)}>
                <div className={`card-inner ${multiFlipped[index] ? "flipped" : ""}`}>
                  <div className="card-front">
                    <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
                  </div>
                  <div className="card-back">
                    <img
                      src={cards[index].image}
                      alt={cards[index].name}
                      className={`card-image ${cards[index].reversed ? "reversed" : ""}`}
                    />
                  </div>
                </div>
              </div>
              {multiFlipped[index] && (
                <div className="card-details">
                  <h3>{cards[index].name} {cards[index].reversed ? "(Reversed)" : ""}</h3>
                  <p>{cards[index].reversed ? cards[index].reversedMeaning : cards[index].meaning}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="v-row v-middle">
          <div className="ppf-card-column">
            <h3 className="ppf-label">What holds you back</h3>
            <div className="card-container" onClick={() => handleMultiFlip(2)}>
              <div className={`card-inner ${multiFlipped[2] ? "flipped" : ""}`}>
                <div className="card-front">
                  <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
                </div>
                <div className="card-back">
                  <img
                    src={cards[2].image}
                    alt={cards[2].name}
                    className={`card-image ${cards[2].reversed ? "reversed" : ""}`}
                  />
                </div>
              </div>
            </div>
            {multiFlipped[2] && (
              <div className="card-details">
                <h3>{cards[2].name} {cards[2].reversed ? "(Reversed)" : ""}</h3>
                <p>{cards[2].reversed ? cards[2].reversedMeaning : cards[2].meaning}</p>
              </div>
            )}
          </div>
        </div>

        <div className="v-row v-bottom">
          {[3, 4].map((index) => (
            <div key={index} className="ppf-card-column">
              <h3 className="ppf-label">{["Where to focus", "Long-term potential"][index - 3]}</h3>
              <div className="card-container" onClick={() => handleMultiFlip(index)}>
                <div className={`card-inner ${multiFlipped[index] ? "flipped" : ""}`}>
                  <div className="card-front">
                    <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
                  </div>
                  <div className="card-back">
                    <img
                      src={cards[index].image}
                      alt={cards[index].name}
                      className={`card-image ${cards[index].reversed ? "reversed" : ""}`}
                    />
                  </div>
                </div>
              </div>
              {multiFlipped[index] && (
                <div className="card-details">
                  <h3>{cards[index].name} {cards[index].reversed ? "(Reversed)" : ""}</h3>
                  <p>{cards[index].reversed ? cards[index].reversedMeaning : cards[index].meaning}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )}

      <div className="version-label">V 1.3</div>
    </div>
  );
}

export default App;
