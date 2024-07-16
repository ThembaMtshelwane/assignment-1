import AboutLink from "../Links/AboutLink";
import ArticleLink from "../Links/ArticleLink";
import SubscribeButton from "../Buttons/SubscribeButton";
import "./footer.css";

function FooterSection() {
  return (
    <footer>
      <section className="social-links">
        <section className="social-link facebook-icon">
          <a href="https://www.facebook.com/" target="_blank">
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
          </a>
        </section>
        <section className="social-link linkedin-icon">
          <a href="https://www.linkedin.com/" target="_blank">
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
          </a>
        </section>
        <section className="social-link pinterest-icon">
          <a href="https://za.pinterest.com/" target="_blank">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.5 0C8.74776 0 0 8.74776 0 19.5C0 27.88 5.31382 35.0409 12.7482 37.7935C12.5341 35.8846 12.5677 32.7583 12.921 31.2446C13.2519 29.8228 15.0586 22.1838 15.0586 22.1838C15.0586 22.1838 14.5132 21.0915 14.5132 19.4783C14.5132 16.9431 15.982 15.0516 17.8111 15.0516C19.3668 15.0516 20.117 16.2196 20.117 17.619C20.117 19.1838 19.1221 21.5212 18.6068 23.6876C18.177 25.5027 19.5168 26.9827 21.306 26.9827C24.5457 26.9827 27.036 23.5663 27.036 18.6356C27.036 14.2713 23.9007 11.2195 19.4229 11.2195C14.2369 11.2195 11.1928 15.1098 11.1928 19.1305C11.1928 20.6968 11.7958 22.3766 12.5494 23.2908C12.698 23.4716 12.7198 23.6294 12.6756 23.8131C12.5375 24.3887 12.2304 25.6268 12.1694 25.8806C12.0902 26.215 11.9051 26.2844 11.5602 26.1238C9.28308 25.0638 7.85983 21.7358 7.85983 19.0618C7.85983 13.3122 12.0369 8.03091 19.9045 8.03091C26.2283 8.03091 31.1422 12.5361 31.1422 18.5591C31.1422 24.8416 27.1804 29.8971 21.6832 29.8971C19.8358 29.8971 18.0999 28.9373 17.5061 27.8037C17.5061 27.8037 16.5919 31.2839 16.3697 32.1371C15.9861 33.6127 14.344 36.6696 13.5196 38.058C15.4054 38.6672 17.4142 39 19.5 39C30.2527 39 39 30.2527 39 19.5C39 8.74776 30.2527 0 19.5 0Z"
                fill="#CBDEEC"
              />
            </svg>
          </a>
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
