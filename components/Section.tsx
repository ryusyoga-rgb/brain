import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  badge?: string;
  children: ReactNode;
}

export function Section({ id, title, description, badge, children }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {description ? (
          <p className="section-description">{description}</p>
        ) : null}
        {badge ? <span className="badge">{badge}</span> : null}
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
}
