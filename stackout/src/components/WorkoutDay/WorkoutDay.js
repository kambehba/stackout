import React, { useState } from "react";
import "../WorkoutDay/WorkoutDay.css";

function WorkoutDay(props) {
  let manageSection = null;
  let operationSection = null;
  let mylist = [];

  const [workoutDayTitle, setworkoutDayTitle] = useState(props.name);

  const handleChange = (event) => {
    setworkoutDayTitle(event.target.value);
  };

  const dothis = () => {
    props.updateWorkoutDays(workoutDayTitle, props.myindex);
  };

  if (props.showManage) {
    manageSection = (
      <div>
        <input
          type="text"
          value={workoutDayTitle}
          onChange={handleChange}
        ></input>
        <button className="btn btn-success" onClick={dothis}>
          Save
        </button>
      </div>
    );
  } else {
    operationSection = (
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

  return (
    <div>
      {manageSection}
      {operationSection}
    </div>
  );
}

export default WorkoutDay;
