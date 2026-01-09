import { useLayoutEffect } from 'react'; // <--- TAMBAH INI
import { Link } from 'react-router-dom'; 
import Hero from '../components/Hero';
import Contact from '../components/Contact';
// import Footer from '../components/Footer'; 
// import BentoGrid from '../components/BentoGrid'; 
import { profileData, projects, contactConfig } from '../data';
import Navbar from '../components/Navbar';

const Home = () => {

  // === 1. JURUS PENGEMBALI POSISI (Restore Scroll) ===
  // Setiap kali Home dimuat, dia cek "Tadi gue lagi di posisi mana?"
  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem('homeScrollPos');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }
  }, []);

  // === 2. FUNGSI PENCATAT POSISI ===
  // Dipanggil pas lu klik project yang buka halaman detail
  const saveScrollPosition = () => {
    sessionStorage.setItem('homeScrollPos', window.scrollY);
  };

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

                  // KASUS A: Kalau ada directLink -> Pake tag <a> (Link Keluar)
                  if (item.directLink) {
                    return (
                      <a 
                        href={item.directLink} 
                        key={item.id} 
                        className="pin-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        // Gak perlu saveScrollPosition karena dia buka tab baru
                      >
                          <img src={item.image} alt={item.title} loading="lazy" />
                          
                          <div className="pin-overlay">
                              <h3>{item.title}</h3>
                              {/* Tambah panah dikit biar tau ini link keluar */}
                              <span className="pin-tag">{item.category} ↗</span>
                          </div>
                      </a>
                    );
                  }

                  // KASUS B: Project Biasa -> Pake tag <Link> (Masuk Detail Internal)
                  return (
                      <Link 
                        to={`/project/${item.id}`} 
                        key={item.id} 
                        className="pin-item"
                        onClick={saveScrollPosition} // <--- Fungsi Scroll dipanggil disini
                      >
                          <img src={item.image} alt={item.title} loading="lazy" />
                          
                          <div className="pin-overlay">
                              <h3>{item.title}</h3>
                              <span className="pin-tag">{item.category}</span>
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