import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import "./App.css";
import WorkoutDays from "../src/components/WorkoutDays/WorkoutDays.js";
import Landing from "../src/components/Landing/Landing";

function App() {
  let landingSection = null;
  let workoutDaysSection = null;

  const [workOutDayItems, setworkOutDayItems] = useState([]);
  const [user, setUser] = useState("");
  const [workoutDayTitle, setworkoutDayTitle] = useState("");

  useEffect(() => {
    updateUser();
    //dothis2();
  }, []);

  const updateUser = async () => {
    const userInfo = await Auth.currentUserInfo();
    setUser(userInfo.username);
  };

  const addWorkoutday = () => {
    setworkOutDayItems([...workOutDayItems, workoutDayTitle]);
  };

  const onNewWorkOutDay = (t) => {
    setworkoutDayTitle((prevTitle) => (prevTitle = t));
  };

  workoutDaysSection = (
    <div>
      <WorkoutDays name={user} workOutDayItems={workOutDayItems} />
    </div>
  );

  landingSection = (
    <div>
      <Landing
        addWorkoutday={addWorkoutday}
        onNewWorkOutDay={onNewWorkOutDay}
      />
    </div>
  );

  return (
    <div className="app-s1">
      {landingSection}
      {workoutDaysSection}
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true });
//export default App;
