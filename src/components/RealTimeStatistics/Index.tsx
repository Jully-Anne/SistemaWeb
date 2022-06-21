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



const mdTheme = createTheme();

function RealTimeStatistics() {
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
            <FormRealTimeQuery />

            <Divider sx={{ position: 'relative', top: '1.5rem', left: '0.02rem' }} />
     
            <Container maxWidth="lg" sx={{ mt: 4, mb: 1}}>
                <Grid container spacing={3}>
                    {/* LineChart */}
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 400,
                            }}
                        >
                            <LineChart />
                        </Paper>
                    </Grid>
                   {/* PieChart */}
                    <Grid item xs={12} md={1} lg={3}>
                        <Paper
                            sx={{
                                p: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 400,
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
    return <RealTimeStatistics />;
}


