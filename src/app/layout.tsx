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
  title: "Pendaftaran Santri Baru | PP Anwarul Hidayah",
  description: "Pendaftaran Santri Baru Pondok Pesantren Anwarul Hidayah Kalisalak Tegal Tahun Ajaran 2026/2027.",
  keywords: "Pesantren, Anwarul Hidayah, Tegal, Pendaftaran Santri Baru, PSB",
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
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', transition: 'transform 0.3s ease' }} className="hover-lift">
              <Image src="/logo.png" alt="Logo PP Anwarul Hidayah" width={55} height={55} style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }} />
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--primary)', letterSpacing: '0.02em', fontWeight: 700 }}>PP ANWARUL HIDAYAH</h3>
                <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>KALISALAK - TEGAL</p>
              </div>
            </Link>
            <nav style={{ display: 'flex', gap: '2.5rem', fontWeight: 500, alignItems: 'center' }}>
              <Link href="/" style={{ color: 'var(--primary-light)' }}>Beranda</Link>
              <Link href="/pendaftaran" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.95rem' }}>Daftar Sekarang</Link>
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
                  {/* Social Icons */}
                  <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </a>
                  <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }}>
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="#" style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: 'all 0.3s' }}>
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
      </body>
    </html>
  );
}
