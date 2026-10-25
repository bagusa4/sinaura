import SectionLabel from "@/features/home/components/SectionLabel";

const questions = [
  {
    question: "Benar-benar gratis?",
    answer: "Iya. Semua jalur dan sumber belajar bisa kamu akses gratis. Ilmu adalah milik bersama.",
  },
  {
    question: "Bisa mulai sebagai pemula?",
    answer: "Bisa. Pilih bidang yang kamu minati. Jalur pemula dimulai dari fondasi, dengan latihan bertahap.",
  },
  {
    question: "Bagaimana cara membagikan kursus?",
    answer: "Masuk, buat draf kursus, susun pelajaran, lalu terbitkan untuk komunitas.",
  },
];

export default function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="site-container faq-grid">
        <div>
          <SectionLabel number="07">Sebelum mulai</SectionLabel>
          <h2>Masih penasaran?</h2>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
