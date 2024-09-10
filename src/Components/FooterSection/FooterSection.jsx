import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsPinterest } from "react-icons/bs";

function FooterSection() {
  return (
    <footer className="h-[15vh] flex flex-col justify-center items-center bg-white">
      <section className="flex flex-col border-2 h-[75%] border-blue-400 w-full max-w-[1560px] items-center justify-around mx-auto sm:w-[90%] sm:flex-row-reverse md:justify-between">
        <section className="border-2 border-black uppercase flex items-center justify-between w-[100%] max-w-[350px]  mx-auto sm:text-xl sm:min-w-[400px] md:w-[50%] md:max-w-[550px] md:mx-0">
          <a href="#">about us</a>
          <a href="#">article</a>
          <a
            href="#subscribe"
            className="border-2 border-black px-4 md:px-8 lg:px-12 py-2"
          >
            subscribe
          </a>
        </section>
        <section className="border-2 border-black flex justify-around w-[50%] mx-auto my-2 sm:h-full items-center text-lg md:mx-0 md:w-[30%] max-w-[450px]">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook className="text-secondary scale-[2.5]" />
          </a>

          <a href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin c className="text-secondary scale-[2.5]" />
          </a>

          <a href="https://za.pinterest.com/" target="_blank">
            <BsPinterest className="text-secondary scale-[2.5]" />
          </a>
        </section>
      </section>
    </footer>
  );
}

export default FooterSection;
