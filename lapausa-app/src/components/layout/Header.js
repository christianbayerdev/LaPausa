import React from 'react';

function Header() {
  return (
    <header>
    <div class="menu">
      <img src="your-logo.png" alt="your logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    </header>
  );
}

export default Header;