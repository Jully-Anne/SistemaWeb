//Seletor de data e hora inicial para busca de informações 
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

export default function InitialDateSelector() {
  const [dataInicial, setDataInicial] = React.useState<Date | null>(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack
        direction='row'
        sx={{
          display: 'flex',
          width: '14rem',
          ml:'1.5rem',
          mt: '0.5rem'

        }}>
        <Grid item xs={20} md={20} lg={20}>
          <Grid container spacing={2}>
            {/* Options */}
            <Grid
              sx={{
                mt: '1.5rem',
                my: '1rem',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                maxHeight: '4rem',
                maxWidth: "70rem",
                borderRadius: '1rem',
              }}
            >


              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                label="Data Inicial"
                value={dataInicial}
                inputFormat="dd/MM/yyyy hh:mm a"
                onChange={(newValue) => { setDataInicial(newValue) }}

              />
            </Grid>
          </Grid>
        </Grid>

      </Stack>
    </LocalizationProvider>


  );
}
