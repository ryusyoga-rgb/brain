import { Section } from "@/components/Section";

const sectionLinks = [
  { href: "#how-to-play", label: "🎮 How to Play" },
  { href: "#beginner-strategy", label: "🌱 Beginner Strategy" },
  { href: "#brainrot-income", label: "💰 Brainrot Income" },
  { href: "#boss-battles", label: "🐲 Boss Battles" },
  { href: "#rebirth", label: "🔄 Rebirth" },
  { href: "#fusion", label: "🧬 Fusion" },
  { href: "#gear-priorities", label: "🛠️ Gear" },
  { href: "#codes", label: "🎁 Codes" },
  { href: "#latest-update", label: "🆕 Update" }
];

const PLAY_URL = "https://www.roblox.com/games/127742093697776/Plants-Vs-Brainrots";

export default function HomePage() {
  return (
    <div className="page-wrapper" id="top">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">🌻 Plants vs Brainrots Master Guide (2025)</h1>
          <p className="section-description">
            Welcome to the complete Plants vs Brainrots strategy wiki! Explore plants, brainrots, bosses,
            rebirth milestones, gears, fusion recipes, redeem codes, and the newest updates in one place.
          </p>
          <a
            className="cta-link"
            href={PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Play Plants vs Brainrots on Roblox"
          >
            ▶ Play Now on Roblox
          </a>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/sEhyHQrotRk"
              title="Plants vs Brainrots Gameplay"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <div className="page-nav">
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </header>

      <Section id="how-to-play" title="🎮 How to Play">
        <ol className="list">
          <li>🪴 Buy seeds and plant them in your garden plots.</li>
          <li>🌿 Let your plants auto-attack every incoming brainrot.</li>
          <li>💸 Defeated brainrots transform into passive income streams.</li>
          <li>⏱️ The shop refreshes every five minutes with new seeds and gears.</li>
        </ol>
      </Section>

      <Section id="beginner-strategy" title="🌱 Beginner Strategy">
        <ul className="list">
          <li>🌵 Open with <strong>Cactus ($200)</strong> for unmatched early value.</li>
          <li>🍓 Progress into <strong>Strawberry</strong>, <strong>Pumpkin</strong>, and <strong>Sunflower</strong>.</li>
          <li>💼 Bank earnings for Legendary and Mythic plants once your economy stabilizes.</li>
        </ul>
      </Section>

      <Section id="brainrot-income" title="💰 Brainrot Income Cheatsheet">
        <ul className="list">
          <li>🏦 Captured brainrots pump out passive cash every second.</li>
          <li>📈 Heavier weights and rarer mutations dramatically increase income.</li>
          <li>🧍‍♂️ Sell duplicate brainrots to Barry NPC when you need instant cash.</li>
          <li>🤖 Enable Auto-Sell and Equip Best to automate AFK farming sessions.</li>
        </ul>
        <div className="callout">
          💡 Tip: Track mutation rolls—Gold and above quickly surpass lighter, rarer catches in total income.
        </div>
      </Section>

      <Section
        id="boss-battles"
        title="🐲 Boss Battles"
        description="Bosses appear on a strict cadence and scale with rebirth tiers."
      >
        <ul className="list">
          <li>⏳ Expect a boss encounter every 500 brainrot spawns.</li>
          <li>🔓 Higher-tier bosses unlock after specific rebirth milestones.</li>
          <li>🎁 Loot rewards include spawner upgrades and luck boosts.</li>
          <li>❄️ Always field Frozen plants and pack Frost Grenades for control.</li>
        </ul>
      </Section>

      <Section
        id="rebirth"
        title="🔄 Rebirth Overview"
        description="Reset short-term gains to unlock long-term multipliers."
      >
        <ul className="list">
          <li>♻️ Rebirth wipes cash and brainrots but keeps plants, gears, and permanent boosts.</li>
          <li>🎲 Each rebirth grants <strong>+50% luck</strong> and <strong>+50% money</strong> multipliers.</li>
          <li>🧬 Milestones unlock the Fuse Machine, larger islands, and upgraded bats.</li>
        </ul>
      </Section>

      <Section
        id="fusion"
        title="🧬 Fusion Primer"
        description="Combine plants with brainrots for powerful hybrids."
      >
        <ul className="list">
          <li>🔑 Fusion becomes available after Rebirth 1.</li>
          <li>⚗️ Create specialty units like Eggplant + Burbaloni → Eggplantini Burbalonini.</li>
          <li>🧠 Experiment to discover synergistic bonuses for lanes and bosses.</li>
        </ul>
      </Section>

      <Section
        id="gear-priorities"
        title="🛠️ Gear Priorities"
        description="Pick the right tools to accelerate farming and boss kills."
      >
        <ul className="list">
          <li>🛒 The gear shop refreshes every five minutes.</li>
          <li>❄️ <strong>Frost Grenade</strong> is the #1 purchase for reliable crowd control.</li>
          <li>⚡ Pair <strong>Lucky Potion</strong> with <strong>Speed Potion</strong> for peak farming output.</li>
          <li>🎯 <strong>Carrot Launcher</strong> is entertaining but optional compared to core tools.</li>
        </ul>
      </Section>

      <Section id="codes" title="🎁 Active Codes" badge="Updated: September 2025">
        <div className="card-grid">
          <div className="card">
            <h3 className="card-title">STACKS</h3>
            <p className="card-detail">Redeem for 1 Lucky Potion.</p>
          </div>
          <div className="card">
            <h3 className="card-title">frozen</h3>
            <p className="card-detail">Redeem for 1 Frost Grenade.</p>
          </div>
          <div className="card">
            <h3 className="card-title">based</h3>
            <p className="card-detail">Redeem for $5,000 cash.</p>
          </div>
        </div>
      </Section>

      <Section
        id="latest-update"
        title="🆕 Latest Update"
        badge="Released: September 27, 2025"
        description="Patch highlights from the most recent content drop."
      >
        <ul className="list">
          <li>🌋 Introduced new bosses, brainrots, and plants (Shroombino, Grape, Las Tralaleritas).</li>
          <li>🌀 Limited-time events: Underworld Rift, Volcano Eruption, and Reality Flip.</li>
          <li>⚔️ Boss system overhaul adds rebirth-specific tiers.</li>
        </ul>
      </Section>

      <a className="back-to-top" href="#top">
        ↑ Back to top
      </a>
    </div>
  );
}
