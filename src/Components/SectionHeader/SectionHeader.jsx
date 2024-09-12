function SectionHeader({ name, style = "" }) {
  return (
    <section className="text-2xl w-fit sm:text-4xl flex flex-col md:mt-6">
      <h3 className="uppercase mb-5 tracking-wider  text-center">{name}</h3>
      <span
        className={`mx-auto w-[100px] h-[2px] bg-black mt-5 border-black ${style}`}
      ></span>
    </section>
  );
}

export default SectionHeader;
