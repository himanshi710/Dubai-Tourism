import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMoreOpen(false);
  };

  return (
    <header className={`navbar ${menuOpen ? "navbar-open" : ""}`}>
      <div className="nav-container">

        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">D</span>

          <span className="brand-text">
            <strong>DUBAI</strong>
            <small>TRAVEL COLLECTION</small>
          </span>
        </Link>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav-menu ${menuOpen ? "show" : ""}`}>

          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive })  =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/destinations"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Destinations
          </NavLink>

          <NavLink
            to="/packages"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Packages
          </NavLink>

          <NavLink
            to="/experiences"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Experiences
          </NavLink>

          <div className="more-wrapper">

            <button
              className="more-button"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              More
              <ChevronDown
                size={14}
                className={moreOpen ? "rotate" : ""}
              />
            </button>

            <div className={`more-dropdown ${moreOpen ? "open" : ""}`}>

              <Link to="/about" onClick={closeMenu}>
                About Us
              </Link>

              <Link to="/gallery" onClick={closeMenu}>
                Gallery
              </Link>

              <Link to="/journal" onClick={closeMenu}>
                Journal
              </Link>

              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>

            </div>

          </div>

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Plan Your Trip
            <ArrowUpRight size={16} />
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Navbar;