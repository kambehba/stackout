import React from "react";
import "../WorkoutDays/WorkoutDays.css";
import WorkoutDay from "../WorkoutDay/WorkoutDay";

const WorkoutDays = (props) =>
  props.workOutDayItems.map((w) => {
    return <WorkoutDay name={w} />;
  });

export default WorkoutDays;
