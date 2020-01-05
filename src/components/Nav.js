import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <Link className="nav-item nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link" to="/github">
            GitHub
          </Link>
          <Link className="nav-item nav-link" to="/blog">
            Blog
          </Link>
        </div>
      </nav>
    );
  }
}
