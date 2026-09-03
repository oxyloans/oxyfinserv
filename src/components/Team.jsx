import "./Team.css";

const TEAM = [
  { name: "Ramesh R.", role: "CEO & Co-Founder", city: "Mumbai" },
  { name: "RadhaKrishna T.", role: "Co-Founder", city: "Hyderabad" },
  { name: "Ramadevi T.", role: "CTO & Co-Founder", city: "Hyderabad" },
  { name: "Yadavalli Srinivas", role: "Co-Founder", city: "Bangalore" },
  { name: "Narendra Kumar", role: "Co-Founder", city: "Hyderabad" },
  { name: "Uma Maheswar Rao", role: "Co-Founder", city: "Bangalore" },
];

export default function Team() {
  return (
    <section className="section" id="team">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Who you'd be working with</p>
          <h2>A founding team spread across three cities.</h2>
        </div>

        <ul className="team-grid">
          {TEAM.map((t) => (
            <li key={t.name} className="team-card">
              <span className="team-initial" aria-hidden="true">{t.name.charAt(0)}</span>
              <h3>{t.name}</h3>
              <p className="team-role">{t.role}</p>
              <p className="team-city">Operates from {t.city}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
