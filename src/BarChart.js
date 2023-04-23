import styled, { css } from 'styled-components';

function BarChart({ matchState: { scores, gamesPlayed, gamesToPlay } }) {
  const gapSize = gamesToPlay - gamesPlayed;

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
      <Bar score={scores.green * 2} color="green" />
      <Gap size={gapSize} />
      <Bar score={scores.draw * 2} color="lightgray" />
      <Gap size={gapSize} />
      <Bar score={scores.red * 2} color="red" />
    </Holder>
  );
}

const Holder = styled.div`
  width: 100vw;
  height: 20px;
  display: flex;
`;

export default BarChart;
