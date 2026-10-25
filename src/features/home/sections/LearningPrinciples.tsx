import SectionLabel from "@/features/home/components/SectionLabel";

const principles = [
  {
    number: "01",
    title: "Pilih bidangmu.",
    description: "Temukan topik yang ingin kamu pelajari. Mulai dari fondasi, bukan dari nol.",
  },
  {
    number: "02",
    title: "Pelajari, lalu terapkan.",
    description: "Materi ringkas, latihan nyata. Bukan cuma baca sampai selesai.",
  },
  {
    number: "03",
    title: "Bawa ke keseharian.",
    description: "Terapkan dalam proyek, catatan, atau diskusi bersama.",
  },
];

export default function LearningPrinciples() {
  return (
    <section className="principles-section">
      <div className="site-container">
        <SectionLabel number="01">Dari tahu jadi praktik</SectionLabel>
        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="mono-label">{principle.number} —</span>
              <h3>{principle.title}</h3>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
