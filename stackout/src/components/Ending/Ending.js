import React, { useEffect } from "react";
import "../Ending/Ending.css";

function Ending() {
  useEffect(() => {
    document.getElementById("a2").play();
  }, []);

  return (
    <div>
      <audio id="a2">
        <source src="audio/ending.wav" type="audio/mpeg"></source>
      </audio>
      <img src="https://media.giphy.com/media/KZGPvmtFNOxGac0XVW/giphy.gif"></img>
    </div>
  );
}

export default Ending;
