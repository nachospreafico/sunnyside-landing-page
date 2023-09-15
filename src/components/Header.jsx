import Logo from "./../assets/logo.svg";
import OrangeMobile from "./../assets/mobile/image-header.jpg";
import OrangeDesktop from "./../assets/desktop/image-header.jpg";
import Arrow from "./../assets/icon-arrow-down.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = ({ isMobile }) => {
  const [isClicked, setIsCliked] = useState(false);

  return (
    <header className="bg-[#3DBEFF] w-[100vw] relative">
      <div className="grid grid-cols-2 px-6 py-6 absolute w-[100%]">
        <img
          src={Logo}
          alt="sunnyside logo"
          style={{ alignSelf: "center" }}
          className="cursor-pointer"
        ></img>
        {isMobile ? (
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            style={{ justifySelf: "end", alignSelf: "center" }}
            color="white"
            onClick={() => setIsCliked(!isClicked)}
          />
        ) : (
          <div className="flex flex-row justify-between items-center pr-10">
            <div className="lg:hover:cursor-pointer hover:bg-[#73CDFF] py-2 px-4 hover:rounded-full duration-300">
              <a className="text-white">About</a>
            </div>
            <div className="lg:hover:cursor-pointer hover:bg-[#73CDFF] py-2 px-4 hover:rounded-full duration-300">
              <a className="text-white">Services</a>
            </div>
            <div className="lg:hover:cursor-pointer hover:bg-[#73CDFF] py-2 px-4 hover:rounded-full duration-300">
              <a className="text-white">Projects</a>
            </div>
            <div className="lg:hover:cursor-pointer hover:text-white hover:bg-[#73CDFF] bg-white py-2 px-4 hover:rounded-full duration-300 rounded-full">
              <a className="text-black font-bold">CONTACT</a>
            </div>
          </div>
        )}
      </div>
      {isClicked ? (
        <div className="h-[50vh] duration-300 w-[85%] py-5 flex flex-col gap-10 z-10 bg-white absolute top-[15%] left-[50%] translate-x-[-50%] justify-center items-center">
          <div className="flex justify-center">
            <a>About</a>
          </div>
          <div className="flex justify-center">
            <a>Services</a>
          </div>
          <div className="flex justify-center">
            <a>Projects</a>
          </div>
          <div className="flex justify-center bg-yellow-500 py-2 px-4 w-fit items-center rounded-full">
            <a className="font-bold">CONTACT</a>
          </div>
        </div>
      ) : null}
      <h2 className="text-5xl text-white absolute top-[25%] left-[50%] translate-x-[-50%] w-[100%] text-center z-0">
        WE ARE CREATIVES
      </h2>
      <img
        src={Arrow}
        alt="arrow down"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] lg:top-[45%]"
      ></img>
      <div>
        <img src={isMobile ? OrangeMobile : OrangeDesktop} alt="orange"></img>
      </div>
    </header>
  );
};

export default Header;
