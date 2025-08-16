import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 font-[Poppins] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Gokul Computer</h3>
          <p className="text-sm leading-relaxed">
            Gokul Computer is dedicated to providing quality education in IT and computer courses, helping students build a bright career.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link to="/courses" className="hover:text-blue-400 transition">Courses</Link></li>
            <li><Link to="/branches" className="hover:text-blue-400 transition">Branches</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-400" /> Gondia, Maharashtra, India</li>
            <li className="flex items-center gap-2"><Phone className="h-5 w-5 text-blue-400" /> +91 12345 67890</li>
            <li className="flex items-center gap-2"><Mail className="h-5 w-5 text-blue-400" /> info@gokulcomputer.com</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition"><Facebook className="h-6 w-6" /></a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400 transition"><Instagram className="h-6 w-6" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-400 transition"><Linkedin className="h-6 w-6" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Gokul Computer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
