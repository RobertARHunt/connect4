import MainGame from './MainGame';
import { useState } from 'react';
import TitleScreen from './TitleScreen';
import { getAI } from './AIs';
import { getStartState } from './helpers';
import GameOver from './GameOver';

function App() {
  const STATE = {
    TITLE_SCREEN: 0,
    IN_A_GAME: 1,
    GAME_OVER: 2,
  };

  const GAME_STATES = {
    DRAW: 0,
    GREEN_WIN: 1,
    RED_WIN: 2,
    IN_A_GAME: 3,
  };

  const DEFAULT_MATCH_STATE = {
    gamesToPlay: 1,
    gamesPlayed: 0,
    scores: { draw: 0, green: 0, red: 0 },
  };

  const [appState, setAppState] = useState(STATE.TITLE_SCREEN);
  const [scoreState, setScoreState] = useState({ draw: 0, green: 0, red: 0 });
  const [players, setPlayers] = useState(['Player', 'Player']);
  const [matchState, setMatchState] = useState(DEFAULT_MATCH_STATE);
  const [autoRematch, setAutoRematch] = useState(false);
  const [gridState, setGridState] = useState(getStartState());
  const [gameState, setGameState] = useState(GAME_STATES.IN_A_GAME);

  function beginGame() {
    setAppState(STATE.IN_A_GAME);
    setScoreState({ draw: 0, green: 0, red: 0 });
  }

  function endGame() {
    setAppState(STATE.TITLE_SCREEN);
    setScoreState({ draw: 0, green: 0, red: 0 });
  }

  function mapPlayers(players) {
    return players.map((player) => ({
      playerType: player,
      playerFunction: getAI(player),
    }));
  }

  function rematch() {
    setGameState(STATE.IN_A_GAME);
    setGridState(getStartState());
  }

  switch (appState) {
    case STATE.TITLE_SCREEN:
      return (
        <TitleScreen
          beginGame={beginGame}
          players={players}
          setPlayers={setPlayers}
          matchState={matchState}
          setMatchState={setMatchState}
        />
      );
    case STATE.GAME_OVER:
      return (
        <GameOver
          endGame={endGame}
          winner={gameState}
          rematch={rematch}
          autoRematch={autoRematch}
          setAutoRematch={setAutoRematch}
          scoreState={scoreState}
        />
      );
    default:
      <MainGame
        scoreState={scoreState}
        setScoreState={setScoreState}
        players={mapPlayers(players)}
        gridState={gridState}
        setGridState={setGridState}
        setGameState={setGameState}
      />;
  }
}

export default App;
