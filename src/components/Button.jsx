import React from "react";
import "../styles/button.css";

const Button = (props) => {
  return (
    <p className="button">
      <p>
        <button style={{ padding: "8px", border: "none" }}>
          {" "}
          {props.buttonText}{" "}
        </button>
      </p>
    </p>
  );
};

export default Button;
