import MainGame from './MainGame';
import { useState } from 'react';
import TitleScreen from './TitleScreen';
import { getAI } from './AIs';
import MatchOver from './MatchOver';

function App() {
  const STATE = {
    TITLE_SCREEN: 0,
    IN_A_MATCH: 1,
    MATCH_OVER: 2,
  };

  const DEFAULT_MATCH_STATE = {
    gamesToPlay: 1,
    gamesPlayed: 0,
    scores: { draw: 0, green: 0, red: 0 },
  };

  const [appState, setAppState] = useState(STATE.TITLE_SCREEN);
  const [players, setPlayers] = useState(['Player', 'Player']);
  const [matchState, setMatchState] = useState(DEFAULT_MATCH_STATE);

  function beginMatch() {
    setMatchState({
      ...DEFAULT_MATCH_STATE,
      gamesToPlay: matchState.gamesToPlay,
    });
    setAppState(STATE.IN_A_MATCH);
  }

  function returnToTitleScreen() {
    setAppState(STATE.TITLE_SCREEN);
  }

  function handleMatchOver() {
    setAppState(STATE.MATCH_OVER);
  }

  function mapPlayers(players) {
    return players.map((player) => ({
      playerType: player,
      playerFunction: getAI(player),
    }));
  }

  switch (appState) {
    case STATE.TITLE_SCREEN:
      return (
        <TitleScreen
          beginMatch={beginMatch}
          players={players}
          setPlayers={setPlayers}
          matchState={matchState}
          setMatchState={setMatchState}
        />
      );
    case STATE.IN_A_MATCH:
      return (
        <MainGame
          matchState={matchState}
          setMatchState={setMatchState}
          players={mapPlayers(players)}
          onMatchOver={handleMatchOver}
        />
      );
    case STATE.MATCH_OVER:
      return (
        <MatchOver
          matchState={matchState}
          rematch={beginMatch}
          onClose={returnToTitleScreen}
        />
      );
    default:
      throw new Error(`UNKNOWN APP STATE: ${appState}`);
  }
}

export default App;
