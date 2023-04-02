import styled from 'styled-components';
import PlayerController from './PlayerController';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';

function TitleScreen({
  beginMatch,
  players,
  setPlayers,
  matchState,
  setMatchState,
}) {
  function start() {
    beginMatch();
  }
  function setGreenPlayerType(newPlayerType) {
    setPlayers([newPlayerType, players[1]]);
  }
  function setRedPlayerType(newPlayerType) {
    setPlayers([players[0], newPlayerType]);
  }

  const availableNumbersOfGames = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 5,
    },
    {
      value: 10,
      label: '10',
    },
    {
      value: 25,
      label: '25',
    },
    {
      value: 50,
      label: '50',
    },
    {
      value: 100,
      label: '100',
    },
  ];

  const handleSliderChange = (_target, value) => {
    setMatchState({ ...matchState, gamesToPlay: value });
  };

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
            <Stack
              justifyContent="center"
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <FormControlLabel
                labelPlacement="top"
                control={
                  <Slider
                    value={matchState.gamesToPlay}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    min={-5}
                    max={105}
                    step={null}
                    marks={availableNumbersOfGames}
                    sx={{
                      width: '90ch',
                    }}
                  />
                }
                label="How Many Games To Play?"
              />
              <StartButton
                type="button"
                value="START"
                onClick={start}
              ></StartButton>
            </Stack>
            {/* <PlayNumButton value="Leave Blank if normal"></PlayNumButton> */}
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
  content-align: center;
  color: black;
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
