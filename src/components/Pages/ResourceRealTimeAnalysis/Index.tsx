//Resource Real Time Analysis - Tela para consulta e análise de dados das máquinas em tempo real
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid, Paper } from '@mui/material';
import Title from '../../GeneralComponents/Title';
import Selectors from '../../GeneralComponents/Selectors';
import DataProgressBar from '../../StatisticsComponents/DataProgressBar'
import QueryButton from '../../GeneralComponents/QueryButton'
import { LineChart } from '../../StatisticsComponents/LineChart';
import { PieChart } from '../../StatisticsComponents/PieChart';



const mdTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
function ResourceRealTimeAnalysis() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (

        <ThemeProvider theme={mdTheme}>
            <Title>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                >
                    Consulta em Tempo Real
                </Typography>
            </Title>
            <Divider />

            <Container maxWidth="lg" sx={{ mt: 1, mb: 1, ml: -2, mr: 5 }}>
                <Grid container>

                    <Grid item xs={12} md={10} lg={9}>
                        <Grid
                            sx={{
                                mt: 3,
                                p: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                height: '2rem',
                                width: "60rem",
                                alignItems: 'center'
                            }}
                        >   <Selectors />
                          <QueryButton />
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
            <Divider sx={{ position: 'relative', top: '1.5rem', left: '0.02rem' }} />
            <DataProgressBar />
            <Divider sx={{ position: 'relative', top: '2.5rem', left: '0.02rem' }} />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 1, ml: -2, mr: 5 }}>
                <Grid container spacing={2}>
                    {/* LineChart */}
                    <Grid item xs={9} md={9} lg={9}>
                        <Paper elevation={2}
                            sx={{
                                mt: 3,
                                p: 3,
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'column',
                                height: '25rem',
                                width: "100%",
                                borderRadius: '1rem',
                                textAlign: 'center'
                            }}
                        >
                            <LineChart />
                        </Paper>
                    </Grid>

                    {/* PieChart */}
                    <Grid item xs={3} md={5} lg={5}>
                        <Paper elevation={2}
                            sx={{
                                mt: 3,
                                ml: 2,
                                p: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                minHeight: "15rem",
                                borderRadius: "1rem",
                            }}
                        >
                            <PieChart />
                        </Paper>
                    </Grid>
                </Grid>
               
            </Container>

        </ThemeProvider >
    );
}
export default function Index() {
    return <ResourceRealTimeAnalysis />;
}


