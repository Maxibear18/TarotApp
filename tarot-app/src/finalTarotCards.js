const tarotCards = [
  {
    name: "The Fool",
    image: "/images/the_fool.jpg",
    meaning: "A symbol of new beginnings and limitless potential. The Fool encourages taking a leap of faith, trusting the universe, and embracing the unknown with a sense of wonder and innocence.",
  },
  {
    name: "The Magician",
    image: "/images/the_magician.jpg",
    meaning: "A master of manifestation and transformation. The Magician represents taking inspired action, using skills and resources effectively, and realizing one's potential through willpower and focus.",
  },
  {
    name: "The High Priestess",
    image: "/images/the_high_priestess.jpg",
    meaning: "A guardian of mystery and inner wisdom. The High Priestess calls you to trust your intuition, embrace the unknown, and seek knowledge through silence, dreams, and deep reflection.",
  },
  {
    name: "The Empress",
    image: "/images/the_empress.jpg",
    meaning: "Embodiment of nurturing, fertility, and abundance. The Empress invites you to connect with nature, embrace your creative power, and cultivate beauty and love in all forms.",
  },
  {
    name: "The Emperor",
    image: "/images/the_emperor.jpg",
    meaning: "A symbol of structure, authority, and stability. The Emperor brings order through logic and leadership, encouraging discipline, protection, and responsibility.",
  },
  {
    name: "The Hierophant",
    image: "/images/the_hierophant.jpg",
    meaning: "A guide of spiritual traditions and moral codes. The Hierophant suggests seeking guidance through education, religious practices, or mentorship, and honoring shared values.",
  },
  {
    name: "The Lovers",
    image: "/images/the_lovers.jpg",
    meaning: "A card of connection, union, and meaningful choices. The Lovers ask you to consider alignment with your values in love and life, and to act with openness and honesty.",
  },
  {
    name: "The Chariot",
    image: "/images/the_chariot.jpg",
    meaning: "A card of willpower, triumph, and momentum. The Chariot urges you to stay focused, overcome obstacles, and take charge of your path with determination and confidence.",
  },
  {
    name: "Strength",
    image: "/images/strength.jpg",
    meaning: "An emblem of courage, patience, and resilience. Strength teaches you to face challenges with compassion and inner fortitude, blending softness with power.",
  },
  {
    name: "The Hermit",
    image: "/images/the_hermit.jpg",
    meaning: "A seeker of truth through solitude and introspection. The Hermit invites a time for self-reflection, spiritual retreat, and discovering inner guidance through quiet contemplation.",
  },
  {
    name: "Wheel of Fortune",
    image: "/images/wheel_of_fortune.jpg",
    meaning: "A symbol of fate, cycles, and change. The Wheel of Fortune reminds you that life is constantly shifting—what goes up must come down—and encourages adaptability and faith.",
  },
  {
    name: "Justice",
    image: "/images/justice.jpg",
    meaning: "A call for truth, fairness, and accountability. Justice represents balance, legal matters, and the importance of integrity in decision-making and consequences.",
  },
  {
    name: "The Hanged Man",
    image: "/images/the_hanged_man.jpg",
    meaning: "A pause for reflection, surrender, and new perspective. The Hanged Man asks you to let go of control and allow space for spiritual insight and transformation.",
  },
  {
    name: "Death",
    image: "/images/death.jpg",
    meaning: "An end that leads to renewal and growth. Death symbolizes major transformation, releasing the old, and welcoming powerful changes with acceptance and grace.",
  },
  {
    name: "Temperance",
    image: "/images/temperance.jpg",
    meaning: "The art of balance and moderation. Temperance encourages patience, harmony, and integration of opposites to find peace and flow in life.",
  },
  {
    name: "The Devil",
    image: "/images/the_devil.jpg",
    meaning: "Temptation, materialism, and shadow self. The Devil reveals unhealthy attachments or illusions and calls you to confront what binds you and reclaim your power.",
  },
  {
    name: "The Tower",
    image: "/images/the_tower.jpg",
    meaning: "Sudden upheaval, awakening, and destruction of illusions. The Tower clears away what no longer serves you, often through disruption, to rebuild with truth and clarity.",
  },
  {
    name: "The Star",
    image: "/images/the_star.jpg",
    meaning: "Hope, inspiration, and spiritual renewal. The Star brings light after darkness, guiding you toward healing, clarity, and trust in the universe’s plan.",
  },
  {
    name: "The Moon",
    image: "/images/the_moon.jpg",
    meaning: "Illusion, intuition, and hidden truths. The Moon suggests uncertainty or confusion, encouraging you to trust your instincts and explore what lies beneath the surface.",
  },
  {
    name: "The Sun",
    image: "/images/the_sun.jpg",
    meaning: "Joy, success, and clarity. The Sun radiates positivity, confidence, and the celebration of life. It illuminates truth and brings happiness, vitality, and abundance.",
  },
  {
    name: "Judgement",
    image: "/images/judgement.jpg",
    meaning: "Awakening, redemption, and self-evaluation. Judgement calls for reflection on past actions, embracing transformation, and rising to a higher version of yourself.",
  },
  {
    name: "The World",
    image: "/images/the_world.jpg",
    meaning: "Completion, fulfillment, and unity. The World signifies the successful conclusion of a journey, wholeness, and the opening of new chapters with wisdom and accomplishment.",
  },

  {
    name: "Ace of Swords",
    image: "/images/ace_of_swords.jpg",
    meaning: "The Ace of Swords marks a new beginning in the realm of swords, often bringing mental clarity, truth, and decisive insight. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Two of Swords",
    image: "/images/two_of_swords.jpg",
    meaning: "The Two of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Three of Swords",
    image: "/images/three_of_swords.jpg",
    meaning: "The Three of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Four of Swords",
    image: "/images/four_of_swords.jpg",
    meaning: "The Four of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Five of Swords",
    image: "/images/five_of_swords.jpg",
    meaning: "The Five of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Six of Swords",
    image: "/images/six_of_swords.jpg",
    meaning: "The Six of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Seven of Swords",
    image: "/images/seven_of_swords.jpg",
    meaning: "The Seven of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Eight of Swords",
    image: "/images/eight_of_swords.jpg",
    meaning: "The Eight of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Nine of Swords",
    image: "/images/nine_of_swords.jpg",
    meaning: "The Nine of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Ten of Swords",
    image: "/images/ten_of_swords.jpg",
    meaning: "The Ten of Swords reflects themes from the swords suit, suggesting a stage in personal or external growth. It is tied to intellect, conflict, and truth. They represent the element of air.",
  },
  {
    name: "Page of Swords",
    image: "/images/page_of_swords.jpg",
    meaning: "The Page of Swords represents a person or energy connected to the swords suit. It brings traits of intellect, curiosity, and clear communication. They represent the element of air.",
  },
  {
    name: "Knight of Swords",
    image: "/images/knight_of_swords.jpg",
    meaning: "The Knight of Swords represents a person or energy connected to the swords suit. It brings traits of action, logic, and swift decisions. They represent the element of air.",
  },
  {
    name: "Queen of Swords",
    image: "/images/queen_of_swords.jpg",
    meaning: "The Queen of Swords represents a person or energy connected to the swords suit. It brings traits of sharp intellect, honesty, and independence. They represent the element of air.",
  },
  {
    name: "King of Swords",
    image: "/images/king_of_swords.jpg",
    meaning: "The King of Swords represents a person or energy connected to the swords suit. It brings traits of authority, truth, and strategic thinking. They represent the element of air.",
  },

  {
    name: "Ace of Pentacles",
    image: "/images/ace_of_pentacles.jpg",
    meaning: "The Ace of Pentacles marks a new beginning in the realm of pentacles, often bringing opportunity for prosperity, health, and material success. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Two of Pentacles",
    image: "/images/two_of_pentacles.jpg",
    meaning: "The Two of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Three of Pentacles",
    image: "/images/three_of_pentacles.jpg",
    meaning: "The Three of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Four of Pentacles",
    image: "/images/four_of_pentacles.jpg",
    meaning: "The Four of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Five of Pentacles",
    image: "/images/five_of_pentacles.jpg",
    meaning: "The Five of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Six of Pentacles",
    image: "/images/six_of_pentacles.jpg",
    meaning: "The Six of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Seven of Pentacles",
    image: "/images/seven_of_pentacles.jpg",
    meaning: "The Seven of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Eight of Pentacles",
    image: "/images/eight_of_pentacles.jpg",
    meaning: "The Eight of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Nine of Pentacles",
    image: "/images/nine_of_pentacles.jpg",
    meaning: "The Nine of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Ten of Pentacles",
    image: "/images/ten_of_pentacles.jpg",
    meaning: "The Ten of Pentacles reflects themes from the pentacles suit, suggesting a stage in personal or external growth. It is focused on material matters, work, and stability. They represent the element of earth.",
  },
  {
    name: "Page of Pentacles",
    image: "/images/page_of_pentacles.jpg",
    meaning: "The Page of Pentacles represents a person or energy connected to the pentacles suit. It brings traits of study, ambition, and practicality. They represent the element of earth.",
  },
  {
    name: "Knight of Pentacles",
    image: "/images/knight_of_pentacles.jpg",
    meaning: "The Knight of Pentacles represents a person or energy connected to the pentacles suit. It brings traits of responsibility, hard work, and consistency. They represent the element of earth.",
  },
  {
    name: "Queen of Pentacles",
    image: "/images/queen_of_pentacles.jpg",
    meaning: "The Queen of Pentacles represents a person or energy connected to the pentacles suit. It brings traits of nurturing, practicality, and resourcefulness. They represent the element of earth.",
  },
  {
    name: "King of Pentacles",
    image: "/images/king_of_pentacles.jpg",
    meaning: "The King of Pentacles represents a person or energy connected to the pentacles suit. It brings traits of stability, wealth, and strong leadership. They represent the element of earth.",
  },
  {
    name: "Ace of Wands",
    image: "/images/ace_of_wands.jpg",
    meaning: "The Ace of Wands marks a new beginning in the realm of wands, often bringing inspiration, opportunity, and raw potential. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Two of Wands",
    image: "/images/two_of_wands.jpg",
    meaning: "The Two of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Three of Wands",
    image: "/images/three_of_wands.jpg",
    meaning: "The Three of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Four of Wands",
    image: "/images/four_of_wands.jpg",
    meaning: "The Four of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Five of Wands",
    image: "/images/five_of_wands.jpg",
    meaning: "The Five of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Six of Wands",
    image: "/images/six_of_wands.jpg",
    meaning: "The Six of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Seven of Wands",
    image: "/images/seven_of_wands.jpg",
    meaning: "The Seven of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Eight of Wands",
    image: "/images/eight_of_wands.jpg",
    meaning: "The Eight of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Nine of Wands",
    image: "/images/nine_of_wands.jpg",
    meaning: "The Nine of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Ten of Wands",
    image: "/images/ten_of_wands.jpg",
    meaning: "The Ten of Wands reflects themes from the wands suit, suggesting a stage in personal or external growth. It is associated with creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Page of Wands",
    image: "/images/page_of_wands.jpg",
    meaning: "The Page of Wands represents a person or energy connected to the wands suit. It brings traits of creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Knight of Wands",
    image: "/images/knight_of_wands.jpg",
    meaning: "The Knight of Wands represents a person or energy connected to the wands suit. It brings traits of creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "Queen of Wands",
    image: "/images/queen_of_wands.jpg",
    meaning: "The Queen of Wands represents a person or energy connected to the wands suit. It brings traits of creativity, ambition, and taking action. They represent the element of fire.",
  },
  {
    name: "King of Wands",
    image: "/images/king_of_wands.jpg",
    meaning: "The King of Wands represents a person or energy connected to the wands suit. It brings traits of creativity, ambition, and taking action. They represent the element of fire.",
  },

  {
    name: "Ace of Cups",
    image: "/images/ace_of_cups.jpg",
    meaning: "The Ace of Cups marks a new beginning in the realm of cups, often bringing emotional openness, love, and intuitive flow. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Two of Cups",
    image: "/images/two_of_cups.jpg",
    meaning: "The Two of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Three of Cups",
    image: "/images/three_of_cups.jpg",
    meaning: "The Three of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Four of Cups",
    image: "/images/four_of_cups.jpg",
    meaning: "The Four of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Five of Cups",
    image: "/images/five_of_cups.jpg",
    meaning: "The Five of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Six of Cups",
    image: "/images/six_of_cups.jpg",
    meaning: "The Six of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Seven of Cups",
    image: "/images/seven_of_cups.jpg",
    meaning: "The Seven of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Eight of Cups",
    image: "/images/eight_of_cups.jpg",
    meaning: "The Eight of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Nine of Cups",
    image: "/images/nine_of_cups.jpg",
    meaning: "The Nine of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Ten of Cups",
    image: "/images/ten_of_cups.jpg",
    meaning: "The Ten of Cups reflects themes from the cups suit, suggesting a stage in personal or external growth. It is linked to emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Page of Cups",
    image: "/images/page_of_cups.jpg",
    meaning: "The Page of Cups represents a person or energy connected to the cups suit. It brings traits of emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Knight of Cups",
    image: "/images/knight_of_cups.jpg",
    meaning: "The Knight of Cups represents a person or energy connected to the cups suit. It brings traits of emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "Queen of Cups",
    image: "/images/queen_of_cups.jpg",
    meaning: "The Queen of Cups represents a person or energy connected to the cups suit. It brings traits of emotions, relationships, and intuition. They represent the element of water.",
  },
  {
    name: "King of Cups",
    image: "/images/king_of_cups.jpg",
    meaning: "The King of Cups represents a person or energy connected to the cups suit. It brings traits of emotions, relationships, and intuition. They represent the element of water.",
  },
];

export default tarotCards;
