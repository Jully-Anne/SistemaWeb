//Sectors Real Time Analysis - Tela com os dados em tempo real de todas as máquinas do setor escolhido e selecionado
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Divider from '@mui/material/Divider'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Title from '../../components/Title/Index'
import SectorSelector from '../../components/SectorSelector/Index'
import QueryButton from '../../components/QueryButton/Index'
import MachineCard from '../../components/MachineCard/Index'

const mdTheme = createTheme();

function Sectors() {
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
                    Setores
                </Typography>
            </Title>
            <Divider sx={{ position: "relative", top: '0.5rem', left: '0.02rem' }} />
            <Container maxWidth="lg" sx={{ mt: 1, mb: 1, ml: -2, mr: 5 }}>
                <Grid container>

                    <Grid item xs={1} md={7} lg={10}>
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
                            <SectorSelector />
                            <QueryButton />
                        </Grid>

                    </Grid>

                </Grid>
            </Container>
            <Divider sx={{ position: "relative", top: '1.5rem', left: '0.02rem' }} />
            <MachineCard />
        </ThemeProvider>
    );
}
export default function Index() {
    return <Sectors />;
}



