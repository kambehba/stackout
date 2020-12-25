import React, { useState } from "react";
import "../Workout/Arms.css";
import Workouts from "../Workouts/Workouts";

function Arms(props) {
  return (
    <div>
      <h2 className="app-s5">Arms</h2>
      <Workouts title="Dumbbell"></Workouts>
      <Workouts title="Bar"></Workouts>
      <Workouts title="Tri"></Workouts>
    </div>
  );
}

export default Arms;
