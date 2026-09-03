import "./Ecosystem.css";

const PLATFORMS = [
  { name: "OxyGlobal.tech", role: "Parent technology platform", detail: "People, platforms, products and capital across the group's 10+ active builds." },
  { name: "OxyLoans", role: "RBI-approved P2P NBFC", detail: "Ten years live, matching everyday lenders with everyday borrowers." },
  { name: "AskOxy.ai", role: "AI-powered marketplace", detail: "Content and campaigns that bring borrowers and lenders to the door." },
  { name: "OxyGold.ai", role: "Gold & silver marketplace", detail: "A parallel asset channel for savers within the same borrower base." },
  { name: "OxyBricks.world", role: "Fractional real estate", detail: "Fractional ownership, opening property investment to smaller tickets." },
  { name: "OxyChain", role: "Blockchain platform", detail: "The ledger layer behind the group's transparency commitments." },
];

export default function Ecosystem() {
  return (
    <section className="section" id="ecosystem">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">The group behind the partnership</p>
          <h2>One borrower base, six platforms deep.</h2>
          <p className="lede">
            Oxy Finserv draws its pipeline from a decade-old lending group already trusted by
            thousands of everyday savers and borrowers across Bharat.
          </p>
        </div>

        <ul className="eco-grid">
          {PLATFORMS.map((p) => (
            <li key={p.name} className="eco-card">
              <h3>{p.name}</h3>
              <p className="eco-role">{p.role}</p>
              <p className="eco-detail">{p.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
