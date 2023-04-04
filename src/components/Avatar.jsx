import React from "react";
import Dp from "../images/faceDp.jpeg";

export default function Avatar() {
  return (
    <div>
      <img
        src={Dp}
        alt="display photo"
        style={{ height: "20px", width: "20px", borderRadius: "50%" }}
      />
    </div>
  );
}
