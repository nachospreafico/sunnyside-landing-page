import Logo from "./../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#90D4C5] flex flex-col items-center justify-center pt-10 pb-20">
      <div className="lg:w-[35%] flex justify-center flex-col items-center gap-10">
        <img src={Logo} alt="logo" className="lg:w-[25%]"></img>
        <div
          id="footer-navbar"
          className="flex flex-row justify-between gap-10 font-semibold text-[#25564b]"
        >
          <a className="hover:text-white cursor-pointer duration-300">About</a>
          <a className="hover:text-white cursor-pointer duration-300">
            Services
          </a>
          <a className="hover:text-white cursor-pointer duration-300">
            Projects
          </a>
        </div>
        <div className="flex flex-row gap-5">
          <FontAwesomeIcon
            icon={faFacebook}
            color="#25564b"
            size="2x"
            className="lg:hover:text-blue-400 cursor-pointer duration-300"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            color="#25564b"
            size="2x"
            className="lg:hover:text-pink-400 cursor-pointer duration-300"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            color="#25564b"
            size="2x"
            className="lg:hover:text-black cursor-pointer duration-300"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#25564b"
            size="2x"
            className="lg:hover:text-blue-500 cursor-pointer duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
