import React from 'react';
import './Navigation.css';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <button className="nav-link" type="button">Home</button>
        </li>
        <li>
          <button className="nav-link" type="button">About</button>
        </li>
        <li>
          <button className="nav-link" type="button">Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

