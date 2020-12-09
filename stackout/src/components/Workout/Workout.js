import React, { useState } from "react";
import "../Workout/Workout.css";

function Workout(props) {
  return (
    <div className="workout-s0">
      <div className="workout-s1">{props.workoutTitle}</div>
    </div>
  );
}

export default Workout;
