import { useEffect, useState } from "react";
import "./Header.css";

const LINKS = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#trust", label: "Trust & scale" },
  { href: "#partnerships", label: "Partnership models" },
  { href: "#team", label: "Team" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header__row">
        <a href="#top" className="brand">
          <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
            <rect width="32" height="32" rx="6" fill="#16223f" />
            <path d="M9 20 L16 9 L23 20" stroke="#3F8F6B" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="21.5" r="2.1" fill="#b9893f" />
          </svg>
          <span>
            Oxy<em>Finserv</em>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-primary site-header__cta">
          Become a partner
        </a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Become a partner
          </a>
        </div>
      )}
    </header>
  );
}
