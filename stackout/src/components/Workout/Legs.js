import React, { useState } from "react";
import "../Workout/Legs.css";
import Workouts from "../Workouts/Workouts";

function Legs(props) {
  return (
    <div>
      <h2 className="app-s5">Legs</h2>
      <Workouts title="Squat"></Workouts>
      <Workouts title="Calf"></Workouts>
    </div>
  );
}

export default Legs;
