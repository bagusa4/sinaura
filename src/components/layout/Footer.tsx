const footerLinks = [
  {
    title: "Tentang SinauRa?",
    links: ["Panduan kontribusi", "GitHub"],
  },
  {
    title: "Kode etik komunitas",
    links: ["Privasi & ketentuan", "Hubungi kami"],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-main">
          <div>
            <a className="footer-brand" href="#top">SinauRa?</a>
            <p>Ilmu dibagi. Dampak berlipat.</p>
          </div>
          {footerLinks.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <a href="#kontribusi">{group.title}</a>
              {group.links.map((link) => (
                <a href="#kontribusi" key={link}>{link}</a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 SinauRa. Terbuka untuk semua.</span>
          <span>Dibuat bareng, tumbuh bareng. ↗</span>
        </div>
      </div>
    </footer>
  );
}