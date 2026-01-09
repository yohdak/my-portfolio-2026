import { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // === STATE LIGHTBOX ===
  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Cari Project (Aman buat ID Angka/Huruf)
  const project = projects.find((p) => String(p.id) === id);
  const slides = project?.gallery || [project?.image];

  // 1. SCROLL KE ATAS SETIAP BUKA HALAMAN (Standard Web)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 2. RESET LIGHTBOX SAAT GANTI SLIDE
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // 3. KEYBOARD SHORTCUTS
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (currentIndex === null) return;
      if (e.key === 'ArrowRight') handleNext(e);
      if (e.key === 'ArrowLeft') handlePrev(e);
      if (e.key === 'Escape') setCurrentIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  if (!project) return <div style={{padding:50, color:'white'}}>Project not found</div>;

  // --- LOGIC LIGHTBOX ---
  const handleNext = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); };
  const handlePrev = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); };
  
  const handleWheel = (e) => {
    e.stopPropagation();
    if (e.deltaY < 0) setZoomLevel((p) => Math.min(p + 0.2, 4));
    else setZoomLevel((p) => Math.max(p - 0.2, 1));
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      e.preventDefault();
      setIsDragging(true);
      dragStartRef.current = { x: e.clientX - panPosition.x, y: e.clientY - panPosition.y };
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      e.preventDefault();
      setPanPosition({ x: e.clientX - dragStartRef.current.x, y: e.clientY - dragStartRef.current.y });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="project-detail-page">
      
      {/* TOMBOL CLOSE */}
      <Link to="/" className="close-button" style={{zIndex: 999}}>
        <X size={24} color="white" />
        <span style={{marginLeft: '8px', fontWeight: 'bold'}}>CLOSE</span>
      </Link>

      {/* LIGHTBOX OVERLAY */}
      {currentIndex !== null && (
        <div 
            className="lightbox-overlay" 
            onClick={() => setCurrentIndex(null)}
            onWheel={handleWheel}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <div className="lightbox-close"><X size={30} /></div>
            <button className="nav-btn left" onClick={handlePrev}><ChevronLeft size={40} /></button>
            
            <img 
              src={slides[currentIndex]} 
              className="lightbox-img" 
              onClick={(e) => e.stopPropagation()} 
              onMouseDown={handleMouseDown}
              style={{ 
                  transform: `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})`,
                  cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
              }}
            />

            <button className="nav-btn right" onClick={handleNext}><ChevronRight size={40} /></button>
            <div className="slide-counter">{currentIndex + 1} / {slides.length}</div>
        </div>
      )}

      {/* KONTEN UTAMA */}
      <div className="content-container">
        
        {/* HEADER (Judul Selalu di Atas - Standard UX) */}
        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="meta-info">
             <span className="pill">{project.category}</span>
             <p>{project.description}</p>
             {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  padding: '10px 20px',
                  backgroundColor: 'white',
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  borderRadius: '30px',
                  border: '1px solid white',
                  transition: '0.3s'
                }}
                // Efek hover simpel (opsional, bisa dipindah ke CSS)
                onMouseOver={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'blue'; }}
                onMouseOut={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = 'black'; }}
              >
                Visit Live Site ↗
              </a>
            )}
          </div>
        </div>

        {/* VIDEO PLAYER */}
        {project.videoUrl && (
          <div className="video-container">
            {project.videoUrl.includes("embed") ? (
               <iframe src={project.videoUrl} title={project.title} allowFullScreen></iframe>
            ) : (
               <video 
                 key={project.videoUrl} 
                 controls 
                 src={project.videoUrl}
                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
               >
                 Your browser does not support the video tag.
               </video>
            )}
          </div>
        )}

        {/* GALLERY (Pilih Layout: Carousel IG atau Stack Biasa) */}
        {project.layout === 'carousel' ? (
          <div className="carousel-container">
            <div className="carousel-track">
              {slides.map((img, index) => (
                <img key={index} src={img} alt="slide" className="carousel-img" onClick={() => setCurrentIndex(index)} />
              ))}
            </div>
            <p className="carousel-hint">← Swipe →</p>
          </div>
        ) : (
          <div className="image-stack">
            {slides.map((img, index) => (
              <div key={index} className="image-wrapper">
                <img src={img} alt="slide" loading="lazy" className="zoomable-image" onClick={() => setCurrentIndex(index)} />
              </div>
            ))}
          </div>
        )}

        <div className="project-footer">
          <p>End of Project</p>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;