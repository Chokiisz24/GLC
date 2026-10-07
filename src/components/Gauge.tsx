import { motion } from 'framer-motion';

interface GaugeProps {
  centerValue: string;
  centerLabel: string;
}

const CX = 170;
const CY = 170;
const R_OUTER = 150;
const R_INNER = 136;
const START_ANGLE = -125;
const SWEEP_ANGLE = 250;
const END_ANGLE = START_ANGLE + SWEEP_ANGLE;
const TICK_COUNT = 20;
const REST_ANGLE = 48; // ángulo final de reposo de la aguja

// Misma fórmula para TODO lo que se dibuja sobre el círculo (marcas y
// anillo), así garantizamos que caigan exactamente en el mismo centro
// y radio — nada de coordenadas puestas a mano.
function polarToCartesian(angleDeg: number, radius: number) {
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(angleRad),
    y: CY + radius * Math.sin(angleRad),
  };
}

function buildTicks() {
  const ticks = [];
  for (let i = 0; i <= TICK_COUNT; i++) {
    const angle = START_ANGLE + i * (SWEEP_ANGLE / TICK_COUNT);
    const outer = polarToCartesian(angle, R_OUTER);
    const inner = polarToCartesian(angle, R_INNER);
    ticks.push({ x1: outer.x, y1: outer.y, x2: inner.x, y2: inner.y, key: i });
  }
  return ticks;
}

// Arco del anillo rojo: mismo radio y mismos ángulos que las marcas,
// calculado, no escrito a mano.
function buildRingPath() {
  const start = polarToCartesian(START_ANGLE, R_OUTER);
  const end = polarToCartesian(END_ANGLE, R_OUTER);
  const largeArcFlag = SWEEP_ANGLE > 180 ? 1 : 0;
  return `M ${start.x.toFixed(2)} ${start.y.toFixed(2)} A ${R_OUTER} ${R_OUTER} 0 ${largeArcFlag} 1 ${end.x.toFixed(2)} ${end.y.toFixed(2)}`;
}

export default function Gauge({ centerValue, centerLabel }: GaugeProps) {
  const ticks = buildTicks();
  const ringPath = buildRingPath();

  return (
    <div className="gauge-wrap">
      <svg viewBox="0 0 340 340">
        <circle cx={CX} cy={CY} r={R_OUTER} fill="none" stroke="#22262e" strokeWidth={1} />
        <g stroke="#3a4048" strokeWidth={1}>
          {ticks.map((t) => (
            <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
          ))}
        </g>
        <path d={ringPath} fill="none" stroke="#e2231a" strokeWidth={3} strokeLinecap="round" opacity={0.55} />

        {/* Aguja animada con Framer Motion — autocontenida, ya no
            depende de ningún @keyframes externo en el CSS. */}
        <motion.g
          style={{
            transformOrigin: `${CX}px ${CY}px`,
            transformBox: 'view-box',
          }}
          initial={{ rotate: START_ANGLE }}
          animate={{ rotate: [START_ANGLE, REST_ANGLE + 10, REST_ANGLE - 5, REST_ANGLE] }}
          transition={{ duration: 2.2, times: [0, 0.6, 0.8, 1], ease: 'easeOut' }}
        >
          <line x1={CX} y1={CY} x2={CX} y2={55} stroke="#e2231a" strokeWidth={3} strokeLinecap="round" />
          <circle cx={CX} cy={CY} r={7} fill="#e2231a" />
        </motion.g>
      </svg>
      <div className="gauge-center-label">
        <span className="num mono">{centerValue}</span>
        <span className="lbl">{centerLabel}</span>
      </div>
    </div>
  );
}