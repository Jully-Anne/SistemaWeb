import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import React from 'react';
import Typography from '@mui/material/Typography';
import Title from '../GeneralComponents/Title';
import FormRealTimeQuery from '../Statistics/Select';
import Chart from '../Statistics/Chart';


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
            <Divider sx={{position: "relative", top:'1.5rem', left:'0.02rem' }}/>
            <Chart />
        </ThemeProvider>
    );
}
export default function Index() {
    return <RealTimeStatistics />;
}
