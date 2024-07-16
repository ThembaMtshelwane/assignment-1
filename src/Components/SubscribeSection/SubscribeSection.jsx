import SectionHeader from "../SectionHeader/SectionHeader";

import "./subscribe.css";

function SubscribeSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="subscribe-section" id="subscribe">
      <SectionHeader name="Subscribe" style="sub-section-bar-none" />
      <form onSubmit={handleSubmit}>
        <label>
          <p className="call-to-action"> Sign-up to our newsletter</p>
          <input type="email" id="subscribe-input" placeholder="Your email" />
        </label>
        <button type="submit" className="submit-buttton">
          Submit
        </button>
      </form>
    </section>
  );
}

export default SubscribeSection;
