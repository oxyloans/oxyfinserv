import "./Team.css";
import radhaSir from "../assets/radha sir.png";
import ramaMam from "../assets/rama mam.png";
import ramesh from "../assets/ramesh.png";
import umaProfile from "../assets/uma profile.png";
import yadavalliSrinivas from "../assets/yadavalli srinivas.png";
import narendraKumar from "../assets/narendra.png";

const TEAM = [
  { name: "Ramesh R.", role: "CEO & Co-Founder", city: "Mumbai", bio: "Shapes the company's lending vision and partner strategy.", image: ramesh },
  { name: "RadhaKrishna T.", role: "Co-Founder", city: "Hyderabad", bio: "Builds trusted relationships across the lending ecosystem.", image: radhaSir },
  { name: "Ramadevi T.", role: "CTO & Co-Founder", city: "Hyderabad", bio: "Leads the technology behind a dependable lending experience.", image: ramaMam },
  { name: "Yadavalli Srinivas", role: "Co-Founder", city: "Bangalore", bio: "Brings practical operating experience to every partnership.", image: yadavalliSrinivas },
  { name: "Narendra Kumar", role: "Co-Founder", city: "Hyderabad", bio: "Helps turn lending opportunities into lasting outcomes.", image: narendraKumar },
  { name: "Uma Maheswar Rao", role: "Co-Founder", city: "Bangalore", bio: "Supports thoughtful growth across teams and markets.", image: umaProfile },
];

export default function Team({ containerClassName = "wrap" }) {
  return (
    <section className="section" id="team">
      <div className={containerClassName}>
        <div className="section-head">
          <p className="eyebrow">Who you'd be working with</p>
          <h2>A founding team spread across three cities.</h2>
          <p className="team-intro">A hands-on leadership team combining lending, technology, and deep operating experience across Bharat.</p>
        </div>

        <ul className="team-grid">
          {TEAM.map((t) => (
            <li key={t.name} className="team-card">
              <div className="team-card__portrait">
                {t.image ? (
                  <img className="team-photo" src={t.image} alt={`${t.name} portrait`} />
                ) : (
                  <span className="team-initial" aria-hidden="true">{t.name.charAt(0)}</span>
                )}
                <span className="team-card__index">{String(TEAM.indexOf(t) + 1).padStart(2, "0")}</span>
              </div>
              <div className="team-card__body">
                <h3>{t.name}</h3>
                <p className="team-role">{t.role}</p>
                <p className="team-bio">{t.bio}</p>
                <p className="team-city"><span aria-hidden="true">/</span> {t.city}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
