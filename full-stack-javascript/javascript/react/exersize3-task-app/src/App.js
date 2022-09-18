import React from "react";
import TaskForm from "./components/TaskForm";
import Overview from "./components/Overview";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(document.getElementById('text-field').value),
    }, () => { console.log(this.state.tasks) });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <React.StrictMode>
          <TaskForm onSubmit={ this.submitHandler } />
          <Overview tasks={ tasks } />
        </React.StrictMode>
      </div>
    );
  }
}