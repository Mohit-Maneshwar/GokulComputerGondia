import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";
import Lenis from "@studio-freight/lenis";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      {/* Animated Cursor globally */}
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="0, 123, 255" // RGB values
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          "a",
          "button",
          ".link",
          "input[type='text']",
          "input[type='email']",
          "input[type='number']",
          "input[type='submit']",
          "input[type='image']",
          "label[for]",
          "select",
          "textarea",
          ".custom-clickable",
        ]}
      />

      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <MainRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
