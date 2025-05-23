// Jika avatar tidak digunakan, hapus importnya
import React from "react";

function About() {
  return (
    <article className="about-section page-transition">
      <div className="about-container">
        <div className="profile-header">
          <div className="about-header">
            <h2>About Me</h2>
            <div className="title-bar"></div>
          </div>
        </div>
        <p className="about-text">
          Saya adalah freshgraduate Informatika di Universitas Gunadarma. Saya
          berminat dalam web developmnet Data analyst dan Data Scientist, Saya
          mendapat besasiswa Frontend ID CAMP 2024 sampai tahap intermediate.
          Saya memiliki kemampuan dalam membuat website yang responsif, Silahkan
          hubungi saya jika Anda tertarik untuk bekerja sama.
        </p>

        <section className="what-im-doing">
          <div className="section-header">
            <h3>What I'm Doing</h3>
            <div className="title-bar"></div>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="service-content">
                <h4>Frontend</h4>
                <p>
                  Memiliki pemahaman dasar dalam pengembangan website
                  menggunakan HTML, CSS, dan JavaScript. Sedang mengembangkan
                  kemampuan React.js.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <div className="service-content">
                <h4>Data Analyst</h4>
                <p>
                  Memiliki minat dan sedang mempelajari analisis data
                  menggunakan Python dan tools seperti Pandas, NumPy, dan
                  Matplotlib.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-music"></i>
              </div>
              <div className="service-content">
                <h4>Musik</h4>
                <p>
                  Memiliki ketertarikan dalam bermain musik terutama piano dan
                  gitar. Sering bermain musik di gereja.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}

export default About;
