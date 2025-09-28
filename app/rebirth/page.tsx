import { Section } from "@/components/Section";

const rebirthLevels = [
  {
    tier: "Rebirth 1",
    cash: "$1M",
    brainrots: ["Tralalelo Tralala (Godly)", "Bombini Gussini (Mythic)"],
    rewards: ["+50% Luck", "+50% Money", "Stronger Bat", "Fuse Machine", "Bigger Island"]
  },
  {
    tier: "Rebirth 2",
    cash: "$50M",
    brainrots: ["Los Tralaleritos (Secret)", "Vacca Saturno Saturnita (Secret)"],
    rewards: ["+50% Luck", "+50% Money", "Stronger Bat", "Bigger Island"]
  },
  {
    tier: "Rebirth 3",
    cash: "$100M",
    brainrots: ["Los Tralaleritos (Secret)", "Vacca Saturno Saturnita (Secret)"],
    rewards: ["+50% Luck", "+50% Money", "Stronger Bat"]
  },
  {
    tier: "Rebirth 4",
    cash: "$150M",
    brainrots: ["Los Tralaleritos (Secret)", "Vacca Saturno Saturnita (Secret)"],
    rewards: ["+50% Luck", "+50% Money", "Stronger Bat"]
  }
];

const introPoints = [
  "Each rebirth permanently increases base luck, cash multipliers, and weapon damage.",
  "Completing the requirements unlocks new bosses, island expansions, and the Fuse Machine.",
  "Brainrots and cash reset, but plants, gears, and eggs remain - plan your stash before you reset."
];

const howToSteps = [
  "Click the Rebirth button on the left HUD to view your next requirement tier.",
  "Capture the required brainrots and earn the listed cash quota.",
  "Press Rebirth again to confirm once all requirements turn green and collect your new bonuses."
];

const safeguardTips = [
  "Park high-value brainrots on an alt base or with trusted friends before you reset.",
  "Stockpile eggs to hatch right after rebirth for an early-money jump start.",
  "Redeem active codes after rebirth to refill grenades, potions, and cash boosts quickly."
];

export default function RebirthPage() {
  return (
    <div className="page-wrapper" id="rebirth-top">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">Plants vs Brainrots Rebirth Guide</h1>
          <p className="section-description">
            Reset brainrots and cash to power up your island with permanent luck, money, and weapon boosts.
          </p>
        </div>
      </header>

      <Section title="In Short" description="Why every rebirth matters">
        <ul className="list">
          {introPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Section>

      <Section
        title="What Rebirth Does"
        description="Understand the trade-off before you hit the reset button."
      >
        <ul className="list">
          <li>Unlocks higher-tier bosses, bigger islands, and stronger bats at each milestone.</li>
          <li>Weapon damage and passive luck scale permanently with every rebirth completed.</li>
          <li>All cash and captured brainrots are wiped, but plants, gears, and eggs stay in inventory.</li>
        </ul>
      </Section>

      <Section title="How to Rebirth" description="Follow the three-step flow to secure your next tier.">
        <ol className="list">
          {howToSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </Section>

      <Section
        title="Rebirth Requirements & Rewards"
        description="Cash totals stack with specific brainrot turn-ins - plan ahead before you reset."
      >
        <div className="table-wrapper">
          <table className="rebirth-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Cash Needed</th>
                <th>Brainrots Required</th>
                <th>Rewards</th>
              </tr>
            </thead>
            <tbody>
              {rebirthLevels.map((entry) => (
                <tr key={entry.tier}>
                  <td><span className="badge-level">{entry.tier}</span></td>
                  <td><span className="cash-chip">{entry.cash}</span></td>
                  <td>
                    <ul className="list">
                      {entry.brainrots.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className="list">
                      {entry.rewards.map((reward) => (
                        <li key={reward}>{reward}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="callout">
          No hard cap exists yet - future tiers follow the same cash plus rare brainrot pattern. We will refresh this table as new levels arrive.
        </div>
      </Section>

      <Section title="Safeguard Your Progress" description="Minimize losses before you reset.">
        <ul className="list">
          {safeguardTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </Section>

      <Section title="What You Lose vs Keep">
        <div className="rebirth-compare">
          <div className="rebirth-card">
            <h3 className="card-title">You Lose</h3>
            <ul className="list">
              <li>All cash on hand.</li>
              <li>All captured brainrots (unless stashed elsewhere).</li>
            </ul>
          </div>
          <div className="rebirth-card">
            <h3 className="card-title">You Keep</h3>
            <ul className="list">
              <li>Plants, upgrades, and eggs.</li>
              <li>Owned gear, potions, and permanent boosts.</li>
              <li>Island expansions unlocked so far.</li>
            </ul>
          </div>
        </div>
      </Section>

      <a className="back-to-top" href="#rebirth-top">
        Back to top
      </a>
    </div>
  );
}
