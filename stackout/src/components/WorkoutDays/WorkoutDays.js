import React from "react";
import "../WorkoutDays/WorkoutDays.css";
import WorkoutDay from "../WorkoutDay/WorkoutDay";

const WorkoutDays = (props) =>
  props.workOutDayItems.map((item, index) => {
    return (
      <WorkoutDay
        showManage={props.showManage}
        workoutDayClicked={() => props.workoutDayClicked(item.id)}
        name={item.title}
        updateWorkoutDays={props.updateWorkoutDays}
        myindex={index}
      />
    );
  });

export default WorkoutDays;
