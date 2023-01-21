import { useState } from 'react';
import MainGame from './MainGame';
import { getStartState } from './helpers';
import GameOver from './GameOver';

function MainGrid({ endGame, scoreState, setScoreState }) {
  const STATE = {
    DRAW: 0,
    GREEN_WIN: 1,
    RED_WIN: 2,
    IN_A_GAME: 3,
  };

  const [gridState, setGridState] = useState(getStartState());
  const [gameState, setGameState] = useState(STATE.IN_A_GAME);

  if (gameState !== STATE.IN_A_GAME) {
    return <GameOver endGame={endGame} winner={gameState} rematch={rematch} />;
  }

  function rematch(setGridState, setGameState) {
    setGameState(STATE.IN_A_GAME);
    setGridState(getStartState());
  }

  function winHandler(win) {
    if (win === 0) {
      setGameState(STATE.DRAW);
    } else if (win === 1) {
      setGameState(STATE.GREEN_WIN);
    } else if (win === 2) {
      setGameState(STATE.RED_WIN);
    }
  }

  return (
    <MainGame
      winHandler={winHandler}
      gridState={gridState}
      setGridState={setGridState}
    />
  );
}

export default MainGrid;
