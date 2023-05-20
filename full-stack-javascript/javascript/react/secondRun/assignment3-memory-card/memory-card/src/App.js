import './App.css';
import ImageWindow from './components/ImageWindow';
import { useState } from 'react';



function App(props) {
    // users current score (number of not previously chosen images selected)
    const [score, setScore] = useState(0)

    // chosen is an array of image alt's "eg armadillo"
    const [chosen, setChosen] = useState([]);

    // boolean flag representing if the game is over (ie, a player has won)
    const [gameOver, setGameOver] = useState(false);

    function handleImageClick(event) {
        const id = event.target.alt;
        console.log(`id is ${id}`);

        // if image has already been chosen, reset score
        if (chosen.includes(id)) {
            setChosen(prev => []);
            setScore(0);
            console.log("previously chosen - SCORE set to 0");
            return;
        }

        setChosen(prev => [...prev, id]);
        setScore(score + 1);
        console.log("new image chosen - SCORE +1");
    }

    if (gameOver) {
        return (<div>You won!</div>)
    } else {
        return (
            <div className="App">
                <div>Current Score: {score}</div>
                <ImageWindow
                    imgs={props.imgs}
                    imgCount={4}
                    chosen={chosen}
                    handleImageClick={handleImageClick}
                />
            </div>
        );
    }
}

export default App;
