// src/components/Header.js

import React from 'react';

function Header() {
  return (
    <header className="bg-cyan-500 text-black p-4">
      <h1>SUGI</h1>
      <h1 className="text-2xl font-bold">Shopping Website</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
