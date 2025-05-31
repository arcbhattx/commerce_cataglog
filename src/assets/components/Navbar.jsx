import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navLinks = ["Home", "About", "Services", "Contact"];

  // Load cart count from localStorage
  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();

    // Listen for cart updates
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  return (
    <nav className="bg-white shadow-md top-0 z-50 w-full">
      <div className="w-full px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-mono font-bold text-black border-2 p-2 border-black">
          DigitalNest Shop
        </div>

        {/* Desktop Nav */}
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

          {/* Cart Icon with badge */}
          <Link
            to="/cart"
            className="relative flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span>Cart</span>

            {/* Badge */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Hamburger */}
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

      {/* Mobile Nav Links */}
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

          {/* Cart for Mobile */}
          <Link
            to="/cart"
            className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition font-mono"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="ml-1 text-xs bg-red-500 text-white rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      )}
    </nav>
  );
}
