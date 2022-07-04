//Data Progress Bar - Componente com caixa de informações sobre a máquina
import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

function DataProgressBar(props: LinearProgressProps & { value: number }) {
  return (

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}


export default function ProgressBar() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',   
        '& > :not(style)': {
          m: 1,
          width: '10rem',
          height: '100%',
          position: "relative",
          top: '2rem',
          border: "solid",
          borderColor: "#DCDCDC",
          borderRadius: '1rem',
          backgroundColor: "FFFAFA",
          textAlign: "center",
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem'
        },
      }}
    >
      <React.Fragment>
        <Paper elevation={2}>
          <Typography color="primary" >
            O.P.
          </Typography>
          <Typography color="#1C1C1C" sx={{ flex: 1 }}>
            12548/1
          </Typography>
        </Paper>
      </React.Fragment>
      <React.Fragment>
        <Paper elevation={2}>
          <Typography color="primary" sx={{ flex: 1 }}>
            LOTE
          </Typography>
          <Typography color="#1C1C1C" sx={{ flex: 1 }}>
            65234
          </Typography>
        </Paper>

        <Paper elevation={2}>
          <Typography color="primary" sx={{ flex: 1 }}>
            MODELO
          </Typography>

          <Typography color="#1C1C1C" sx={{ flex: 1 }}>
            3941
          </Typography>
        </Paper>
      </React.Fragment>
      <React.Fragment>
        <Paper elevation={2}>
          <Typography color="primary" sx={{ flex: 1 }}>
            DISPONIBILIDADE
          </Typography>

          <DataProgressBar value={progress} sx={{ width: '98%', alignItems: 'center' }} />
        </Paper>
      </React.Fragment>
      <React.Fragment>
        <Paper elevation={2}>
          <Typography color="primary" sx={{ flex: 1 }}>
            EFICIÊNCIA
          </Typography>
          <DataProgressBar value={progress} sx={{ width: '98%', alignItems: 'center' }} />
        </Paper>
      </React.Fragment>
      <React.Fragment>
        <Paper elevation={2}>
          <Typography color="primary" sx={{ flex: 1 }}>
            TEMPO DE CICLO
          </Typography>
          <Typography color="#1C1C1C" sx={{ flex: 1 }}>
            5.1s
          </Typography>
        </Paper>
      </React.Fragment>
      <React.Fragment>
        <Paper elevation={2}>
          <Typography color="primary" sx={{ flex: 1 }}>
            PRODUTIVIDADE
          </Typography>
          <Typography color="#1C1C1C" sx={{ flex: 1 }}>
            45/50 pçs./min.
          </Typography>
          <DataProgressBar value={progress} sx={{ width: '98%', alignItems: 'center' }} />
        </Paper>
      </React.Fragment>
      <React.Fragment>
        <Paper elevation={2}>
          <Typography color="primary" sx={{ flex: 1 }}>
            PRODUÇÃO
          </Typography>
          <Typography color="#1C1C1C" sx={{ flex: 1 }}>
            10249/20000 pçs.
          </Typography>
          <DataProgressBar value={progress} sx={{ width: '98%', alignItems: 'center' }} />
        </Paper>
      </React.Fragment>
    </Box >
  )
}