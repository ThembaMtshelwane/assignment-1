import SectionHeader from "../SectionHeader/SectionHeader";

function SubscribeSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section
      className="h-[50vh] max-h-[500px] flex flex-col items-center pt-[100px] min-h-[400px]"
      id="subscribe"
    >
      <SectionHeader name="Subscribe" style="hidden" />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[80%] max-w-[450px] justify-center items-center md:w-[85%] "
      >
        <label className="flex flex-col items-center w-full mb-8">
          <p className="mb-6"> Sign-up to our newsletter</p>
          <input
            className="w-full p-5 border-none"
            type="email"
            id="subscribe-input"
            placeholder="Your email"
          />
        </label>
        <button
          type="submit"
          className="uppercase px-10 py-3 border-2 border-black"
        >
          Submit
        </button>
      </form>
    </section>
  );
}

export default SubscribeSection;
