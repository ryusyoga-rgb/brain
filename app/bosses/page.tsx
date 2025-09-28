import { Section } from "@/components/Section";

const bosses = [
  {
    name: "Hotspotini Burrito",
    hp: "15K-20K",
    earnings: "$750/s",
    requirement: "Base"
  },
  {
    name: "Rhino Toasterino",
    hp: "20K-25K",
    earnings: "$1K-$4K/s",
    requirement: "Rebirth 1"
  },
  {
    name: "Esok Sekolah",
    hp: "32K-38K",
    earnings: "$5K+/s",
    requirement: "Rebirth 2"
  },
  {
    name: "Chef Cabracadabra",
    hp: "50K+",
    earnings: "$2.4K-$4.4K/s",
    requirement: "Rebirth 3"
  },
  {
    name: "Dragon Cannelloni",
    hp: "150K+",
    earnings: "$7.5K+/s",
    requirement: "Rebirth 4"
  }
];

const getRequirementClass = (requirement: string) =>
  requirement.toLowerCase().startsWith("rebirth") ? "" : " base";

export default function BossesPage() {
  return (
    <div className="page-wrapper" id="bosses-top">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">Plants vs Brainrots Bosses Guide</h1>
          <p className="section-description">
            Bosses are rare, limited brainrots that print massive cash once captured. Each tier unlocks with rebirth
            progress and arrives on a predictable spawn timer.
          </p>
        </div>
      </header>

      <Section
        title="How Boss Spawns Work"
        description="Meet the spawn counter and rebirth requirements to summon every tier."
      >
        <ul className="list">
          <li>Wait for every 500 brainrot spawns; when a boss is ready the prompt "A Boss Has Spawned!" appears.</li>
          <li>Each tier requires the matching rebirth level - without it you will repeat the previous boss instead.</li>
          <li>Farming lower tiers after rebirth is useful for collecting alternate mutations on the same boss.</li>
        </ul>
        <div className="callout">
          Tip: The spawn counter continues across sessions, so join prepared before the 500th brainrot enters the map.
        </div>
      </Section>

      <Section title="Boss Lineup" description="Health pools and base earnings for every rebirth tier.">
        <div className="table-wrapper">
          <table className="boss-table">
            <thead>
              <tr>
                <th>Boss</th>
                <th>HP Range</th>
                <th>Earnings (Base)</th>
                <th>Requirement</th>
              </tr>
            </thead>
            <tbody>
              {bosses.map((boss) => (
                <tr key={boss.name}>
                  <td>
                    <span className="boss-name">{boss.name}</span>
                  </td>
                  <td>
                    <span className="boss-hp">{boss.hp}</span>
                  </td>
                  <td>
                    <span className="boss-earnings">{boss.earnings}</span>
                  </td>
                  <td>
                    <span className={`requirement-badge${getRequirementClass(boss.requirement)}`}>
                      {boss.requirement}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Boss Highlights" description="Unlock order and quick notes for each encounter.">
        <ul className="list">
          <li>
            <strong>Hotspotini Burrito:</strong> First ever boss; spawns for all players after 500 brainrots with no
            rebirth requirement.
          </li>
          <li>
            <strong>Rhino Toasterino:</strong> Appears once you complete Rebirth 1 and hit the next 500-spawn cycle.
          </li>
          <li>
            <strong>Esok Sekolah:</strong> Requires Rebirth 2 and keeps the same 500 spawn cadence.
          </li>
          <li>
            <strong>Chef Cabracadabra:</strong> Unlocked at Rebirth 3; prepare for a large HP spike.
          </li>
          <li>
            <strong>Dragon Cannelloni:</strong> Final tier tied to Rebirth 4, boasting the highest HP and payouts.
          </li>
        </ul>
      </Section>

      <Section title="Fight Tips">
        <ul className="list">
          <li>
            Stock every lane with Mythic or better plants before the 500th spawn; Icy Blizzard-grown plants add built-in
            freeze procs.
          </li>
          <li>
            Use Frost Grenades to stun bosses while your frontline shreds them - grab extra grenades via active codes on
            the Codes page.
          </li>
          <li>Meet the boss at the spawn point using upgraded bats or the Carrot Launcher to shave off early HP.</li>
          <li>Run fights with friends when pushing higher tiers; cooperative burst keeps lanes from collapsing.</li>
        </ul>
      </Section>

      <a className="back-to-top" href="#bosses-top">
        Back to top
      </a>
    </div>
  );
}
