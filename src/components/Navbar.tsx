import React from 'react';
import { NavLink } from 'react-router-dom'


export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper indigo accent-4 px1">
      <a href="/" className="brand-logo">React + TS</a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">To Do List</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
