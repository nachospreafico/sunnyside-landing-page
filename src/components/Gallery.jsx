import MilkMobile from "./../assets/mobile/image-gallery-milkbottles.jpg";
import MilkDesktop from "./../assets/desktop/image-gallery-milkbottles.jpg";
import OrangeMobile from "./../assets/mobile/image-gallery-orange.jpg";
import OrangeDesktop from "./../assets/desktop/image-gallery-orange.jpg";
import ConeMobile from "./../assets/mobile/image-gallery-cone.jpg";
import ConeDesktop from "./../assets/desktop/image-gallery-cone.jpg";
import SugarMobile from "./../assets/mobile/image-gallery-sugar-cubes.jpg";
import SugarDesktop from "./../assets/desktop/image-gallery-sugarcubes.jpg";

const Gallery = ({ isMobile }) => {
  return (
    <section
      id="gallery"
      className="grid grid-cols-2 grid-rows-2 lg:flex lg:flex-row lg:w-[100%]"
    >
      <img
        src={isMobile ? MilkMobile : MilkDesktop}
        className="lg:w-[25vw] lg:h-auto"
        alt="milk bottles"
      ></img>
      <img
        src={isMobile ? OrangeMobile : OrangeDesktop}
        className="lg:w-[25vw] lg:h-auto"
        alt="orange"
      ></img>
      <img
        src={isMobile ? ConeMobile : ConeDesktop}
        className="lg:w-[25vw] lg:h-auto"
        alt="cone"
      ></img>
      <img
        src={isMobile ? SugarMobile : SugarDesktop}
        className="lg:w-[25vw] lg:h-auto"
        alt="sugar cubes"
      ></img>
    </section>
  );
};

export default Gallery;
