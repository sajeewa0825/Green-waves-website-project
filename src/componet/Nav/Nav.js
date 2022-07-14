import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "./Group 3.svg";

const Nav = () => {
  const closenav =() =>{
    document.getElementById('navbtn').click();
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
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
          id="navbtn"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <Link className="nav-link" to={"/"} onClick={ () => closenav()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/Time"} onClick={ () => closenav()}>
                Event
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/work"} onClick={ () => closenav()}>
                What
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/blog"} onClick={ () => closenav()}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/about"} onClick={ () => closenav()}>
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contactUs"} onClick={ () => closenav()}>
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
