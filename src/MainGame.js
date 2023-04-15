import MainGrid, { GAME_OVER_RESULT } from './MainGrid';

function MainGame({ matchState, setMatchState, players, onMatchOver }) {
  function winHandler(result) {
    let newMatchState = {
      ...matchState,
      gamesPlayed: matchState.gamesPlayed + 1,
      firstPlayer: 1 - matchState.firstPlayer,
    };

    switch (result) {
      case GAME_OVER_RESULT.DRAW:
        newMatchState.scores.draw++;
        break;
      case GAME_OVER_RESULT.GREEN:
        newMatchState.scores.green++;
        break;
      case GAME_OVER_RESULT.RED:
        newMatchState.scores.red++;
        break;
      default:
        throw new Error('UNEXPECTED RESULT!!');
    }

    setMatchState(newMatchState);

    if (newMatchState.gamesPlayed >= newMatchState.gamesToPlay) {
      onMatchOver();
    }
  }

  return (
    <MainGrid
      players={players}
      onGameOver={winHandler}
      firstPlayer={matchState.firstPlayer}
    />
  );
}

export default MainGame;
