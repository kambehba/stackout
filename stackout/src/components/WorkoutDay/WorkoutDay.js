import React, { useState } from "react";
import "../WorkoutDay/WorkoutDay.css";

function WorkoutDay(props) {
  return (
    <div>
      <button className="workoutday-s1 btn btn-danger">{props.name}</button>
    </div>
  );
}

export default WorkoutDay;
