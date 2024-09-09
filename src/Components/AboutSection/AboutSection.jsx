import SectionHeader from "../SectionHeader/SectionHeader";

function About() {
  return (
    <section
      className="flex h-screen w-full border-2 border-black relative bg-white z-20"
      id="about"
    >
      <section
        className="md:w-[50%] h-full border-2 absolute md:static md:opacity-100 w-full blur-md md:blur-none opacity-30 -z-10"
        style={{
          backgroundImage: "url(drone8.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      <section className=" border-blue-500 border-2 md:w-[50%] flex flex-col items-center justify-center">
        <SectionHeader name="About Us" style="" />
        <p className="w-[90%] sm:w-[80%] md:w-[65%] text-justify mt-20">
          Welcome to our dronoticz, where innovation and technology converge to
          shape the future. We revolutionize industries and improve lives
          worldwide through our passion for pushing the boundaries of what
          robots can do. With expertise in AI, computer vision, mechanical
          engineering, and automation, we lead the way in the robotics
          revolution. Our brilliant team creates intelligent machines that
          seamlessly integrate into daily life, enhancing productivity, safety,
          and efficiency.Join us on this exciting journey as we unlock new
          frontiers, solve complex challenges, and shape a future where
          intelligent machines work hand-in-hand with humans. Discover the power
          of robotics and be part of the revolution.
        </p>
      </section>
    </section>
  );
}

export default About;
