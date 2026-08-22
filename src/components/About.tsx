import { motion } from 'framer-motion';
import aboutImage from '../assets/images/about-club.jpg';

export default function About() {
  return (
    <section id="club">
      <div className="container">
        <div className="row gy-5 align-items-center">
          
          <motion.div
            className="col-lg-6 order-lg-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">// Sobre el club</span>
            <h2 className="section-title">
              Nacido en<br />
              la banqueta,<br />
              rodando en<br />
              carretera.
            </h2>
            <p className="section-lede">
              GLC — Guadalajara Lancer Club nació en 2022 de un grupo pequeño de dueños de Lancer que se
              juntaban a comparar autos y terminaban hablando de rodadas. Hoy es un club formal con rodadas
              periódicas, apoyo entre miembros para mantenimiento y modificaciones, y un espacio donde el
              Lancer —de cualquier generación y versión— tiene su lugar.
            </p>
            
            <div className="founding-block">
              <div className="yr mono">
                <span className="text-rally">2022</span> — Presente
              </div>
              <p className="text-muted-2 mt-2 mb-0" style={{ maxWidth: 480 }}>
                Cuatro años de rodadas, encuentros y una comunidad que sigue creciendo en Guadalajara y
                alrededores.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-6 order-lg-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-visual overflow-hidden rounded position-relative">
              <motion.img
                src={aboutImage}
                alt="Convoy de autos GLC rodando en Guadalajara"
                loading="lazy"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="plate">GLC · GDL</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}