import React from "react";

const Buttons = ({ handleRandomColor, handleNewColor }) => {
  return (
    <div className="buttons">
      <div className="btn-random">
        <button className="btn-change changer" onClick={handleRandomColor}>
          Random Color
        </button>
      </div>
      <div className="btn-new">
        <button className="btn-change new" onClick={handleNewColor}>
          New Color
        </button>
      </div>
    </div>
  );
};

export default Buttons;