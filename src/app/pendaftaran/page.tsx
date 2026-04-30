"use client";

import { useState } from "react";
import Image from "next/image";

export default function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    namaLengkap: "",
    tempatLahir: "",
    tanggalLahir: "",
    jenisKelamin: "",
    alamat: "",
    namaAyah: "",
    namaIbu: "",
    whatsapp: "",
    pendidikanTerakhir: "",
    alasanMendaftar: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="card" style={{ maxWidth: '600px', margin: '0 auto', padding: '4rem 2rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ color: 'var(--accent)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              <svg width="80" height="80" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <h2 style={{ marginBottom: '1rem' }}>Pendaftaran Berhasil!</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Terima kasih telah mendaftar di PP Anwarul Hidayah. Data Anda telah kami terima. Tim kami akan menghubungi Anda melalui WhatsApp dalam 1x24 jam untuk proses selanjutnya.
            </p>
            <button onClick={() => window.location.href = '/'} className="btn btn-primary">
              Kembali ke Beranda
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section" style={{ background: 'var(--background)', width: '100%' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Formulir Pendaftaran</h1>
          <p style={{ color: 'var(--text-muted)' }}>Silakan lengkapi data santri di bawah ini dengan benar.</p>
        </div>

        <div className="card" style={{ maxWidth: '50rem', margin: '0 auto', padding: 0, overflow: 'hidden' }}>
          {/* Progress Bar */}
          <div style={{ background: 'var(--primary-dark)', padding: '1.5rem', display: 'flex', gap: '1rem' }}>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{ 
                flex: 1, 
                height: '6px', 
                background: s <= step ? 'linear-gradient(90deg, var(--secondary) 0%, var(--secondary-light) 100%)' : 'rgba(255,255,255,0.1)',
                borderRadius: '3px',
                transition: 'all 0.4s ease'
              }}></div>
            ))}
          </div>

          <form onSubmit={handleSubmit} style={{ padding: '2.5rem' }}>
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', color: 'var(--primary-dark)' }}>
                  <span style={{ background: 'var(--primary-light)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 600, boxShadow: 'var(--shadow)' }}>1</span>
                  Data Diri Calon Santri
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Nama Lengkap</label>
                    <input type="text" name="namaLengkap" required className="form-control" placeholder="Sesuai Akta Kelahiran" value={formData.namaLengkap} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tempat Lahir</label>
                    <input type="text" name="tempatLahir" required className="form-control" value={formData.tempatLahir} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tanggal Lahir</label>
                    <input type="date" name="tanggalLahir" required className="form-control" value={formData.tanggalLahir} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Jenis Kelamin</label>
                    <select name="jenisKelamin" required className="form-control" value={formData.jenisKelamin} onChange={handleChange}>
                      <option value="">Pilih...</option>
                      <option value="Laki-laki">Laki-laki</option>
                      <option value="Perempuan">Perempuan</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">WhatsApp (Aktif)</label>
                    <input type="tel" name="whatsapp" required className="form-control" placeholder="0812..." value={formData.whatsapp} onChange={handleChange} />
                  </div>
                </div>
                <div style={{ textAlign: 'right', marginTop: '2rem' }}>
                  <button type="button" onClick={nextStep} className="btn btn-primary">Lanjut</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', color: 'var(--primary-dark)' }}>
                  <span style={{ background: 'var(--primary-light)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 600, boxShadow: 'var(--shadow)' }}>2</span>
                  Data Orang Tua / Wali
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div className="form-group">
                    <label className="form-label">Nama Ayah</label>
                    <input type="text" name="namaAyah" required className="form-control" value={formData.namaAyah} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Nama Ibu</label>
                    <input type="text" name="namaIbu" required className="form-control" value={formData.namaIbu} onChange={handleChange} />
                  </div>
                  <div className="form-group" style={{ gridColumn: 'span 2' }}>
                    <label className="form-label">Alamat Lengkap</label>
                    <textarea name="alamat" required className="form-control" rows={3} value={formData.alamat} onChange={handleChange}></textarea>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  <button type="button" onClick={prevStep} className="btn btn-outline">Kembali</button>
                  <button type="button" onClick={nextStep} className="btn btn-primary">Lanjut</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.25rem', color: 'var(--primary-dark)' }}>
                  <span style={{ background: 'var(--primary-light)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 600, boxShadow: 'var(--shadow)' }}>3</span>
                  Pendidikan & Motivasi
                </h3>
                <div className="form-group">
                  <label className="form-label">Pendidikan Terakhir (SD/MI/SMP/MTs)</label>
                  <input type="text" name="pendidikanTerakhir" required className="form-control" value={formData.pendidikanTerakhir} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label">Mengapa memilih PP Anwarul Hidayah?</label>
                  <textarea name="alasanMendaftar" required className="form-control" rows={4} value={formData.alasanMendaftar} onChange={handleChange}></textarea>
                </div>
                
                <div style={{ background: 'rgba(212, 175, 55, 0.08)', borderLeft: '4px solid var(--secondary)', padding: '1.25rem 1.5rem', borderRadius: '0 var(--radius) var(--radius) 0', marginBottom: '2rem' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--foreground)', lineHeight: 1.6 }}>
                    <strong style={{ color: 'var(--secondary)' }}>Penting:</strong> Dengan menekan tombol daftar, Anda menyatakan bahwa data yang diisi adalah benar dan bersedia mengikuti prosedur seleksi santri baru.
                  </p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                  <button type="button" onClick={prevStep} className="btn btn-outline">Kembali</button>
                  <button type="submit" disabled={isSubmitting} className="btn btn-secondary">
                    {isSubmitting ? "Memproses..." : "Daftar Sekarang"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
