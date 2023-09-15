import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkIsMobile() {
      setIsMobile(window.innerWidth < 640);
    }
    window.addEventListener("resize", checkIsMobile);
    checkIsMobile();
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);
  return (
    <div>
      <Header isMobile={isMobile} />
      <MainSection isMobile={isMobile} />
      <Testimonials />
      <Gallery isMobile={isMobile} />
      <Footer />
    </div>
  );
}

export default App;
