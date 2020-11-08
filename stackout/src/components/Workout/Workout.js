import React, { useState } from "react";
import "../Workout/Workout.css";

function Workout(props) {
  return (
    <div>
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
