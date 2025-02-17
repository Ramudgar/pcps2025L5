import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../CSS/Navbar.css";

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darkblue">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"> {/* Use Link instead of anchor tag */}
          <span className="logo-text">RecipeNext</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/"> {/* Use Link instead of anchor tag */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/chefs"> {/* Use Link instead of anchor tag */}
                Chefs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipe"> {/* Use Link instead of anchor tag */}
                Recipes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/counter"> {/* Use Link instead of anchor tag */}
                Counter App
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/compb"> {/* Use Link instead of anchor tag */}
                Comp B
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-flex">
            <li className="nav-item">
              <Link className="nav-link" to="/signup"> {/* Use Link instead of anchor tag */}
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login"> {/* Use Link instead of anchor tag */}
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
