import SectionLabel from "@/features/home/components/SectionLabel";

const waysToContribute = [
  {
    symbol: "▧",
    title: "Bagikan kursus",
    description: "Susun materi yang ingin kamu ajarkan.",
  },
  {
    symbol: "↗",
    title: "Bantu proyek terbuka",
    description: "Perbaiki catatan, buat alat, atau bantu diskusi.",
  },
  {
    symbol: "▱",
    title: "Temani yang baru mulai",
    description: "Jawab pertanyaan dan beri masukan.",
  },
];

export default function Contribute() {
  return (
    <section className="contribute-section" id="kontribusi">
      <div className="site-container contribute-grid">
        <div>
          <SectionLabel number="06">Ilmu nggak harus kamu kuasai</SectionLabel>
          <h2>Kamu belajar. Kami ikut tumbuh.</h2>
          <p>
            Punya catatan, materi, latihan, atau diskusi? Jadikan pintu masuk
            bagi orang lain. Di SinauRa, siapa pun bisa menjadi kontributor.
          </p>
          <a className="button button-primary" href="mailto:halo@sinaura.id">
            Mulai berkontribusi <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contribution-list">
          {waysToContribute.map((way) => (
            <div className="contribution-item" key={way.title}>
              <span aria-hidden="true">{way.symbol}</span>
              <div>
                <strong>{way.title}</strong>
                <p>{way.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
