import React from "react";
import "./Header.css";
import Figure from "../../images/Figure.jpg";
import CheckMark from "./CheckMark";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const CorrectData = [
  {
    text: "500+ happy customers",
  },
  {
    text: "Learn as you go",
  },
  {
    text: "Self-paced learning",
  },
];
const ImgSection = () => (
  <div className="main-content">
    <img className="image" src={Figure} alt="main-hero" />
    <div className="three-grey-circles">
      {Array(3)
        .fill(" ")
        .map((i, idx) => (
          <CheckMark
            key={idx + "circle"}
            circleColor="#C1CFFF"
            width={36}
            height={36}
          />
        ))}
    </div>
  </div>
);

const HeadingSection = () => (
  <div className="hero-main-content-right">
    <p className="main-heading">
      <span className="highlighted-heading">Get ready</span> to grow <br /> with
      us ⭐️
    </p>
    <p
      style={{
        fontWeight: 500,
        fontSize: 18,
        marginTop: -15,
        marginBottom: 20,
      }}
    >
      Start with us today
    </p>
    <button className="contained-yellow-button">
      <p>View all courses</p>
      <ArrowForwardIcon />
    </button>
  </div>
);

const Mark = () => (
  <div className="three-ticks">
    {CorrectData.map((i, idx) => (
      <div key={i.text} className="three-ticks-inner">
        <CheckMark
          key={idx + "circle"}
          circleColor="#fb9b43"
          width={84}
          height={84}
          tick
        />
        <h3>{i.text}</h3>
      </div>
    ))}
  </div>
);

const Hero = () => {
  return (
    <div className="hero-content">
      <div className="hero-main-content">
        <ImgSection />
        <HeadingSection />
      </div>
      <Mark />
    </div>
  );
};

export default Hero;
