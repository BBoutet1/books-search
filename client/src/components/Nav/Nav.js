import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="/">Google Books</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="search">Search</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="saved">Saved</a>
    </li>
  </ul>
    </nav>
  );
}

export default Nav;
