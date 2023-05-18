import logo from './logo.svg';
import './App.css';
import ImageWindow from './components/ImageWindow';
import { useEffect, useState } from 'react';

function App(props) {

  const [score, setScore] = useState(0)

  function handleScoreUpdate(newScore) {
    setScore(newScore);
  }


  return (
    <div className="App">
      <div>{score}</div>
      <ImageWindow
        imgs={props.imgs}
        imgCount={4}
        score={score}
        onScoreUpdate={handleScoreUpdate}
      />
    </div>
  );
}

export default App;
