import { motion } from 'framer-motion';
import { timelineItems } from '../content';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function RodadasTimeline() {
  return (
    <section id="rodadas">
      <div className="container">
        <div className="row gy-5">
          
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-tag">// Bitácora</span>
            <h2 className="section-title">
              Rodadas<br />y encuentros.
            </h2>
            <p className="section-lede">
              Salimos en grupo de forma periódica, además de encuentros mensuales para convivir, mostrar el
              carro y planear la siguiente ruta.
            </p>
          </motion.div>

          <div className="col-lg-8">
            <motion.div
              className="timeline"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {timelineItems.map((item) => (
                <motion.div className="tl-item" key={item.title} variants={itemVariants}>
                  <div className="dot" />
                  <span className="date mono">{item.date}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="status">{item.status}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}