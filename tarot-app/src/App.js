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
  //states
  const [spreadType, setSpreadType] = useState("one");
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [multiFlipped, setMultiFlipped] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const [viewAll, setViewAll] = useState(false); 

  //draws the cards
  const drawCard = () => {
    setViewAll(false); 
    setFlipped(false);
    setCard(null);
    setCards([]);
    setMultiFlipped([]);

    setTimeout(() => {
      const drawnNames = new Set();
      if (spreadType === "one") {
        // one card draw
        const random = tarotCards[Math.floor(Math.random() * tarotCards.length)];
        const reversed = Math.random() < 0.5;
        setCard({ ...random, reversed });
      } else {
        // multiple card draw
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
  // flips the cards
  const handleFlip = () => setFlipped(true);
  const handleMultiFlip = (index) => {
    const updated = [...multiFlipped];
    updated[index] = true;
    setMultiFlipped(updated);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleGuide = () => setShowGuide(!showGuide);

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
            setViewAll(false);
            setCard(null);
            setCards([]);
            setFlipped(false);
            setMultiFlipped([]);
            setMenuOpen(false);
          }}>🔹 One Card Draw</p>
          <p onClick={() => {
            setSpreadType("ppf");
            setViewAll(false);
            setCard(null);
            setCards([]);
            setFlipped(false);
            setMultiFlipped([false, false, false]);
            setMenuOpen(false);
          }}>🔹 Past, Present, Future</p>
          <p onClick={() => {
            setSpreadType("purpose");
            setViewAll(false);
            setCard(null);
            setCards([]);
            setFlipped(false);
            setMultiFlipped([false, false, false, false, false]);
            setMenuOpen(false);
          }}>🔹 Passion & Purpose</p>
          <p onClick={() => {
            setSpreadType("why");
            setViewAll(false);
            setCard(null);
            setCards([]);
            setFlipped(false);
            setMultiFlipped([false, false, false, false, false]);
            setMenuOpen(false);
          }}>🔹 "Why" Spread</p>
          <p onClick={() => {
            setViewAll(true);
            setCard(null);
            setCards([]);
            setFlipped(false);
            setMultiFlipped([]);
            setMenuOpen(false);
          }}>🔹 View All Cards</p>
        </div>
      )}

      {!viewAll && (
        <>
          <div className="spread-info">
            <div className="spread-title">{spreadDetails[spreadType].title}</div>
            <div className="spread-description">{spreadDetails[spreadType].description}</div>
          </div>
          <button onClick={drawCard}>Draw a Card</button>
        </>
      )}

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
            <CardWithNumber number={1} label="What drives you" card={cards[0]} flipped={multiFlipped[0]} onFlip={() => handleMultiFlip(0)} />
            <div className="v-spacer" />
            <CardWithNumber number={2} label="Where to focus" card={cards[1]} flipped={multiFlipped[1]} onFlip={() => handleMultiFlip(1)} />
          </div>
          <div className="v-row center-row">
            <CardWithNumber number={3} label="Hidden talents" card={cards[2]} flipped={multiFlipped[2]} onFlip={() => handleMultiFlip(2)} />
          </div>
          <div className="v-row">
            <CardWithNumber number={4} label="What holds you back" card={cards[3]} flipped={multiFlipped[3]} onFlip={() => handleMultiFlip(3)} />
            <div className="v-spacer" />
            <CardWithNumber number={5} label="Long-term potential" card={cards[4]} flipped={multiFlipped[4]} onFlip={() => handleMultiFlip(4)} />
          </div>
        </div>
      )}

      {spreadType === "why" && cards.length === 5 && (
        <div className="why-spread-grid">
          <div className="why-row">
            <div className="why-slot" />
            <CardWithNumber number={5} label="Outcome if you change" card={cards[4]} flipped={multiFlipped[4]} onFlip={() => handleMultiFlip(4)} />
            <div className="why-slot" />
          </div>
          <div className="why-row">
            <CardWithNumber number={4} label="What you can do" card={cards[3]} flipped={multiFlipped[3]} onFlip={() => handleMultiFlip(3)} />
            <CardWithNumber number={1} label="Current situation" card={cards[0]} flipped={multiFlipped[0]} onFlip={() => handleMultiFlip(0)} />
            <CardWithNumber number={2} label="The response" card={cards[1]} flipped={multiFlipped[1]} onFlip={() => handleMultiFlip(1)} />
          </div>
          <div className="why-row">
            <div className="why-slot" />
            <CardWithNumber number={3} label="What holds you back" card={cards[2]} flipped={multiFlipped[2]} onFlip={() => handleMultiFlip(2)} />
            <div className="why-slot" />
          </div>
        </div>
      )}

      {viewAll && (
        <div className="view-all-cards">
          {tarotCards.map((card, index) => (
            <div key={index} className="card-wrapper">
              <div
                className={`card-container floating`}
                onMouseMove={handleCardTilt}
                onMouseLeave={resetTilt}
              >
                <div className="card-inner flipped">
                  <div className="card-front">
                    <img src="/images/backing.jpg" alt="Card Back" className="card-image" />
                  </div>
                  <div className="card-back">
                    <img
                      src={card.image}
                      alt={card.name}
                      className={`card-image ${getCardGlow(card.name)}`}
                    />
                  </div>
                </div>
              </div>
              <div className="card-details">
                <h3>{card.name}</h3>
                <p><strong>Upright:</strong> {card.meaning}</p>
                <p><strong>Reversed:</strong> {card.reversedMeaning}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {showGuide && (
        <div className="guide-modal">
          <div className="guide-content">
            <h2>📘 How to Use the Tarot App</h2>
            <ul>
              <li><strong>☰ Choose a Spread:</strong> Use the top-left menu to pick from different tarot spreads.</li>
              <li><strong>🔮 Draw a Card:</strong> Tap the button to pull cards for your selected spread.</li>
              <li><strong>🃏 Flip the Cards:</strong> Click each card to flip it and reveal its meaning.</li>
              <li><strong>↕️ Reversed Cards:</strong> Cards flipped upside-down show reversed meanings.</li>
            </ul>
            <h3>🧠 How to Read the Cards</h3>
            <ul>
              <li><strong>Major Arcana:</strong> Big life themes (The Fool, The Lovers, Death, etc).</li>
              <li><strong>Minor Arcana:</strong> Everyday experiences, divided by suits:</li>
              <ul>
                <li><strong>Cups:</strong> Emotions & relationships</li>
                <li><strong>Swords:</strong> Thoughts & challenges</li>
                <li><strong>Wands:</strong> Creativity & action</li>
                <li><strong>Pentacles:</strong> Work & stability</li>
              </ul>
              <li><strong>Upright = Clear energy. Reversed = Blocked or internal energy.</strong></li>
              <li>Read the card meanings and trust your intuition to connect them to your situation.</li>
            </ul>
            <button onClick={toggleGuide}>Close</button>
          </div>
        </div>
      )}

      <div className="version-label">V 1.4</div>
    </div>
  );
}

//helpder functions

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
