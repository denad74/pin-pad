import React from "react";
import "./Digits.css";
import Digit from "./Digit";

const Digits = (props) => {
  return (
    <div>
      <div>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          1
        </Digit>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          2
        </Digit>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          3
        </Digit>
      </div>
      <div>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          4
        </Digit>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          5
        </Digit>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          6
        </Digit>
      </div>
      <div>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          7
        </Digit>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          8
        </Digit>
        <Digit disabled={props.disabled} onClick={props.onClick}>
          9
        </Digit>
      </div>
      <div className="center">
        <Digit disabled={props.disabled} onClick={props.onClick}>
          0
        </Digit>
      </div>
    </div>
  );
};

export default Digits;
