import React from "react";
import uniqid from 'uniqid';

export default class Overview extends React.Component {
  render() {
    const tArr = [];
    for (const task of this.props.tasks) {
      tArr.push(
        <p key={uniqid()}>
          {task}
        </p>
      );
    }
    return <h1>{tArr}</h1>;
  }
}