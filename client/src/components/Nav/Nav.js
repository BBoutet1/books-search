import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="/">Google Books</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="search">Search</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="saved">Saved</a>
    </li>
  </ul>
    </nav>
  );
}

export default Nav;
