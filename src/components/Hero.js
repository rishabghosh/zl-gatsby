import React from "react";
import { telegramLink, whatsappLink } from "../constants/socialLinkConstants";
import { Link } from "gatsby";
import { IoLogoWhatsapp } from "react-icons/all";
import { FaTelegram } from "react-icons/fa";
import { StaticImage } from "gatsby-plugin-image";

const Hero = ({ showPerson }) => {
  return (
    <header className="hero">
      {/*{showPerson && (*/}
      {/*  <StaticImage*/}
      {/*    src="../assets/person.png"*/}
      {/*    placeholder="blurred"*/}
      {/*    className="hero-person"*/}
      {/*    alt="person typing"*/}
      {/*  />*/}
      {/*)}*/}
      <div className={"hero-person-wrapper"}>
        <StaticImage src="../assets/hero.jpeg" alt="panda" className={"hero-person"} placeholder={"blurred"} />
      </div>
      <div className="brief">
        <div className="information">
          <p>welcome to cbcs zoology .org</p>
          <p>
            This website is created to help the students those who are having ZOOLOGY in graduation under this new CBCS
            system.
            This website for the first time in India is going to provide topic wise information in question - answer
            format under the guidance of experienced professors.
          </p>
        </div>
        <div className="promotions">
          <div><strong>Join Study Groups</strong></div>
          <div className="flex-center">
            <Link to={whatsappLink} className="flex-center">
              <IoLogoWhatsapp className="social-icon-large whatsapp-icon" />
            </Link>
            <Link to={telegramLink} className="flex-center">
              <FaTelegram className="social-icon-large telegram-icon" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
