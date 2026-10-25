import SectionLabel from "@/features/home/components/SectionLabel";

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="site-container hero-grid">
        <div className="hero-copy">
          <SectionLabel number="00">Belajar terbuka. Tumbuh bersama.</SectionLabel>
          <h1>Apa pun ilmunya, yuk sinau bareng.</h1>
          <p className="hero-description">
            Dari bahasa dan sains hingga seni dan teknologi. Pilih yang ingin
            kamu pelajari, pahami materinya, lalu terapkan dalam keseharian.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#belajar">
              Temukan pelajaran <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-outline" href="#perpustakaan">
              Jelajahi materi terbuka <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="social-proof">
            <div className="avatar-stack" aria-hidden="true">
              <span>R</span><span>A</span><span>M</span>
            </div>
            <span>2.400+ orang sudah mulai sinau</span>
          </div>
        </div>

        <div className="hero-card" aria-label="Belajar, terapkan, bagikan">
          <div className="hero-card-top">
            <span>BERBAGI ILMU BARENG</span>
            <span className="hero-sparkle" aria-hidden="true">✳</span>
          </div>
          <p className="hero-card-title">
            Pelajari.<br />
            <span>Terapkan.</span><br />
            Bagikan.
          </p>
          <div className="hero-terminal">
            <span className="terminal-dots">•••</span>
            <p>Mulai dari satu catatan. Bagikan untuk semua.</p>
            <span>Satu langkah kecil. Satu ilmu yang berarti.</span>
          </div>
        </div>
      </div>
    </section>
  );
}