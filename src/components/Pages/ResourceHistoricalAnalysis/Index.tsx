import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Title from '../../GeneralComponents/Title';
import { LineChart } from '../../StatisticsComponents/LineChart';
import { PieChart } from '../../StatisticsComponents/PieChart';
import { Box, Container } from '@mui/system';
import { Divider, Grid, Paper, Typography } from '@mui/material';
import DataProgressBar from '../../StatisticsComponents/DataProgressBar'
import InitialDateSelector from '../../GeneralComponents/InitialDateSelector'
import FinalDateSelector from '../../GeneralComponents/FinalDateSelector'
import QueryButton from '../../GeneralComponents/QueryButton'
import ResourceSelector from '../../GeneralComponents/ResourceSelector'
import SectorSelector from '../../GeneralComponents/SectorSelector'
import ColumnGroupingTable from '../../StatisticsComponents/HistoricalTable';


const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function ResourceHistoricalAnalysis() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Box>
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
                        <Divider sx={{ position: 'relative', top: '0.5rem' }} />
                    </Title>
                  

                    <Container maxWidth="lg" sx={{ mt: '1.5rem', mb: '0rem'}}>
                        <Grid container spacing={3} >
                            {/* Options */}
                            <Grid item xs={3} md={8} lg={20} >
                                <Grid
                                    sx={{
                                        
                                        p: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        position: 'relative',
                                        flexDirection: 'row',
                                        minHeight: '4rem',
                                        maxHeight: '20rem',
                                        maxWidth: "70rem",
                                    }}
                                >
                                    <SectorSelector />
                                    <ResourceSelector />
                                    <InitialDateSelector />
                                    <FinalDateSelector />
                                    <QueryButton />
                                </Grid>
                                <Divider sx={{ position: 'relative', top: '0.5rem' }} />
                            </Grid>
                           
                            {/* DataProgressBar */}
                            <Grid item xs={6} md={9} lg={13}>
                                <Grid
                                    sx={{
                                        mt: 0,
                                        p: 1,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        maxHeight: '25rem',
                                        maxWidth: "70rem",
                                        borderRadius: '1rem',
                                        textAlign: 'center'

                                    }}
                                >
                                    <DataProgressBar />
                                </Grid>
                            </Grid>
                            <Divider sx={{ position: 'relative', top: '1.5rem', left: '0.02rem' }} />
                            {/* LineChart */}
                            <Grid item xs={6} md={9} lg={13}>
                                <Grid
                                    sx={{
                                        mt: 0,
                                        p: 2,
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                        maxHeight: '28rem',
                                        maxWidth: "68rem",
                                        border: 'solid',
                                        borderColor: '#DCDCDC',
                                        borderRadius: '1rem'
                                    }}
                                 >
                                    <LineChart />
                                </Grid>
                            </Grid>
                             
                          
                              {/* ColumnGroupingTable */}
                              <Grid item xs={5} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        height: '33rem',
                                        borderRadius: '1rem',
                                        width: '54rem'

                                    }}
                                >
                                 <ColumnGroupingTable />
                                </Paper>
                            </Grid>
                           {/* PieChart */}
                           <Grid item xs={5} md={4} lg={15}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        height: '23rem',
                                        borderRadius: '1rem',
                                        width: '17rem'

                                    }}
                                >
                                    <PieChart />
                                </Paper>
                            </Grid>
                           
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
} 

export default function Index() {
    return <ResourceHistoricalAnalysis />;
}




//Resource Historical Analysis- Tela de consutlta e análise de dados históricos das máquinas

/*const [open, setOpen] = React.useState(true);
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
                       
                    </Grid>
                </Grid>
            </Grid>
        </Container>
       
        <Divider sx={{ position: 'relative', top: '1.5rem', left: '0.02rem' }} />
       
        <Divider sx={{ position: 'relative', top: '2.5rem', left: '0.02rem' }} />

        <Container maxWidth="lg" sx={{ mt: 4, mb: 1, ml: -2, mr: 5 }}>
            <Grid spacing={2} columnSpacing={'20rem'} >
                
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
                            border: "solid",
                            borderColor: "#DCDCDC",
                            borderRadius: '1rem',
                            textAlign: 'center'
                        }}
                    >
                      
                    </Paper>
                </Grid>
              
             
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
                        

                    </Grid>
                </Grid>
                 
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
}*/



