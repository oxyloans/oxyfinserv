import "./Trust.css";

const BUREAUS = [
  { code: "E", name: "Experian", detail: "Global credit reporting and risk scoring." },
  { code: "Q", name: "Equifax", detail: "Comprehensive credit history checks." },
  { code: "C", name: "CRIF High Mark", detail: "India-focused bureau data and analytics." },
  { code: "T", name: "TransUnion", detail: "Multi-source identity and credit insights." },
];

const STATS = [
  { value: "10", label: "years lending, trusted since 2016" },
  { value: "4,800+", label: "active lenders on the platform" },
  { value: "\u20B91,700 Cr+", label: "cumulative transactions processed" },
  { value: "70+", label: "employees across the group" },
];

export default function Trust() {
  return (
    <section className="section" id="trust">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Underwriting you can audit</p>
          <h2>Every borrower is checked against four bureaus, live.</h2>
          <p className="lede">
            Real-time, multi-bureau pulls feed the credit engine directly, so decisions
            are fast without giving up on portfolio quality.
          </p>
        </div>

        <div className="bureau-row">
          {BUREAUS.map((b) => (
            <div className="bureau" key={b.code}>
              <span className="bureau__mark">{b.code}</span>
              <div>
                <h3>{b.name}</h3>
                <p>{b.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="stat-row">
          {STATS.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
