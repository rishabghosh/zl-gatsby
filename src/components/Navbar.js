import React from 'react'
import { Link } from 'gatsby'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.svg'
import Links from '../navigation/links'
import SocialLinks from '../navigation/socialLinks'

const logoSource = "https://static.wixstatic.com/media/736ab9_bd532081d9e24a35bce6a0a0e53cbd8c~mv2.png/v1/crop/x_0,y_38,w_2000,h_424/fill/w_1000,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/736ab9_bd532081d9e24a35bce6a0a0e53cbd8c~mv2.png";

const Navbar = ({ toggle }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            {/*<img src={logo} alt="mdx logo" />*/}
            <img src={logoSource} alt="cbs zoology logo" />
          </Link>
          <button className="toggle-btn" onClick={toggle}>
            <FaBars></FaBars>
          </button>
        </div>
        <Links styleClass="nav-links" />
        <SocialLinks styleClass="nav-icons" />
      </div>
    </nav>
  )
}

export default Navbar
