import "./Footer.css";
import logo from "../assets/oxyfinservlogo.png";

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
          <a className="btn btn-invert footer__btn" href="mailto:team@oxyloans.in">
            team@oxyloans.in
          </a>
        </div>

        <div className="footer__meta">
          <div className="brand-mark">
            <img src={logo} alt="Oxy Finserv" style={{ width: "70%", height: "auto" }} />
          </div>
          <p>An OxyLoans initiative &middot; DSA &middot; Co-Lending &middot; Bridge Loan Partner</p>
          <p>CC-02, Ground Floor, Block-C,INDU FORTUNE FIELDS, The Annexe, Phase-13, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500085</p>
          <p className="footer__copyright">&copy; {new Date().getFullYear()} Oxy Finserv. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}
