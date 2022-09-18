/* eslint-disable */
import React from "react";
import TaskForm from "./components/TaskForm";
import Overview from "./components/Overview";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TaskForm />
        <Overview />
      </div>
    );
  }
}