import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "./images/logo.png";
function Header() {
    return (
      <header>
        <div className="wrapper">
          <div className="nav">
            <div>
              <img src={logo} />
            </div>
            <ul className="navlinks">
              <li>
                <NavLink to="/">Ana səhifə</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Bloq</NavLink>
              </li>
            </ul>
            <ul className="icons">
              <li>
                <i className="fa-solid fa-magnifying-glass" />
              </li>
              <li>
                <i className="fa-solid fa-user" />
              </li>
              <li>
                <i className="fa-solid fa-cart-shopping" />
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
}

export default Header