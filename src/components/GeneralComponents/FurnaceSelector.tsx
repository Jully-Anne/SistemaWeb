//Furnace Selector - Componente para selecionar o forno desejado para a análise dos dados
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function FurnaceSelector() {
  const [furnace, setFurnace] = React.useState('');

  const handleChangeFurnace = (event: SelectChangeEvent) => {
    setFurnace(event.target.value);
  };
 
  return (
    <div>
      <FormControl sx={{ m: '0.5rem', minWidth: '8rem' }}>
        <InputLabel id="demo-simple-select-helper-label">Forno</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={furnace}
          label="Forno"
          onChange={handleChangeFurnace}
          sx={{height: '3rem'}}
        >
          <MenuItem value={10}>FA01</MenuItem>
          <MenuItem value={20}>FE01</MenuItem>
          <MenuItem value={30}>FE02</MenuItem>
          <MenuItem value={40}>FE03</MenuItem>
          <MenuItem value={50}>FS05</MenuItem>
          <MenuItem value={60}>FS06</MenuItem>
          <MenuItem value={70}>FS07</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}