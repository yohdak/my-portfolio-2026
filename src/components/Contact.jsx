import { Mail, ArrowRight } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* Kolom Kiri: Teks & Context */}
        <div className="contact-text">
            <div className="icon-badge">
                <Mail size={20} />
                <span>Contact</span>
            </div>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
        </div>

        {/* Kolom Kanan: Action Button */}
        <div className="contact-action">
            {/* Logic Mailto: Pas diklik langsung buka aplikasi email */}
            <a href={`mailto:${data.email}`} className="btn-contact">
                {data.btnText}
                <ArrowRight size={20} />
            </a>
            <span className="email-preview">{data.email}</span>
        </div>

      </div>
    </section>
  );
};

export default Contact;