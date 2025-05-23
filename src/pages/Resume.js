import React from "react";

function Resume() {
  return (
    <article className="resume-section page-transition">
      <div className="section-header">
        <h2>Resume</h2>
        <div className="title-bar"></div>
      </div>

      <div className="resume-grid">
        {/* Education Section */}
        <div className="resume-column education">
          <div className="resume-category-header">
            <i className="fas fa-graduation-cap"></i>
            <h3>Pendidikan</h3>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2019 - 2024</span>
              <div className="timeline-content">
                <h4>Sarjana Informatika (S.Kom)</h4>
                <p className="place">Universitas Gunadarma</p>
                <p className="description">
                  Fresh Graduate dengan fokus pada pengembangan web dan analisis
                  data.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2016 - 2019</span>
              <div className="timeline-content">
                <h4>Sekolah Menengah Atas</h4>
                <p className="place">SMAN 6 Depok </p>
                <p className="description">
                  Jurusan MIPA yang berfokus kepada sains dan matematika.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="resume-column experience">
          <div className="resume-category-header">
            <i className="fas fa-briefcase"></i>
            <h3>Pengalaman</h3>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">Oktober 2024 - Maret 2025</span>
              <div className="timeline-content">
                <h4>Frontend Developer (ID CAMP 2024)</h4>
                <p className="place">IDCAMP INDOSAT Ooredoo</p>
                <p className="description">
                  Peserta program pelatihan Beasiswa Indoesat Frontend Developer
                  hingga level intermediate. Mempelajari dan mengembangkan
                  kemampuan dalam HTML, CSS, JavaScript, dan Vanilla.js.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="resume-column certificates">
          <div className="resume-category-header">
            <i className="fas fa-certificate"></i>
            <h3>Sertifikasi</h3>
          </div>

          <div className="timeline">
            {/* Introduction to Cybersecurity */}
            <div className="timeline-item">
              <span className="timeline-date">11 Maret 2025</span>
              <div className="timeline-content">
                <h4>Introduction to Cybersecurity</h4>
                <p className="place">Cisco Networking Academy</p>
                <p className="description">
                  Introduction to Cybersecurity Sertifikasi mempelajari
                  dasar-dasar keamanan jaringan
                </p>
              </div>
            </div>

            {/* Belajar Dasar Manajemen Proyek */}
            <div className="timeline-item">
              <span className="timeline-date">03 Maret 2025</span>
              <div className="timeline-content">
                <h4>Belajar Dasar Manajemen Proyek</h4>
                <p className="place">Dicoding Indonesia</p>
                <p className="credential">ID Kredensial: 53XED18J0PRN</p>
                <p className="description">
                  Memplejari fondasi manajemen proyek sebagai bekal menjadi
                  manajer proyek.
                  <ul>
                    <li>Pengenalan manajemen proyek, peran dan tanggung jawab manajer proyek</li>
                    <li>Materi mencakup , siklus dan metodologi (Waterfall, Agile, Lean, Six Sigma)</li>
                    <li>Struktur organisasi & PMO, serta strategi mengejar karier di bidang ini.</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Belajar Dasar Visualisasi Data */}
            <div className="timeline-item">
              <span className="timeline-date">14 Februari 2025</span>
              <div className="timeline-content">
                <h4>Belajar Dasar Visualisasi Data</h4>
                <p className="place">Dicoding Indonesia </p>
                <p className="credential">ID Kredensial: NVP757KN4XR0</p>
                <p className="description">
                  Mempelajari dasar visualisasi data mulai dari definisi, media,
                  dan tools yang digunakan.
                  <ul>
                    <li>Pengolahan data menggunakan Google Sheets</li>
                    <li>transformasi data ke bentuk visual yang efektif</li>
                    <li>Serta prinsip desain visualisasi seperti Gestalt Preattentive Attributes.</li>
                    <li>Visualisasi data dalam konteks pemrograman.</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Memulai Pemrograman dengan Python */}
            <div className="timeline-item">
              <span className="timeline-date">14 Februari 2025</span>
              <div className="timeline-content">
                <h4>Memulai Pemrograman dengan Python</h4>
                <p className="place">Dicoding Indonesia </p>
                <p className="credential">ID Kredensial: 2VX3K6GG4XYQ</p>
                <p className="description">
                  <ul>
                    <li>Penguasaan dasar Python dan manipulasi data</li>
                    <li>Pemahaman mendalam tentang struktur kontrol dan alur program</li>
                    <li>Implementasi array, matriks, dan pemrosesan data</li>
                    <li>Pengembangan dengan pendekatan Object-Oriented Programming</li>
                    <li>Penerapan best practices melalui PEP8 dan unit testing</li>
                    <li>Eksplorasi library populer untuk data science dan web development</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Belajar Fundamental Front-End Web Development */}
            <div className="timeline-item">
              <span className="timeline-date">11 Februari 2025</span>
              <div className="timeline-content">
                <h4>Belajar Fundamental Front-End Web Development</h4>
                <p className="place">Dicoding Indonesia </p>
                <p className="credential">ID Kredensial: KEXL70RNRXG2</p>
                <p className="description">
                  Mempelajari pengembangan aplikasi web modern dengan materi
                  lanjutan seperti:
                  <ul>
                    <li>HTML Form dan JavaScript ES6+ (template literals, arrow function, destructuring, promises, modules)</li>
                    <li>Layouting menggunakan CSS Grid Pembuatan Web Component (Custom Element & Shadow DOM)</li>
                    <li>Pengelolaan dependensi menggunakan NPM Bundling aplikasi dengan Webpack Interaksi dengan REST API menggunakan Fetch API (GET, POST, PUT, DELETE)</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Test Toefl */}
            <div className="timeline-item">
              <span className="timeline-date">2 Februari 2025</span>
              <div className="timeline-content">
                <h4>TOEFL(Test of English as a Foreign Language)</h4>
                <p className="place">Global Operation </p>
                <p className="credential">ID Kredensial: GO/8/5680/2/205</p>
              </div>
            </div>
            {/* Belajar Membuat Frontend Pemula */}
            <div className="timeline-item">
              <span className="timeline-date">04 Desember 2024</span>
              <div className="timeline-content">
                <h4>Belajar Membuat Front-End Web untuk Pemula</h4>
                <p className="place">Dicoding Indonesia </p>
                <p className="credential">ID Kredensial: EYX4JN7OOZDL</p>
                <p className="description">
                  <ul>
                    <li>Penerapan dan manipulasi DOM menggunakan JavaScript</li>
                    <li>
                      Pembuatan interaksi antarelemen HTML menggunakan event
                    </li>
                    <li>
                      Pemanfaatan Web Storage untuk menyimpan data di browse
                    </li>
                    <li>Penerapan fitur interaktif berbasis JavaScript</li>
                    <li>
                      Proyek akhir: Membangun website interaktif dengan
                      penyimpanan data
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            {/* Belajar Dasar Pemrograman JavaScript*/}
            <div className="timeline-item">
              <span className="timeline-date">26 November 2024</span>
              <div className="timeline-content">
                <h4>Belajar Dasar Pemrograman JavaScript</h4>
                <p className="place">Dicoding Indonesia </p>
                <p className="credential">ID Kredensial: NVP74EN6WPR0</p>
                <p className="description">
                  <ul>
                    <li>
                      Menjalankan JavaScript di environment seperti Node.js dan
                      browser
                    </li>
                    <li>
                      Pemahaman sintaks dasar JavaScript: variabel, tipe data,
                      operator, dan komentar
                    </li>
                    <li>Penerapan fungsi untuk membuat kode yang reusable</li>
                    <li>
                      Pengelolaan data menggunakan Object, Array, Map, dan Set
                    </li>
                    <li>
                      Pembuatan alur program dengan kondisional, loop, dan error
                      handling
                    </li>
                    <li>Modularisasi kode dengan ECMAScript Module</li>
                    <li>Penerapan paradigma OOP dan Functional Programming</li>
                    <li>
                      Penanganan proses asynchronous menggunakan callback,
                      Promise, dan async-await
                    </li>
                    <li>
                      Penulisan kode berkualitas melalui penerapan best
                      practices dan pengujian
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            {/* Belajar Dasar Pemrograman Bahasa C*/}
            <div className="timeline-item">
              <span className="timeline-date">27 November 2024</span>
              <div className="timeline-content">
                <h4>Memulai Pemrograman Dengan C</h4>
                <p className="place">Dicoding Indonesia </p>
                <p className="credential">ID Kredensial: JMZV4JW5NXN9</p>
                <p className="description">
                  <ul>
                    <li>
                      Pengenalan bahasa C, sejarah, dan penggunaan IDE seperti
                      Glot.io atau Replit
                    </li>
                    <li>Membuat program dasar seperti “Hello World”</li>
                    <li>
                      Pengenalan variabel, tipe data dasar, inisialisasi, dan
                      assignment
                    </li>
                    <li>Perbedaan variabel dan konstanta</li>
                    <li>
                      Operasi input/output untuk membaca dan menampilkan data
                    </li>
                    <li>
                      Operasi aritmatika, logika, dan perbandingan dalam bahasa
                      C
                    </li>
                    <li>
                      Struktur kontrol: instruksi kondisional dan pengulangan
                      (for, while, do-while)
                    </li>
                    <li>Penggunaan array untuk menyimpan banyak data</li>
                    <li>
                      Pembuatan subprogram menggunakan fungsi dan prosedur
                    </li>
                  </ul>
                </p>
              </div>
            </div>

            {/*Belajar Dasar Pemrograman Web*/}
            <div className="timeline-item">
              <span className="timeline-date">31 Oktober 2024</span>
              <div className="timeline-content">
                <h4>Belajar Dasar Pemrograman Web</h4>
                <p className="place">Dicoding Indonesia </p>
                <p className="credential">ID Kredensial: KEXLY725RZG2</p>
                <p className="description">
                  <ul>
                    <li>
                      Pengenalan konsep dasar website, server-client, serta
                      tools pengembangan
                    </li>
                    <li>
                      Membangun struktur halaman dengan HTML dan elemen semantik
                    </li>
                    <li>
                      Pemahaman atribut, elemen inline dan block, serta
                      penggunaan tabel
                    </li>
                    <li>
                      Mendesain tampilan dengan CSS: selector, styling text,
                      warna, shadow, dan box model
                    </li>
                    <li>
                      Layout responsif menggunakan float, media query, dan
                      Flexbox
                    </li>
                    <li>
                      Implementasi layout halaman yang optimal untuk berbagai
                      perangkat
                    </li>
                    <li>
                      Struktur kontrol: instruksi kondisional dan pengulangan
                      (for, while, do-while)
                    </li>
                    <li>Penggunaan array untuk menyimpan banyak data</li>
                    <li>
                      Pembuatan subprogram menggunakan fungsi dan prosedur
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            {/*Proyek SQL*/}
            <div className="timeline-item">
              <span className="timeline-date">20 Februari 2023</span>
              <div className="timeline-content">
                <h4>PROYEK SQL SERVER</h4>
                <p className="place">Lepkom Gundarma </p>
                <p className="credential">NO. 484622</p>
                <p className="description">
                  <ul>
                    <li>
                      Administrasi sistem dalam database dan aplikasi SQL Server
                      2008
                    </li>
                    <li>
                      Penerapan Data Definition Language (DDL) dan teknik JOIN
                    </li>
                    <li>Penggunaan Stored Procedure dan Function</li>
                    <li>Pembuatan User, Role, dan pengaturan Privilage</li>
                    <li>Pengelolaan keamanan pada SQL Server</li>
                    <li>Proses backup dan restore database</li>
                    <li>Proses export dan import data</li>
                  </ul>
                </p>
              </div>
            </div>

            {/*Intermediate SQL*/}
            <div className="timeline-item">
              <span className="timeline-date">21 Februari 2022</span>
              <div className="timeline-content">
                <h4>SQL SERVER UNTUK TINGKAT MENENGAH</h4>
                <p className="place">Lepkom Gundarma </p>
                <p className="credential">NO. 606181</p>
                <p className="description">
                  <ul>
                    <li>Menulis dan menjalankan query kompleks</li>
                    <li>Pengelolaan keamanan database</li>
                    <li>Penggunaan indeks dan optimasi performa query</li>
                    <li>Pembuatan dan penggunaan View</li>
                    <li>Ekstensi SQL dan penggunaan Stored Procedure</li>
                    <li>Strategi backup dan recovery data</li>
                    <li>Proses transfer data antar sistem</li>
                    <li>Otomatisasi tugas-tugas administrasi sistem</li>
                  </ul>
                </p>
              </div>
            </div>
            {/*Beginner SQL*/}
            <div className="timeline-item">
              <span className="timeline-date">22 Februari 2021</span>
              <div className="timeline-content">
                <h4>SQL SERVER UNTUK TINGKAT PEMULA</h4>
                <p className="place">Lepkom Gundarma </p>
                <p className="credential">NO. 581370</p>
                <p className="description">
                  <ul>
                    <li>Administrasi sistem database pada SQL Server</li>
                    <li>Pengelolaan keamanan database</li>
                    <li>Pengelolaan tabel di dalam database</li>
                    <li>Pengaturan keamanan dan peran (role) pengguna</li>
                    <li>Penggunaan fungsi-fungsi dalam SQL</li>
                    <li>Penggabungan data antar tabel</li>
                    <li>Dasar pemrograman menggunakan SQL Server 2008</li>
                    <li>Pembuatan struktur kontrol dalam logika program</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-column skills">
          <div className="resume-category-header">
            <i className="fas fa-code"></i>
            <h3>Skills</h3>
          </div>

          <div className="skills-grid">
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <div className="skill-bars">
                <div className="skill-item">
                  <span className="skill-name">HTML & CSS</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: "27%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">React.js</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: "20" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h4>Data Analysis</h4>
              <div className="skill-bars">
                <div className="skill-item">
                  <span className="skill-name">Python</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">SQL</span>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: "72%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Resume;
