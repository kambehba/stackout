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
import Ending from "../src/components/Ending/Ending";
import Workouts from "../src/components/Workouts/Workouts";
import ManageWorkDay from "../src/components/Manage/WorkDay/ManageWorkDay";
import { createWorkDay } from "../src/graphql/mutations";
import { listWorkDays, listWorkouts } from "../src/graphql/queries";

import Shoulder from "../src/components/Workout/Shoulder";
import Legs from "../src/components/Workout/Legs";
import Chest from "../src/components/Workout/Chest";
import Arms from "../src/components/Workout/Arms";

function App() {
  let titleSection = null;
  let landingSection = null;
  let workoutDaysSection = null;
  let stackItOutSection = null;
  let endingSection = null;
  let mangeworkdaySection = null;
  let workOutSection = null;
  let currentWorkOutItems = [];

  const [workOutDayItems, setworkOutDayItems] = useState([
    "Shoulder",
    "Legs",
    "Chest",
    "Arms",
  ]);
  const [workOutItems, setworkOutItems] = useState([]);
  const [workOutDayItem, setworkOutDayItem] = useState({});
  const [user, setUser] = useState("");
  const [workoutDayTitle, setworkoutDayTitle] = useState("");
  const [workOutDayId, setworkOutDayId] = useState("");
  const [showWorkOutDay, setshowWorkOutDay] = useState(true);
  const [showLanding, setshowLanding] = useState(true);
  const [showStackItOut, setshowStackItOut] = useState(false);
  const [showWorkOutSection, setshowWorkOutSection] = useState(false);
  const [showEnding, setshowEnding] = useState(false);
  const [showManageWorkDay, setshowManageWorkDay] = useState(false);
  const [doneWorkOutItems, setdoneWorkOutItems] = useState([]);
  const [activeWorkOut, setactiveWorkOut] = useState({});

  const [showShoulder, setshowShoulder] = useState(false);
  const [showLegs, setshowLegs] = useState(false);
  const [showChest, setshowChest] = useState(false);
  const [showArms, setshowArms] = useState(false);
  const [currentWoroutIndex, setcurrentWoroutIndex] = useState(0);

  useEffect(() => {
    updateUser();
  }, []);

  const updateUser = async () => {
    const userInfo = await Auth.currentUserInfo();
    setUser((prev) => (prev = userInfo.username));
    //getWorkoutDays(userInfo.username);
  };

  const dothis2 = () => {
    setworkOutDayItems(["Shoulder", "Legs", "Chest", "Arms"]);
  };

  const getWorkoutDays = async (userinfo) => {
    const result = await API.graphql(graphqlOperation(listWorkDays));
    if (result.data.listWorkDays.items.length <= 0) return;
    const userWorkDays = result.data.listWorkDays.items.filter(
      (x) => x.userID == userinfo
    );
    let temp = [];
    userWorkDays.map((x) => {
      temp.push({ id: x.id, title: x.title });
    });
    //setworkOutDayItems([...workOutDayItems, ...temparray]);
    //setworkOutDayItems(temp);
    setworkOutDayItems(temp);
  };

  const onWorkoutDayClicked = (workDayId) => {
    console.log("workDayId22:" + workDayId);
    setworkOutDayId((prev) => (prev = workDayId));
    loadWorkouts(workDayId);
    setshowStackItOut(true);
    setshowWorkOutDay(false);
    setshowLanding(false);
    setshowEnding(false);
  };

  const addWorkoutday = async () => {
    const result = await API.graphql(
      graphqlOperation(createWorkDay, {
        input: {
          title: workoutDayTitle,
          userID: user,
          workoutCounter: 0,
        },
      })
    );

    getWorkoutDays(user);
    setworkOutDayId((prev) => (prev = result.data.createWorkDay.id));
    //setworkOutDayItems([...workOutDayItems, workoutDayTitle]);
  };

  const onWorkoutDone2 = (w) => {
    // doneWorkOutItems.push(w);
    // setdoneWorkOutItems(doneWorkOutItems);
    // let h2 = workOutItems.filter((x) => x.id != w.id);
    // setworkOutItems((prev) => (prev = h2));
    updateCurrentWorkout();
    document.getElementById("a1").play();
  };

  const onBackClicked = () => {
    setshowWorkOutSection(false);
    setshowStackItOut(false);
    setshowWorkOutDay(true);
    setshowLanding(true);
    setshowEnding(false);
  };

  const updateWorkoutDays = (dd, myindex) => {
    let aa = [...workOutDayItems];
    aa[myindex].title = dd;
    setworkOutDayItems(aa);
  };

  const updateCurrentWorkout = () => {
    if (workOutItems.length == 0) {
      setshowStackItOut(false);
      setshowWorkOutDay(false);
      setshowLanding(false);
      setshowEnding(true);
      return;
    }

    setactiveWorkOut({
      id: workOutItems[0].id,
      content: workOutItems[0].content,
    });

    workOutItems.shift();
    setworkOutItems(workOutItems);
  };

  const loadWorkouts = async (workDayId) => {
    const result = await API.graphql(graphqlOperation(listWorkouts));

    if (result.data.listWorkouts.items.length <= 0) return;
    currentWorkOutItems = result.data.listWorkouts.items
      .filter((x) => x.workDayID == workDayId)
      .sort((a, b) => a.order - b.order);

    setactiveWorkOut({
      id: currentWorkOutItems[0].id,
      content: currentWorkOutItems[0].content,
    });

    currentWorkOutItems.shift();
    setworkOutItems(currentWorkOutItems);
  };

  const onNewWorkOutDay = (t) => {
    setworkoutDayTitle((prevTitle) => (prevTitle = t));
  };

  const showManageWorkDaySection = () => {
    setshowStackItOut(false);
    setshowWorkOutDay(false);
    setshowLanding(false);
    setshowEnding(false);
    setshowManageWorkDay(true);
  };

  const LoadWorkouts2 = (index) => {
    setcurrentWoroutIndex(index);

    setshowWorkOutSection(true);
    setshowStackItOut(false);
    setshowWorkOutDay(false);
    setshowLanding(false);
    setshowEnding(false);
  };

  const onManage = () => {
    showManageWorkDaySection();
  };

  titleSection = (
    <div>
      <Title></Title>
    </div>
  );

  if (showWorkOutDay) {
    workoutDaysSection = workOutDayItems.map((item, index) => {
      return (
        <button
          className="btn btn-success app-s3"
          onClick={() => LoadWorkouts2(index)}
        >
          {item}
        </button>
      );
    });
    // <div>
    //   {/* <WorkoutDays
    //     name={user}
    //     workOutDayItems={workOutDayItems}
    //     workoutDayClicked={onWorkoutDayClicked}
    //     showManage={false}
    //   /> */}

    // </div>
  }

  if (showStackItOut) {
    stackItOutSection = (
      <StackItOut
        workOutDayId={workOutDayId}
        onWorkoutDone2={onWorkoutDone2}
        workOutItems={workOutItems}
        doneWorkOutItems={doneWorkOutItems}
        loadWorkOuts={loadWorkouts}
        activeWorkout={activeWorkOut.content}
      ></StackItOut>
    );
  }

  if (showWorkOutSection) {
    if (currentWoroutIndex == 0)
      workOutSection = (
        <div>
          <Shoulder></Shoulder>
          <button onClick={onBackClicked} className="btn btn-danger">
            Back
          </button>
        </div>
      );
    if (currentWoroutIndex == 1)
      workOutSection = (
        <div>
          <Legs></Legs>
          <button onClick={onBackClicked} className="btn btn-danger">
            Back
          </button>
        </div>
      );
    if (currentWoroutIndex == 2)
      workOutSection = (
        <div>
          <Chest></Chest>
          <button onClick={onBackClicked} className="btn btn-danger">
            Back
          </button>
        </div>
      );
    if (currentWoroutIndex == 3)
      workOutSection = (
        <div>
          <Arms></Arms>
          <button onClick={onBackClicked} className="btn btn-danger">
            Back
          </button>
        </div>
      );
  }

  if (showLanding) {
    landingSection = (
      <div>
        {/* <Landing
          addWorkoutday={addWorkoutday}
          onNewWorkOutDay={onNewWorkOutDay}
          onManage={onManage}
        /> */}
        <Landing onManage={onManage} />
      </div>
    );
  }

  if (showEnding) {
    endingSection = (
      <div>
        <Ending />
      </div>
    );
  }
  if (showManageWorkDay) {
    mangeworkdaySection = (
      <div>
        <ManageWorkDay
          onNewWorkOutDay={onNewWorkOutDay}
          addWorkoutday={addWorkoutday}
          workOutDayItems={workOutDayItems}
          showManage={true}
          updateWorkoutDays={updateWorkoutDays}
        />
      </div>
    );
  }

  return (
    <div className="app-s1">
      <audio id="a1">
        <source src="audio/ding.mp3" type="audio/mpeg"></source>
      </audio>
      {titleSection}
      {landingSection}
      {workoutDaysSection}
      {workOutSection}
      {stackItOutSection}
      {mangeworkdaySection}
      {endingSection}
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
