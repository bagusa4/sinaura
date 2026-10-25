import SectionLabel from "@/features/home/components/SectionLabel";

const resources = [
  { type: "PANDUAN · 12 MENIT", title: "Panduan analisis data untuk pemula" },
  { type: "CHECKLIST · 24 POIN", title: "Checklist presentasi yang efektif" },
  { type: "TEMPLATE · PDF", title: "Template catatan belajar" },
];

export default function FeaturedResources() {
  return (
    <section className="resources-section" id="sumber">
      <div className="site-container resources-grid">
        <div>
          <SectionLabel number="05">Simpan yang berguna</SectionLabel>
          <h2>Bekal untuk praktik.</h2>
          <p>Referensi pilihan, tanpa harus membuka puluhan tab.</p>
        </div>
        <div className="resource-list">
          {resources.map((resource) => (
            <a className="resource-link" href="#perpustakaan" key={resource.title}>
              <span className="mono-label">{resource.type}</span>
              <strong>{resource.title}</strong>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
