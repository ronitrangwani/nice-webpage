import React, { useState } from "react";
import CORPORATE_BOOTCAMP from "../../images/BootImg.png";
import "./BootSection.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const data = {
  Corporate: {
    name: "Corporate ",
    img: CORPORATE_BOOTCAMP,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
  Groups: {
    name: "Groups",
    img: CORPORATE_BOOTCAMP,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
  Upcoming: {
    name: "Upcoming",
    img: CORPORATE_BOOTCAMP,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
};
const NameCards = ({ bootcampName, setBootcapName }) => (
  <div className="bootcamp-names">
    {Object.keys(data).map((i) => (
      <div
        key={i}
        className={
          bootcampName === i ? "selected-bootcamp-name" : "bootcamp-name"
        }
        onClick={() => setBootcapName(i)}
      >
        {i}
      </div>
    ))}
  </div>
);

const DetailCards = ({ bootCampData }) => {
  return (
    <div className="bootcamp-detail-card">
      <div className="bootcamp-details">
        <div className="bootcamp-details-heading">{bootCampData.name}</div>
        <div className="bootcamp-details-description">
          {bootCampData.description}
        </div>
        <button className="contained-button">
          <div>Join Now</div>
          <div>
            <ArrowForwardIcon />
          </div>
        </button>
      </div>
      <div className="bootcamp-detail-img">
        <img
          style={{
            width: "80%",
            height: "auto",
          }}
          src={bootCampData.img}
          alt={bootCampData.name}
        />
      </div>
    </div>
  );
};

const BootSection = () => {
  const [bootcampName, setBootcampName] = useState("Corporate");
  const bootCampData = data[bootcampName];

  return (
    <div className="container-fluid nav-bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="bootcamp-section">
            <div className="bootcamp-title">Bootcamps</div>
            <NameCards
              bootcampName={bootcampName}
              setBootcapName={setBootcampName}
            />
            <DetailCards bootCampData={bootCampData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootSection;
