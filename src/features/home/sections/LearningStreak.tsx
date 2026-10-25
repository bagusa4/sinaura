import SectionLabel from "@/features/home/components/SectionLabel";

const activity = Array.from({ length: 53 * 7 }, (_, index) => {
  const week = Math.floor(index / 7);
  const day = index % 7;

  if ((week * 5 + 3) % 13 < 4) return 0;

  const score = (week * 5 + day * 3 + Math.floor(week / 2)) % 11;
  if (score < 6) return 0;
  return score < 9 ? 1 : score === 9 ? 2 : 3;
});

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
          <div aria-hidden="true" className="activity-months">
            {"Jan Feb Mar Apr Mei Jun Jul Agu Sep Okt Nov Des"
              .split(" ")
              .map((month) => (
                <span key={month}>{month}</span>
              ))}
          </div>
          <div
            aria-label="Visualisasi aktivitas belajar selama 53 minggu pada tahun 2026"
            className="activity-grid"
            role="img"
          >
            {activity.map((level, index) => (
              <span
                aria-hidden="true"
                className={`activity-cell activity-${level}`}
                key={index}
              />
            ))}
          </div>
          <div className="activity-footer">
            <span>Januari – Desember 2026</span>
            <div
              aria-label="Intensitas aktivitas: 0 hingga 3+ per hari"
              className="activity-legend"
              role="img"
            >
              <span>0</span>
              {[0, 1, 2, 3].map((level) => (
                <span
                  aria-hidden="true"
                  className={`activity-cell activity-${level}`}
                  key={level}
                />
              ))}
              <span>3+ / hari</span>
            </div>
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
