import { fontSize } from '@mui/system';
import styled from 'styled-components';
import PlayerController from './PlayerController';
function TitleScreen({ beginGame, players, setPlayers }) {
  function start() {
    beginGame();
  }
  function setGreenPlayerType(newPlayerType) {
    setPlayers([newPlayerType, players[1]]);
  }
  function setRedPlayerType(newPlayerType) {
    setPlayers([players[0], newPlayerType]);
  }

  return (
    <WholeScreen>
      <Title>
        CONNECT 4
        <FormGroup>
          <PlayerController
            playerType={players[0]}
            setPlayerType={setGreenPlayerType}
            colour="Green"
          />
          <BeginGame>
            <StartButton
              type="button"
              value="START"
              onClick={start}
            ></StartButton>
          </BeginGame>
          <PlayerController
            playerType={players[1]}
            setPlayerType={setRedPlayerType}
            colour="Red"
          />
        </FormGroup>
      </Title>
    </WholeScreen>
  );
}

const Title = styled.div`
  margin: min(10vw, 10vh);
  border: 5px solid red;
  background-color: blue;
  color: lightblue;
  font-size: 13vw;
  text-align: center;
  border-radius: 25px;
  position: relative;
`;

const FormGroup = styled.div`
  margin-top: 5%;
`;

const BeginGame = styled.div`
  z-index: 1;
  background-color: lightblue;
  font-size: 1vw;
  padding: 2vw;
`;

const StartButton = styled.input`
  font-size: 3vw;
`;

const WholeScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export default TitleScreen;
