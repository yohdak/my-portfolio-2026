import { useLayoutEffect } from 'react'; // <--- TAMBAH INI (PENTING)
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
// import Footer from '../components/Footer'; // Kalau gak dipake bisa di-hide
import BentoGrid from '../components/BentoGrid'; 
import { bentoItems, profileData, projects, contactConfig } from '../data';
import Navbar from '../components/Navbar';

const Home = () => {

  // === 1. JURUS PENGEMBALI POSISI (Restore Scroll) ===
  // Pas halaman dimuat, cek ada catetan posisi scroll gak?
  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem('homeScrollPos');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition));
    }
  }, []);

  // === 2. FUNGSI PENCATAT POSISI ===
  // Dipanggil pas lu klik salah satu project
  const saveScrollPosition = () => {
    sessionStorage.setItem('homeScrollPos', window.scrollY);
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <Hero data={profileData} />
      
      {/* Kalau mau pake BentoGrid, taruh sini. Kalau enggak, skip aja */}
      {/* <BentoGrid items={bentoItems} /> */}
      
      <section id="projects" className="projects-section">
          <h2 style={{marginBottom: '30px'}}>Selected Works</h2>
          
          {/* CONTAINER PINTEREST (5 Kolom) */}
          <div className="pinterest-grid">
              
              {projects.map((item) => {
                // === LOGIC PILIH JALUR ===
                
                // OPSI 1: Kalo ada directLink -> Pake tag <a> (Link Keluar)
                // Link keluar GAK PERLU saveScrollPosition (karena buka tab baru)
                if (item.directLink) {
                  return (
                    <a 
                      href={item.directLink} 
                      key={item.id}
                      className="pin-item"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="pin-content">
                        <img src={item.image} alt={item.title} />
                        <div className="overlay">
                          <h3>{item.title}</h3>
                          <p>{item.category}</p>
                          <span style={{fontSize:'0.8rem'}}>↗ Open Website</span>
                        </div>
                      </div>
                    </a>
                  );
                }

                // OPSI 2: Kalo project biasa -> Pake tag <Link> (Masuk Detail)
                // Link dalam WAJIB PAKE onClick={saveScrollPosition}
                return (
                  <Link 
                    to={`/project/${item.id}`} 
                    key={item.id} 
                    className="pin-item"
                    onClick={saveScrollPosition} // <--- Skrg ini aman karena fungsinya udah ada di atas
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