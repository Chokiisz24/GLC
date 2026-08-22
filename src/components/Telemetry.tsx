import { telemetryStats } from '../content';

export default function Telemetry() {
  return (
    <div className="telemetry">
      <div className="container">
        <div className="row g-0">
          {telemetryStats.map((stat) => (
            <div className="col-6 col-md-3 stat" key={stat.label}>
              <div className="val mono">
                {stat.value}
                {stat.accent && <span>{stat.accent}</span>}
              </div>
              <div className="lbl">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}