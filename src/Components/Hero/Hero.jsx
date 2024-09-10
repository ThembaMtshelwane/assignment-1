import SectionHeader from "../SectionHeader/SectionHeader";

function Hero() {
  return (
    <section
      className="h-screen w-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url(hero1.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-5xl xsm:text-6xl sm:text-7xl md:text-[112px] mb-10">
        DRONOTICZ
      </h1>
      <SectionHeader name="The Era of Drones" />
    </section>
  );
}

export default Hero;
