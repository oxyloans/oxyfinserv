import { useState } from "react";
import "./PartnershipModels.css";

const MODELS = {
  dsa: {
    tab: "DSA",
    title: "We source, verify and service — you book the loan.",
    intro: "Oxy Finserv operates as your Direct Selling Agent: acquiring qualified borrowers and handling documentation, while the loan sits on your book from day one.",
    steps: [
      { title: "Source borrowers", detail: "Qualified borrowers acquired through our digital and community channels." },
      { title: "Verify & document", detail: "KYC, credit checks and documentation completed on your behalf." },
      { title: "Loan booked", detail: "The loan is booked directly with you — the bank or NBFC partner." },
      { title: "Service & support", detail: "We manage servicing, collections support and borrower relations." },
    ],
    why: [
      { title: "Wider reach", detail: "Access to a wider, digitally-sourced borrower base." },
      { title: "Lower CAC", detail: "We absorb sourcing costs, lowering your acquisition cost." },
      { title: "Compliant sourcing", detail: "Every borrower is KYC-verified and bureau-checked." },
      { title: "Dedicated servicing", detail: "End-to-end support through the loan lifecycle." },
    ],
    footer: "Open to co-branded campaigns, custom criteria and exclusive territories.",
  },
  colending: {
    tab: "Co-Lending",
    title: "We fund alongside you and share the risk.",
    intro: "Oxy Finserv and your institution jointly fund eligible borrowers under an agreed split, so growth and risk are shared from the first rupee.",
    flow: [
      { label: "Borrower need", value: "\u20B91,00,000" },
      { label: "Oxy Finserv / OxyLoans", value: "Co-lending share" },
      { label: "NBFC / Bank partner", value: "Co-lending share" },
    ],
    products: [
      { title: "Personal loans", detail: "Priority one — the core focus for co-lending volume." },
      { title: "Gold loans", detail: "Priority two — asset-backed, with a faster turnaround." },
      { title: "Other books", detail: "Additional loan products, taken up opportunistically." },
    ],
    why: [
      { title: "Shared risk", detail: "Lower risk exposure and a stronger portfolio." },
      { title: "Growth acceleration", detail: "Access to a wider customer base and new markets." },
      { title: "Stronger together", detail: "A partnership built on trust, transparency and performance." },
      { title: "Financial inclusion", detail: "Together, we reach more lives and small businesses." },
    ],
  },
  bridge: {
    tab: "Bridge Loan",
    title: "We season the loan, then hand it over clean.",
    intro: "Oxy Finserv acquires the borrower, clears their smaller existing loans, and holds the consolidated loan responsibly until it's ready for a partner to take over.",
    steps: [
      { title: "Acquire customer", detail: "We onboard and approve the borrower." },
      { title: "Clear existing loans", detail: "We pay off the customer's smaller loans — only ours remains." },
      { title: "Season the loan", detail: "We hold and service the loan responsibly for one to two months." },
      { title: "Partner takes over", detail: "Our bridge loan partner takes over the seasoned loan." },
      { title: "Funds released", detail: "Our bridge capital is released back for reuse." },
    ],
    partners: ["Bank", "NBFC", "Family office", "Alternative funds", "Any legally permitted entity"],
    footer: "Acquire. Clean up. Season. Hand over. Release capital.",
  },
};

const TABS = ["dsa", "colending", "bridge"];

export default function PartnershipModels() {
  const [active, setActive] = useState("dsa");
  const model = MODELS[active];

  return (
    <section className="section" id="partnerships">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Three ways to partner</p>
          <h2>Pick the structure that fits your book.</h2>
          <p className="lede">
            With ten years of lending experience, Oxy Finserv is set up to partner as a DSA,
            a co-lender, or a bridge loan partner — sometimes all three at once.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Partnership models">
          {TABS.map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              className={`tab ${active === key ? "is-active" : ""}`}
              onClick={() => setActive(key)}
            >
              {MODELS[key].tab}
            </button>
          ))}
        </div>

        <div className="model-panel" role="tabpanel">
          <h3 className="model-title">{model.title}</h3>
          <p className="model-intro">{model.intro}</p>

          {model.steps && (
            <ol className="model-steps">
              {model.steps.map((s, i) => (
                <li key={s.title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          )}

          {model.flow && (
            <div className="flow-boxes">
              {model.flow.map((f, i) => (
                <div className="flow-box" key={f.label}>
                  {i > 0 && <span className="flow-box__arrow">&rarr;</span>}
                  <div className="flow-box__card">
                    <span className="flow-box__label">{f.label}</span>
                    <span className="flow-box__value">{f.value}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {model.products && (
            <div className="product-row">
              {model.products.map((p) => (
                <div className="product" key={p.title}>
                  <h4>{p.title}</h4>
                  <p>{p.detail}</p>
                </div>
              ))}
            </div>
          )}

          {model.why && (
            <div className="why-grid">
              {model.why.map((w) => (
                <div className="why" key={w.title}>
                  <h4>{w.title}</h4>
                  <p>{w.detail}</p>
                </div>
              ))}
            </div>
          )}

          {model.partners && (
            <div className="partner-pills">
              {model.partners.map((p) => (
                <span key={p}>{p}</span>
              ))}
            </div>
          )}

          {model.footer && <p className="model-footer">{model.footer}</p>}
        </div>
      </div>
    </section>
  );
}
