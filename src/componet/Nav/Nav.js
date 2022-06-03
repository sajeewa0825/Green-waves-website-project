import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" >Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto ">
        <li className="nav-item">
          <Link className='nav-link' to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to={"/Time"}>EVENT</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Work</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav