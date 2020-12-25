import React, { useState } from "react";
import "../Landing/Landing.css";

function Landing(props) {
  const [workoutDayTitle, setworkoutDayTitle] = useState("");

  // const handleChange = (event) => {
  //   setworkoutDayTitle(event.target.value);

  //   props.onNewWorkOutDay(workoutDayTitle);
  // };

  // const AddWorkDay = () => {
  //   props.addWorkoutday();
  //   setworkoutDayTitle((prev) => (prev = ""));
  // };

  const manage = () => {
    props.onManage();
  };

  return (
    <div className="landing-s0">
      {/* <img
        className="landing-s5"
        src="images/manage.png"
        onClick={manage}
      ></img> */}
      <h2>Have a Good Workout!</h2>
    </div>
  );
}

export default Landing;
