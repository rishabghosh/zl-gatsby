import React from "react";
import { telegramLink, whatsappLink } from "../constants/socialLinkConstants";
import { pandaImg, telegramIconImg, whatsappIconImg } from "../constants/imageLinks";

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
        <img src={pandaImg} alt="panda" className={"hero-person"} placeholder={"blurred"} />
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
          <p>Join Our Education Groups</p>
          <div>
            <a href={whatsappLink}>
              <img src={whatsappIconImg} alt="whatsapp" />
            </a>
            <a href={telegramLink}>
              <img src={telegramIconImg} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
