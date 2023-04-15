function MatchOver({ matchState, rematch, onClose }) {
  function getScoreStatement(scores) {
    return `GREEN: ${scores.green} WINS! RED: ${scores.red} WINS! AND ${scores.draw} DRAWS!`;
  }

  return (
    <div>
      MATCH OVER
      <br />
      CURRENT SCORES ARE: {getScoreStatement(matchState.scores)}
      <br />
      <input type="button" value="REMATCH" onClick={rematch}></input>
      <br />
      <input type="button" value="END MATCH" onClick={onClose}></input>
    </div>
  );
}

export default MatchOver;
