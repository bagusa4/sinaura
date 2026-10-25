"use client";

import { useState } from "react";

const navItems = [
  { label: "Jalur belajar", href: "#belajar" },
  { label: "Sumber terbuka", href: "#perpustakaan" },
  { label: "Komunitas", href: "#kontribusi" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#top" aria-label="SinauRa, beranda">
          SinauRa<span className="brand-dot">?</span>
          <span className="brand-sparkle" aria-hidden="true">✦</span>
        </a>

        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <span />
          <span />
        </button>

        <nav
          aria-label="Navigasi utama"
          className={`header-nav${menuOpen ? " is-open" : ""}`}
        >
          {navItems.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={`header-actions${menuOpen ? " is-open" : ""}`}>
          <a className="login-link" href="#faq">Masuk</a>
          <a className="button button-primary header-cta" href="#mulai">
            Mulai sinau <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}