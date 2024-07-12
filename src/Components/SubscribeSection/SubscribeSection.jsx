import SectionHeader from "../SectionHeader/SectionHeader";

import "./subscribe.css";

function SubscribeSection() {
  return (
    <section className="subscribe-section" id="subscribe">
      <SectionHeader name="Subscribe" style="sub-section-bar-none" />
      <form>
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
