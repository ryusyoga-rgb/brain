import { Section } from "@/components/Section";

export default function ChangelogPage() {
  return (
    <div className="page-wrapper">
      <header className="section">
        <div className="section-header">
          <h1 className="section-title">Changelog</h1>
          <p className="section-description">
            Follow major content drops, balance passes, and system overhauls across Plants vs Brainrots updates.
          </p>
        </div>
      </header>

      <Section title="September 27, 2025 Update" badge="Latest Patch">
        <ul className="list">
          <li>Added five new bosses for rebirth progression.</li>
          <li>Introduced brainrots such as Agarrini La Palinni and Las Tralaleritas.</li>
          <li>Debuted plant additions, including Shroombino and Grape.</li>
          <li>Activated limited events: Underworld Rift, Volcano Eruption, Reality Flip.</li>
          <li>Scaled weapons alongside rebirth levels for smoother difficulty curves.</li>
          <li>Optimized the brainrot spawning system for stability and performance.</li>
        </ul>
      </Section>
    </div>
  );
}
