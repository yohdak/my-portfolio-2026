import { Link } from 'react-router-dom'; // <--- Jangan lupa import ini
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BentoGrid from '../components/BentoGrid'; 
import { bentoItems, profileData, projects, contactConfig } from '../data';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="container">
      <Hero data={profileData} />
      
      <section id="projects" className="projects-section">
          <h2 style={{marginBottom: '30px'}}>Selected Works</h2>
          
          {/* CONTAINER PINTEREST (5 Kolom) */}
          <div className="pinterest-grid">
              
              {projects.map((item) => {
  // === LOGIC PILIH JALUR ===
                
                // OPSI 1: Kalo ada directLink -> Pake tag <a> (Link Keluar)
                if (item.directLink) {
                  return (
                    <a 
                      href={item.directLink} 
                      key={item.id}
                      className="pin-item"
                      target="_blank"             // Buka di tab baru (biar portfolio lu gak ketutup)
                      rel="noopener noreferrer"   // Keamanan standar
                    >
                      <div className="pin-content">
                        <img src={item.image} alt={item.title} />
                        <div className="overlay">
                          <h3>{item.title}</h3>
                          <p>{item.category}</p>
                          {/* Kasih icon panah dikit biar tau ini link luar */}
                          <span style={{fontSize:'0.8rem'}}>↗ Open Website</span>
                        </div>
                      </div>
                    </a>
                  );
                }

                // OPSI 2: Kalo project biasa -> Pake tag <Link> (Masuk Detail)
                return (
                  <Link 
                    to={`/project/${item.id}`} 
                    key={item.id} 
                    className="pin-item"
                    onClick={saveScrollPosition} // Fitur scroll balik yang tadi
                  >
                    <div className="pin-content">
                      <img src={item.image} alt={item.title} />
                      <div className="overlay">
                          <h3>{item.title}</h3>
                          <p>{item.category}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
      </section>

      <Contact data={contactConfig} />

    </div>
    </>
  );
};

export default Home;