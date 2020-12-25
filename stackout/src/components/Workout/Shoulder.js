import React, { useState } from "react";
import "../Workout/Shoulder.css";
import Workouts from "../Workouts/Workouts";

function Shoulder(props) {
  return (
    <div>
      <h2 className="app-s5">Shoulder</h2>
      <Workouts title="Dumbbell"></Workouts>
      <Workouts title="Side"></Workouts>
      <Workouts title="Front"></Workouts>
      <Workouts title="Bar"></Workouts>
      <Workouts title="Trap"></Workouts>
    </div>
  );
}

export default Shoulder;
