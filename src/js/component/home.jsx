import React, { useState, useEffect } from "react";
import Lights from "./Lights.jsx";
import Buttons from "./Buttons.jsx";

const Home = () => {
  const [color, setColor] = useState("red-click");
  const [newColor, setNewColor] = useState(false);
  const [autoCycle, setAutoCycle] = useState(false);

  // cycle through colors automatically every 3 seconds
  useEffect(() => {
    let intervalId;
    if (autoCycle) {
      intervalId = setInterval(() => {
        const colors = ["red-click", "yellow-click", "green-click"];
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length;
        setColor(colors[nextIndex]);
        setNewColor(false);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [autoCycle, color]);

  const handleRandomColor = () => {
    const colors = ["red-click", "yellow-click", "green-click"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
    setNewColor(false);
  };

  const handleNewColor = () => {
    setNewColor(!newColor);
  };

  // Toggle auto cycle
  const handleToggleAutoCycle = () => {
    setAutoCycle(!autoCycle);
  };

  return (
    <div className="content-traffics d-flex">
      <div className="trafic-container">
        <div className="top"></div>
        <div className="traffic">
          <Lights
            color={color}
            newColor={newColor}
            handleColorChange={setColor}
            handleNewColorClick={() => setColor("purple")}
            handleToggleAutoCycle={handleToggleAutoCycle} // Pass handleToggleAutoCycle function
            autoCycle={autoCycle} // Pass autoCycle state
          />
          <Buttons
            handleRandomColor={handleRandomColor}
            handleNewColor={handleNewColor}
          />
        </div>
      </div>
    </div>
  );
};

// Yes i do know is not best practice and i needed help from some friends and old 4geeks students, still missing the styling on the AUTOCYCLE BUTTON.

export default Home;