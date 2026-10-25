import SectionLabel from "@/features/home/components/SectionLabel";

export default function FinalCTA() {
  return (
    <section className="final-cta" id="mulai">
      <div className="site-container">
        <SectionLabel number="08">Ayo, mulai hari ini</SectionLabel>
        <h2>Jangan cuma disimpan. Mulai dipraktikkan.</h2>
        <div className="final-cta-bottom">
          <p>Satu pelajaran hari ini. Satu langkah lebih dekat ke tujuanmu.</p>
          <a className="button button-primary" href="#belajar">
            Mulai sinau, gratis <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
