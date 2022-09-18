/* eslint-disable no-useless-constructor */
import React from 'react';

export default class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="enter task"></input>
          <button type="submit" onClick={ submitHandler }>Submit</button>
        </form>
      </div>
    );
  }
}

function submitHandler(event) {
  event.preventDefault();
}