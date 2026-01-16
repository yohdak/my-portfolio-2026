import { useLayoutEffect, useState, useRef } from 'react'; // <--- Tambah useRef (Opsional buat jaga-jaga)
import { Link } from 'react-router-dom'; 
import Hero from '../components/Hero';
import { profileData, projects } from '../data';
import Navbar from '../components/Navbar';

const Home = () => {

  // ... (Code useLayoutEffect Restore Scroll JANGAN DIHAPUS, biarin aja sama kayak sebelumnya) ...
  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem('homeScrollPos');
    if (savedPosition) {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo({ top: parseInt(savedPosition), left: 0, behavior: 'instant' });
      setTimeout(() => { document.documentElement.style.scrollBehavior = ''; }, 0);
    }
  }, []);

  const saveScrollPosition = () => {
    sessionStorage.setItem('homeScrollPos', window.scrollY);
  };


  // === LOGIC FILTER ===
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map(item => item.category))];

  const filteredProjects = projects.filter(item => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  // === FUNGSI GANTI KATEGORI YANG AMAN ===
  const handleCategoryChange = (cat) => {
    // 1. Catat posisi scroll saat ini
    const currentScroll = window.scrollY;

    // 2. Ganti kategori
    setSelectedCategory(cat);

    // 3. Paksa browser tetap di posisi itu setelah render ulang (Anti-Lompat)
    requestAnimationFrame(() => {
      window.scrollTo({
        top: currentScroll,
        behavior: 'instant'
      });
    });
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <Hero data={profileData} />
      
      <section id="projects" className="projects-section">
          <h2 style={{marginBottom: '20px'}}>Selected Works</h2>

          {/* === BUTTONS FILTER === */}
          <div className="filter-container" style={{ marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button" // <--- PENTING: Biar gak dianggap submit form
                onClick={(e) => {
                    e.preventDefault(); // Biar gak ada event aneh-aneh
                    handleCategoryChange(cat);
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: '1px solid #ccc',
                  background: selectedCategory === cat ? '#333' : 'transparent',
                  color: selectedCategory === cat ? '#fff' : 'inherit',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* CONTAINER PINTEREST
             Kasih 'minHeight' biar kalau hasil filternya dikit, 
             halaman gak tiba-tiba memendek dan bikin scroll loncat.
          */}
          <div className="pinterest-grid" style={{ minHeight: '100vh' }}> 
              
              {filteredProjects.map((item) => {
                  // ... (Isi card sama persis kayak sebelumnya) ...
                  if (item.directLink) {
                    return (
                      <a 
                        href={item.directLink} 
                        key={item.id} 
                        className="pin-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                          <img src={item.image} alt={item.title} loading="lazy" />
                          <div className="pin-overlay">
                              <h3>{item.title}</h3>
                              <span className="pin-tag">{item.category} ↗</span>
                          </div>
                      </a>
                    );
                  }

                  return (
                      <Link 
                        to={`/project/${item.id}`} 
                        key={item.id} 
                        className="pin-item"
                        onClick={saveScrollPosition} 
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

    </div>
    </>
  );
};

export default Home;