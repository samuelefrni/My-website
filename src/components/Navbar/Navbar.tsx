import React from "react";
import NavbarCSS from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = (): JSX.Element => {
  return (
    <React.StrictMode>
      <nav className={NavbarCSS.nav}>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="https://www.linkedin.com/in/samuele-furnari-a37567220/"
              style={{ textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="https://github.com/samuelefrni?tab=repositories"
              style={{ textDecoration: "none" }}
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </nav>
    </React.StrictMode>
  );
};

export default Navbar;
