import React from "react";
import logo from "../images/google.png";

const Logo = () => {
  return (
    <div>
      <img
        src={logo}
        alt="google-Logo"
        style={{ height: "92px", width: "272px" }}
      />
    </div>
  );
};

export default Logo;
