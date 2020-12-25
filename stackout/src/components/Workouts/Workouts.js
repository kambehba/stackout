import React, { useState } from "react";
import "../Workouts/Workouts.css";
import Workout from "../Workout/Workout";

const Workouts = (props) => {
  const [workoutBtnClass1, setworkoutBtnClass1] = useState(
    "btn btn-success workouts-s3"
  );

  const [workoutBtnClass2, setworkoutBtnClass2] = useState(
    "btn btn-success workouts-s3"
  );

  const [workoutBtnClass3, setworkoutBtnClass3] = useState(
    "btn btn-success workouts-s3"
  );

  const [workoutBtnClass4, setworkoutBtnClass4] = useState(
    "btn btn-success workouts-s3"
  );

  const workOutIsDone1 = () => {
    setworkoutBtnClass1("btn btn-success workouts-s3 workouts-s4");
  };

  const workOutIsDone2 = () => {
    setworkoutBtnClass2("btn btn-success workouts-s3 workouts-s4");
  };

  const workOutIsDone3 = () => {
    setworkoutBtnClass3("btn btn-success workouts-s3 workouts-s4");
  };

  const workOutIsDone4 = () => {
    setworkoutBtnClass4("btn btn-success workouts-s3 workouts-s4");
  };

  return (
    <div className="workouts-s2">
      <button className={workoutBtnClass1} onClick={workOutIsDone1}>
        {props.title}
      </button>
      <button className={workoutBtnClass2} onClick={workOutIsDone2}>
        {props.title}
      </button>
      <button className={workoutBtnClass3} onClick={workOutIsDone3}>
        {props.title}
      </button>
      <button className={workoutBtnClass4} onClick={workOutIsDone4}>
        {props.title}
      </button>
    </div>
  );
};

export default Workouts;

// const Workouts = (props) => {
//   for (let i = 0; i < 4; i++) {
//     return <Workout workoutTitle={props.workoutItem}></Workout>;
//   }
// };

//export default Workouts;

// const Workouts = (props) =>
//   props.workOutItems.map((w) => {
//     return (
//       <div className="s1-workouts">
//         <Workout
//           key={w.id}
//           onWorkoutDone={() => props.onWorkoutDone(w, props.isdone)}
//           workoutTitle={w.content}
//         />
//       </div>
//     );
//   });

// export default Workouts;
