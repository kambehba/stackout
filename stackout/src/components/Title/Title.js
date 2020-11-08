import React, { useState } from "react";
import "../Title/Title.css";

function Title(props) {
  const [workoutDayTitle, setworkoutDayTitle] = useState("");

  return (
    <div className="title-s0">
      <div className="title-s1">
        <h1 className="title-s2">Stackout</h1>
      </div>
    </div>
  );
}

export default Title;
