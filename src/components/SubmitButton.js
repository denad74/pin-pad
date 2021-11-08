import React from "react";
import "./Digit.css";
const SubmitButton = (props) => {
  return (
    <button type={props.type || "button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default SubmitButton;
