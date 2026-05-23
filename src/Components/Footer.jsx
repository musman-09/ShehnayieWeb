import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 px-8 py-12 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Sheh<span className="text-yellow-500">nayie</span>
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            Handcrafted jewellery and accessories rooted in Pakistani tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-3">
            Quick Links
          </h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/home"
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-3">Products</h4>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/products/necklace"
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Necklace
              </Link>
            </li>
            <li>
              <Link
                to="/products/ear-rings"
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Ear Rings
              </Link>
            </li>
            <li>
              <Link
                to="/products/hand-bags"
                className="text-xs text-gray-500 hover:text-gray-800"
              >
                Hand Bags
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800 mb-3">Contact</h4>
          <ul className="flex flex-col gap-2">
            <li className="text-xs text-gray-500">📍 Karachi, Pakistan</li>
            <li className="text-xs text-gray-500">📧 hello@shehnayie.com</li>
            <li className="text-xs text-gray-500">📞 +92 300 0000000</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-100 mt-10 pt-6 text-center">
        <p className="text-xs text-gray-400">
          © 2025 Shehnayie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
