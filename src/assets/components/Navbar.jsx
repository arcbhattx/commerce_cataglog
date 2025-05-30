import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-white shadow-md top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold text-black-600">DigitalNest Shop</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-700 hover:text-blue-600 transition"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
