import "./HowItWorks.css";

const STEPS = [
  { title: "Campaign", detail: "Acquire borrowers through community and digital channels." },
  { title: "Onboard", detail: "Digital onboarding captures the applicant's details." },
  { title: "KYC", detail: "Identity is verified against government records." },
  { title: "Credit check", detail: "A bureau-backed assessment scores the applicant." },
  { title: "Disbursal", detail: "Funds release through the escrow, never through Oxy Finserv." },
  { title: "Recovery", detail: "Repayments are collected via eNach into a recovery escrow." },
];

const ESCROW = [
  { who: "Lender", note: "Transfers funds to the lender's escrow account, held at a bank." },
  { who: "Trust", note: "Moves funds only on instructions from lenders and borrowers." },
  { who: "Platform", note: "Sees the escrow accounts for monitoring — never holds funds." },
  { who: "Borrower", note: "Draws down from, and later repays into, their own escrow account." },
  { who: "Trust", note: "Routes each repayment back to the lender's escrow account." },
];

export default function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Borrower acquisition to recovery</p>
          <h2>A six-step pipeline, documented at every stage.</h2>
          <p className="lede">
            From the first campaign to the last collection, each step is compliant and
            tech-driven — built to hold up under a bank's or NBFC's own audit.
          </p>
        </div>

        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step__index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="escrow">
          <p className="escrow__label">Escrow mechanism — how the money itself moves</p>
          <div className="escrow__chain">
            {ESCROW.map((e, i) => (
              <div className="escrow__item" key={i}>
                <div className="escrow__card">
                  <span className="escrow__who">{e.who}</span>
                  <p>{e.note}</p>
                </div>
                {i < ESCROW.length - 1 && <span className="escrow__arrow">&rarr;</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
