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
        <InputLabel id="player-type-controller" sx={{ fontSize: 'inherit' }}>
          {colour} Player Type
        </InputLabel>
        <Select
          labelId="player-type-controller"
          value={playerType}
          label={`${colour} Player Type`}
          onChange={handleChange}
          sx={{ fontSize: 'inherit' }}
        >
          <MenuItem value={'Player'}>Player</MenuItem>
          <MenuItem value={'AI Random'}>AI Random</MenuItem>
          <MenuItem value={'AI Tree Search: 0'}>AI Tree Search: 1</MenuItem>
          <MenuItem value={'AI Tree Search: 1'}>AI Tree Search: 2</MenuItem>
          <MenuItem value={'AI Tree Search: 2'}>AI Tree Search: 3</MenuItem>
          <MenuItem value={'AI Tree Search: 3'}>AI Tree Search: 4</MenuItem>
          <MenuItem value={'AI Tree Search: 4'}>AI Tree Search: 5</MenuItem>
          <MenuItem value={'AI Tree Search: 5'}>AI Tree Search: 6</MenuItem>
          <MenuItem value={'AI Tree Search: 6'}>AI Tree Search: 7</MenuItem>
          <MenuItem value={'AI Tree Search: 7'}>AI Tree Search: 8</MenuItem>
        </Select>
      </FormControl>
    </StyledContainer>
  );
}

export default PlayerController;

const StyledContainer = styled.div`
  color: lightblue;
  font-size: 3vw;

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
