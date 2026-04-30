import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero" style={{
        position: 'relative',
        height: '80vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}>
          <Image
            src="/masjid.png"
            alt="Pesantren Anwarul Hidayah"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.6) 50%, rgba(15, 23, 42, 0.2) 100%)'
          }}></div>
        </div>

        <div className="container animate-fade-in center-on-mobile" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '48rem' }}>
            <span className="badge" style={{ marginBottom: '1.5rem' }}>
              Penerimaan Santri Baru 2026/2027
            </span>
            <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 700 }}>
              Membentuk Generasi Beradab & <span className="text-gradient">Berilmu</span>
            </h1>
            <p style={{ fontSize: '1.15rem', marginBottom: '2.5rem', color: '#e2e8f0', fontWeight: 300, lineHeight: 1.8 }}>
              Bergabunglah bersama kami di Pondok Pesantren Anwarul Hidayah. Tempat dimana ilmu agama dan akhlak menjadi prioritas utama dalam mendidik santri.
            </p>
            <div className="center-on-mobile" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/pendaftaran" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                Daftar Sekarang
              </Link>
              <Link href="#program" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', borderColor: 'white', color: 'white' }}>
                Lihat Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ background: 'var(--surface)', marginTop: '-4rem', position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="container">
          <div className="card" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))',
            gap: '2rem',
            textAlign: 'center',
            marginTop: '-6rem',
            padding: '3rem'
          }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>25+</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Santri Aktif</p>
            </div>
            <div style={{ borderLeft: '1px solid var(--border)', borderRight: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>20+</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Ustadz Pengajar</p>
            </div>
            <div>
              <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>15</h2>
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Program Unggulan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="gap-responsive center-on-mobile" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 320px', maxWidth: '380px', margin: '0 auto', position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(255,255,255,0.5)', background: 'var(--surface)' }}>
              <div style={{ aspectRatio: '3/4', width: '100%', position: 'relative' }}>
                <Image
                  src="/kyai.png"
                  alt="KH. Nawawi Azhari, S. HI"
                  fill
                  unoptimized
                  style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                />
              </div>
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <span className="badge" style={{ marginBottom: '1rem' }}>Profil Pengasuh</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>KH. Nawawi Azhari, S. HI</h2>
              <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '2rem', fontSize: '1.1rem', letterSpacing: '0.05em' }}>
                PENGASUH PONDOK PESANTREN ANWARUL HIDAYAH
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Di bawah bimbingan dan asuhan beliau, Pondok Pesantren Anwarul Hidayah berkomitmen untuk terus mencetak generasi Qur'ani yang berpegang teguh pada ajaran Ahlussunnah wal Jama'ah.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Beliau mengutamakan pendidikan akhlak (adab) sebelum ilmu, sesuai dengan manhaj para ulama salaf, serta membekali santri dengan wawasan kebangsaan yang kuat melalui berbagai program pendidikan yang komprehensif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="program" className="section">
        <div className="container">
          <div className="center-on-mobile" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Program Unggulan Kami</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Kami menawarkan berbagai program pendidikan yang dirancang untuk membekali santri dengan pemahaman agama yang mendalam dan karakter yang kuat.
            </p>
          </div>

          <div className="grid-3-col" style={{ display: 'grid', gap: '2rem' }}>
            <div className="card">
              <div style={{ width: '60px', height: '60px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3>Al-Qur'an</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.7 }}>
                Program Baca Al-Qur'an dengan metode sorogan dan talaqqi yang dibimbing oleh ustadz berpengalaman.
              </p>
            </div>
            <div className="card">
              <div style={{ width: '60px', height: '60px', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--secondary)', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
              </div>
              <h3>Kajian Kitab Kuning</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.7 }}>
                Pembelajaran mendalam kitab-kitab salaf (Turats) meliputi Fiqh, Akidah, Akhlak, dan Nahwu Shorof.
              </p>
            </div>
            <div className="card">
              <div style={{ width: '60px', height: '60px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', borderRadius: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <h3>Pendidikan Formal</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.7 }}>
                Kurikulum terpadu yang menggabungkan pendidikan pesantren dengan kurikulum nasional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="section" style={{ background: 'var(--background)' }}>
        <div className="container">
          <div className="gap-responsive" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>

            {/* Timeline */}
            <div>
              <span className="badge" style={{ marginBottom: '1rem' }}>Rutinitas Santri</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Kegiatan Pembelajaran</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
                Jadwal harian di Pondok Pesantren Anwarul Hidayah dirancang seimbang antara ilmu agama (kepesantrenan) dan pendidikan umum.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px' }}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0L16 8L8 16L0 8L8 0Z" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Ba'da Subuh</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Ngaji Al-Qur'an pagi hari.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px' }}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0L16 8L8 16L0 8L8 0Z" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Pagi Hari</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Sekolah umum sesuai dengan minat masing-masing santri (diberikan keleluasaan pilihan).</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px' }}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0L16 8L8 16L0 8L8 0Z" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Ba'da Ashar</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Pembelajaran bersama KH. Nawawi, dilanjutkan kegiatan ngaji & penguasaan bacaan Al-Qur'an.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '4px' }}>
                    <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0L16 8L8 16L0 8L8 0Z" /></svg>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Ba'da Isya</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Pengkajian bersama KH. Nawawi, dilanjutkan kegiatan pembelajaran Madrasah (Dewan Asatidz).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="card" style={{ background: 'var(--primary-dark)', color: 'white', borderColor: 'rgba(255,255,255,0.1)' }}>
              <h3 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Kegiatan Ekstrakurikuler</h3>
              <p style={{ opacity: 0.8, marginBottom: '2rem', lineHeight: 1.7 }}>
                Selain pembelajaran akademik dan agama, santri juga dibekali dengan berbagai keterampilan melalui kegiatan ekstrakurikuler:
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.2)', color: 'var(--secondary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{ fontWeight: 500, letterSpacing: '0.02em' }}>Seni Tilawah</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.2)', color: 'var(--secondary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{ fontWeight: 500, letterSpacing: '0.02em' }}>Pencak Silat Pagar Nusa</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: 'var(--radius)' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.2)', color: 'var(--secondary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span style={{ fontWeight: 500, letterSpacing: '0.02em' }}>Seni Hadroh</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Transparansi Biaya</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Informasi Pembiayaan</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Kami berkomitmen untuk memberikan pendidikan berkualitas dengan biaya yang terjangkau dan transparan bagi semua kalangan.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>

            <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--primary)' }}></div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Awal Masuk (Tahun Pertama)</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>Tanggungan pembayaran saat mendaftar ulang.</p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Daftar Ulang</span>
                  <span style={{ fontWeight: 600 }}>Rp 50.000</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Biaya Makan (Bulan Pertama)</span>
                  <span style={{ fontWeight: 600 }}>Rp 330.000</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Tabungan Seragam Imtihan</span>
                  <span style={{ fontWeight: 600 }}>Rp 20.000</span>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--border)', paddingBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Pembelian Kitab</span>
                  <span style={{ fontWeight: 600, color: 'var(--secondary)' }}>Disesuaikan Kelas</span>
                </li>
              </ul>
              <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '1rem', borderRadius: 'var(--radius)', textAlign: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Estimasi Total Awal</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)' }}>Rp 400.000 <span style={{ fontSize: '1.2rem', fontWeight: 500 }}>-</span> Rp 500.000</div>
              </div>
            </div>

            <div className="card" style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--secondary)', boxShadow: '0 20px 25px -5px rgba(212, 175, 55, 0.1)' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: 'var(--secondary)' }}></div>
              <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <span style={{ background: 'var(--secondary)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>Rutin</span>
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>Biaya Bulanan</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem' }}>Tanggungan rutin untuk bulan-bulan berikutnya.</p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--primary-dark)', lineHeight: 1 }}>Rp 350.000</span>
                <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>/ bulan</span>
              </div>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                  <svg width="20" height="20" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Sudah termasuk Syahriyah (SPP)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                  <svg width="20" height="20" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Sudah termasuk biaya makan santri
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)' }}>
                  <svg width="20" height="20" fill="none" stroke="var(--secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  Fasilitas asrama & listrik
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ background: 'var(--primary-dark)', color: 'white', textAlign: 'center', width: '100%' }}>
        <div className="container">
          <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Mulai Masa Depan Gemilang</h2>
          <p style={{ marginBottom: '2.5rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 2.5rem auto' }}>
            Pendaftaran dibuka mulai sekarang. Segera daftarkan putra-putri Anda untuk menjadi bagian dari keluarga besar Pondok Pesantren Anwarul Hidayah.
          </p>
          <Link href="/pendaftaran" className="btn btn-secondary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
            Daftar Sebagai Santri
          </Link>
        </div>
      </section>
    </div>
  );
}
