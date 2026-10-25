import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import SectionLabel from "@/features/home/components/SectionLabel";

export const metadata: Metadata = {
  title: "Tentang SinauRa — Belajar terbuka, tumbuh bersama",
  description:
    "Kenali SinauRa: ruang belajar terbuka untuk mempelajari hal baru, menerapkannya, dan berbagi ilmu bersama.",
};

const principles = [
  {
    number: "01",
    title: "Terbuka untuk semua",
    description:
      "Belajar seharusnya bisa dimulai siapa saja. Materi dan jalur belajar di SinauRa dirancang agar mudah dijelajahi dan tetap gratis.",
  },
  {
    number: "02",
    title: "Belajar lewat praktik",
    description:
      "Pengetahuan jadi lebih berarti saat digunakan. Karena itu, setiap langkah belajar mengajakmu memahami lalu mencoba.",
  },
  {
    number: "03",
    title: "Tumbuh bersama",
    description:
      "Setiap orang punya sesuatu untuk dibagikan. Catatan, pengalaman, dan kontribusimu bisa menjadi awal bagi orang lain.",
  },
];

const steps = [
  {
    number: "01",
    title: "Pilih yang membuatmu penasaran",
    description: "Jelajahi bidang dan temukan titik awal yang terasa pas.",
  },
  {
    number: "02",
    title: "Pelajari sambil mencoba",
    description: "Bangun pemahaman lewat materi ringkas dan praktik nyata.",
  },
  {
    number: "03",
    title: "Bagikan yang kamu temukan",
    description: "Bantu orang lain belajar dari catatan dan pengalamanmu.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="about-page" id="top">
        <section className="about-hero">
          <div className="site-container about-hero-grid">
            <div className="about-hero-copy">
              <SectionLabel number="07">Tentang SinauRa</SectionLabel>
              <h1>
                Ilmu tumbuh
                <br />
                saat <span>dibagikan.</span>
              </h1>
              <p>
                SinauRa adalah ruang belajar terbuka untuk siapa saja yang ingin
                memahami hal baru, mencoba langsung, dan bertumbuh bersama
                komunitas.
              </p>
              <Link className="button button-primary" href="/#belajar">
                Temukan jalur belajar <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div aria-label="Pelajari, terapkan, bagikan" className="about-hero-art">
              <span className="about-art-orbit" aria-hidden="true">✳</span>
              <span className="about-art-label">CARA KAMI BELAJAR</span>
              <p>
                Pelajari.
                <br />
                <span>Terapkan.</span>
                <br />
                Bagikan.
              </p>
              <div className="about-art-bottom">
                <span>Rasa ingin tahu jadi langkah pertama.</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-intro">
          <div className="site-container about-intro-grid">
            <div>
              <SectionLabel number="08">Belajar tanpa batas</SectionLabel>
              <h2>
                Bukan sekadar tempat mencari jawaban. Ini ruang untuk terus
                bertanya.
              </h2>
            </div>
            <div className="about-intro-copy">
              <p>
                Dari bahasa dan sains hingga seni dan teknologi, selalu ada hal
                baru untuk dipelajari. SinauRa membantu perjalanan itu terasa
                lebih dekat lewat jalur belajar, materi terbuka, dan ruang
                berbagi.
              </p>
              <p>
                Kamu tidak harus menjadi ahli untuk ikut berkontribusi. Mulai
                dari satu catatan, satu latihan, atau satu jawaban yang
                membantu. Ilmu yang dibagikan bisa membuka jalan bagi banyak
                orang.
              </p>
              <Link className="about-text-link" href="/#perpustakaan">
                Jelajahi perpustakaan terbuka <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="about-principles">
          <div className="site-container">
            <SectionLabel number="09">Yang kami percaya</SectionLabel>
            <div className="about-principles-heading">
              <h2>Belajar lebih baik, bersama-sama.</h2>
              <p>
                Tiga hal sederhana yang menjadi cara SinauRa tumbuh dan
                menyambut siapa saja.
              </p>
            </div>
            <div className="about-principles-grid">
              {principles.map((principle) => (
                <article className="about-principle" key={principle.number}>
                  <span className="mono-label">{principle.number} —</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-journey">
          <div className="site-container about-journey-grid">
            <div>
              <SectionLabel number="10">Mulai dari rasa ingin tahu</SectionLabel>
              <h2>Satu langkah kecil bisa jadi awal perjalanan besar.</h2>
              <p>
                Tidak perlu menunggu siap. Pilih topik, mulai belajar, lalu
                bagikan apa yang kamu temukan.
              </p>
            </div>
            <ol className="about-steps">
              {steps.map((step) => (
                <li key={step.number}>
                  <span className="about-step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  <span aria-hidden="true" className="about-step-arrow">↗</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="about-cta">
          <div className="site-container about-cta-inner">
            <div>
              <SectionLabel number="11">Ruang ini milik bersama</SectionLabel>
              <h2>Apa yang ingin kamu bagikan?</h2>
              <p>
                Mulai dari yang kamu tahu. Bantu seseorang memulai langkahnya
                hari ini.
              </p>
            </div>
            <Link className="button button-primary" href="/#kontribusi">
              Ikut berkontribusi <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}