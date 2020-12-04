import React, { useState, useEffect } from "react";
import "../StackItOut/StackItOut.css";
import { API, graphqlOperation } from "aws-amplify";
import { createWorkout, updateWorkDay } from "../../../src/graphql/mutations";
import { listWorkouts, getWorkDay } from "../../../src/graphql/queries";
import Workouts from "../Workouts/Workouts";

function StackItOut(props) {
  const [workoutItem, setworkoutItem] = useState("");
  const [selectedWorkOut, setselectedWorkOut] = useState("");
  const [workOutItems, setworkOutItems] = useState([]);
  const [doneWorkOutItems, setdoneWorkOutItems] = useState([]);
  const handleChange = (event) => {
    setworkoutItem(event.target.value);
  };

  useEffect(() => {
    //loadWorkouts();
    dothis();
  }, []);

  const loadWorkouts = async () => {
    const result = await API.graphql(graphqlOperation(listWorkouts));
    if (result.data.listWorkouts.items.length <= 0) return;
    const userWorkouts = result.data.listWorkouts.items.filter(
      (x) => x.workDayID == props.workOutDayId
    );
    let temp = [];
    userWorkouts.map((x) => {
      temp.push(x.title);
    });

    setworkOutItems([...workOutItems, ...temp]);
    //setworkOutItems(temp);
  };

  const dothis = async () => {
    //setworkOutItems(props.workOutItems);..dd

    console.log("workOutItems:" + props.workOutItems);
  };

  const OnAddWorkOut = async () => {
    //Get Workday Counter Value
    const getWorkDayresult = await API.graphql(
      graphqlOperation(getWorkDay, { id: props.workOutDayId })
    );
    let workDayCounterValue = getWorkDayresult.data.getWorkDay.workoutCounter;
    workDayCounterValue = workDayCounterValue + 1;

    const result = await API.graphql(
      graphqlOperation(createWorkout, {
        input: {
          workDayID: props.workOutDayId,
          content: workoutItem,
          order: workDayCounterValue,
        },
      })
    );

    //update the counter Value in WorkDay Table
    const result2 = await API.graphql(
      graphqlOperation(updateWorkDay, {
        input: {
          id: props.workOutDayId,
          workoutCounter: workDayCounterValue,
        },
      })
    );

    // let temp = [];
    // temp.push(workoutItem);
    // setworkOutItems([...workOutItems, ...temp]);
    // setworkoutItem((prev) => (prev = ""));

    props.loadWorkOuts(props.workOutDayId);
    setworkoutItem("");
  };

  const onWorkoutDone = (w, isdone) => {
    setworkOutItems([...workOutItems, ...props.workOutItems]);
    if (isdone) {
      alert("It is Done");
      return;
    }
    doneWorkOutItems.push(w);
    setdoneWorkOutItems(doneWorkOutItems);
    let h2 = workOutItems.filter((x) => x.id != w.id);
    setworkOutItems((prev) => (prev = h2));
  };

  const onWorkoutDone2 = (w, isdone) => {
    props.onWorkoutDone2(w, isdone);
  };

  return (
    <div className="stackItOut-s0">
      <input
        className="stackItOut-s1"
        type="text"
        value={workoutItem}
        placeholder="Enter a WORKOUT"
        onChange={handleChange}
      />
      <button className="stackItOut-s2 btn btn-success" onClick={OnAddWorkOut}>
        Add
      </button>
      <div className="stackItOut-s3">
        <div className="stackItOut-s4">
          <Workouts
            isdone={false}
            onWorkoutDone={onWorkoutDone2}
            workOutItems={props.workOutItems}
          ></Workouts>
        </div>
      </div>
    </div>
  );
}

export default StackItOut;
