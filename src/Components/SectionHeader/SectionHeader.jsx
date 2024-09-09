function SectionHeader({ name }) {
  return (
    <section className="text-2xl my-2 sm:text-4xl border-2 flex flex-col md:mt-6">
      <h3>{name}</h3>
      <span className="mx-auto w-[35%] my-8 bg-black h-full border-2 border-black"></span>
    </section>
  );
}

export default SectionHeader;
