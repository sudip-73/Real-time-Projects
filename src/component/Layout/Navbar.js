import React from "react";
import '../../App.css'
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            <span className="text-warning">React <i className="bi bi-person-workspace text-info"/> Work</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
