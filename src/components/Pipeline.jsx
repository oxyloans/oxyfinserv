import "./Pipeline.css";

const SOURCES = [
  "Community programmes — Ganesh idol, diya and steel container distribution, community feasts",
  "Startup and network channels — VC and angel networks, founder communities, roadshows",
  "BharatAI Store — a digital marketplace driving footfall and everyday engagement",
];

export default function Pipeline() {
  return (
    <section className="section" id="pipeline">
      <div className="wrap pipeline__row">
        <div className="pipeline__col">
          <p className="eyebrow">Where the borrowers come from</p>
          <h2>A pipeline that starts in the community, not a call centre.</h2>
          <p className="lede">
            Registrations are captured, qualified, KYC-verified and nurtured in one connected
            database before they ever reach a credit decision — giving every partner a
            higher-quality, ready-to-lend queue.
          </p>
          <ul className="source-list">
            {SOURCES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div className="pipeline__col pipeline__ai">
          <p className="eyebrow">Beyond lending</p>
          <h3>Building a sovereign BFSI foundation model.</h3>
          <p>
            The same group is training an India-specific language model on regulatory and
            financial data — with the intent to offer partners a private, locally deployed
            AI runtime rather than a third-party black box.
          </p>
          <span className="pipeline__ai-tag">Local data &middot; local models &middot; private deployment</span>
        </div>
      </div>
    </section>
  );
}
