import React, { useState } from "react";
import "../Landing/Landing.css";

function Landing(props) {
  const [workoutDayTitle, setworkoutDayTitle] = useState("");

  const handleChange = (event) => {
    setworkoutDayTitle(event.target.value);

    props.onNewWorkOutDay(workoutDayTitle);
  };

  const dothis = () => {
    props.addWorkoutday();
    setworkoutDayTitle((prev) => (prev = ""));
  };

  return (
    <div className="landing-s0">
      <input
        className="landing-s3"
        type="text"
        placeholder="Work out Day Title"
        value={workoutDayTitle}
        onChange={handleChange}
      />
      <button className="landing-s4 btn btn-success" onClick={dothis}>
        Add Workout Day
      </button>
    </div>
  );
}

export default Landing;
