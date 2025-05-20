const tarotCards = [
  {
  name: "The Fool",
  image: "/images/the_fool.jpg",
  meaning: "A symbol of new beginnings and limitless potential. The Fool encourages taking a leap of faith, trusting the universe, and embracing the unknown with a sense of wonder and innocence.",
  reversedMeaning: "A warning against recklessness and naivety. The Fool reversed suggests hesitation, poor judgment, or ignoring risks that could lead to missteps."
},
{
  name: "The Magician",
  image: "/images/the_magician.jpg",
  meaning: "A master of manifestation and transformation. The Magician represents taking inspired action, using skills and resources effectively, and realizing one's potential through willpower and focus.",
  reversedMeaning: "The Magician reversed warns of manipulation, deception, or misusing talents. It can indicate scattered energy, trickery, or untapped potential."
},
{
  name: "The High Priestess",
  image: "/images/the_high_priestess.jpg",
  meaning: "A guardian of mystery and inner wisdom. The High Priestess calls you to trust your intuition, embrace the unknown, and seek knowledge through silence, dreams, and deep reflection.",
  reversedMeaning: "Hidden truths and blocked intuition. The High Priestess reversed may indicate secrets, confusion, or ignoring inner guidance and instincts."
},
{
  name: "The Empress",
  image: "/images/the_empress.jpg",
  meaning: "Embodiment of nurturing, fertility, and abundance. The Empress invites you to connect with nature, embrace your creative power, and cultivate beauty and love in all forms.",
  reversedMeaning: "The Empress reversed suggests creative blocks, dependence on others, or smothering behavior. It's a reminder to nurture yourself and restore balance."
},
{
  name: "The Emperor",
  image: "/images/the_emperor.jpg",
  meaning: "A symbol of structure, authority, and stability. The Emperor brings order through logic and leadership, encouraging discipline, protection, and responsibility.",
  reversedMeaning: "The Emperor reversed signals rigidity, control issues, or abuse of power. It may call attention to stubbornness or authoritarian tendencies."
},
{
  name: "The Hierophant",
  image: "/images/the_hierophant.jpg",
  meaning: "A guide of spiritual traditions and moral codes. The Hierophant suggests seeking guidance through education, religious practices, or mentorship, and honoring shared values.",
  reversedMeaning: "Nonconformity and inner truth. The Hierophant reversed may point to challenging outdated beliefs or forging your own spiritual path."
},
{
  name: "The Lovers",
  image: "/images/the_lovers.jpg",
  meaning: "A card of connection, union, and meaningful choices. The Lovers ask you to consider alignment with your values in love and life, and to act with openness and honesty.",
  reversedMeaning: "The Lovers reversed reflects disharmony, misalignment in relationships, or difficult choices lacking clarity or shared values."
},
{
  name: "The Chariot",
  image: "/images/the_chariot.jpg",
  meaning: "A card of willpower, triumph, and momentum. The Chariot urges you to stay focused, overcome obstacles, and take charge of your path with determination and confidence.",
  reversedMeaning: "The Chariot reversed warns of lack of direction, scattered focus, or feeling out of control. It asks you to realign your will and regain discipline."
},
{
  name: "Strength",
  image: "/images/strength.jpg",
  meaning: "An emblem of courage, patience, and resilience. Strength teaches you to face challenges with compassion and inner fortitude, blending softness with power.",
  reversedMeaning: "Strength reversed suggests self-doubt, inner weakness, or fear. It's a call to rebuild confidence and approach struggles with gentleness."
},
{
  name: "The Hermit",
  image: "/images/the_hermit.jpg",
  meaning: "A seeker of truth through solitude and introspection. The Hermit invites a time for self-reflection, spiritual retreat, and discovering inner guidance through quiet contemplation.",
  reversedMeaning: "The Hermit reversed signals isolation, loneliness, or avoidance of inner work. It may be time to reconnect with others or face truths you've been avoiding."
},
{
  name: "Wheel of Fortune",
  image: "/images/wheel_of_fortune.jpg",
  meaning: "A symbol of fate, cycles, and change. The Wheel of Fortune reminds you that life is constantly shifting—what goes up must come down—and encourages adaptability and faith.",
  reversedMeaning: "The Wheel reversed suggests delays, setbacks, or resisting change. Trust that challenges are part of a bigger cycle and growth is still unfolding."
},
{
  name: "Justice",
  image: "/images/justice.jpg",
  meaning: "A call for truth, fairness, and accountability. Justice represents balance, legal matters, and the importance of integrity in decision-making and consequences.",
  reversedMeaning: "Justice reversed warns of dishonesty, unfair treatment, or lack of accountability. It's time to confront imbalance and take responsibility."
},
{
  name: "The Hanged Man",
  image: "/images/the_hanged_man.jpg",
  meaning: "A pause for reflection, surrender, and new perspective. The Hanged Man asks you to let go of control and allow space for spiritual insight and transformation.",
  reversedMeaning: "The Hanged Man reversed indicates stalling, indecision, or clinging to outdated views. Growth requires release and a shift in perspective."
},
{
  name: "Death",
  image: "/images/death.jpg",
  meaning: "An end that leads to renewal and growth. Death symbolizes major transformation, releasing the old, and welcoming powerful changes with acceptance and grace.",
  reversedMeaning: "Death reversed warns of resisting transformation or fearing change. Clinging to the past may be preventing new opportunities from taking root."
},
{
  name: "Temperance",
  image: "/images/temperance.jpg",
  meaning: "The art of balance and moderation. Temperance encourages patience, harmony, and integration of opposites to find peace and flow in life.",
  reversedMeaning: "Temperance reversed reflects imbalance, conflict, or excess. Reevaluate where harmony is lacking and restore inner alignment."
},
{
  name: "The Devil",
  image: "/images/the_devil.jpg",
  meaning: "Temptation, materialism, and shadow self. The Devil reveals unhealthy attachments or illusions and calls you to confront what binds you and reclaim your power.",
  reversedMeaning: "The Devil reversed signals breaking free from limitations or toxic patterns. You're beginning to reclaim power and shed illusions."
},
{
  name: "The Tower",
  image: "/images/the_tower.jpg",
  meaning: "Sudden upheaval, awakening, and destruction of illusions. The Tower clears away what no longer serves you, often through disruption, to rebuild with truth and clarity.",
  reversedMeaning: "The Tower reversed hints at avoided disaster or delayed change. It's a chance to embrace transformation before it's forced upon you."
},
{
  name: "The Star",
  image: "/images/the_star.jpg",
  meaning: "Hope, inspiration, and spiritual renewal. The Star brings light after darkness, guiding you toward healing, clarity, and trust in the universe’s plan.",
  reversedMeaning: "The Star reversed suggests hopelessness, lack of clarity, or disconnection from purpose. Reconnect with your inner light and vision."
},
{
  name: "The Moon",
  image: "/images/the_moon.jpg",
  meaning: "Illusion, intuition, and hidden truths. The Moon suggests uncertainty or confusion, encouraging you to trust your instincts and explore what lies beneath the surface.",
  reversedMeaning: "The Moon reversed warns of deception, fear, or emotional confusion. Clear the fog and confront what has been hidden or misunderstood."
},
{
  name: "The Sun",
  image: "/images/the_sun.jpg",
  meaning: "Joy, success, and clarity. The Sun radiates positivity, confidence, and the celebration of life. It illuminates truth and brings happiness, vitality, and abundance.",
  reversedMeaning: "The Sun reversed may reflect temporary sadness, burnout, or overconfidence. Joy is still near—realign with authenticity and gratitude."
},
{
  name: "Judgement",
  image: "/images/judgement.jpg",
  meaning: "Awakening, redemption, and self-evaluation. Judgement calls for reflection on past actions, embracing transformation, and rising to a higher version of yourself.",
  reversedMeaning: "Judgement reversed shows self-doubt, fear of change, or avoiding a life review. You may be holding back from a calling or necessary transformation."
},
{
  name: "The World",
  image: "/images/the_world.jpg",
  meaning: "Completion, fulfillment, and unity. The World signifies the successful conclusion of a journey, wholeness, and the opening of new chapters with wisdom and accomplishment.",
  reversedMeaning: "The World reversed signals delays, unfinished goals, or lack of closure. Something may still be incomplete before you move on."
},
  /////////////////////////////////////////////////////////////////////////////////////

  {
  name: "Ace of Swords",
  image: "/images/ace_of_swords.jpg",
  meaning: "A breakthrough in clarity or communication. The Ace of Swords represents truth, mental clarity, and decisive insight that cuts through confusion.",
  reversedMeaning: "Clouded judgment and confusion. The Ace of Swords reversed suggests mental fog, miscommunication, or a missed opportunity to speak or see the truth."
},
{
  name: "Two of Swords",
  image: "/images/two_of_swords.jpg",
  meaning: "A difficult decision lies ahead. The Two of Swords symbolizes blocked emotions, avoidance, or needing to choose between two opposing paths.",
  reversedMeaning: "Inner conflict and avoidance. The Two of Swords reversed points to blocked emotions, difficult choices, or refusing to face reality."
},
{
  name: "Three of Swords",
  image: "/images/three_of_swords.jpg",
  meaning: "Heartache and emotional pain. The Three of Swords reveals sorrow, betrayal, or loss that must be acknowledged and processed.",
  reversedMeaning: "Healing from pain or resisting emotional release. The Three of Swords reversed acknowledges sorrow but encourages release and recovery."
},
{
  name: "Four of Swords",
  image: "/images/four_of_swords.jpg",
  meaning: "A time for rest and reflection. The Four of Swords encourages mental recuperation, meditation, or healing from stress or conflict.",
  reversedMeaning: "Restlessness and burnout. The Four of Swords reversed warns against pushing forward without proper rest or reflection."
},
{
  name: "Five of Swords",
  image: "/images/five_of_swords.jpg",
  meaning: "Victory at a cost. The Five of Swords represents conflict, tension, or ego battles that may leave lingering consequences.",
  reversedMeaning: "Resolution or lingering resentment. The Five of Swords reversed reflects regret after conflict, or a chance to make peace and learn from defeat."
},
{
  name: "Six of Swords",
  image: "/images/six_of_swords.jpg",
  meaning: "A transition or journey to healing. The Six of Swords symbolizes moving away from hardship and entering calmer emotional waters.",
  reversedMeaning: "Resistance to change. The Six of Swords reversed indicates difficulty moving forward or clinging to past struggles."
},
{
  name: "Seven of Swords",
  image: "/images/seven_of_swords.jpg",
  meaning: "Strategy or deception is at play. The Seven of Swords may suggest secrecy, cleverness, or acting alone to avoid confrontation.",
  reversedMeaning: "Truth revealed. The Seven of Swords reversed suggests exposure of deceit or an opportunity to come clean and act with integrity."
},
{
  name: "Eight of Swords",
  image: "/images/eight_of_swords.jpg",
  meaning: "Feeling trapped or restricted. The Eight of Swords shows self-imposed limitations or anxiety clouding your perception of escape.",
  reversedMeaning: "Breaking free. The Eight of Swords reversed shows liberation from limiting beliefs or escaping a mental trap."
},
{
  name: "Nine of Swords",
  image: "/images/nine_of_swords.jpg",
  meaning: "Anxiety and sleepless nights. The Nine of Swords reflects worry, guilt, or mental anguish weighing heavily on your mind.",
  reversedMeaning: "Releasing fear and anxiety. The Nine of Swords reversed encourages facing inner turmoil and beginning the healing process."
},
{
  name: "Ten of Swords",
  image: "/images/ten_of_swords.jpg",
  meaning: "A painful ending. The Ten of Swords signifies betrayal, failure, or rock bottom — but also the promise of a new dawn.",
  reversedMeaning: "Recovery and renewal. The Ten of Swords reversed signifies the end of suffering and the first steps toward healing."
},
{
  name: "Page of Swords",
  image: "/images/page_of_swords.jpg",
  meaning: "A curious and observant messenger. The Page of Swords stands for new ideas, vigilance, or communication that requires clarity and tact.",
  reversedMeaning: "Gossip and haste. The Page of Swords reversed suggests impulsive words, misinformation, or jumping to conclusions."
},
{
  name: "Knight of Swords",
  image: "/images/knight_of_swords.jpg",
  meaning: "A bold and determined force. The Knight of Swords charges forward with logic, ambition, and an unwavering pursuit of truth.",
  reversedMeaning: "Recklessness and impatience. The Knight of Swords reversed charges ahead without direction, risking mistakes or conflict."
},
{
  name: "Queen of Swords",
  image: "/images/queen_of_swords.jpg",
  meaning: "Wisdom through experience. The Queen of Swords represents clarity, honesty, and the strength to lead with intellect and independence.",
  reversedMeaning: "Coldness or harsh judgment. The Queen of Swords reversed warns of being overly critical or emotionally distant."
},
{
  name: "King of Swords",
  image: "/images/king_of_swords.jpg",
  meaning: "Authority in thought and action. The King of Swords symbolizes mental strength, integrity, and strategic leadership rooted in truth.",
  reversedMeaning: "Abuse of power or rigid thinking. The King of Swords reversed may indicate manipulation, domination, or inflexible logic."
},

{
  name: "Ace of Pentacles",
  image: "/images/ace_of_pentacles.jpg",
  meaning: "A seed of prosperity and potential. The Ace of Pentacles represents financial opportunity, stability, and the chance to build something long-lasting and tangible.",
  reversedMeaning: "Missed opportunity. The Ace of Pentacles reversed points to delays, poor planning, or unstable foundations."
},

{
  name: "Two of Pentacles",
  image: "/images/two_of_pentacles.jpg",
  meaning: "Balancing priorities and adapting to change. The Two of Pentacles reflects the need to manage resources, time, or commitments with flexibility and grace.",
  reversedMeaning: "Overwhelm and imbalance. The Two of Pentacles reversed suggests struggling to manage priorities or finances."
},

{
  name: "Three of Pentacles",
  image: "/images/three_of_pentacles.jpg",
  meaning: "Cooperation and teamwork. The Three of Pentacles represents collaboration, skill-sharing, and building something meaningful through shared effort.",
  reversedMeaning: "Lack of collaboration. The Three of Pentacles reversed reflects poor teamwork, miscommunication, or underappreciation."
},

{
  name: "Four of Pentacles",
  image: "/images/four_of_pentacles.jpg",
  meaning: "Holding tightly to security. The Four of Pentacles symbolizes financial control, self-protection, or fear of letting go.",
  reversedMeaning: "Greed or fear of loss. The Four of Pentacles reversed warns against possessiveness or clinging to material security."
},

{
  name: "Five of Pentacles",
  image: "/images/five_of_pentacles.jpg",
  meaning: "Struggles with hardship or isolation. The Five of Pentacles reveals financial loss, rejection, or spiritual poverty, but also the presence of support if sought.",
  reversedMeaning: "Recovery from hardship. The Five of Pentacles reversed signals renewed hope, support, or emerging from difficulty."
},

{
  name: "Six of Pentacles",
  image: "/images/six_of_pentacles.jpg",
  meaning: "Generosity and balance. The Six of Pentacles indicates giving and receiving, fairness in relationships, and mutual support.",
  reversedMeaning: "Imbalance in giving and receiving. The Six of Pentacles reversed may reflect one-sided generosity or hidden conditions."
},

{
  name: "Seven of Pentacles",
  image: "/images/seven_of_pentacles.jpg",
  meaning: "Patience and long-term vision. The Seven of Pentacles suggests reevaluation, steady growth, and the need to trust the process.",
  reversedMeaning: "Frustration and impatience. The Seven of Pentacles reversed suggests lack of reward or reevaluation of long-term goals."
},

{
  name: "Eight of Pentacles",
  image: "/images/eight_of_pentacles.jpg",
  meaning: "Dedication to mastery. The Eight of Pentacles represents skill-building, focus, and hard work toward personal or material goals.",
  reversedMeaning: "Lack of focus. The Eight of Pentacles reversed warns of burnout, perfectionism, or going through the motions without passion."
},

{
  name: "Nine of Pentacles",
  image: "/images/nine_of_pentacles.jpg",
  meaning: "Self-sufficiency and abundance. The Nine of Pentacles reflects independence, luxury, and enjoying the fruits of your labor.",
  reversedMeaning: "Dependence or setbacks. The Nine of Pentacles reversed reflects loss of stability, indulgence, or reliance on others."
},

{
  name: "Ten of Pentacles",
  image: "/images/ten_of_pentacles.jpg",
  meaning: "Legacy and fulfillment. The Ten of Pentacles symbolizes lasting wealth, family success, and stability passed across generations.",
  reversedMeaning: "Instability or short-term focus. The Ten of Pentacles reversed suggests issues with legacy, inheritance, or family conflict."
},

{
  name: "Page of Pentacles",
  image: "/images/page_of_pentacles.jpg",
  meaning: "A student of the material world. The Page of Pentacles brings messages of opportunity, practicality, and a thirst for knowledge or growth.",
  reversedMeaning: "Lack of commitment. The Page of Pentacles reversed may reflect missed chances, laziness, or inconsistency with goals."
},

{
  name: "Knight of Pentacles",
  image: "/images/knight_of_pentacles.jpg",
  meaning: "Diligence and reliability. The Knight of Pentacles moves forward with patience, consistency, and a strong work ethic.",
  reversedMeaning: "Stagnation or overcaution. The Knight of Pentacles reversed moves too slowly or resists necessary change."
},

{
  name: "Queen of Pentacles",
  image: "/images/queen_of_pentacles.jpg",
  meaning: "Nurturing and resourceful energy. The Queen of Pentacles offers care, financial wisdom, and grounded support in the home and beyond.",
  reversedMeaning: "Neglect or imbalance. The Queen of Pentacles reversed warns of putting others' needs first at the cost of self-care or stability."
},

{
  name: "King of Pentacles",
  image: "/images/king_of_pentacles.jpg",
  meaning: "Mastery of wealth and leadership. The King of Pentacles represents abundance, responsibility, and confident material success.",
  reversedMeaning: "Greed or control. The King of Pentacles reversed points to materialism, arrogance, or misuse of wealth."
},

{
  name: "Ace of Wands",
  image: "/images/ace_of_wands.jpg",
  meaning: "A surge of inspiration and drive. The Ace of Wands represents bold beginnings, creative spark, and the energy to pursue new opportunities.",
  reversedMeaning: "Creative block or delay. The Ace of Wands reversed reflects lost passion, missed chances, or hesitation to begin."
},

{
  name: "Two of Wands",
  image: "/images/two_of_wands.jpg",
  meaning: "Planning and potential. The Two of Wands suggests future vision, making decisions, and preparing to expand your horizons.",
  reversedMeaning: "Fear of the unknown. The Two of Wands reversed indicates indecision, poor planning, or reluctance to explore."
},

{
  name: "Three of Wands",
  image: "/images/three_of_wands.jpg",
  meaning: "Progress and forward momentum. The Three of Wands reflects growth, expanding goals, and seeing results from past choices.",
  reversedMeaning: "Stalled progress. The Three of Wands reversed suggests delays, frustration, or limited foresight."
},

{
  name: "Four of Wands",
  image: "/images/four_of_wands.jpg",
  meaning: "Celebration and harmony. The Four of Wands marks milestones, unity, or a joyful homecoming and sense of belonging.",
  reversedMeaning: "Instability in home or community. The Four of Wands reversed can signal tension, broken commitments, or canceled celebrations."
},

{
  name: "Five of Wands",
  image: "/images/five_of_wands.jpg",
  meaning: "Competition or challenge. The Five of Wands highlights conflict, differing opinions, or the struggle to assert yourself.",
  reversedMeaning: "Avoiding conflict. The Five of Wands reversed reflects internal struggle or suppressed competition."
},

{
  name: "Six of Wands",
  image: "/images/six_of_wands.jpg",
  meaning: "Recognition and success. The Six of Wands brings praise, achievement, and validation from others for your efforts.",
  reversedMeaning: "Ego or lack of recognition. The Six of Wands reversed may reveal insecurity, public failure, or false pride."
},

{
  name: "Seven of Wands",
  image: "/images/seven_of_wands.jpg",
  meaning: "Defense and perseverance. The Seven of Wands suggests standing your ground and defending your position against pressure or opposition.",
  reversedMeaning: "Overwhelmed or defensive. The Seven of Wands reversed warns of burnout, giving up, or needing new perspective."
},

{
  name: "Eight of Wands",
  image: "/images/eight_of_wands.jpg",
  meaning: "Swift movement and momentum. The Eight of Wands represents progress, communication, or travel happening quickly.",
  reversedMeaning: "Delays or miscommunication. The Eight of Wands reversed halts momentum and clouds messages or plans."
},

{
  name: "Nine of Wands",
  image: "/images/nine_of_wands.jpg",
  meaning: "Resilience and endurance. The Nine of Wands reflects persistence through adversity and guarding what you’ve built.",
  reversedMeaning: "Exhaustion or paranoia. The Nine of Wands reversed asks if you're defending something that no longer serves you."
},

{
  name: "Ten of Wands",
  image: "/images/ten_of_wands.jpg",
  meaning: "Overburdened but committed. The Ten of Wands symbolizes responsibility, pressure, and the weight of too many obligations.",
  reversedMeaning: "Burden and burnout. The Ten of Wands reversed suggests it's time to delegate, release, or reprioritize responsibilities."
},

{
  name: "Page of Wands",
  image: "/images/page_of_wands.jpg",
  meaning: "Enthusiasm and exploration. The Page of Wands brings excitement for discovery, personal growth, and creative possibilities.",
  reversedMeaning: "Lack of direction. The Page of Wands reversed may signal immaturity, aimlessness, or failed starts."
},

{
  name: "Knight of Wands",
  image: "/images/knight_of_wands.jpg",
  meaning: "Adventure and ambition. The Knight of Wands charges ahead with passion, courage, and determination to make things happen.",
  reversedMeaning: "Impulsiveness or arrogance. The Knight of Wands reversed leaps without looking, risking chaos or backlash."
},

{
  name: "Queen of Wands",
  image: "/images/queen_of_wands.jpg",
  meaning: "Confidence and charisma. The Queen of Wands embodies warmth, creativity, and leadership that inspires others.",
  reversedMeaning: "Insecurity or jealousy. The Queen of Wands reversed may represent someone overbearing or unsure of their worth."
},

{
  name: "King of Wands",
  image: "/images/king_of_wands.jpg",
  meaning: "Visionary leadership and boldness. The King of Wands represents influence, ambition, and commanding presence in action.",
  reversedMeaning: "Domineering or reckless leadership. The King of Wands reversed warns of inflated ego or poor follow-through."
},

{
  name: "Ace of Cups",
  image: "/images/ace_of_cups.jpg",
  meaning: "A flow of emotion and new beginnings. The Ace of Cups represents love, spiritual connection, and the potential for emotional fulfillment.",
  reversedMeaning: "Blocked emotions. The Ace of Cups reversed suggests emotional emptiness, withheld love, or difficulty expressing feelings."
},

{
  name: "Two of Cups",
  image: "/images/two_of_cups.jpg",
  meaning: "Mutual love and connection. The Two of Cups reflects partnership, harmony, and meaningful emotional bonds.",
  reversedMeaning: "Disconnection or imbalance. The Two of Cups reversed indicates disharmony in relationships or unmet emotional needs."
},

{
  name: "Three of Cups",
  image: "/images/three_of_cups.jpg",
  meaning: "Joy and celebration with others. The Three of Cups symbolizes friendship, community, and coming together in shared happiness.",
  reversedMeaning: "Overindulgence or exclusion. The Three of Cups reversed reflects gossip, partying to excess, or feeling left out."
},

{
  name: "Four of Cups",
  image: "/images/four_of_cups.jpg",
  meaning: "Apathy or emotional detachment. The Four of Cups suggests introspection, discontent, or overlooking potential opportunities.",
  reversedMeaning: "Emotional apathy. The Four of Cups reversed may indicate new opportunities ignored due to discontent or distraction."
},

{
  name: "Five of Cups",
  image: "/images/five_of_cups.jpg",
  meaning: "Disappointment and grief. The Five of Cups acknowledges loss or regret but encourages focusing on what still remains.",
  reversedMeaning: "Acceptance and healing. The Five of Cups reversed encourages moving forward after disappointment or grief."
},

{
  name: "Six of Cups",
  image: "/images/six_of_cups.jpg",
  meaning: "Nostalgia and innocence. The Six of Cups represents memories, past joy, or the warmth of simpler times.",
  reversedMeaning: "Living in the past. The Six of Cups reversed warns against nostalgia that blocks present growth."
},

{
  name: "Seven of Cups",
  image: "/images/seven_of_cups.jpg",
  meaning: "Choices and dreams. The Seven of Cups invites imagination but warns of illusion, fantasy, or being overwhelmed by options.",
  reversedMeaning: "Clarity through decision. The Seven of Cups reversed cuts through illusion and reveals realistic paths forward."
},

{
  name: "Eight of Cups",
  image: "/images/eight_of_cups.jpg",
  meaning: "Walking away to find truth. The Eight of Cups reflects emotional withdrawal, leaving behind what no longer fulfills you.",
  reversedMeaning: "Avoidance or fear of change. The Eight of Cups reversed reflects staying in unfulfilling situations out of fear."
},

{
  name: "Nine of Cups",
  image: "/images/nine_of_cups.jpg",
  meaning: "Emotional satisfaction and wishes fulfilled. The Nine of Cups is a card of contentment, gratitude, and personal pleasure.",
  reversedMeaning: "Overindulgence or dissatisfaction. The Nine of Cups reversed questions whether desires are truly fulfilling."
},

{
  name: "Ten of Cups",
  image: "/images/ten_of_cups.jpg",
  meaning: "Harmony and emotional fulfillment. The Ten of Cups shows deep connection, lasting happiness, and unity in love or family.",
  reversedMeaning: "Shattered harmony. The Ten of Cups reversed reflects conflict in relationships or unmet emotional expectations."
},

{
  name: "Page of Cups",
  image: "/images/page_of_cups.jpg",
  meaning: "A message from the heart. The Page of Cups brings emotional openness, creativity, and intuitive exploration.",
  reversedMeaning: "Emotional immaturity. The Page of Cups reversed suggests insecurity, moodiness, or blocked creativity."
},

{
  name: "Knight of Cups",
  image: "/images/knight_of_cups.jpg",
  meaning: "Romantic action and charm. The Knight of Cups is idealistic, driven by love, creativity, or emotional quests.",
  reversedMeaning: "Unrealistic ideals. The Knight of Cups reversed may indicate emotional inconsistency or charm without depth."
},

{
  name: "Queen of Cups",
  image: "/images/queen_of_cups.jpg",
  meaning: "Compassion and emotional wisdom. The Queen of Cups offers empathy, intuition, and supportive nurturing energy.",
  reversedMeaning: "Emotional overwhelm. The Queen of Cups reversed warns of codependency, poor boundaries, or suppressed feelings."
},

{
  name: "King of Cups",
  image: "/images/king_of_cups.jpg",
  meaning: "Emotional balance and control. The King of Cups embodies mature compassion, diplomacy, and calm leadership through feeling.",
  reversedMeaning: "Manipulation or repression. The King of Cups reversed suggests emotional detachment, control, or insincerity."
}

];

export default tarotCards;
