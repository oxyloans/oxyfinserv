import { useEffect, useState } from "react";
import OxyFinservLanding from "./pages/OxyFinservLanding.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Ecosystem from "./components/Ecosystem.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Trust from "./components/Trust.jsx";
import PartnershipModels from "./components/PartnershipModels.jsx";
import Pipeline from "./components/Pipeline.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";

const SECOND_ROUTE = "/second";

function getRoute() {
  return window.location.pathname === SECOND_ROUTE ? SECOND_ROUTE : "/";
}

function SecondLandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ecosystem />
        <HowItWorks />
        <Trust />
        <PartnershipModels />
        <Pipeline />
        <Team />
      </main>
      <Footer />
    </>
  );
}

function LandingSwitcher({ route, onNavigate }) {
  return (
    <nav className="landing-switcher" aria-label="Landing pages">
      <a
        href="/"
        className={route === "/" ? "is-active" : ""}
        onClick={(event) => onNavigate(event, "/")}
      >
        Main
      </a>
      <a
        href={SECOND_ROUTE}
        className={route === SECOND_ROUTE ? "is-active" : ""}
        onClick={(event) => onNavigate(event, SECOND_ROUTE)}
      >
        Second
      </a>
    </nav>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handlePopState = () => setRoute(getRoute());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (event, nextRoute) => {
    event.preventDefault();
    if (nextRoute === route) return;
    window.history.pushState({}, "", nextRoute);
    setRoute(nextRoute);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* <LandingSwitcher route={route} onNavigate={navigate} /> */}
      {route === SECOND_ROUTE ? <SecondLandingPage /> : <OxyFinservLanding />}
    </>
  );
}
