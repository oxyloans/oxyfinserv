import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap footer__inner">
        <div className="footer__cta">
          <p className="eyebrow" style={{ color: "var(--gold-soft)" }}>Open for partnerships</p>
          <h2>
            Ten years of lending experience,<br />ready to book on your balance sheet.
          </h2>
          <p>
            Tell us whether you're evaluating a DSA arrangement, a co-lending line, or a
            bridge loan structure — we'll bring the pipeline and the paperwork.
          </p>
          <a className="btn btn-invert footer__btn" href="mailto:partnerships@oxyfinserv.com">
            partnerships@oxyfinserv.com
          </a>
        </div>

        <div className="footer__meta">
          <div className="brand-mark">
            <svg width="24" height="24" viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" rx="6" fill="#f6f4ee" />
              <path d="M9 20 L16 9 L23 20" stroke="#16223f" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="16" cy="21.5" r="2.1" fill="#16223f" />
            </svg>
            <span>Oxy Finserv</span>
          </div>
          <p>An OxyLoans initiative &middot; DSA &middot; Co-Lending &middot; Bridge Loan Partner</p>
          <p className="footer__copyright">&copy; {new Date().getFullYear()} Oxy Finserv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
