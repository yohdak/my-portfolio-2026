// src/components/BentoGrid.jsx
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BentoGrid = ({ items }) => {
  return (
    <section className="bento-section">
      <h2 className="section-title">Visual Playground</h2>
      
      <div className="bento-container">
        {items.map((item) => {
            // Tentukan Grid Class berdasarkan size di data
            let gridClass = "bento-item";
            if (item.size === "big") gridClass += " span-2-col span-2-row";
            if (item.size === "wide") gridClass += " span-2-col";
            if (item.size === "tall") gridClass += " span-2-row";

            // Tentukan apakah link internal (React) atau eksternal (Website lain)
            const isExternal = item.link.startsWith('http');
            const Wrapper = isExternal ? 'a' : Link;
            const linkProps = isExternal ? { href: item.link, target: "_blank" } : { to: item.link };

            return (
              <Wrapper key={item.id} {...linkProps} className={gridClass}>
                
                {/* Background Image (Kalau ada) */}
                {item.image && (
                  <img src={item.image} alt={item.title} className="bento-bg" />
                )}

                {/* Overlay Content */}
                <div className={`bento-content ${!item.image ? 'text-only' : ''}`}>
                  <div className="bento-info">
                    <span className="bento-sub">{item.subtitle}</span>
                    <h3 className="bento-title">{item.title}</h3>
                  </div>
                  <div className="bento-icon">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

              </Wrapper>
            );
        })}
      </div>
    </section>
  );
};

export default BentoGrid;