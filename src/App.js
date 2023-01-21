import MainGrid from './MainGrid';
import { useState } from 'react';
import { resetAll } from './helpers';

function App() {
  // App States:
  // - TitleScreen
  // - InAGame
  //   - InProgress
  //   - GameOver

  const STATE = {
    TITLE_SCREEN: 0,
    IN_A_GAME: 1,
  };

  const [appState, setAppState] = useState(STATE.IN_A_GAME);

  function beginGame() {
    setAppState(STATE.IN_A_GAME);
  }
  function endGame() {
    setAppState(STATE.TITLE_SCREEN);
  }

  if (appState === STATE.TITLE_SCREEN)
    return <TitleScreen beginGame={beginGame} />;

  return <MainGrid endGame={endGame} />;
}

export default App;

function TitleScreen() {
  return <div>TITLE SCREEN</div>;
}
