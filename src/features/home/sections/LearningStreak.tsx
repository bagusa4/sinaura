import SectionLabel from "@/features/home/components/SectionLabel";

const activity = [
  1, 0, 2, 3, 1, 0, 2, 3, 2, 1, 0, 3, 1, 2, 0, 1, 3, 2, 1, 0, 2, 3, 1, 2,
  0, 1, 3, 2, 1, 0, 2, 1, 3, 2, 0, 1, 2, 3, 1, 0, 2, 1, 3, 2, 0, 1, 2, 3,
  1, 2, 0, 1, 3, 2, 1, 0, 3, 2, 1, 2, 0, 1, 3, 2, 1, 0, 2, 3, 1, 2, 0, 1,
  3, 2, 1, 0, 2, 1, 3, 2, 1, 0, 2, 3, 1, 2, 0, 1, 3, 2, 1, 0, 2, 3, 1, 2,
  0, 1, 3, 2, 1, 0, 2, 1, 3, 2, 1, 0, 2, 3, 1, 2, 0, 1, 3, 2, 1, 0, 2, 3,
];

export default function LearningStreak() {
  return (
    <section className="streak-section">
      <div className="site-container streak-grid">
        <div className="streak-copy">
          <SectionLabel number="03">Sedikit, tapi setiap hari</SectionLabel>
          <h2>Jejak belajarmu layak terlihat.</h2>
          <p>
            Satu pelajaran, satu catatan, satu diskusi. Rekam jejak kecilmu
            akan jadi bukti perjalananmu.
          </p>
          <a className="button button-primary" href="#belajar">
            Mulai jejak belajarmu <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="activity-panel">
          <div className="activity-heading">
            <strong>128 aktivitas tahun ini</strong>
            <span>2026</span>
          </div>
          <div className="activity-months" aria-hidden="true">
            {"Jan Feb Mar Apr Mei Jun Jul Agu Sep Okt Nov Des".split(" ").map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
          <div aria-label="Visualisasi aktivitas belajar" className="activity-grid">
            {activity.map((level, index) => (
              <span className={`activity-cell activity-${level}`} key={index} />
            ))}
          </div>
          <div className="activity-summary">
            <span><strong>18</strong>pelajaran selesai</span>
            <span><strong>6</strong>kontribusi</span>
            <span><strong>7 hari</strong>beruntun</span>
          </div>
        </div>
      </div>
    </section>
  );
}
