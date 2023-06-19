import React from 'react';
import { NavLink } from 'react-router-dom';
import links from './links';

const Navbar = () => (
  <div>
    <ul className="navbar">
      {links.map((link) => (
        <li className="listitems" key={link.text}>
          <NavLink to={link.path}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  </div>
);
export default Navbar;
