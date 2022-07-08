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



const mdTheme = createTheme({});
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
            <Grid item xs={6} md={8} lg={10}>
                <Grid
                    sx={{
                        mt: 1,
                        p: 3,
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'column',
                        height: '15rem',
                        maxWidth: "68rem",
                        textAlign: 'center'

                    }}
                >

                    <DataProgressBar />
                </Grid>



            </Grid>
            <Divider sx={{ position: 'relative', top: '2.5rem', left: '0.02rem' }} />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 1, ml: -2, mr: 5 }}>
                <Grid container spacing={2} >
                    {/* LineChart */}
                    <Grid item xs={6} md={8} lg={10} sx={{ position: 'relative' }}>
                        <Paper elevation={2}
                            sx={{
                                mt: 3,
                                p: 3,
                                display: 'flex',
                                flexWrap: 'wrap',
                                flexDirection: 'column',
                                height: '25rem',
                                width: "100%",
                                border: "solid",
                                borderColor: "#DCDCDC",
                                borderRadius: '1rem',
                                textAlign: 'center'
                            }}
                        >
                            <LineChart />
                        </Paper>
                        <Paper elevation={2}
                            sx={{
                                mt: 3,
                                p: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                width: '16rem',
                                border: 'solid',
                                borderColor: '#DCDCDC',
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


