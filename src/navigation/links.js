import React from "react";
import { Link } from "gatsby";

const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <Link to="/" className="page-link">Home</Link>
      </li>
      <li>
        <Link to="/practicals" className="page-link">Practicals</Link>
      </li>
      <li>
        <Link to="/audio" className="page-link">Audios</Link>
      </li>
      <li>
        <Link to="/notes" className="page-link">Notes</Link>
      </li>
      <li>
        <Link to="/videos" className="page-link">Videos</Link>
      </li>
      <li>
        <Link to="/about" className="page-link">About Us</Link>
      </li>
      <li>
        <Link to="/contact" className="page-link">Contact Us</Link>
      </li>
    </ul>
  );
};

export default Links;
