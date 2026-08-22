import { useState } from 'react';
import { motion } from 'framer-motion';
import { galleryItems } from '../content';
import Lightbox from './Lightbox';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className="bg-panel">
      <div className="container">
        <span className="section-tag">// Galería</span>
        <h2 className="section-title">
          El club<br />en imágenes.
        </h2>
        <p className="section-lede mb-5">
          Rodadas, encuentros y los autos de los miembros — así se ve GLC en la calle y en carretera.
        </p>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.button
              type="button"
              className={`gal-item ${item.size ?? 'normal'}`}
              key={item.src}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ampliar foto: ${item.alt}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gal-item-expand" aria-hidden="true">
                <Maximize2 size={15} />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <Lightbox
        images={galleryItems}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}