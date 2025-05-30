import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline"; // make sure you have @heroicons/react installed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-white shadow-md top-0 z-50 w-full">
      <div className="w-full px-4 py-4 flex items-center justify-between">

        {/* Logo on the far left */}
        <div className="text-2xl font-mono font-bold text-black border-2 p-2 border-black">
          DigitalNest Shop
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 font-mono">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-700 hover:text-blue-600 transition"
            >
              {link}
            </a>
          ))}

          {/* Cart Link */}
          <a
            href="#cart"
            className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart</span>
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
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

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-700 hover:text-blue-600 transition font-mono"
            >
              {link}
            </a>
          ))}

          {/* Mobile Cart Link */}
          <a
            href="#cart"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition font-mono"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart</span>
          </a>
        </div>
      )}
    </nav>
  );
}
