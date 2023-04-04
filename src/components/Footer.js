import React from "react";
import "../styles/footer.css";
import FooterCountry from "./FooterCountry";
import SecondFooterLine from "./SecondFooterLine";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        paddingRight: "30px",
        paddingLeft: "30px",
        borderBottom: "1px solid rgba(128, 128, 128, 0.247)",
      }}
    >
      <FooterCountry />
      <hr style={{ borderBottom: "1px solid rgba(128, 128, 128, 0.247)" }} />
      <SecondFooterLine />
    </div>
  );
};

export default Footer;
