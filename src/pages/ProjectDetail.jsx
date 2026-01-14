import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // === STATE DATA ===
  const project = projects.find((p) => String(p.id) === id);
  // Fallback: kalau gak ada gallery, pake single image dijadikan array
  const slides = project?.gallery || (project?.image ? [project.image] : []);

  // === STATE LIGHTBOX & ZOOM ===
  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  // === REFS ===
  const dragStartRef = useRef({ x: 0, y: 0 }); // Buat Pan (Geser Gambar Zoom)
  const touchStartRef = useRef(null);          // Buat Swipe (Geser Slide HP)

  // ---------------------------------------------------------
  // 1. SCROLL INSTANT KE ATAS (Gak Pake Animasi)
  // ---------------------------------------------------------
  useLayoutEffect(() => {
    // Matikan smooth scroll CSS global sebentar
    document.documentElement.style.scrollBehavior = 'auto';
    
    // Teleport ke atas
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });
  }, [id]);

  // ---------------------------------------------------------
  // 2. RESET ZOOM SAAT GANTI SLIDE
  // ---------------------------------------------------------
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // ---------------------------------------------------------
  // 3. KEYBOARD SHORTCUTS
  // ---------------------------------------------------------
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

  if (!project) return <div style={{padding:50, color:'var(--text)', textAlign:'center'}}>Project not found</div>;

  // ---------------------------------------------------------
  // LOGIC NAVIGASI & ZOOM
  // ---------------------------------------------------------
  const handleNext = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); };
  const handlePrev = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); };
  
  const handleWheel = (e) => {
    e.stopPropagation(); // Biar halaman belakang gak ikut scroll
    if (e.deltaY < 0) setZoomLevel((p) => Math.min(p + 0.2, 4)); // Max Zoom 4x
    else setZoomLevel((p) => Math.max(p - 0.2, 1)); // Min Zoom 1x
  };

  // ---------------------------------------------------------
  // LOGIC PANNING (Geser Gambar pas lagi Zoom)
  // ---------------------------------------------------------
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

  // ---------------------------------------------------------
  // LOGIC SWIPE (Khusus Mobile - Cuma aktif kalo gak di-zoom)
  // ---------------------------------------------------------
  const handleTouchStart = (e) => {
    if (zoomLevel === 1) {
      touchStartRef.current = e.changedTouches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (zoomLevel > 1 || touchStartRef.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEndX;
    const threshold = 50; // Minimal geser 50px baru ganti

    if (diff > threshold) handleNext();      // Geser Kiri -> Next
    else if (diff < -threshold) handlePrev(); // Geser Kanan -> Prev

    touchStartRef.current = null;
  };

  // ---------------------------------------------------------
  // STYLE TRACK (Buat Efek Sliding/Carousel)
  // ---------------------------------------------------------
  const trackStyle = {
    display: 'flex',
    height: '100%',
    width: `${slides.length * 100}%`, // Lebar total = Jumlah Gambar * 100%
    transform: `translateX(-${(currentIndex * 100) / slides.length}%)`, // Geser Track
    transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)', // Animasi Smooth
  };

  const slideContainerStyle = {
    width: `${100 / slides.length}%`, // Tiap gambar dapet jatah lebar rata
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    position: 'relative'
  };

  return (
    <div className="project-detail-page">
      
      {/* TOMBOL CLOSE FIXED */}
      <Link to="/" className="close-button">
        <X size={24} color="white" />
        <span style={{marginLeft: '8px', fontWeight: 'bold'}}>CLOSE</span>
      </Link>

      {/* === LIGHTBOX OVERLAY === */}
      {currentIndex !== null && (
        <div 
            className="lightbox-overlay" 
            onClick={() => setCurrentIndex(null)}
            // Event Listener Swipe di Overlay
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onWheel={handleWheel}
        >
            <div className="lightbox-close"><X size={30} /></div>
            
            {/* Tombol Navigasi (Hilang di HP via CSS .nav-btn) */}
            <button className="nav-btn left" onClick={handlePrev}><ChevronLeft size={40} /></button>
            
            {/* === TRACK CAROUSEL === */}
            <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
              <div className="lightbox-track" style={trackStyle}>
                
                {slides.map((img, index) => (
                  <div key={index} style={slideContainerStyle}>
                    <img 
                      src={img} 
                      className="lightbox-img" 
                      alt={`Slide ${index}`}
                      
                      // Event Mouse cuma aktif di gambar yang lagi dilihat
                      onMouseDown={index === currentIndex ? handleMouseDown : undefined}
                      onMouseMove={index === currentIndex ? handleMouseMove : undefined}
                      onMouseUp={index === currentIndex ? handleMouseUp : undefined}
                      
                      onClick={(e) => e.stopPropagation()} 
                      
                      style={{ 
                          // Logic Zoom Transform (Cuma apply ke gambar aktif)
                          transform: index === currentIndex 
                            ? `translate(${panPosition.x}px, ${panPosition.y}px) scale(${zoomLevel})` 
                            : 'scale(1)',
                          
                          cursor: zoomLevel > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default',
                          transition: isDragging ? 'none' : 'transform 0.1s ease-out',
                          
                          maxWidth: '95%',
                          maxHeight: '95%',
                          objectFit: 'contain',
                          display: 'block',
                          userSelect: 'none' // Biar gak ke-blok biru pas drag
                      }}
                    />
                  </div>
                ))}

              </div>
            </div>

            <button className="nav-btn right" onClick={handleNext}><ChevronRight size={40} /></button>
            
            <div className="slide-counter">{currentIndex + 1} / {slides.length}</div>
        </div>
      )}

      {/* === KONTEN UTAMA PAGE === */}
      <div className="content-container">
        
        {/* Header */}
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
                className="btn"
                style={{marginTop: '20px', display: 'inline-block', textDecoration: 'none'}}
              >
                Visit Live Site ↗
              </a>
            )}
          </div>
        </div>

        {/* Video Player */}
        {project.videoUrl && (
          <div className="video-container">
            {project.videoUrl.includes("embed") ? (
               <iframe src={project.videoUrl} title={project.title} allowFullScreen></iframe>
            ) : (
               <video 
                 controls 
                 src={project.videoUrl}
                 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
               >
                 Your browser does not support the video tag.
               </video>
            )}
          </div>
        )}

        {/* Gallery Stack (Klik untuk buka Lightbox) */}
        <div className="image-stack">
            {slides.map((img, index) => (
              <div key={index} className="image-wrapper">
                <img 
                  src={img} 
                  alt="gallery" 
                  loading="lazy" 
                  className="zoomable-image" 
                  onClick={() => setCurrentIndex(index)} 
                />
              </div>
            ))}
        </div>

        <div className="project-footer">
          <p>End of Project</p>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;