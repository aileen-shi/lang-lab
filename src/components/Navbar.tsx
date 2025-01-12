import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "react-feather";
import "./styles.scss";

const Navbar = () => {
  // Check if on home page
  // Only homepage uses dark navbar
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Track current location
  const isCurrent = (path: string) => location.pathname === path;

  // Track hamburger menu
  const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <div>
      <nav
        className={`absolute z-20 top-0 left-0 w-full p-4 h-24 ${
          isHome ? "bg-black opacity-75 text-white" : "bg-white text-slate-950"
        }`}
      >
        <div className="flex container mx-auto justify-between items-center font-open-sans">
          {/* Logo */}
          <Link
            to="/"
            className="py-2 font-work-sans text-5xl font-bold hover:text-sky-600"
          >
            LANG LAB
          </Link>

          {/* Hamburger Menu */}
          <div
            className="block lg:hidden"
            onClick={() => setHamburgerOpen(!isHamburgerOpen)}
          >
            {isHamburgerOpen ? (
              <X className="text-white size-14 hover:cursor-pointer hover:text-sky-600" />
            ) : (
              <Menu className="text-white size-14 hover:cursor-pointer hover:text-sky-600" />
            )}
          </div>

          {/* Regular Menu */}
          <div className="hidden lg:flex space-x-10 items-center text-xl">
            <Link
              to="/"
              className={`hover:text-sky-600 ${
                isCurrent("/") ? "text-sky-600" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/research"
              className={`hover:text-sky-600 ${
                isCurrent("research") ? "text-sky-600" : ""
              }`}
            >
              Research
            </Link>
            <Link
              to="/team"
              className={`hover:text-sky-600 ${
                isCurrent("/team") ? "text-sky-600" : ""
              }`}
            >
              Team
            </Link>
            <Link
              to="/publications"
              className={`hover:text-sky-600 ${
                isCurrent("/publications") ? "text-sky-600" : ""
              }`}
            >
              Publications
            </Link>
            <Link
              to="/contact"
              className={`hover:text-sky-600 ${
                isCurrent("/contact") ? "text-sky-600" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu absolute z-20 lg:hidden space-y-4 mt-24 py-2 flex flex-col justify-center w-full items-center text-3xl font-bold ${
          isHamburgerOpen ? "block" : "hidden"
        } ${
          isHome ? "bg-black opacity-75 text-white" : "bg-white text-slate-950"
        }`}
      >
        <Link to="/" className="hover:text-sky-600">
          Home
        </Link>
        <Link to="/research" className="hover:text-sky-600">
          Research
        </Link>
        <Link to="/team" className="hover:text-sky-600">
          Team
        </Link>
        <Link to="/publications" className="hover:text-sky-600">
          Publications
        </Link>
        <Link to="/contact" className="hover:text-sky-600">
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
