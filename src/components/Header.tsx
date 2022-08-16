import '../index.css';

import logoImg from '../img/logoImg.png';
import { useState } from 'react';

export const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navbar">
      <img className="logo" src={logoImg} alt="Logo" />
      <a href="/" className="brand-name">
        University Management
      </a>
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
            <a href="/students">Students</a>
          </li>
          <li>
            <a href="/groups">Groups</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/teachers">Teachers</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
