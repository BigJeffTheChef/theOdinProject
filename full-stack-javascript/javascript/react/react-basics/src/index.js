import React, { Component } from 'react';
import ReactDom from 'react-dom/client';


class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  
  render() {
    return (
      <div>
        <h1>Hello, {this.props.nameOf}</h1>
      </div>
    );
  }
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<App nameOf="Dawg"/>);