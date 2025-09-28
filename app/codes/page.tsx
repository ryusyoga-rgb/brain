import { Section } from "@/components/Section";
import { CopyButton } from "@/components/CopyButton";

const activeCodes = [
  { code: "STACKS", reward: "Lucky Potion (NEW)" },
  { code: "frozen", reward: "Frost Grenade (NEW)" },
  { code: "based", reward: "$5,000 cash" }
];

const lastUpdated = "September 27, 2025";

export default function CodesPage() {
  return (
    <div className="page-wrapper" id="codes-top">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">Plants vs Brainrots Codes (September 2025)</h1>
          <p className="section-description">
            Verified promo codes that award cash, potions, and gear. Last checked on {lastUpdated}.
          </p>
        </div>
      </header>

      <Section title="All Working Codes" badge={`Updated: ${lastUpdated}`}>
        <p className="section-description">
          Plant the freebies to grow your collection faster - tap copy and redeem in-game before they expire.
        </p>
        <div className="card-grid">
          {activeCodes.map((entry) => (
            <div className="card" key={entry.code}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h3 className="card-title" style={{ margin: 0 }}>{entry.code}</h3>
                <CopyButton value={entry.code} label="Copy" />
              </div>
              <p className="card-detail">Reward: {entry.reward}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Expired Codes">
        <p className="section-description">None yet - redeem the active codes while they last.</p>
      </Section>

      <Section title="How to Redeem" description="Claim your rewards inside Roblox in under a minute.">
        <ol className="list">
          <li>Launch Plants vs Brainrots from the Roblox app.</li>
          <li>Open Shop -> Codes from the left-side menu.</li>
          <li>Paste a working code into the pop-up field.</li>
          <li>Hit Claim to receive the reward instantly.</li>
        </ol>
      </Section>

      <Section title="Where to Find More Codes">
        <ul className="list">
          <li>
            Bookmark this page - we check for fresh drops every major update and refresh the table when codes arrive.
          </li>
          <li>
            Join the official Plants vs Brainrots Discord server and watch the #codes channel for dev posts.
          </li>
          <li>
            Follow the Yo Gurt Studio Roblox community; seasonal events often bundle limited-time rewards.
          </li>
        </ul>
        <div className="callout">
          Pro tip: While waiting for new codes, try related experiences like Brainrot Evolution or Brainrot Training to keep farming.
        </div>
      </Section>

      <a className="back-to-top" href="#codes-top">
        Back to top
      </a>
    </div>
  );
}
