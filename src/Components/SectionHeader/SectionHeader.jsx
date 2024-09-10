function SectionHeader({ name, style = "" }) {
  return (
    <section className="text-2xl w-fit my-2 sm:text-4xl  flex flex-col md:mt-6">
      <h3 className="uppercase mb-5">{name}</h3>
      <span
        className={`mx-auto w-[35%] min-w-[100px] h-[7px] bg-black my-8  border-black ${style}`}
      ></span>
    </section>
  );
}

export default SectionHeader;
