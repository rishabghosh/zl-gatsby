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
      <div className="promotions">
        <p>welcome to cbcs zoology .org</p>
        <p>
          This website is created to help the students those who are having ZOOLOGY in graduation under this new CBCS
          system.
          This website for the first time in India is going to provide topic wise information in question - answer
          format under the guidance of experienced professors.
        </p>
      </div>
    </header>
  );
};

export default Hero;
