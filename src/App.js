import MainGrid from './MainGrid';
import styled, { css } from 'styled-components';
import { useState } from 'react';
import ScoreDisplay from './ScoreDisplay';

function App() {
  const [turnState, setTurnState] = useState(1);
  const [scoreState, setScoreState] = useState({ red: 0, green: 0 });

  return (
    <StyledContainer>
      <MainGrid
        turnState={turnState}
        scoreState={scoreState}
        setTurnState={setTurnState}
        setScoreState={setScoreState}
      />

      <ScoreDisplay scoreState={scoreState} />
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

export default App;
