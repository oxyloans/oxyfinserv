import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Ecosystem from "./components/Ecosystem.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Trust from "./components/Trust.jsx";
import PartnershipModels from "./components/PartnershipModels.jsx";
import Pipeline from "./components/Pipeline.jsx";
import Team from "./components/Team.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
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
