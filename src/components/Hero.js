import React from "react";

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
        <img
          src="https://static.wixstatic.com/media/736ab9_523a6bdffb1f4e67893af662307d304b~mv2.gif"
          alt="panda"
          className={"hero-person"}
          placeholder={"blurred"}
        />
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
            <a href="https://web.whatsapp.com">
              <img
                src="https://static.wixstatic.com/media/736ab9_db6d6948f26445228f17d1f853d913fa~mv2.png/v1/fill/w_124,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CBCS%20WAPP%20ICON.png"
                alt="whatsapp"
              />
            </a>
            <a href="https://telegram.com">
              <img
                src="https://static.wixstatic.com/media/736ab9_0837d99d90b74caa99449c82727a862a~mv2.png/v1/fill/w_126,h_92,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CBCS%20TELEGR%20ICON.png"
                alt="telegram"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
