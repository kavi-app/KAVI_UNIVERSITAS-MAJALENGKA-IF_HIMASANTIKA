import logo from "../assets/logo/UMC-1.webp";
import { MapPinned, Phone, Mail } from "lucide-react";

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
            <h3>Hubungi Kami</h3>
            <p className="footer-location">
              <MapPinned size={18} />
              <span>Cirebon, Jawa Barat</span>
            </p>
            <p className="footer-phone">
              <Phone />{" "}
            </p>
            <p className="footer-mail">
              <Mail />{" "}
            </p>
          </div>

          <div className="footer-section">
            <h4>Media Sosial</h4>
            <a href="https://www.instagram.com/himasantika_umc/">Instagram</a>
            <a href="https://www.tiktok.com/@himasantika_umc">TikTok</a>
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
