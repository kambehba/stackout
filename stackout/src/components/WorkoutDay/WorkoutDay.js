import React, { useState } from "react";
import "../WorkoutDay/WorkoutDay.css";
//vv
function WorkoutDay(props) {
  return (
    <div>
      <button
        onClick={props.workoutDayClicked}
        className="workoutday-s1 btn btn-danger"
      >
        {props.name}
      </button>
    </div>
  );
}

export default WorkoutDay;
