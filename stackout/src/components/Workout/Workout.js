import React, { useState } from "react";
import "../Workout/Workout.css";

function Workout(props) {
  return (
    <div className="workout-s0">
      <button
        onClick={props.onWorkoutDone}
        className="workout-s1 btn btn-warning"
      >
        {props.workoutTitle}
      </button>
    </div>
  );
}

export default Workout;
