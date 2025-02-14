import React from "react";
import '../CSS/Navbar.css';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-darkblue">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"> {/* Use a instead of anchor tag */}
          <span className="logo-text">RecipeNext</span>
        </a>
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
              <a className="nav-a active" href="/"> {/* Use a instead of anchor tag */}
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/chefs"> {/* Use a instead of anchor tag */}
                Chefs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/recipes"> {/* Use a instead of anchor tag */}
                Recipes
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto d-flex">
            <li className="nav-item">
              <a className="nav-a" href="/signup"> {/* Use a instead of anchor tag */}
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/login"> {/* Use a instead of anchor tag */}
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-a" href="/counter"> {/* Use a instead of anchor tag */}
                Counter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;