import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "./Group 3.svg";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo" height="70px" />
        </a>
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
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Time"}>
                Event
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/work"}>
                What
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/blog"}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contactUs"}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
