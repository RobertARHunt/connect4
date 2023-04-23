import styled, { css } from 'styled-components';

function BarChart({ matchState: { scores, gamesPlayed, gamesToPlay } }) {
  const gamesRemaining = gamesToPlay - gamesPlayed;

  const Bar = styled.div`
    height: 20px;
    ${(props) => css`
      flex: ${props.score};
      background-color: ${props.color};
    `};
  `;

  const Gap = styled.div`
    height: 20px;
    ${(props) => css`
      flex: ${props.size};
    `};
  `;

  return (
    <Holder>
      <Bar
        score={scores.green * 2}
        color="green"
        title={`${scores.green} green wins`}
      />
      <Gap size={gamesRemaining} title={`${gamesRemaining} games remaining`} />
      <Bar
        score={scores.draw * 2}
        color="lightgray"
        title={`${scores.draw} draws`}
      />
      <Gap size={gamesRemaining} title={`${gamesRemaining} games remaining`} />
      <Bar
        score={scores.red * 2}
        color="red"
        title={`${scores.red} red wins`}
      />
    </Holder>
  );
}

const Holder = styled.div`
  width: 100vw;
  height: 20px;
  display: flex;
`;

export default BarChart;
