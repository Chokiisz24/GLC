import { motion } from 'framer-motion';
import { joinSteps } from '../content';
import { Send } from 'lucide-react';

export default function JoinSection() {
  return (
    <section id="unete">
      <div className="container">
        <motion.div
          className="join-panel"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="row gy-4 align-items-center">
            
            <div className="col-lg-6">
              <span className="section-tag">// Únete</span>
              <h2 className="section-title mb-3">
                ¿Traes un<br />
                Lancer?<br />
                Ya eres<br />
                de los nuestros.
              </h2>
              <p className="section-lede">
                No pedimos que sea de un año o versión en particular. Si tu auto es un Mitsubishi Lancer y
                quieres rodar con gente que entiende el modelo tan bien como tú, aquí es.
              </p>
            </div>

            <div className="col-lg-6">
              <ol className="join-steps">
                {joinSteps.map((step, i) => (
                  <motion.li
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                  >
                    <span className="n mono">{String(i + 1).padStart(2, '0')}</span>
                    <span className="t">{step}</span>
                  </motion.li>
                ))}
              </ol>
              
              <motion.a
                href="https://www.instagram.com/gdlancerclub/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-rally btn-animated mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Escríbenos por Instagram</span>
                <Send size={16} className="ms-2" />
              </motion.a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}