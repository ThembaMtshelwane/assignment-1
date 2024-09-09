import SectionHeader from "../SectionHeader/SectionHeader";

function SubscribeSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section
      className="h-[50vh] max-h-[500px] flex flex-col items-center pt-[100px] min-h-[400px] border-2"
      id="subscribe"
    >
      <SectionHeader name="Subscribe" style="hidden" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[80%] max-h-[250px] max-w-[450px] items-center mt-[15px] md:w-[85%] border-2 border-black"
      >
        <label className="flex flex-col items-center w-full mb-[45px]">
          <p className="mb-[25px] font-semibold"> Sign-up to our newsletter</p>
          <input
            className="w-full p-[20px] border-none"
            type="email"
            id="subscribe-input"
            placeholder="Your email"
          />
        </label>
        <button
          type="submit"
          className="uppercase px-8 py-3 border-2 border-black"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default SubscribeSection;
