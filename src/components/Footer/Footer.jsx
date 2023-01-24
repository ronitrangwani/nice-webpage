import React from "react";
import "./Footer.css";
import FooterLogo from "../../images/footer-logo.jpg";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="footer-row">
        <p>Powered by</p>
        <img className="footer-logo" src={FooterLogo} alt="profile" />
      </div>
      <div className="list-item">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
