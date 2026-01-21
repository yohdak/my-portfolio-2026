import React from 'react';
import './Hero.css';
import { FaInstagram, FaBehance, FaLinkedin } from "react-icons/fa"; // Pake ini, jauh lebih bersih
import { Download } from 'lucide-react'; 

const Hero = ({ data }) => {
  return (
    <section id="hero" className="hero">
      <div className="hero-section">
        <div className="hero-img">
          <img src={data.avatar} alt={data.name} className="hero-img-1" />
        </div>
        
        <div className="hero-text">
          <h1>{data.name}</h1>
          
          {/* --- BAGIAN SOSMED (BERSIH) --- */}
          <div className="social-links">
            <a href="https://instagram.com/yohdaklah" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} /> yohdaklah
            </a>
            <a href="https://instagram.com/yohdakdesigner" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} /> yohdakdesigner
            </a></div>
           <div className="social-links">
            <a href="https://instagram.com/jesril_pratama_" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} /> jesril_pratama_
            </a>
        
            <a href="https://behance.net/jesrilpratama" target="_blank" rel="noopener noreferrer">
              <FaBehance size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
          {/* ----------------------------- */}

        </div>
      </div>

      <div className="hero-section-bottom">
        <div className="bio-section">
          <p className="bio">{data.bio}</p>
          <a 
            href="/cv-pramudya-jesril3.pdf" 
            download="Pramudya_Jesril_CV.pdf"
            className="btn-contact"
          >
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;