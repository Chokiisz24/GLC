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
const TICK_COUNT = 20;

function buildTicks() {
  const ticks = [];
  for (let i = 0; i <= TICK_COUNT; i++) {
    const angle = ((START_ANGLE + i * (SWEEP_ANGLE / TICK_COUNT)) * Math.PI) / 180;
    const x1 = CX + R_OUTER * Math.cos(angle);
    const y1 = CY + R_OUTER * Math.sin(angle);
    const x2 = CX + R_INNER * Math.cos(angle);
    const y2 = CY + R_INNER * Math.sin(angle);
    ticks.push({ x1, y1, x2, y2, key: i });
  }
  return ticks;
}

export default function Gauge({ centerValue, centerLabel }: GaugeProps) {
  const ticks = buildTicks();

  return (
    <div className="gauge-wrap">
      <svg viewBox="0 0 340 340">
        <circle cx={CX} cy={CY} r={R_OUTER} fill="none" stroke="#22262e" strokeWidth={1} />
        <g stroke="#3a4048" strokeWidth={1}>
          {ticks.map((t) => (
            <line key={t.key} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} />
          ))}
        </g>
        <path
          d="M 60 250 A 150 150 0 1 1 280 250"
          fill="none"
          stroke="#e2231a"
          strokeWidth={3}
          strokeLinecap="round"
          opacity={0.55}
        />
        <g className="gauge-needle">
          <line x1={CX} y1={CY} x2={CX} y2={55} stroke="#e2231a" strokeWidth={3} strokeLinecap="round" />
          <circle cx={CX} cy={CY} r={7} fill="#e2231a" />
        </g>
      </svg>
      <div className="gauge-center-label">
        <span className="num mono">{centerValue}</span>
        <span className="lbl">{centerLabel}</span>
      </div>
    </div>
  );
}