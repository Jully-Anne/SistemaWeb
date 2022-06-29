import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../GeneralComponents/Title';
import FormRealTimeQuery from '../Statistics/Selectors';
import { LineChart } from '../Statistics/LineChart';
import { PieChart } from '../Statistics/pieChart';
import { Box, Container } from '@mui/system';
import { Grid, Paper } from '@mui/material';
import DataProgressBar from '../Statistics/DataProgressBar'



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
            <FormRealTimeQuery />
            <Divider sx={{ position: 'relative', top: '1.5rem', left: '0.02rem' }} />

         
<DataProgressBar />
            <Divider sx={{ position: 'relative', top: '2.5rem', left: '0.02rem' }} />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 1, ml: -2, mr: 5 }}>
                <Grid container spacing={2}>
                    {/* LineChart */}
                    <Grid item xs={12} md={10} lg={9}>
                        <Paper elevation={2}
                            sx={{
                                mt: 3,
                                p: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                height: '25rem',
                                wudth: "100%",
                                border: 'solid',
                                borderColor: '#DCDCDC',
                                borderRadius: '2rem',
                                textAlign: 'center'
                            }}
                        >
                            <LineChart />
                        </Paper>
                    </Grid>

                    {/* PieChart */}
                    <Grid item xs={6} md={5} lg={3}>
                        <Paper elevation={2}
                            sx={{
                                mt: 3,
                                ml: 2,
                                p: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                minHeight: "15rem",
                                border: "solid",
                                borderColor: "#DCDCDC",
                                borderRadius: "2rem",
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


