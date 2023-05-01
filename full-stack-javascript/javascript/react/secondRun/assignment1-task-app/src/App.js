import Overview from './components/Overview';
import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }
    this.onSubmitClick = this.onSubmitClick.bind(this);
  }

  onSubmitClick(event) {
    const tasks = this.state.tasks;

    const {value} = document.querySelector("#task-input");
    tasks.push(value);
    this.setState({tasks});
  }
  render() {
    return (
        <div>
          <form>
            <input type="text" id="task-input"></input>
            <input type="button" value="Submit Input" onClick={this.onSubmitClick}></input>
          </form>
          <Overview tasks={this.state.tasks}/>
        </div>
    );
  }
}

export default App;
