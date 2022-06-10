import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from '../GeneralComponents/Title';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <Box sx={{ maxWidth: 1000, width: '100%', height: '100%', position: 'relative', top: '2.5rem', left: '0.5rem' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item minWidth={500} xs={1}>
        <React.Fragment >
          <Title>Produtividade</Title>

          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{
                top: 16,
                right: 16,
                bottom: 0,
                left: 24,
              }}
            >
              <XAxis
                dataKey="time"
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
              />
              <YAxis
                stroke={theme.palette.text.secondary}
                style={theme.typography.body2}
              >
                <Label
                  angle={270}
                  position="left"
                  style={{
                    textAnchor: 'middle',
                    fill: theme.palette.text.primary,
                    ...theme.typography.body1,
                  }}
                >
                  Peças por Minuto
                </Label>
              </YAxis>
            </LineChart>
          </ResponsiveContainer>
        </React.Fragment>
      </Grid>
      </Grid>
    </Box>



  );
}