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
            <input type="button" value="START" onClick={start}></input>
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
  object-align: center;
  border-radius: 25px;
  position: relative;
  z-index: 0;
`;

const FormGroup = styled.div`
  margin-top: 5%;
`;

const BeginGame = styled.div`
  text-align: center;
  width: 33.33333%
  z-index: 1;
  background-color: lightblue;
  color: red;
  font-size: 5vw;
  text-align: center;
  object-align: center;
`;

const WholeScreen = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
`;

export default TitleScreen;
