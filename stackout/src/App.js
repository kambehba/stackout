import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import "./App.css";
import WorkoutDays from "../src/components/WorkoutDays/WorkoutDays.js";
import StackItOut from "../src/components/StackItOut/StackItOut.js";
import Title from "../src/components/Title/Title.js";
import Landing from "../src/components/Landing/Landing";
import { createWorkDay } from "../src/graphql/mutations";
import { listWorkDays, listWorkouts } from "../src/graphql/queries";

function App() {
  let titleSection = null;
  let landingSection = null;
  let workoutDaysSection = null;
  let stackItOutSection = null;

  const [workOutDayItems, setworkOutDayItems] = useState([]);
  const [workOutItems, setworkOutItems] = useState([]);
  const [workOutDayItem, setworkOutDayItem] = useState({});
  const [user, setUser] = useState("");
  const [workoutDayTitle, setworkoutDayTitle] = useState("");
  const [workOutDayId, setworkOutDayId] = useState("");
  const [showWorkOutDay, setshowWorkOutDay] = useState(true);
  const [showLanding, setshowLanding] = useState(true);
  const [showStackItOut, setshowStackItOut] = useState(false);
  const [doneWorkOutItems, setdoneWorkOutItems] = useState([]);

  useEffect(() => {
    updateUser();
  }, []);

  const updateUser = async () => {
    const userInfo = await Auth.currentUserInfo();
    setUser((prev) => (prev = userInfo.username));
    getWorkoutDays(userInfo.username);
  };

  const getWorkoutDays = async (userinfo) => {
    const result = await API.graphql(graphqlOperation(listWorkDays));
    if (result.data.listWorkDays.items.length <= 0) return;
    const userWorkDays = result.data.listWorkDays.items.filter(
      (x) => x.userID == userinfo
    );
    let temp = [];
    userWorkDays.map((x) => {
      //temp.push(x.title);
      temp.push({ id: x.id, title: x.title });
    });
    console.log(temp);
    //setworkOutDayItems([...workOutDayItems, ...temparray]);
    //setworkOutDayItems(temp);
    setworkOutDayItems(temp);
  };

  const onWorkoutDayClicked = (workDayId) => {
    console.log("workDayId:" + workDayId);
    loadWorkouts(workDayId);
    setshowStackItOut(true);
    setshowWorkOutDay(false);
    setshowLanding(false);
  };

  const addWorkoutday = async () => {
    const result = await API.graphql(
      graphqlOperation(createWorkDay, {
        input: {
          title: workoutDayTitle,
          userID: user,
        },
      })
    );

    getWorkoutDays(user);
    setworkOutDayId((prev) => (prev = result.data.createWorkDay.id));
    //setworkOutDayItems([...workOutDayItems, workoutDayTitle]);
  };

  const onWorkoutDone2 = (w, isdone) => {
    if (isdone) {
      alert("It is Done");
      return;
    }
    doneWorkOutItems.push(w);
    setdoneWorkOutItems(doneWorkOutItems);
    let h2 = workOutItems.filter((x) => x.id != w.id);
    setworkOutItems((prev) => (prev = h2));
  };

  const loadWorkouts = async (workDayId) => {
    const result = await API.graphql(graphqlOperation(listWorkouts));
    if (result.data.listWorkouts.items.length <= 0) return;
    const userWorkouts = result.data.listWorkouts.items.filter(
      (x) => x.workDayID == workDayId
    );
    let temp = [];
    userWorkouts.map((x) => {
      console.log("x:" + x.content);
      temp.push({ id: x.id, content: x.content });
    });

    console.log("temp:" + temp[0]);

    setworkOutItems([...workOutItems, ...temp]);
    //setworkOutItems(temp);
  };

  const onNewWorkOutDay = (t) => {
    setworkoutDayTitle((prevTitle) => (prevTitle = t));
  };

  titleSection = (
    <div>
      <Title></Title>
    </div>
  );

  if (showWorkOutDay) {
    workoutDaysSection = (
      <div>
        <WorkoutDays
          name={user}
          workOutDayItems={workOutDayItems}
          workoutDayClicked={onWorkoutDayClicked}
        />
      </div>
    );
  }

  if (showStackItOut) {
    stackItOutSection = (
      <StackItOut
        onWorkoutDone2={onWorkoutDone2}
        workOutItems={workOutItems}
        doneWorkOutItems={doneWorkOutItems}
      ></StackItOut>
    );
  }

  if (showLanding) {
    landingSection = (
      <div>
        <Landing
          addWorkoutday={addWorkoutday}
          onNewWorkOutDay={onNewWorkOutDay}
        />
      </div>
    );
  }

  return (
    <div className="app-s1">
      {titleSection}
      {landingSection}
      {workoutDaysSection}
      {stackItOutSection}
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
