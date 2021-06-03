import React from "react";
import "./Buttons.css";

const Buttons = ({ name, onButtonClick, type }) => {
  return (
    <div className={`Button ${type || ""}`} onClick={onButtonClick(name)}>
      {name}
    </div>
  );
};

export default Buttons;
