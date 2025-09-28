import { Section } from "@/components/Section";

const mutationMultipliers = [
  { label: "⚪ Normal", effect: "1× income" },
  { label: "🥇 Gold", effect: "2× income" },
  { label: "💎 Diamond", effect: "3× income" },
  { label: "🌈 Neon", effect: "4.5× income" },
  { label: "🌟 Rainbow", effect: "5× income" },
  { label: "❄️ Frozen", effect: "4× income" },
  { label: "🪐 Galactic", effect: "7.5× income" }
];

const guaranteedDrops = [
  { label: "🌠 Legendary", detail: "Guaranteed drop every 100 spawns." },
  { label: "🌌 Mythic", detail: "Guaranteed drop every 500 spawns." },
  { label: "♻️ Rebirth", detail: "Each rebirth permanently boosts luck for rarities." }
];

const exampleIncome = [
  { weight: "⚖️ 5 kg", income: "≈ $300 / sec" },
  { weight: "⚖️ 10 kg", income: "$600 / sec" },
  { weight: "⚖️ 20 kg", income: "≈ $1,200 / sec" }
];

const navLinks = [
  { href: "#mechanics", label: "🔄 Loop" },
  { href: "#drops", label: "🎲 Drops" },
  { href: "#mutations", label: "✨ Multipliers" },
  { href: "#income", label: "📈 Income" },
  { href: "#tips", label: "🏆 Tips" }
];

export default function BrainrotsPage() {
  return (
    <div className="page-wrapper" id="brainrots-top">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">🧠 Brainrots Guide — Passive Income System</h1>
          <p className="section-description">
            Brainrots function as frontline enemies and long-term income engines. Capture, mutate, and manage them to
            bankroll every upgrade in Plants vs Brainrots.
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
        id="mechanics"
        title="🔄 How Brainrots Work"
        description="From lanes to the collection pen—track the full loop."
      >
        <ul className="list">
          <li>🚶‍♂️ Brainrots spawn in timed waves that march through dedicated lanes.</li>
          <li>🏡 Defeated brainrots join your collection and continue generating passive income, even while offline (at a reduced rate).</li>
          <li>⚖️ Heavier specimens produce higher payouts; more kilograms equals more cash.</li>
          <li>💰 Sell duplicate catches to Barry the NPC whenever you need an instant money infusion.</li>
        </ul>
        <div className="callout">
          📦 Tip: Keep only your highest-weight roll per species—duplicates eat collection slots and lower AFK profits.
        </div>
      </Section>

      <Section id="drops" title="🎲 Guaranteed Drops & Luck Scaling">
        <div className="card-grid">
          {guaranteedDrops.map((entry) => (
            <div className="card" key={entry.label}>
              <h3 className="card-title">{entry.label}</h3>
              <p className="card-detail">{entry.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="mutations"
        title="✨ Mutation Multipliers"
        description="Apply these modifiers on top of base income values."
      >
        <div className="card-grid">
          {mutationMultipliers.map((mutation) => (
            <div className="card" key={mutation.label}>
              <h3 className="card-title">{mutation.label}</h3>
              <p className="card-detail">{mutation.effect}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="income"
        title="📈 Example Income — Matteo (Godly)"
        description="Weight dramatically changes returns for high-rarity brainrots."
      >
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Weight</th>
                <th>Income</th>
              </tr>
            </thead>
            <tbody>
              {exampleIncome.map((entry) => (
                <tr key={entry.weight}>
                  <td>{entry.weight}</td>
                  <td>{entry.income}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="callout">
          📊 Combine weight upgrades with Neon or Galactic mutations to hit late-game income thresholds faster.
        </div>
      </Section>

      <Section id="tips" title="🏆 Key Tips" description="Optimize passive earnings and collection quality.">
        <ul className="list">
          <li>📦 Prioritize bigger, mutated brainrots and release weaker rolls.</li>
          <li>🕰️ Time major upgrades around guaranteed Legendary and Mythic pity drops.</li>
          <li>🔁 Rebirth early to lock in permanent luck boosts and improve spawn quality.</li>
          <li>🤖 Run Auto-Sell with Equip Best to streamline AFK farming sessions.</li>
        </ul>
      </Section>

      <a className="back-to-top" href="#brainrots-top">
        ↑ Back to top
      </a>
    </div>
  );
}
