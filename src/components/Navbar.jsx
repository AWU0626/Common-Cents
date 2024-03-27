import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid px-5">
        <Link className="navbar-brand" to="/">
          <img
            src={require("../assets/CCLogoTransparentWhite_WZ.png")}
            alt="Logo"
            style={{ height: "50px", margin: "none" }}
          />
          Penn Common Cents
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link no-dropdown" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/history">
                    History
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/mission">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/partners">
                    Partners
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/leadership">
                    Leadership
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Join Us
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/gbm">
                    General Body
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/committee">
                    Committee
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Events
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/event">
                    Event Details
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/coffee_chat">
                    Coffee Chats
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link no-dropdown" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
