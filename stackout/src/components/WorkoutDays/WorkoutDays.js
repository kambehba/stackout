import React from "react";
import "../WorkoutDays/WorkoutDays.css";
import WorkoutDay from "../WorkoutDay/WorkoutDay";

const WorkoutDays = (props) =>
  props.workOutDayItems.map((item) => {
    return (
      <WorkoutDay
        workoutDayClicked={() => props.workoutDayClicked(item.id)}
        name={item.title}
      />
    );
  });

export default WorkoutDays;
