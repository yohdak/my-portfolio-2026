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
              
              {projects.map((item) => (
                  <Link to={`/project/${item.id}`} key={item.id} className="pin-item">
                      
                      {/* Gambar (Width 100%, Height Auto) */}
                      <img src={item.image} alt={item.title} loading="lazy" />
                      
                      {/* Overlay (Muncul pas Hover) */}
                      <div className="pin-overlay">
                          <h3>{item.title}</h3>
                          <span className="pin-tag">{item.category}</span>
                      </div>

                  </Link>
              ))}

          </div>
      </section>

      <Contact data={contactConfig} />

    </div>
    </>
  );
};

export default Home;