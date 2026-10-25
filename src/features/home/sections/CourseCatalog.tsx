import SectionLabel from "@/features/home/components/SectionLabel";

const courses = [
  {
    category: "TEKNOLOGI",
    code: "01",
    art: "</>",
    note: "DARI KONSEP KE PRAKTIK",
    level: "Pemula",
    lessons: "24 pelajaran",
    title: "Frontend dari nol",
    description: "Pelajari dasar HTML, CSS, dan JavaScript. Akhiri dengan proyek yang bisa kamu bagikan.",
    duration: "8 jam",
    theme: "course-art-dark",
  },
  {
    category: "SAINS",
    code: "02",
    art: "{ data }",
    note: "DATA KECIL, PENGARUH BESAR",
    level: "Pemula",
    lessons: "12 pelajaran",
    title: "Analisis data untuk pemula",
    description: "Pelajari cara mengumpulkan data, memahami pola, dan membuat keputusan berdasarkan bukti.",
    duration: "3 jam",
    theme: "course-art-lime",
  },
  {
    category: "SENI",
    code: "03",
    art: "{ rupa }",
    note: "RUPA YANG BERMAKNA",
    level: "Menengah",
    lessons: "18 pelajaran",
    title: "Dasar desain visual",
    description: "Pelajari tipografi, warna, dan komposisi agar karya lebih mudah dipahami.",
    duration: "6 jam",
    theme: "course-art-dark",
  },
];

export default function CourseCatalog() {
  return (
    <section className="catalog-section" id="belajar">
      <div className="site-container">
        <SectionLabel number="02">Pilih bidangmu</SectionLabel>
        <div className="section-heading-row">
          <div>
            <h2>Mau belajar apa hari ini?</h2>
            <p>Pilih satu bidang. Pelajari, terapkan, lalu bagikan.</p>
          </div>
          <a className="button button-outline" href="#perpustakaan">
            Semua jalur <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="course-filters" aria-label="Kategori pelajaran">
          <span className="filter-active">Semua bidang</span>
          <span>Teknologi</span>
          <span>Sains</span>
          <span>Seni</span>
        </div>
        <div className="course-grid">
          {courses.map((course) => (
            <a className="course-card" href="#mulai" key={course.code}>
              <div className={`course-art ${course.theme}`}>
                <div className="course-art-meta">
                  <span>{course.category} / {course.code}</span>
                  <span aria-hidden="true">↗</span>
                </div>
                <strong>{course.art}</strong>
                <span className="course-art-note">{course.note}</span>
              </div>
              <div className="course-content">
                <div className="course-meta">
                  <span>{course.level}</span>
                  <span>{course.lessons}</span>
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className="course-footer">
                  <span>{course.duration} · Gratis</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
