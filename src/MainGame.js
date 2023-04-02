import MainGrid from './MainGrid';

function MainGame({
  scoreState,
  setScoreState,
  players,
  gridState,
  setGridState,
  setGameState,
}) {
  function winHandler(win) {
    if (win === undefined) {
      setScoreState({ ...scoreState, draw: (scoreState.draw += 1) });
      setGameState(0);
    } else if (win === 0) {
      setScoreState({ ...scoreState, green: (scoreState.green += 1) });
      setGameState(1);
    } else if (win === 1) {
      setScoreState({ ...scoreState, red: (scoreState.red += 1) });
      setGameState(2);
    }
  }

  return (
    <MainGrid
      winHandler={winHandler}
      gridState={gridState}
      setGridState={setGridState}
      players={players}
    />
  );
}

export default MainGame;
