import '../index.css';

import { Link, NavLink } from 'react-router-dom';

import logoImg from '../img/logoImg.png';
import { useState } from 'react';

export const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo" src={logoImg} alt="Logo" />
      <Link to="/" className="brand-name">
        University Management
      </Link>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div className={isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'}>
        <ul>
          <li>
            <NavLink
              to="/students"
              style={({ isActive }) => (isActive ? { color: '#f05b40' } : {})}
            >
              Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/groups" style={({ isActive }) => (isActive ? { color: '#f05b40' } : {})}>
              Groups
            </NavLink>
          </li>
          <li>
            <NavLink to="/courses" style={({ isActive }) => (isActive ? { color: '#f05b40' } : {})}>
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/professors"
              style={({ isActive }) => (isActive ? { color: '#f05b40' } : {})}
            >
              Professors
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
