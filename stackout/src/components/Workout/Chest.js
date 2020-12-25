import React, { useState } from "react";
import "../Workout/Chest.css";
import Workouts from "../Workouts/Workouts";

function Chest(props) {
  return (
    <div>
      <h2 className="app-s5">Chest</h2>
      <Workouts title="Bar"></Workouts>
      <Workouts title="Dumbbell"></Workouts>
      <Workouts title="Open"></Workouts>
    </div>
  );
}

export default Chest;
