import React, { useState } from "react";
import "../WorkDay/ManageWorkDay.css";
import WorkoutDays from "../../WorkoutDays/WorkoutDays";

function ManageWorkDay(props) {
  const [workoutDayTitle, setworkoutDayTitle] = useState("");

  const handleChange = (event) => {
    setworkoutDayTitle(event.target.value);

    props.onNewWorkOutDay(workoutDayTitle);
  };

  const AddWorkDay = () => {
    props.addWorkoutday();
    setworkoutDayTitle((prev) => (prev = ""));
  };

  const dothis = () => {
    console.log(props.workOutDayItems);
  };

  return (
    <div className="manageworkday-s0">
      <button className="btn btn-danger">Back</button>
      <input
        className="manageworkday-s3"
        type="text"
        placeholder="Work out Day Title"
        value={workoutDayTitle}
        onChange={handleChange}
      />
      <button className="manageworkday-s4 btn btn-success" onClick={AddWorkDay}>
        Add Workout Day
      </button>
      <div>
        <h2>Current Workout Days</h2>
        <div>
          <WorkoutDays
            showManage={props.showManage}
            workOutDayItems={props.workOutDayItems}
            updateWorkoutDays={props.updateWorkoutDays}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageWorkDay;
