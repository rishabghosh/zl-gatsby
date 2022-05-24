import React from "react";
import { Link } from "gatsby";
import { FaBars } from "react-icons/fa";
import Links from "../navigation/links";
import SocialLinks from "../navigation/socialLinks";
import { StaticImage } from "gatsby-plugin-image";

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <StaticImage src="../assets/bioSmartLogo.png" alt="cbs zoology logo" className="h-w-100" />
          </Link>
          <button className="toggle-btn" onClick={toggle}>
            <FaBars></FaBars>
          </button>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  );
};

export default Navbar;
