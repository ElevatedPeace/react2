import React from "react";

import BottomLeftMenu from "./BottomLeftMenu";
import BottomRightMenu from "./BottomRightMenu";
import FooterType from "./FooterType";
const SecondFooterLine = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div
        style={{ display: "flex", justifyContent: "flex-start", gap: "1rem" }}
      >
        <BottomLeftMenu bottomText={"About"} />
        <BottomLeftMenu bottomText={"Advertising"} />
        <BottomLeftMenu bottomText={"Business"} />
        <BottomLeftMenu bottomText={"How Search Works"} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "30%" }}>
        <FooterType />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
        <BottomRightMenu footerRightText={"Privacy"} />
        <BottomRightMenu footerRightText={"Terms"} />
        <BottomRightMenu footerRightText={"Settings"} />
      </div>
    </div>
  );
};

export default SecondFooterLine;
