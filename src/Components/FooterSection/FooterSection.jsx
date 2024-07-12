import AboutLink from "../Links/AboutLink";
import ArticleLink from "../Links/ArticleLink";
import SubscribeButton from "../Buttons/SubscribeButton";
import "./footer.css";

function FooterSection() {
  return (
    <footer>
      <section className="social-links">
        <section className="social-link">
          <svg
            width="17"
            height="31"
            viewBox="0 0 17 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.572 17.036H15.489L16.261 12.041H10.571V9.31103C10.571 7.23603 11.249 5.39603 13.19 5.39603H16.309V1.03703C15.761 0.963025 14.602 0.801025 12.412 0.801025C7.83903 0.801025 5.15803 3.21603 5.15803 8.71803V12.041H0.457031V17.036H5.15803V30.765C6.08903 30.905 7.03203 31 8.00003 31C8.87503 31 9.72903 30.92 10.572 30.806V17.036Z"
              fill="white"
            />
          </svg>
        </section>
        <section className="social-link linkedin-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 7H5V24H0V7ZM2.485 5H2.457C0.965 5 0 3.888 0 2.499C0 1.08 0.995 0 2.514 0C4.035 0 4.972 1.08 5 2.499C5 3.887 4.035 5 2.485 5ZM24 24H19V14.901C19 12.703 17.775 11.203 15.808 11.203C14.307 11.203 13.495 12.215 13.101 13.193C12.957 13.543 13 14.511 13 15V24H8V7H13V9.616C13.721 8.5 14.85 7 17.738 7C21.316 7 23.999 9.25 23.999 14.274L24 24Z"
              fill="white"
            />
          </svg>
        </section>
        <section className="social-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="40px"
            height="40px"
            className="fill-white"
          >
            <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609825 4 46 13.390175 46 25 C 46 36.609825 36.609825 46 25 46 C 22.876355 46 20.82771 45.682142 18.896484 45.097656 C 19.75673 43.659418 20.867347 41.60359 21.308594 39.90625 C 21.570728 38.899887 22.648438 34.794922 22.648438 34.794922 C 23.348841 36.132057 25.395277 37.263672 27.574219 37.263672 C 34.058123 37.263672 38.732422 31.300682 38.732422 23.890625 C 38.732422 16.78653 32.935409 11.472656 25.476562 11.472656 C 16.196831 11.472656 11.271484 17.700825 11.271484 24.482422 C 11.271484 27.636307 12.94892 31.562193 15.634766 32.8125 C 16.041611 33.001865 16.260073 32.919834 16.353516 32.525391 C 16.425459 32.226044 16.788267 30.766792 16.951172 30.087891 C 17.003269 29.871239 16.978043 29.68405 16.802734 29.470703 C 15.913793 28.392399 15.201172 26.4118 15.201172 24.564453 C 15.201172 19.822048 18.791452 15.232422 24.908203 15.232422 C 30.18976 15.232422 33.888672 18.832872 33.888672 23.980469 C 33.888672 29.796219 30.95207 33.826172 27.130859 33.826172 C 25.020554 33.826172 23.440361 32.080359 23.947266 29.939453 C 24.555054 27.38426 25.728516 24.626944 25.728516 22.78125 C 25.728516 21.130713 24.842754 19.753906 23.007812 19.753906 C 20.850369 19.753906 19.117188 21.984457 19.117188 24.974609 C 19.117187 26.877359 19.761719 28.166016 19.761719 28.166016 C 19.761719 28.166016 17.630543 37.176514 17.240234 38.853516 C 16.849091 40.52931 16.953851 42.786365 17.115234 44.466797 C 9.421139 41.352465 4 33.819328 4 25 C 4 13.390175 13.390175 4 25 4 z" />
          </svg>
        </section>
      </section>
      <section className="nav-links">
        <AboutLink name="About Us" />
        <ArticleLink />
        <SubscribeButton />
      </section>
    </footer>
  );
}

export default FooterSection;
