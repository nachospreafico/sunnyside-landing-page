import EggMobile from "./../assets/mobile/image-transform.jpg";
import EggDesktop from "./../assets/desktop/image-transform.jpg";
import CupMobile from "./../assets/mobile/image-stand-out.jpg";
import CupDesktop from "./../assets/desktop/image-stand-out.jpg";
import CherryMobile from "./../assets/mobile/image-graphic-design.jpg";
import CherryDesktop from "./../assets/desktop/image-graphic-design.jpg";
import MandarineMobile from "./../assets/mobile/image-photography.jpg";
import MandarineDesktop from "./../assets/desktop/image-photography.jpg";
import "./styles/MainSection.css";

const MainSection = ({ isMobile }) => {
  return (
    <main className="main-section">
      <div className="transf-container lg:relative">
        <img
          src={isMobile ? EggMobile : EggDesktop}
          alt="egg image"
          className="transf-img w-[100%]"
        ></img>
        <div
          className="flex flex-col gap-5 py-10 lg:py-0 items-center transf-text
        lg:h-[100%] lg:w-[50%] lg:absolute lg:top-[25%] lg:left-[25%]"
        >
          <h2 className="text-3xl text-center font-bold lg:text-left lg:text-4xl">
            Transform your brand
          </h2>
          <p className="text-center lg:text-left lg:text-lg">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <p className="text-center border-b-4 font-bold border-yellow-200 lg:hover:border-yellow-500 duration-300 w-fit lg:text-left lg:cursor-pointer">
            LEARN MORE
          </p>
        </div>
      </div>
      <div className="stdout-container relative">
        <img
          src={isMobile ? CupMobile : CupDesktop}
          alt="egg image"
          className="stdout-img w-[100%]"
        ></img>
        <div
          className="flex flex-col gap-5 py-10 lg:py-0 items-center stdout-text
        lg:h-[100%] lg:w-[50%] lg:absolute lg:top-[25%] lg:left-[25%]"
        >
          <h2 className="text-3xl text-center font-bold lg:text-left lg:text-4xl">
            Transform your brand
          </h2>
          <p className="text-center lg:text-left lg:text-lg">
            Using a collaborative formula of designers, researchers,
            photograhers, videographers and copywriters, we'll build and extend
            your brand in digital places.
          </p>
          <p className="text-center border-b-4 font-bold border-red-200 lg:hover:border-red-500 duration-300 w-fit lg:text-left lg:cursor-pointer">
            LEARN MORE
          </p>
        </div>
      </div>
      <div className="gd-photo-container">
        <div className="relative">
          <img
            src={isMobile ? CherryMobile : CherryDesktop}
            alt="egg image"
            className="graphicdg w-[100%]"
          ></img>
          <div className="flex flex-col gap-3 py-10 items-center bg-transparent absolute top-[60%] lg:w-[50%] lg:top-[50%] lg:left-[25%]">
            <h2 className="text-3xl text-center font-bold lg:text-4xl">
              Graphic Design
            </h2>
            <p className="text-center lg:text-lg">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={isMobile ? MandarineMobile : MandarineDesktop}
            alt="egg image"
            className="photography w-[100%]"
          ></img>
          <div className="flex flex-col gap-3 py-10 items-center bg-transparent absolute top-[60%] w-[100%] lg:w-[50%] lg:top-[50%] lg:left-[25%]">
            <h2 className="text-3xl text-center font-bold lg:text-4xl">
              Photography
            </h2>
            <p className="text-center lg:text-lg">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainSection;
