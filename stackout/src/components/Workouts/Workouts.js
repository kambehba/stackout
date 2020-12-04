import React from "react";
import "../Workouts/Workouts.css";
import Workout from "../Workout/Workout";

const Workouts = (props) =>
  props.workOutItems.map((w) => {
    return (
      <div className="s1-workouts">
        <Workout
          key={w.id}
          onWorkoutDone={() => props.onWorkoutDone(w, props.isdone)}
          workoutTitle={w.content}
        />
      </div>
    );
  });

export default Workouts;
