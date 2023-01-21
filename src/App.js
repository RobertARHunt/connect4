import MainGrid from './MainGrid';
import { useState } from 'react';
import { resetAll } from './helpers';
import TitleScreen from './TitleScreen';

function App() {
  const STATE = {
    TITLE_SCREEN: 0,
    IN_A_GAME: 1,
  };

  const [appState, setAppState] = useState(STATE.TITLE_SCREEN);
  const [scoreState, setScoreState] = useState({ draw: 0, green: 0, red: 0 });

  function beginGame() {
    setAppState(STATE.IN_A_GAME);
    setScoreState({ draw: 0, green: 0, red: 0 });
  }
  function endGame() {
    setAppState(STATE.TITLE_SCREEN);
    setScoreState({ draw: 0, green: 0, red: 0 });
  }

  if (appState === STATE.TITLE_SCREEN)
    return <TitleScreen beginGame={beginGame} />;

  return (
    <MainGrid
      endGame={endGame}
      scoreState={scoreState}
      setScoreState={setScoreState}
    />
  );
}

export default App;
