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
  why: {
    title: '"Why" Spread',
    description: "Explore the deeper reasons behind your situation and what to do about it.",
  },
};

function App() {
  const [spreadType, setSpreadType] = useState("one");
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [multiFlipped, setMultiFlipped] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);

  const drawCard = () => {
    setFlipped(false);
    setCard(null);
    setCards([]);
    setMultiFlipped([]);

    setTimeout(() => {
      const drawnNames = new Set();

      if (spreadType === "one") {
        const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        const reversed = Math.random() < 0.5;
        setCard({ ...random, reversed });
      } else {
        const count = spreadType === "ppf" ? 3 : 5;
        const selected = [];
        while (selected.length < count) {
          const draw = tarotCards[Math.floor(Math.random() * tarotCards.length)];
          if (!drawnNames.has(draw.name)) {
            drawnNames.add(draw.name);
            selected.push({ ...draw, reversed: Math.random() < 0.5 });
          }
        }
        setCards(selected);
        setMultiFlipped(new Array(count).fill(false));
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

  const toggleGuide = () => {
    setShowGuide(!showGuide);
  };

  return (
    <div className="App">
      <div className="header-bar">
        <div className="menu-icon" onClick={toggleMenu}>☰</div>
        <h1>🔮 Tarot Card Draw 🔮</h1>
        <div className="help-icon" onClick={toggleGuide}>❓</div>
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
          <p onClick={() => {
            setSpreadType("why");
            setCard(null);
            setCards([]);
            setFlipped(false);
            setMultiFlipped([false, false, false, false, false]);
            setMenuOpen(false);
          }}>🔹 "Why" Spread</p>
        </div>
      )}

      <div className="spread-info">
        <div className="spread-title">{spreadDetails[spreadType].title}</div>
        <div className="spread-description">{spreadDetails[spreadType].description}</div>
      </div>

      <button onClick={drawCard}>Draw a Card</button>

      {spreadType === "one" && card && (
        <div className="card-area">
          <CardView card={card} flipped={flipped} onFlip={handleFlip} />
        </div>
      )}

      {spreadType === "ppf" && cards.length === 3 && (
        <div className="ppf-area">
          {["Past", "Present", "Future"].map((label, index) => (
            <div key={label} className="ppf-card-column">
              <h3 className="ppf-label">{label}</h3>
              <CardView card={cards[index]} flipped={multiFlipped[index]} onFlip={() => handleMultiFlip(index)} />
            </div>
          ))}
        </div>
      )}

      {spreadType === "purpose" && cards.length === 5 && (
        <div className="v-spread">
          <div className="v-row">
            <CardWithNumber
              number={1}
              label="What drives you"
              card={cards[0]}
              flipped={multiFlipped[0]}
              onFlip={() => handleMultiFlip(0)}
            />
            <div className="v-spacer" />
            <CardWithNumber
              number={2}
              label="Where to focus"
              card={cards[1]}
              flipped={multiFlipped[1]}
              onFlip={() => handleMultiFlip(1)}
            />
          </div>

          <div className="v-row center-row">
            <CardWithNumber
              number={3}
              label="Hidden talents"
              card={cards[2]}
              flipped={multiFlipped[2]}
              onFlip={() => handleMultiFlip(2)}
            />
          </div>

          <div className="v-row">
            <CardWithNumber
              number={4}
              label="What holds you back"
              card={cards[3]}
              flipped={multiFlipped[3]}
              onFlip={() => handleMultiFlip(3)}
            />
            <div className="v-spacer" />
            <CardWithNumber
              number={5}
              label="Long-term potential"
              card={cards[4]}
              flipped={multiFlipped[4]}
              onFlip={() => handleMultiFlip(4)}
            />
          </div>
        </div>
      )}

      {spreadType === "why" && cards.length === 5 && (
        <div className="why-spread-grid">
          <div className="why-row">
            <div className="why-slot" />
            <CardWithNumber
              number={5}
              label="Outcome if you change"
              card={cards[4]}
              flipped={multiFlipped[4]}
              onFlip={() => handleMultiFlip(4)}
            />
            <div className="why-slot" />
          </div>

          <div className="why-row">
            <CardWithNumber
              number={4}
              label="What you can do"
              card={cards[3]}
              flipped={multiFlipped[3]}
              onFlip={() => handleMultiFlip(3)}
            />
            <CardWithNumber
              number={1}
              label="Current situation"
              card={cards[0]}
              flipped={multiFlipped[0]}
              onFlip={() => handleMultiFlip(0)}
            />
            <CardWithNumber
              number={2}
              label="The response"
              card={cards[1]}
              flipped={multiFlipped[1]}
              onFlip={() => handleMultiFlip(1)}
            />
          </div>

          <div className="why-row">
            <div className="why-slot" />
            <CardWithNumber
              number={3}
              label="What holds you back"
              card={cards[2]}
              flipped={multiFlipped[2]}
              onFlip={() => handleMultiFlip(2)}
            />
            <div className="why-slot" />
          </div>
        </div>
      )}

      {showGuide && (
        <div className="guide-modal">
          <div className="guide-content">
            <h2>📘 How to Use the Tarot App</h2>
            <p>Welcome! Here's how to get started:</p>
            <ul>
              <li>Choose a spread using the ☰ menu in the top left.</li>
              <li>Click the "Draw a Card" button to pull cards for your spread.</li>
              <li>Click each card to flip and reveal its meaning.</li>
              <li>Reversed cards appear upside down and have a reversed interpretation.</li>
            </ul>
            <h3>🃏 Understanding Tarot</h3>
            <p>
              Each tarot card carries symbolic meaning. Upright cards reflect outward influences and clarity. Reversed cards may suggest internal conflict, delays, or blocked energy.
            </p>
            <button onClick={toggleGuide}>Close</button>
          </div>
        </div>
      )}

      <div className="version-label">V 1.5</div>
    </div>
  );
}

function getCardGlow(name) {
  const lower = name.toLowerCase();
  if (lower.includes("cups")) return "glow-cups";
  if (lower.includes("swords")) return "glow-swords";
  if (lower.includes("wands")) return "glow-wands";
  if (lower.includes("pentacles") || lower.includes("coins")) return "glow-pentacles";
  return "glow-major";
}

function resetTilt(e) {
  e.currentTarget.style.transform = `rotateX(0deg) rotateY(0deg)`;
}

function handleCardTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = -(y - centerY) / 15;
  const rotateY = (x - centerX) / 15;
  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

const CardView = ({ card, flipped, onFlip }) => (
  <>
    <div
      className={`card-container ${flipped ? "floating" : ""}`}
      onClick={onFlip}
      onMouseMove={handleCardTilt}
      onMouseLeave={resetTilt}
    >
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
        </div>
        <div className="card-back">
          <img
            src={card.image}
            alt={card.name}
            className={`card-image ${card.reversed ? "reversed" : ""} ${getCardGlow(card.name)}`}
          />
        </div>
      </div>
    </div>
    {flipped && (
      <div className="card-details">
        <h3>{card.name} {card.reversed ? "(Reversed)" : ""}</h3>
        <p>{card.reversed ? card.reversedMeaning : card.meaning}</p>
      </div>
    )}
  </>
);

const CardWithNumber = ({ number, label, card, flipped, onFlip }) => (
  <div className="ppf-card-column">
    <h3 className="ppf-label">{number} - {label}</h3>
    <CardView card={card} flipped={flipped} onFlip={onFlip} />
  </div>
);

export default App;
