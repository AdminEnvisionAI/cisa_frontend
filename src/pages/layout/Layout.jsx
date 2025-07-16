import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "../../assets/css/layout/Layout.css";


const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="homepage">
      <nav className="navbar navbar-expand-lg navbar-light bg-ivory sticky-top py-3 shadow-sm custom-navbar">
        <div className="container">
          <NavLink
            className="navbar-brand logo-font"
            to="/"
            onClick={handleLinkClick}
          >
            Elevate with Deepak
          </NavLink>
          <button
            className="navbar-toggler" // Removed border-0 to use custom style
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2"
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2"
                  to="/about"
                  onClick={handleLinkClick}
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link mx-2"
                  to="/courses"
                  onClick={handleLinkClick}
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item ms-lg-3">
                <a
                  className="btn btn-gradient rounded-pill px-4"
                  href="#enroll"
                  onClick={handleLinkClick}
                >
                  Enroll with us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer id="enroll" className="footer bg-dark text-white pt-5 pb-4">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-5">
              <h2 className="fw-bolder">Enroll Today</h2>
              <p className="text-white-50">
                Fill out the form to start your journey with us. We'll get back
                to you shortly.
              </p>
              <h3 className="h5 fw-bold mt-4">Reach Out to us</h3>
              <p className="mb-1">deepakmendi1@gmail.com</p>
              <p>+91 96944 98757</p>
              <div className="social-media mt-3">
                <a href="#" className="social-icon">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-icon">
                  <FaYoutube />
                </a>
                <a href="#" className="social-icon">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <form
                className="p-4 rounded-3 bg-white text-dark shadow-lg"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" id="email" className="form-control" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2 btn-gradient"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="text-center pt-4 mt-5 border-top border-secondary">
            <div className="legal-links mb-2">
              <a href="#">Terms & Conditions</a> |{" "}
              <a href="#">Privacy Policy</a> | <a href="#">Refund Policy</a>
            </div>
            <p className="text-white-50 small">
              © 2025 by CISAwithDEEPAK. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;