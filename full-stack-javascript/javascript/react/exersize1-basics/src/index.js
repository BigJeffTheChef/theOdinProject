import React from 'react';
import { createRoot, render } from 'react-dom/client';
import { Header } from './components/Header';
import { Home } from './components/Home';
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<App nameOf="Mick" />);
