import React from "react";
import "./Digit.css";
const Digit = (props) => {
  return (
    <button
      disabled={props.disabled}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Digit;
