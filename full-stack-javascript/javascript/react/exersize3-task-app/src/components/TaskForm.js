import React from 'react';

export default class TaskForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="enter task" id="text-field"></input>
          <button type="submit" onClick={ (e) => this.props.onSubmit(e) }>Submit</button>
        </form>
      </div>
    );
  }
}