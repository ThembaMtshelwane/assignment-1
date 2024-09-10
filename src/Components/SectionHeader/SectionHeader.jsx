function SectionHeader({ name, style = "" }) {
  return (
    <section className="text-2xl w-fit my-2 sm:text-4xl border-2 flex flex-col md:mt-6">
      <h3 className="uppercase">{name}</h3>
      <span
        className={`mx-auto w-[35%] my-8 border-2 border-black ${style}`}
      ></span>
    </section>
  );
}

export default SectionHeader;
