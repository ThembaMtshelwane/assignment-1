import SectionHeader from "../SectionHeader/SectionHeader";

function Hero() {
  return (
    <section
      className="h-screen w-full absolute top-0 left-0 flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url(hero1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl sm:text-7xl md:text-[112px]">DRONOTICZ</h1>
      <SectionHeader name="The Era of Drones" />
    </section>
  );
}

export default Hero;
