import SectionHeader from "../SectionHeader/SectionHeader";

function About() {
  return (
    <section
      className="flex min-h-screen h-screen w-full relative bg-white z-20"
      id="about"
    >
      <section
        className="opacity-100 -z-10 absolute h-full  w-full blur-md md:w-[50%]  md:static md:opacity-100 md:blur-none "
        style={{
          backgroundImage: "url(drone8.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>

      <section className="  md:w-[50%] flex flex-col items-center justify-center">
        <SectionHeader name="About Us" style="" />
        <p className="w-[90%] sm:w-[80%] md:w-[65%] text-justify mt-20 tracking-wide">
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
