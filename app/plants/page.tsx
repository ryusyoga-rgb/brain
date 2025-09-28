import { Section } from "@/components/Section";

const plants = [
  { plant: "🌵 Cactus", rarity: "Rare", cost: "$200", damage: "10" },
  { plant: "🍓 Strawberry", rarity: "Rare", cost: "$1.25K", damage: "25" },
  { plant: "🎃 Pumpkin", rarity: "Epic", cost: "$5K", damage: "55" },
  { plant: "🌻 Sunflower", rarity: "Epic", cost: "$25K", damage: "115" },
  { plant: "🐉 Dragon Fruit", rarity: "Legendary", cost: "$100K", damage: "250" },
  { plant: "🍆 Eggplant", rarity: "Legendary", cost: "$250K", damage: "500" },
  { plant: "🍉 Watermelon", rarity: "Mythic", cost: "$1M", damage: "750" },
  { plant: "🥥 Cocotank", rarity: "Godly", cost: "$5M", damage: "1,200" },
  { plant: "🪴 Carnivorous Plant", rarity: "Godly", cost: "$25M", damage: "2,200" },
  { plant: "🥕 Mr. Carrot", rarity: "Secret", cost: "$50M", damage: "3,500" },
  { plant: "🍅 Tomatrio", rarity: "Secret", cost: "$125M", damage: "4,500" }
];

const mutations = [
  { label: "⚪ Normal", effect: "1× base damage" },
  { label: "🥇 Gold", effect: "2× base damage" },
  { label: "💎 Diamond", effect: "3× base damage" },
  { label: "🌈 Neon", effect: "4.5× base damage" },
  { label: "❄️ Frozen", effect: "4× base damage + 0.3s freeze" }
];

const strategyStages = [
  {
    stage: "🌱 Early Game (< $10K)",
    notes: [
      "🌵 Open with Cactus, then layer Strawberry, and save for Pumpkin spikes.",
      "✨ Prioritize mutated commons over unmutated higher tiers for value."
    ]
  },
  {
    stage: "🌿 Mid Game ($10K–$500K)",
    notes: [
      "🎯 Anchor lanes with Epic plants (Pumpkin, Sunflower).",
      "⚖️ Maintain a 70% brainrot income / 30% plant investment balance."
    ]
  },
  {
    stage: "🌳 Late Game ($500K+)",
    notes: [
      "🚀 Scale into Legendary and Mythic plants for exponential DPS.",
      "💥 A Diamond Eggplant hits 1,500 damage—double a base Watermelon."
    ]
  },
  {
    stage: "🌌 Endgame ($50M+)",
    notes: [
      "🥕 Chase Mr. Carrot and Tomatrio drops.",
      "🔷 Target Neon or Diamond mutations to cap damage output."
    ]
  }
];

const navLinks = [
  { href: "#obtain", label: "🛒 Obtain" },
  { href: "#mutations", label: "✨ Mutations" },
  { href: "#plant-list", label: "📖 Plant List" },
  { href: "#strategy", label: "🧭 Strategy" }
];

export default function PlantsPage() {
  return (
    <div className="page-wrapper" id="plants-top">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">🌱 Plants Guide — All Plants & Strategies</h1>
          <p className="section-description">
            Plants are your primary defense in Plants vs Brainrots. Every plant carries unique attack power and cost,
            while rarer seeds deliver massive damage spikes. Mutations further multiply their effectiveness.
          </p>
        </div>
        <div className="page-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <Section id="obtain" title="🛒 How to Obtain Plants">
        <ul className="list">
          <li>🧑‍🌾 Purchase seeds from George the NPC positioned next to your garden plot.</li>
          <li>⏱️ Seed inventory refreshes every five minutes—check back often for rarities.</li>
          <li>🌿 Planted units grow automatically and fire down their assigned lanes.</li>
          <li>🎲 Each plant spawn can roll distinct sizes and mutations that adjust output.</li>
        </ul>
      </Section>

      <Section
        id="mutations"
        title="✨ Mutation System"
        description="Mutations stack multiplicatively with base stats and add utility effects."
      >
        <div className="card-grid">
          {mutations.map((mutation) => (
            <div className="card" key={mutation.label}>
              <h3 className="card-title">{mutation.label}</h3>
              <p className="card-detail">{mutation.effect}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="plant-list"
        title="📖 All Plants List"
        description="Reference stats before spending precious seeds and cash."
      >
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Plant</th>
                <th>Rarity</th>
                <th>Seed Cost</th>
                <th>Base Damage</th>
              </tr>
            </thead>
            <tbody>
              {plants.map((entry) => (
                <tr key={entry.plant}>
                  <td className="name-cell">{entry.plant}</td>
                  <td><span className="chip rarity">{entry.rarity}</span></td>
                  <td><span className="chip cost">{entry.cost}</span></td>
                  <td><span className="chip damage">{entry.damage}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="callout">
          🔍 Focus upgrades on Neon or Diamond rolls—mutation multipliers often beat raw rarity during progression.
        </div>
      </Section>

      <Section
        id="strategy"
        title="🧭 Plant Strategy"
        description="Scale through each economic bracket with the right roster."
      >
        <div className="card-grid">
          {strategyStages.map((stage) => (
            <div className="card" key={stage.stage}>
              <h3 className="card-title">{stage.stage}</h3>
              <ul className="list">
                {stage.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <a className="back-to-top" href="#plants-top">
        ↑ Back to top
      </a>
    </div>
  );
}
