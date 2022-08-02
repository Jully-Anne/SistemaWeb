//Tela de consulta de temperaturas em tempo real e os últimos alarmes do forno que for selecionado pelo usuário
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import Title from '../../GeneralComponents/Title';
import FurnaceSelector from '../../GeneralComponents/FurnaceSelector';
import QueryButton from '../../GeneralComponents/QueryButton';
import FurnaceRealTimeCard from '../../StatisticsComponents/FurnaceRealTimeCard';
import FurnaceRealTimeAlarmsTable from '../../StatisticsComponents/FurnaceRealTimeAlarmsTable';

const mdTheme = createTheme();

function FurnaceRealTimeAnalysis() {
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
                    Fornos - Tempo Real
                </Typography>
            </Title>
            <Divider sx={{ position: "relative", top: '0.5rem', left: '0.02rem' }} />
            <Container maxWidth="lg" sx={{ mt: 1, mb: 1, ml: -2, mr: 5 }}>
                <Grid container>

                    <Grid item xs={4} md={7} lg={7}>
                        <Grid
                            sx={{
                                mt: 3,
                                p: 1,
                                display: 'flex',
                                flexDirection: 'row',
                                height: '2rem',
                                minWidth: '10rem',
                                maxWidth: "70rem",
                                alignItems: 'center'
                            }}
                        >
                            <FurnaceSelector />
                            <QueryButton />
                        </Grid>

                    </Grid>

                </Grid>
            </Container>
            <Divider sx={{ position: "relative", top: '0.5rem', left: '0.02rem' }} />

            <FurnaceRealTimeCard />
            
            {/* FurnaceRealTimeAlarmsTable */}
            <Grid item xs={4} md={7} lg={7}>
                <Grid
                    sx={{
                        mx: '0.5rem',
                        mt: 0,
                        p: 1,
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        minHeight: '10rem',
                        maxHeight: '35rem',
                        minWidth: '5rem',
                        maxWidth: "35rem",
                        border: 'solid',
                        borderColor: '#DCDCDC',
                        borderRadius: '1rem'
                    }}
                >
                    <FurnaceRealTimeAlarmsTable />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
export default function Index() {
    return <FurnaceRealTimeAnalysis />;
}
