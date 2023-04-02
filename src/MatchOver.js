import { useEffect } from 'react';
import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

function MatchOver({
  endGame: onClose,
  winner,
  rematch,
  autoRematch,
  setAutoRematch,
  matchState,
}) {
  useEffect(() => {
    if (autoRematch) {
      const timeout = setTimeout(() => {
        rematch();
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  });

  const handleChange = (event) => {
    setAutoRematch(event.target.checked);
  };

  function getWinnerStatement(winner) {
    switch (winner) {
      case 1:
        return 'GREEN WON!';
      case 2:
        return 'RED WON!';
      default:
        return 'DRAW!';
    }
  }

  function getScoreStatement(scores) {
    return `GREEN: ${scores.green} WINS! RED: ${scores.red} WINS! AND ${scores.draw} DRAWS!`;
  }

  return (
    <div>
      GAME OVER, {getWinnerStatement(winner)}
      <br />
      CURRENT SCORES ARE: {getScoreStatement(matchState.scores)}
      <br />
      <input type="button" value="REMATCH" onClick={rematch}></input>
      <br />
      <input type="button" value="END GAME" onClick={onClose}></input>
      <br />
      <FormControlLabel
        control={<Switch checked={autoRematch} onChange={handleChange} />}
        label="AUTO-REMATCH?"
      />
    </div>
  );
}

export default MatchOver;
