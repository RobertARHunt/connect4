import styled, { css } from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';

function PlayerController({ playerType, setPlayerType, colour }) {
  const handleChange = (event) => {
    setPlayerType(event.target.value);
  };

  return (
    <StyledContainer colour={colour}>
      <FormControl sx={{ m: 1, minWidth: '50vw' }}>
        <InputLabel id="player-type-controller">
          {colour} Player Type
        </InputLabel>
        <Select
          labelId="player-type-controller"
          value={playerType}
          label={`${colour} Player Type`}
          onChange={handleChange}
        >
          <MenuItem value={'Player'}>Player</MenuItem>
          <MenuItem value={'AI Random'}>AI Random</MenuItem>
          <MenuItem value={'AI Tree Search: 0'}>AI Tree Search: 0</MenuItem>
          <MenuItem value={'AI Tree Search: 1'}>AI Tree Search: 1</MenuItem>
        </Select>
      </FormControl>
    </StyledContainer>
  );
}

export default PlayerController;

const StyledContainer = styled.div`
  text-align: center;
  z-index: 1;
  color: lightblue;
  font-size: 3vw;
  text-align: center;

  ${(props) =>
    css`
      background-color: ${props.colour};
    `}

  ${(props) =>
    props.colour === 'Red' &&
    css`
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    `}
`;
