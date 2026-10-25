const stats = [
  { value: "2.400+", label: "teman belajar" },
  { value: "48", label: "kursus terbuka" },
  { value: "120+", label: "proyek komunitas" },
  { value: "100%", label: "gratis & terbuka" },
];

export default function Stats() {
  return (
    <section aria-label="SinauRa dalam angka" className="stats-section">
      <div className="site-container stats-grid">
        {stats.map((stat) => (
          <div className="stat-item" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
