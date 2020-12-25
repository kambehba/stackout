import React, { useState } from "react";
import "../Workout/Workout.css";

function Workout(props) {
  return (
    <div className="workout-s0">
      <button className="btn btn-success workout-s2">
        {props.workoutTitle}
      </button>
      <button className="btn btn-success workout-s2">
        {props.workoutTitle}
      </button>
      <button className="btn btn-success workout-s2">
        {props.workoutTitle}
      </button>
      <button className="btn btn-success workout-s2">
        {props.workoutTitle}
      </button>
    </div>
  );
}

export default Workout;

// function Workout(props) {
//   return (
//     <div className="workout-s0">
//       <div className="workout-s1">{props.workoutTitle}</div>
//     </div>
//   );
// }

// export default Workout;
