import React from 'react';
import { NavLink } from 'react-router-dom';
import links from './links';

const Navbar = () => (
  <>
    <header>
      <div className="logo">
        <img src="./assets/planet.png" alt="" />
        <span><NavLink to="/">Space Travelers Hub</NavLink></span>
      </div>
      <ul className="navbar">
        {links.map((link) => (
          <li className="listitems" key={link.text}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </header>

    {/* <hr /> */}
  </>
);
export default Navbar;
