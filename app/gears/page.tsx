import { Section } from "@/components/Section";

const gears = [
  { gear: "🦇 Bat", rarity: "Common", price: "Free", effect: "20 damage swipe." },
  { gear: "🍌 Banana Gun", rarity: "Epic", price: "$25K", effect: "Fires 100 damage shots." },
  { gear: "🥕 Carrot Launcher", rarity: "Godly", price: "$500K", effect: "Deals 500 damage and yeets players." },
  { gear: "❄️ Frost Grenade", rarity: "Epic", price: "$12.5K", effect: "Stuns brainrots on impact." },
  { gear: "🌬️ Frost Blower", rarity: "Legendary", price: "$125K", effect: "Freezes and slows targets by 50%." },
  { gear: "💧 Water Bucket", rarity: "Epic", price: "$7.5K", effect: "Accelerates plant growth by 25%." },
  { gear: "🍀 Lucky Potion", rarity: "Legendary", price: "TBD", effect: "Temporarily boosts rare brainrot luck." },
  { gear: "⚡ Speed Potion", rarity: "Legendary", price: "TBD", effect: "Increases movement and action speed." }
];

const priority = [
  { label: "🔥 Must Buy", detail: "Frost Grenade for reliable stuns and boss control." },
  { label: "✨ Recommended", detail: "Pair Lucky Potion with Speed Potion before long farming sessions." },
  { label: "📦 Situational", detail: "Water Bucket shines when tending Epic+ plants." },
  { label: "🎮 Fun", detail: "Carrot Launcher turns multiplayer runs into chaos." }
];

const advancedTips = [
  "🎯 Lob Frost Grenades at elite brainrots just before they breach your front line.",
  "🍀⚡ Drink Lucky and Speed potions in tandem to maximize spawn rolls and lane clear speed.",
  "💵 Reserve at least $15K so you can immediately restock grenades between refreshes."
];

const navLinks = [
  { href: "#all-gear", label: "🛒 Gear" },
  { href: "#priority", label: "🎯 Priority" },
  { href: "#tips", label: "💡 Tips" }
];

export default function GearsPage() {
  return (
    <div className="page-wrapper" id="gears-top">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">🛠️ Gears Guide — Tools, Potions & Tactics</h1>
          <p className="section-description">
            Gears amplify your combat power, utility, and farming efficiency. The shop refreshes every five minutes,
            so prioritize purchases that match your current goals.
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
        id="all-gear"
        title="🛒 All Gear"
        description="Compare rarity, prices, and combat effects before you buy."
      >
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Gear</th>
                <th>Rarity</th>
                <th>Price</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              {gears.map((gear) => (
                <tr key={gear.gear}>
                  <td className="name-cell">{gear.gear}</td>
                  <td><span className="chip rarity">{gear.rarity}</span></td>
                  <td><span className="chip cost">{gear.price}</span></td>
                  <td>{gear.effect}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="callout">
          ⚙️ Keep one slot free before each refresh—gear purchases instantly equip if your inventory is full.
        </div>
      </Section>

      <Section
        id="priority"
        title="🎯 Purchase Priority"
        description="Grab these items in order when the shop resets."
      >
        <div className="card-grid">
          {priority.map((item) => (
            <div className="card" key={item.label}>
              <h3 className="card-title">{item.label}</h3>
              <p className="card-detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="tips" title="💡 Advanced Tips" description="Micromanage gears to squeeze every ounce of value.">
        <ul className="list">
          {advancedTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Section>

      <a className="back-to-top" href="#gears-top">
        ↑ Back to top
      </a>
    </div>
  );
}
