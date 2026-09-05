import logo from "../assets/logo/UMC-1.webp";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={logo} alt="Logo Universitas Muhammadiyah Cirebon" />

              <div>
                <h2>Universitas Muhammadiyah Cirebon</h2>
                <p>Pendidikan Unggul, Berdampak Nyata bagi Peradaban. UMC berkomitmen menghadirkan pendidikan berkualitas yang memadukan keunggulan akademik, profesionalisme, dan keluhuran akhlak. </p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Navigasi Cepat</h3>
            <a href="#home">Home</a>
            <a href="#tentang">Tentang</a>
            <a href="#visi-misi">Visi-Misi</a>
            <a href="#fasilitas">Fasilitas</a>
            <a href="#kegiatan">Kegiatan</a>
          </div>

          <div className="footer-section">
            <h3>Media sosial</h3>
            <a href="https://www.instagram.com/himasantika_umc/">Instagram</a>
            <a href="https://www.tiktok.com/@himasantika_umc">TikTok</a>
          </div>

          <div className="footer-section">
            <h3>Lokasi</h3>
            <div className="lg:w-10 w-95 lg:h-80 p-2! border border-(--line)">
              <iframe className="w-full h-full grayscale-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.2249823068105!2d108.49060917585716!3d-6.742388993253898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1e3b7b1cda1b%3A0xe6245844d4697b1!2sUniversitas%20Muhammadiyah%20Cirebon%20(Pusat)%20(Kampus%202)!5e0!3m2!1sid!2sid!4v1788588584914!5m2!1sid!2sid" loading="lazy"></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Universitas Muhammadiyah Cirebon. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
