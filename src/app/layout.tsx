import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Anwarul Hidayah Kalisalak",
  description: "Portal Pendaftaran Santri Baru (PSB) Pondok Pesantren Anwarul Hidayah Kalisalak Tegal Tahun Ajaran 2026/2027.",
  keywords: "Pesantren, Anwarul Hidayah, Tegal, Pendaftaran Santri Baru, PSB, Pondok Pesantren",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={outfit.variable}>
      <body suppressHydrationWarning>
        <header className="glass-nav">
          <div className="container stack-on-mobile center-on-mobile" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1.5rem', gap: '0.75rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'transform 0.3s ease' }} className="hover-lift">
              <Image src="/logo.png" alt="Logo PP Anwarul Hidayah" width={45} height={45} style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
              <div style={{ textAlign: 'left' }}>
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary)', letterSpacing: '0.02em', fontWeight: 700, lineHeight: 1.2 }}>PP ANWARUL HIDAYAH</h3>
                <p className="hide-on-mobile" style={{ margin: 0, fontSize: '0.7rem', color: 'var(--secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>KALISALAK - TEGAL</p>
              </div>
            </Link>
            <nav style={{ display: 'flex', gap: '1rem', fontWeight: 500, alignItems: 'center' }}>
              <Link href="/" className="hide-on-mobile" style={{ color: 'var(--primary-light)', fontSize: '0.9rem' }}>Beranda</Link>
              <Link href="/pendaftaran" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.85rem' }}>Daftar Sekarang</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer style={{ background: '#0f172a', color: '#e2e8f0', paddingTop: '4rem' }}>
          <div className="container">
            {/* Top Grid */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginBottom: '3rem', justifyContent: 'space-between' }}>

              {/* Brand Column */}
              <div style={{ flex: '1 1 350px' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ background: 'white', padding: '4px', borderRadius: '50%' }}>
                    <Image src="/logo.png" alt="Logo PP Anwarul Hidayah" width={55} height={55} style={{ display: 'block' }} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.3rem', color: '#d4af37', fontWeight: 700, letterSpacing: '0.02em' }}>PP ANWARUL HIDAYAH</h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.05em' }}>KALISALAK - TEGAL</p>
                  </div>
                </Link>
                <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', color: '#cbd5e1' }}>
                  Mencetak generasi qur'ani yang berakhlakul karimah, unggul dalam ilmu agama dan berwawasan luas kebangsaan. Berkomitmen membentuk santri yang siap menghadapi tantangan zaman.
                </p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {/* Facebook */}
                  <a href="https://www.facebook.com/profile.php?id=61563167288763" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/pondokanwarulhidayah?igsh=MWozY2R6bm96MGtibw==" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  {/* WhatsApp Channel */}
                  <a href="https://whatsapp.com/channel/0029Vb7Xc5f5kg7AWFRYxX2W" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                  {/* YouTube */}
                  <a href="https://www.youtube.com/@ppahkalisalak" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                  </a>
                </div>
              </div>

              {/* Links Column */}
              <div style={{ flex: '1 1 150px' }}>
                <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Tautan Cepat</h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cbd5e1' }}>
                  <li><Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#d4af37' }}>›</span> Beranda</Link></li>
                  <li><Link href="#program" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#d4af37' }}>›</span> Program Unggulan</Link></li>
                  <li><Link href="/pendaftaran" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#d4af37' }}>›</span> Pendaftaran Santri</Link></li>
                </ul>
              </div>

              {/* Contact Column */}
              <div style={{ flex: '1 1 250px' }}>
                <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: 600 }}>Pusat Informasi</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#cbd5e1' }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ background: '#1e293b', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#d4af37' }}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <p style={{ margin: 0, lineHeight: 1.6 }}>
                      Jl. Kalisalak - Margasari, RT.003/RW.003, Kalisalak, Kec. Margasari, Kabupaten Tegal, Jawa Tengah 52463
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ background: '#1e293b', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#d4af37' }}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    </div>
                    <p style={{ margin: 0 }}>0851-7700-0972</p>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ background: '#1e293b', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#d4af37' }}>
                      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </div>
                    <p style={{ margin: 0 }}>anwarulhidayah972@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panoramic Map Section */}
            <div style={{ width: '100%', height: '300px', borderRadius: '1rem', overflow: 'hidden', border: '1px solid #1e293b', marginBottom: '3rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#d4af37', color: '#0f172a', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 700, zIndex: 1, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                📍 Lokasi Kami
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4127342866764!2d109.01532999999999!3d-7.078055300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f97195deab543%3A0x64fedf387de5a9fc!2sPondok%20Pesantren%20Anwarul%20Hidayah%20Kalisalak!5e0!3m2!1sen!2sid!4v1777522700386!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi PP Anwarul Hidayah"
              ></iframe>
            </div>

            {/* Bottom Bar */}
            <div style={{
              borderTop: '1px solid #1e293b',
              padding: '1.5rem 0 2rem 0',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              fontSize: '0.85rem',
              color: '#94a3b8'
            }}>
              <div>
                © {new Date().getFullYear()} Pondok Pesantren Anwarul Hidayah Kalisalak. All Rights Reserved.
              </div>
              <div style={{ display: 'flex', gap: '1.5rem' }}>
                <Link href="/" style={{ transition: 'color 0.2s' }}>Kebijakan Privasi</Link>
                <Link href="/" style={{ transition: 'color 0.2s' }}>Syarat & Ketentuan</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6285177000972?text=Assalamu'alaikum%20Admin%20PP%20Anwarul%20Hidayah,%20saya%20ingin%20bertanya%20seputar%20pendaftaran%20santri."
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: '#25D366',
            color: 'white',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 25px -5px rgba(37, 211, 102, 0.5)',
            zIndex: 9999,
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          className="wa-float-btn"
          aria-label="Chat WhatsApp"
        >
          <svg width="35" height="35" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
