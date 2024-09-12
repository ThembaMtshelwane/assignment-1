import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { BsPinterest } from "react-icons/bs";

function FooterSection() {
  return (
    <footer className="h-[30vh] md:h-[20vh] flex flex-col justify-center items-center bg-white">
      <section className="relative flex flex-col h-[60%]  w-full max-w-[1560px] items-center justify-around mx-auto sm:w-[90%] md:flex-row-reverse md:justify-between">
        <section className="gap-2 flex-wrap uppercase flex items-center justify-around w-[80%] mx-auto sm:text-xl sm:min-w-[400px] md:w-[70%] md:max-w-[600px] md:mx-0">
          <a href="#about" className="sm:text-2xl">
            about us
          </a>
          <a href="#articles" className="sm:text-2xl">
            article
          </a>
          <a
            href="#subscribe"
            className="border-2 border-black px-4 md:px-8 lg:px-12 py-2 sm:text-2xl"
          >
            subscribe
          </a>
        </section>
        <section className=" flex justify-around w-[80%] mx-auto my-2 sm:h-full items-center text-lg md:mx-0 md:w-[30%] max-w-[450px]">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook className="text-secondary scale-[2.5]" />
          </a>

          <a href="https://www.linkedin.com/" target="_blank">
            <FaLinkedin className="text-secondary scale-[2.5]" />
          </a>

          <a href="https://za.pinterest.com/" target="_blank">
            <BsPinterest className="text-secondary scale-[2.5]" />
          </a>
        </section>
      </section>
      <p className="mt-2">
        Created by{" "}
        <a href="https://github.com/ThembaMtshelwane" target="_blank">
          ThembaMM3
        </a>
      </p>
    </footer>
  );
}

export default FooterSection;
