import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import shehnayieLogo from "../assets/images/shehnayieText.png";
import { setLogout } from "../redux/authSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const token = useSelector((state) => state.counter.token);
  const role = useSelector((state) => state.counter.role);

  const handleLogout = () => {
    dispatch(setLogout());
    navigate("/home");
  };

  return (
    <nav className="bg-white border-b border-gray-200 px-6 h-20 flex items-center justify-between relative">
      <img src={shehnayieLogo} alt="Shehnayie" className="h-20 object-cover" />

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        <li>
          <Link
            to="/home"
            className="text-gray-500 hover:text-gray-900 text-sm"
          >
            Home
          </Link>
        </li>

        <li className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-gray-500 hover:text-gray-900 text-sm"
          >
            Products
            <span
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            >
              ▾
            </span>
          </button>

          {isOpen && (
            <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white border border-gray-100 rounded-xl p-1 min-w-40 z-50">
              <Link
                to="/products/necklace"
                className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
              >
                Necklace
              </Link>
              <Link
                to="/products/ear-rings"
                className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
              >
                Ear Rings
              </Link>
              <Link
                to="/products/hand-bags"
                className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-900 rounded-lg"
              >
                Hand Bags
              </Link>
            </div>
          )}
        </li>

        <li>
          <Link
            to="/about"
            className="text-gray-500 hover:text-gray-900 text-sm"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-500 hover:text-gray-900 text-sm"
          >
            Contact Us
          </Link>
        </li>

        {role === "admin" && (
          <li>
            <Link to="/admin" className="text-yellow-500 font-medium text-sm">
              Admin Panel
            </Link>
          </li>
        )}
      </ul>

      {/* Desktop Right Side */}
      <div className="hidden md:flex items-center gap-4">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="text-gray-400"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-700 w-40 placeholder-gray-400"
          />
        </div>

        {/* Cart */}
        <button onClick={() => navigate("/cart")} className="relative p-2">
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>

        {/* Login / Logout */}
        {token ? (
          <button
            onClick={handleLogout}
            className="text-sm text-red-400 hover:text-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="text-sm bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Login
          </button>
        )}
      </div>

      {/* Hamburger Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-opacity ${menuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 z-50 flex flex-col px-6 py-4 gap-4">
          <Link to="/home" className="text-gray-600 text-sm">
            Home
          </Link>

          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 text-gray-600 text-sm"
            >
              Products <span>▾</span>
            </button>
            {isOpen && (
              <div className="flex flex-col pl-4 mt-2 gap-2">
                <Link to="/products/necklace" className="text-gray-500 text-sm">
                  Necklace
                </Link>
                <Link
                  to="/products/ear-rings"
                  className="text-gray-500 text-sm"
                >
                  Ear Rings
                </Link>
                <Link
                  to="/products/hand-bags"
                  className="text-gray-500 text-sm"
                >
                  Hand Bags
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-gray-600 text-sm">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-600 text-sm">
            Contact Us
          </Link>

          {role === "admin" && (
            <li>
              <Link to="/admin" className="text-yellow-500 font-medium text-sm">
                Admin Panel
              </Link>
            </li>
          )}

          {/* Mobile Search */}
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2">
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="text-gray-400"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm text-gray-700 w-full placeholder-gray-400"
            />
          </div>

          {/* Mobile Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="relative p-2 w-fit"
          >
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* Mobile Login / Logout */}
          {token ? (
            <button
              onClick={handleLogout}
              className="text-sm text-red-400 text-left"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="text-sm bg-yellow-500 text-white px-4 py-2 rounded-lg text-left"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
