import "./hero.css";
import SectionHeader from "../SectionHeader/SectionHeader";

function Hero() {
  return (
    <section className="heroContainer">
      <h1>DRONOTICZ</h1>
      <SectionHeader name="The Era of Drones" style="hero-section-bar" />
    </section>
  );
}

export default Hero;
