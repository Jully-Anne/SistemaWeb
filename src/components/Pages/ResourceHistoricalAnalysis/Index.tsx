//Resource Historical Analysis- Tela de consutlta e análise de dados históricos das máquinas
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../../GeneralComponents/Title';
import { LineChart } from '../../StatisticsComponents/LineChart';
import { PieChart } from '../../StatisticsComponents/PieChart';
import { Container } from '@mui/system';
import { Grid, Paper } from '@mui/material';
import DataProgressBar from '../../StatisticsComponents/DataProgressBar'
import DateSelector from '../../GeneralComponents/DateSelector'
import QueryButton from '../../GeneralComponents/QueryButton'
import Selectors from '../../GeneralComponents/Selectors'
import ColumnGroupingTable from '../../StatisticsComponents/HistoricalTable';


const mdTheme = createTheme();

function ResourceHistoricalAnalysis() {
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
                    Consulta Históricos
                </Typography>
            </Title>
            <Divider />
            <Container maxWidth="lg" sx={{ mt: 1, mb: 1, ml: -2, mr: 5, display: 'flex', flexWrap: 'wrap' }}>
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
                        >
                            <Selectors />
                            <DateSelector />
                            <QueryButton />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <Divider sx={{ position: 'relative', top: '1.5rem', left: '0.02rem' }} />
            <DataProgressBar />
            <Divider sx={{ position: 'relative', top: '2.5rem', left: '0.02rem' }} />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 1, ml: -2, mr: 5 }}>
                <Grid spacing={2} columnSpacing={'20rem'} >
                    {/* LineChart */}
                    <Grid item xs={12} md={10} lg={9}>
                        <Paper elevation={2}
                            sx={{
                                mt: '4rem',
                                mx: '1rem',
                                p: '0.5rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                position: 'relative',
                                height: '22rem',
                                width: "75rem",
                                borderRadius: '1rem',
                                textAlign: 'center'
                            }}
                        >
                            <LineChart />
                        </Paper>
                    </Grid>
                  
                    {/* Table */}
                    <Grid item xs={6} md={5} lg={3}>
                        <Grid
                            sx={{
                                mt: '0rem',
                                mx: '0rem',
                                p: '1rem',
                                display: 'flex',
                                flexWrap: 'wrap',
                                position: 'relative',
                                width: '53rem',
                                minHeight: "15rem",
                                borderRadius: "1rem",
                            }}
                        >
                            <ColumnGroupingTable />

                        </Grid>
                    </Grid>
                      {/* PieChart */}
                      <Grid item xs={6} md={5} lg={3}>
                        <Paper elevation={2}
                            sx={{
                                flexWrap: 'wrap',
                                mt: '2rem',
                                ml: '1rem',
                                p: '1rem',
                                display: 'flex',
                                position: 'relative',
                                minHeight: "15rem",
                                borderRadius: "1rem",
                                width: '17rem'
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
    return <ResourceHistoricalAnalysis />;
}


