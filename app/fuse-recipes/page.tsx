import { Section } from "@/components/Section";

const recipes = [
  {
    fused: "🌵 Noobini Cactusini",
    plant: "🌵 Cactus",
    brainrot: "🍌 Noobini Bananini",
    rarity: "Rare"
  },
  {
    fused: "🍓 Orangutini Strawberrini",
    plant: "🍓 Strawberry",
    brainrot: "🍍 Orangutini Ananassini",
    rarity: "Rare"
  },
  {
    fused: "🎃 Svinino Pumpkinino",
    plant: "🎃 Pumpkin",
    brainrot: "🐷 Svinino Bombondino",
    rarity: "Epic"
  },
  {
    fused: "🌻 Brr Brr Sunflowerim",
    plant: "🌻 Sunflower",
    brainrot: "❄️ Brr Brr Patapim",
    rarity: "Epic"
  },
  {
    fused: "🐉 Dragonfruitina Dolphinita",
    plant: "🐉 Dragon Fruit",
    brainrot: "🐬 Bananita Dolphinita",
    rarity: "Legendary"
  },
  {
    fused: "🍆 Eggplantini Burbalonini",
    plant: "🍆 Eggplant",
    brainrot: "🎈 Burbaloni Lulioli",
    rarity: "Legendary"
  },
  {
    fused: "🍉 Bombardilo Watermelondrilo",
    plant: "🍉 Watermelon",
    brainrot: "🐊 Bombardiro Crocodilo",
    rarity: "Mythic"
  },
  {
    fused: "🥥 Cocotanko Giraffanto",
    plant: "🥥 Cocotank",
    brainrot: "🦒 Giraffa Celeste",
    rarity: "Godly"
  },
  {
    fused: "🪴 Carnivourita Tralalerita",
    plant: "🪴 Carnivorous Plant",
    brainrot: "🎭 Tralalelo Tralala",
    rarity: "Godly"
  },
  {
    fused: "🥕 Los Mr Carrotitos",
    plant: "🥕 Mr Carrot",
    brainrot: "🎪 Los Tralaleritos",
    rarity: "Secret"
  }
];

const navLinks = [
  { href: "#unlock", label: "🔓 Unlock" },
  { href: "#recipes", label: "📖 Recipes" },
  { href: "#notes", label: "📝 Notes" }
];

export default function FuseRecipesPage() {
  return (
    <div className="page-wrapper" id="fusion-top">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">🧩 Fusion Guide — Unlocking Special Brainrots</h1>
          <p className="section-description">
            Fusion combines specific plants with brainrots to build unique allies. The feature unlocks once you power up the Fuse Machine after your first rebirth.
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

      <Section
        id="unlock"
        title="🔓 How to Unlock the Fuse Machine"
        description="Complete these requirements after Rebirth 1 to activate fusion."
      >
        <ul className="list">
          <li>💰 Pay $1M cash upfront.</li>
          <li>🧬 Deliver 1 Bombini Gussini (Mythic) and 1 Tralalelo Tralala (Godly).</li>
          <li>📍 Locate the machine to the right of the brainrot spawn arena.</li>
          <li>⏳ Each fusion attempt requires a 35-minute crafting timer.</li>
        </ul>
        <div className="callout">
          🚨 Fusion consumes inputs permanently—stockpile duplicates before committing rare combos.
        </div>
      </Section>

      <Section
        id="recipes"
        title="📖 Fusion Recipes"
        description="Match exact plant and brainrot pairs to craft these hybrids."
      >
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Fused Brainrot</th>
                <th>Plant</th>
                <th>Brainrot</th>
                <th>Rarity</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe) => (
                <tr key={recipe.fused}>
                  <td className="name-cell">{recipe.fused}</td>
                  <td>{recipe.plant}</td>
                  <td>{recipe.brainrot}</td>
                  <td><span className="chip rarity">{recipe.rarity}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="notes"
        title="📝 Fusion Notes"
        description="Keep these limitations in mind before starting a craft."
      >
        <ul className="list">
          <li>🗑️ Consumed plants and brainrots are not returned after fusion.</li>
          <li>🚫 Existing mutations do not transfer to the resulting hybrid.</li>
          <li>🎲 Fused brainrot size rolls randomly—reroll if you need heavier stats.</li>
          <li>📦 Ensure collection slots are free or the result may be discarded.</li>
        </ul>
      </Section>

      <a className="back-to-top" href="#fusion-top">
        ↑ Back to top
      </a>
    </div>
  );
}
