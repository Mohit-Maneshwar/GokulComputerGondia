import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false); // Scrolling down
    } else {
      setShowNavbar(true);  // Scrolling up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`${ 
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } fixed top-0 w-full z-50 backdrop-blur bg-blue-400 shadow font-[JetBrains Mono] transition-transform duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo + Institute Name */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Institute Logo" className="h-12 w-auto" />
          <span className="inline text-2xl font-bold text-gray-800">Gokul Computer</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-[2rem] space-x-6 text-2xl font-bold text-gray-800">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/courses" className="hover:text-blue-600 transition">Courses</Link>
          <Link to="/faculty" className="hover:text-blue-600 transition">Faculty</Link>
          <Link to="/gallery" className="hover:text-blue-600 transition">Gallery</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-7 w-7 text-gray-800" /> : <Menu className="h-7 w-7 text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className="md:hidden fixed top-0 right-0 w-3/4 h-full bg-white/80 backdrop-blur z-50 p-8 space-y-8 flex flex-col shadow-2xl transform transition-transform duration-300"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsOpen(false)}>
            <X className="h-7 w-7 text-gray-800" />
          </button>
        </div>
        <div className="flex items-center flex-col gap-[1rem] h-[100vh] mb-6 w-full">
        <Link onClick={() => setIsOpen(false)} to="/" className="text-lg text-gray-900 font-bold hover:text-blue-600 transition">Home</Link>
        <Link onClick={() => setIsOpen(false)} to="/about" className="text-lg text-gray-900 font-bold hover:text-blue-600 transition">About</Link>
        <Link onClick={() => setIsOpen(false)} to="/courses" className="text-lg text-gray-900 font-bold hover:text-blue-600 transition">Courses</Link>
        <Link onClick={() => setIsOpen(false)} to="/faculty" className="text-lg text-gray-900 font-bold hover:text-blue-600 transition">Faculty</Link>
        <Link onClick={() => setIsOpen(false)} to="/gallery" className="text-lg text-gray-900 font-bold hover:text-blue-600 transition">Gallery</Link>
        <Link onClick={() => setIsOpen(false)} to="/contact" className="text-lg text-gray-900 font-bold hover:text-blue-600 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
