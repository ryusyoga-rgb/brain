"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/plants", label: "Plants" },
  { href: "/brainrots", label: "Brainrots" },
  { href: "/bosses", label: "Bosses" },
  { href: "/rebirth", label: "Rebirth" }
];

const secondaryLinks = [
  { href: "/gears", label: "Gears" },
  { href: "/fuse-recipes", label: "Fuse Recipes" },
  { href: "/codes", label: "Codes" },
  { href: "/changelog", label: "Changelog" }
];

export function Navigation() {
  const pathname = usePathname();

  const renderLink = (link: { href: string; label: string }) => {
    const isActive =
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`nav-link${isActive ? " active" : ""}`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="brand">
          <span className="brand-title">Plants vs Brainrots Wiki</span>
          <span className="brand-subtitle">Master Guide & Strategy Compendium</span>
        </div>
        <div className="nav-links">
          {primaryLinks.map(renderLink)}
        </div>
        <div className="nav-row-secondary">
          {secondaryLinks.map(renderLink)}
        </div>
      </div>
    </nav>
  );
}
