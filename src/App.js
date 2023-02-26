import MainGrid from './MainGrid';
import { useState } from 'react';
import TitleScreen from './TitleScreen';
import { getAI } from './AIs';

function App() {
  const STATE = {
    TITLE_SCREEN: 0,
    IN_A_GAME: 1,
  };

  const [appState, setAppState] = useState(STATE.TITLE_SCREEN);
  const [scoreState, setScoreState] = useState({ draw: 0, green: 0, red: 0 });
  const [players, setPlayers] = useState(['Player', 'Player']);

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

  if (appState === STATE.TITLE_SCREEN)
    return (
      <TitleScreen
        beginGame={beginGame}
        players={players}
        setPlayers={setPlayers}
      />
    );

  return (
    <MainGrid
      endGame={endGame}
      scoreState={scoreState}
      setScoreState={setScoreState}
      players={mapPlayers(players)}
    />
  );
}

export default App;
