//Furnace Historical Analysis - Tela de consulta e análise do histórico de temperaturas do forno escolhido e selecionado
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Title from '../../GeneralComponents/Title';
import FurnaceTemperatureLimitsCard from '../../StatisticsComponents/FurnaceTemperatureLimitsCard';
import FurnaceSelector from '../../GeneralComponents/FurnaceSelector';
import QueryButton from '../../GeneralComponents/QueryButton';
import SaveButton from '../../GeneralComponents/SaveButton';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';

const mdTheme = createTheme();

function FurnaceTemperatureLimits() {
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
             Fornos - Limites de Temperatura
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

            <FurnaceTemperatureLimitsCard />
                <SaveButton />
                           
       
        </ThemeProvider>
    );
}
export default function Index() {
    return <FurnaceTemperatureLimits />;
}
