import React from "react";

const LanguageLinks = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <a style={{ display: "flex" }} href="#">
        {" "}
        {props.langLink}{" "}
      </a>
    </div>
  );
};

export default LanguageLinks;
