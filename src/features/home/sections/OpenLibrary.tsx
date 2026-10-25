import SectionLabel from "@/features/home/components/SectionLabel";

const libraries = [
  {
    title: "buku-belajar",
    description: "Panduan belajar berbagai bidang yang ditulis bersama komunitas.",
    topics: "8 topik terbuka",
    type: "Panduan",
    count: "324",
  },
  {
    title: "aksara-seni",
    description: "Kumpulan referensi desain yang ringan, konsisten, dan siap dibagikan.",
    topics: "5 topik terbuka",
    type: "Desain",
    count: "218",
  },
  {
    title: "peta-belajar",
    description: "Peta sumber belajar gratis untuk perjalanan belajar berbagai bidang.",
    topics: "12 topik terbuka",
    type: "Referensi",
    count: "486",
  },
];

export default function OpenLibrary() {
  return (
    <section className="library-section" id="perpustakaan">
      <div className="site-container">
        <SectionLabel number="04">Bukan cuma jadi penonton</SectionLabel>
        <div className="section-heading-row">
          <div>
            <h2>Ilmu terbuka. Peluang terbuka.</h2>
            <p>Belajar dari materi nyata. Temukan topik yang ingin kamu bagikan, lalu ambil bagian.</p>
          </div>
          <a className="button button-outline" href="#sumber">
            Jelajahi materi <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="library-grid">
          {libraries.map((library) => (
            <a className="library-card" href="#sumber" key={library.title}>
              <div className="library-card-top">
                <span aria-hidden="true">♧</span>
                <span className="open-badge">Terbuka</span>
              </div>
              <h3>{library.title}</h3>
              <p>{library.description}</p>
              <span className="topic-count">{library.topics}</span>
              <div className="library-card-footer">
                <span>{library.type}</span>
                <span>◈ {library.count} <span aria-hidden="true">↗</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
