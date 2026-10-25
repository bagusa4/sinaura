"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Jalur belajar", href: "/#belajar" },
  { label: "Sumber terbuka", href: "/#perpustakaan" },
  { label: "Komunitas", href: "/#kontribusi" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Link className="brand" href="/#top" aria-label="SinauRa, beranda">
          SinauRa<span className="brand-dot">?</span>
          <span className="brand-sparkle" aria-hidden="true">✦</span>
        </Link>

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
            <Link href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={`header-actions${menuOpen ? " is-open" : ""}`}>
          <Link className="login-link" href="/#faq">Masuk</Link>
          <Link className="button button-primary header-cta" href="/#mulai">
            Mulai sinau <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </header>
  );
}