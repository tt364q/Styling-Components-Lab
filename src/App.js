// Add an import statement for the useState hook using the "named import" syntax
import { useState } from "react";

import './App.css';
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

function App (){
    const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];
    

    const [selColorIdx, setColorIdx] = useState(0);

    const [gameState, setGameState] = useState({
      guesses: [getNewGuess(), getNewGuess(), getNewGuess(), getNewGuess()],
      code: genCode()
    });


    /* helper functions */

    function genCode() {
      return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length));
    }


    function getNewGuess() {
      return {
        // code: [null, null, null, null],
        code: [3, 2, 1, 0], // for testing purposes
        score: {
          perfect: 0,
          almost: 0
        }
      };
    }

    function getWinTries() {
      // if winner, return num guesses, otherwise 0 (no winner)
      let lastGuess = gameState.guesses.length - 1;
      return gameState.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
    }
    
    const winTries = getWinTries();

    return (
      <div className="App">
        <header className="App-header">R E A C T&nbsp;&nbsp;&nbsp;M A S T E R M I N D</header>
        <div className="flex-h">
          <GameBoard colors={colors} guesses={gameState.guesses} />
          <div>
            <ColorPicker colors={colors} selColorIdx={selColorIdx} />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer className="Footer">{winTries ? `You Won in ${winTries} Guesses!` : 'Good Luck!'}</footer>
      </div>
    );
}

export default App;