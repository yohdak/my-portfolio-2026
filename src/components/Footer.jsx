import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* === BAGIAN ATAS: CTA & IDENTITAS === */}
        <div className="footer-top">
          
          {/* Kolom 1: Brand & Tagline */}
          <div className="footer-col brand-col">
            <h3 className="footer-logo">JESRIL.STUDIO</h3>
            <p className="footer-tagline">
              Menerjemahkan hukum fisika menjadi pengalaman digital yang estetik dan fungsional.
            </p>
          </div>

          {/* Kolom 2: Sitemap (Navigasi) */}
          <div className="footer-col">
            <h4>SITEMAP</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#projects">Selected Works</a></li>
              <li><a href="#about">About Me</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Kolom 3: Socials */}
          <div className="footer-col">
            <h4>CONNECT</h4>
            <ul className="footer-links">
              <li>
                <a href="https://linkedin.com" target="_blank" className="link-with-icon">
                  LinkedIn <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" className="link-with-icon">
                  Instagram <ArrowUpRight size={14} />
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" className="link-with-icon">
                  GitHub <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Contact Info (Dummy) */}
          <div className="footer-col">
            <h4>OFFICE</h4>
            <p>Surakarta, Indonesia</p>
            <p>Mon - Fri, 9am - 5pm</p>
            <br />
            <a href="mailto:hello@jesrilstudio.com" className="footer-mail">
              <Mail size={16} /> hello@jesril.com
            </a>
          </div>
        </div>

        {/* === BAGIAN BAWAH: BIG TEXT & COPYRIGHT === */}
        <div className="footer-bottom">
          {/* Teks Besar Estetik (Overlay Style) 
          <div className="big-text">PHYSICS X DESIGN</div>
          */}
          <div className="copyright-row">
            <span>© 2025 Jesril Pratama. All Rights Reserved.</span>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;