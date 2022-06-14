import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function FormRealTimeQuery() {

  const [sector, setSector] = React.useState('');
  const [resource, setResource] = React.useState('');

  const handleChangeSector = (event: SelectChangeEvent) => {
    setSector(event.target.value);
  }
  const handleChangeResource = (event: SelectChangeEvent) => {
    setResource(event.target.value);
  }
  return (
    <div>
      <Box sx={{ maxWidth: 600, width: '100%', position: 'relative', top:'0.8rem', left:'0.02rem' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item minWidth={200} xs={1}>
            <FormControl variant="standard" sx={{ maxWidth: 150, width: '100%', textAlign: 'center' }}>
              <InputLabel id="demo-simple-select-standard-label1">Setor</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label1"
                id="demo-simple-select-standard"
                value={sector}
                onChange={handleChangeSector}
                label="Setor"
                sx={{ width: '100%'}}
              >
                <MenuItem value={1} >PRP ANÉIS</MenuItem>
                <MenuItem value={2}>SGP ANÉIS</MenuItem>
                <MenuItem value={3}>USI GUIAS</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item minWidth={200} xs={1}>
            <FormControl variant="standard" sx={{ maxWidth: 150, width: '100%', textAlign: 'center' }}>
              <InputLabel id="demo-simple-select-filled-label2">Máquina</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label2"
                id="demo-simple-select-filled"
                value={resource}
                onChange={handleChangeResource}
                sx={{ width: '100%'}}
              >
                <MenuItem value={10}>PC02</MenuItem>
                <MenuItem value={20}>PC08</MenuItem>
                <MenuItem value={30}>PC09</MenuItem>
                <MenuItem value={40}>PC10</MenuItem>
                <MenuItem value={50}>PC11</MenuItem>
                <MenuItem value={60}>PC17</MenuItem>
                <MenuItem value={70}>PC18</MenuItem>
                <MenuItem value={80}>PC19</MenuItem>
                <MenuItem value={90}>PC20</MenuItem>
                <MenuItem value={100}>PC21</MenuItem>
       
              </Select>
            </FormControl>

          </Grid>
          <Grid item minWidth={150} xs={1}>
            <Stack direction="row" spacing={2} >
              <Button variant="contained" sx={{ maxWidth: 1000, width: '100%', position: 'relative', top:'0.8rem', left:'0.02rem' }}>Consultar</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box >
    </div >
  );
};
