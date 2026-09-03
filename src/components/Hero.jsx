import "./Hero.css";

const NODES = ["Lender", "Escrow Trust", "Oxy Finserv", "Borrower"];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__row">
        <div className="hero__copy">
          <p className="eyebrow">An OxyLoans initiative</p>
          <h1>
            The compliant bridge<br />between banks and<br />Bharat&rsquo;s borrowers.
          </h1>
          <p className="hero__lede">
            Oxy Finserv sources, verifies and services borrowers on behalf of banks and NBFCs,
            so regulated capital can reach everyday citizens quickly, safely, and on record —
            as a DSA, co-lending, and bridge loan partner.
          </p>
          <div className="hero__actions">
            <a href="#partnerships" className="btn btn-primary">Explore partnership models</a>
            <a href="#how-it-works" className="btn btn-ghost">See how funds move</a>
          </div>
          <div className="hero__badges">
            <span>DSA Partner</span>
            <span>Co-Lending Partner</span>
            <span>Bridge Loan Partner</span>
          </div>
        </div>

        <div className="hero__diagram" aria-hidden="true">
          <svg viewBox="0 0 340 420" className="flow-svg">
            <line x1="60" y1="46" x2="60" y2="374" className="flow-rail" />
            {NODES.map((label, i) => {
              const y = 46 + i * (328 / (NODES.length - 1));
              return (
                <g key={label} transform={`translate(0 ${y})`}>
                  <circle cx="60" cy="0" r="6" className="flow-node" />
                  <text x="82" y="5" className="flow-label">{label}</text>
                </g>
              );
            })}
            <circle r="4.5" className="flow-pulse">
              <animateMotion
                dur="4.5s"
                repeatCount="indefinite"
                path="M60,46 L60,155.33 L60,264.66 L60,374"
                keyPoints="0;0.33;0.66;1"
                keyTimes="0;0.33;0.66;1"
                calcMode="linear"
              />
            </circle>
          </svg>
          <p className="hero__diagram-caption">Every rupee moves through a bank-held escrow, never through Oxy Finserv&rsquo;s own account.</p>
        </div>
      </div>
    </section>
  );
}
