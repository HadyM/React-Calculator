import React from "react";
import "./Buttons.css";

const Buttons = ({ operations, onButtonClick, type }) => {
  return (
    <div className={`Button ${type || ""}`} onClick={onButtonClick(operations)}>
      {operations}
    </div>
  );
};

export default Buttons;
