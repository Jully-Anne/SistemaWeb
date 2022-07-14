//TimeSeletor - Seletor para selecionar o tempo desejado entre intervalos de dados para a formação do gráfico de linhas (Tela de consulta de históricos)
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function TimeSelector() {
  const [time, setTime] = React.useState('');

  const handleChangeTime = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };
 
  return (
    <div>
      <FormControl sx={{ m: '0.5rem', mb: '1rem', minWidth: '8rem' }}>
        <InputLabel id="demo-simple-select-helper-label">Tempo</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={time}
          label="Tempo"
          onChange={handleChangeTime}
          sx={{height: '3rem'}}
        >
          <MenuItem value={10}>5 minutos</MenuItem>
          <MenuItem value={20}>30 minutos</MenuItem>
          <MenuItem value={30}>1 hora</MenuItem>
          <MenuItem value={40}>12 horas</MenuItem>
          <MenuItem value={50}>1 dia</MenuItem>
          <MenuItem value={60}>1 semana</MenuItem>
          <MenuItem value={70}>2 semanas</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}